# Claude Code Skills

Custom skills for Claude Code, stored here for version control and sync across machines.

## Skills

| Skill | Invoke | Purpose |
|---|---|---|
| `/validate` | `/validate [idea]` | Idea validation — conversational mentor dialogue before committing to build |
| `/product-discovery` | `/product-discovery [problem]` | Full discovery brief — personas, opportunity tree, roadmap, competitive landscape |
| `/designer` | `/designer [app, audience, references]` | Design and build UIs — empathy brief, design system, screenshot & compare loop |
| `/test` | `/test [what you built]` | Post-build product testing — requirements, persona fit, workflows, edge cases |

## Skill chain

```
/validate → /product-discovery → /designer → build → /test
```

## Setup on a new machine

After cloning this repo, symlink the skills folder so Claude Code can find them globally:

```bash
# Run once after cloning
for skill in designer test validate product-discovery; do
  ln -s "$(pwd)/skills/$skill" "$HOME/.claude/skills/$skill"
done
```

## Adding a new skill

1. Create a folder under `skills/` with the skill name (e.g. `skills/my-skill/`)
2. Add a `SKILL.md` file inside it following the frontmatter format:
   ```yaml
   ---
   name: my-skill
   description: ...
   argument-hint: "..."
   disable-model-invocation: true
   allowed-tools: WebSearch, WebFetch, Bash, Read, Write, Edit, Glob, Grep
   ---
   ```
3. Symlink it: `ln -s "$(pwd)/skills/my-skill" "$HOME/.claude/skills/my-skill"`
4. Commit and push
