/**
 * Cloudflare Worker — YouTube metadata proxy for portfolio podcast explorer
 * Tries multiple sources in order, returns CORS-safe JSON.
 * Results are cached at Cloudflare's edge (24h for full data, 1h for title-only).
 */

const INVIDIOUS = [
  'https://invidious.darkness.services',
  'https://invidious.privacydev.net',
  'https://inv.nadeko.net',
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

// Bracket-counting JSON extractor
function extractJson(html, key) {
  const marker = html.indexOf(key);
  if (marker === -1) return null;
  const start = html.indexOf('{', marker);
  if (start === -1) return null;
  let depth = 0, i = start;
  while (i < html.length) {
    const ch = html[i];
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) break; }
    else if (ch === '"') {
      i++;
      while (i < html.length) {
        if (html[i] === '\\') { i += 2; continue; }
        if (html[i] === '"') break;
        i++;
      }
    }
    i++;
  }
  try { return JSON.parse(html.slice(start, i + 1)); } catch (_) { return null; }
}

async function tryInvidious(videoId) {
  for (const base of INVIDIOUS) {
    try {
      const r = await fetch(
        `${base}/api/v1/videos/${videoId}?fields=title,author,lengthSeconds,description,chapters`,
        { signal: AbortSignal.timeout(7000) }
      );
      if (!r.ok) continue;
      const j = await r.json();
      if (j.title) return j;
    } catch (_) {}
  }
  return null;
}

async function tryMobileYouTube(videoId) {
  // m.youtube.com is sometimes less restricted than www on cloud IPs
  for (const host of ['m.youtube.com', 'www.youtube.com']) {
    try {
      const r = await fetch(`https://${host}/watch?v=${videoId}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept': 'text/html',
          'Cookie': 'CONSENT=YES+1; SOCS=CAESEwgDEgk0OTA1MzUzNTkaAmVuIAEaBgiA8I2mBg==',
        },
        signal: AbortSignal.timeout(10000),
      });
      if (!r.ok) continue;
      const html = await r.text();
      const player = extractJson(html, 'ytInitialPlayerResponse');
      if (!player?.videoDetails?.title) continue;
      const d = player.videoDetails;
      return {
        title: d.title,
        author: d.author || '',
        lengthSeconds: parseInt(d.lengthSeconds) || 0,
        description: d.shortDescription || '',
        chapters: [],
      };
    } catch (_) {}
  }
  return null;
}

async function tryNoembed(videoId) {
  const r = await fetch(
    `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`,
    { signal: AbortSignal.timeout(6000) }
  );
  if (!r.ok) return null;
  const j = await r.json();
  if (j.error || !j.title) return null;
  return { title: j.title, author: j.author_name || '' };
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: { ...CORS, 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Max-Age': '86400' },
      });
    }

    const url = new URL(request.url);
    const videoId = url.searchParams.get('id');

    if (!videoId || !/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
      return new Response(JSON.stringify({ error: 'Invalid video ID' }), { headers: CORS, status: 400 });
    }

    // 1. Try Invidious (full data: chapters, description, duration)
    const inv = await tryInvidious(videoId);
    if (inv) {
      return new Response(JSON.stringify(inv), {
        headers: { ...CORS, 'Cache-Control': 'public, max-age=86400' },
      });
    }

    // 2. Try YouTube page (mobile first — less IP restrictions)
    const yt = await tryMobileYouTube(videoId);
    if (yt) {
      return new Response(JSON.stringify(yt), {
        headers: { ...CORS, 'Cache-Control': 'public, max-age=3600' },
      });
    }

    // 3. Last resort: noembed (title only)
    const oe = await tryNoembed(videoId);
    if (oe) {
      return new Response(JSON.stringify(oe), {
        headers: { ...CORS, 'Cache-Control': 'public, max-age=1800' },
      });
    }

    return new Response(JSON.stringify({ error: 'Video not found — check the URL' }), {
      headers: CORS, status: 404,
    });
  },
};
