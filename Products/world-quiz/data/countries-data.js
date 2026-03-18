// ═══════════════════════════════════════════════════════
// WORLD QUIZ — COUNTRIES DATABASE
// ═══════════════════════════════════════════════════════
//
// HOW TO EXPAND:
//   • Add a new country object to the COUNTRIES array below
//   • Copy an existing entry as a template
//   • Set `continent` to one of: europe | asia | africa | north-america | south-america | oceania
//   • Add exactly 3 questions (more may be added later — the engine picks the first 3)
//   • Add 5–6 `celebs` (famous personalities shown as ghost background on quiz screens)
//     Each celeb: { n: 'Name', r: 'Role / Claim to Fame', e: '🎵' (field emoji) }
//
// STRUCTURE PER COUNTRY:
//   id, name, flag, capital, continent,
//   animal, animalEmoji, mastername,
//   flagColors: [c1, c2, c3],   ← used for quiz-master badge gradient
//   intro,                       ← what the quiz master says on entry
//   funFact,                     ← shown on score screen
//   questions: [{ q, ch:[A,B,C,D], a (0-based correct index), cat }],
//   celebs:    [{ n, r, e }]     ← 5–6 famous people, shown as transparent bg silhouettes
// ═══════════════════════════════════════════════════════

const COUNTRIES = [

  // ─────────────────────────────────────────
  // EUROPE (10 countries)
  // ─────────────────────────────────────────

  { id:'france', name:'France', flag:'🇫🇷', capital:'Paris', continent:'europe',
    animal:'Gallic Rooster', animalEmoji:'🐓', mastername:'Coco',
    flagColors:['#EF4444','#FFFFFF','#1D4ED8'],
    intro:"Bonjour! I'm Coco, the Gallic Rooster of France! Ready for your quiz?",
    funFact:"France is the most visited country on Earth — over 90 million tourists come every year! 🗼",
    questions:[
      {q:"The Eiffel Tower was built as a temporary structure for a World's Fair in Paris. In which year was it completed?", ch:["1889","1776","1900","1940"], a:0, cat:"📜 History"},
      {q:"France is world-famous for producing which two delicious things?", ch:["Wine & Cheese","Sushi & Noodles","Pizza & Pasta","Tacos & Guacamole"], a:0, cat:"🍷 Food"},
      {q:"Which French scientist proved that tiny germs cause disease and invented 'pasteurisation' to make milk safe to drink?", ch:["Louis Pasteur","Marie Curie","René Descartes","Pierre Curie"], a:0, cat:"🔬 Science"}
    ],
    celebs:[
      {n:'Napoleon Bonaparte', r:'Emperor of France', e:'👑'},
      {n:'Marie Curie', r:'Nobel Prize Scientist', e:'🔬'},
      {n:'Zinedine Zidane', r:'Football Legend', e:'⚽'},
      {n:'Coco Chanel', r:'Fashion Icon', e:'👗'},
      {n:'Victor Hugo', r:'Author of Les Misérables', e:'✍️'},
      {n:'Brigitte Bardot', r:'Film Star', e:'🎬'},
    ]
  },

  { id:'germany', name:'Germany', flag:'🇩🇪', capital:'Berlin', continent:'europe',
    animal:'Federal Eagle', animalEmoji:'🦅', mastername:'Adler',
    flagColors:['#000000','#D90000','#FFCC00'],
    intro:"Guten Tag! I'm Adler, the Eagle of Germany! Let's test your knowledge!",
    funFact:"Germany invented the printing press, the car engine, and even the Christmas tree tradition! 🎄",
    questions:[
      {q:"Which famous wall divided the city of Berlin into two halves for 28 years, before being torn down in 1989?", ch:["The Berlin Wall","The Great Wall","Hadrian's Wall","The Iron Curtain"], a:0, cat:"📜 History"},
      {q:"Germany's most famous autumn festival celebrates beer, pretzels and traditional costumes. What is it called?", ch:["Oktoberfest","Mardi Gras","La Tomatina","Carnival"], a:0, cat:"🎭 Culture"},
      {q:"Which world-famous German car brand has a logo of three interlocking silver rings?", ch:["Audi","BMW","Mercedes-Benz","Volkswagen"], a:0, cat:"🚗 Industry"}
    ],
    celebs:[
      {n:'Albert Einstein', r:'Physicist · Theory of Relativity', e:'🔬'},
      {n:'Ludwig van Beethoven', r:'Classical Composer', e:'🎵'},
      {n:'Franz Beckenbauer', r:'Football World Cup Legend', e:'⚽'},
      {n:'Marlene Dietrich', r:'Hollywood Film Star', e:'🎬'},
      {n:'Angela Merkel', r:'First Female Chancellor', e:'🏛️'},
      {n:'Johann W. Goethe', r:'Poet & Author', e:'✍️'},
    ]
  },

  { id:'uk', name:'United Kingdom', flag:'🇬🇧', capital:'London', continent:'europe',
    animal:'British Lion', animalEmoji:'🦁', mastername:'Leo',
    flagColors:['#00247D','#FFFFFF','#CC0000'],
    intro:"Cheerio! I'm Leo the British Lion! Let's see what you know about the UK!",
    funFact:"The UK invented many things we love — football, the telephone, and Harry Potter! ⚡",
    questions:[
      {q:"Which fictional young wizard, created by British author J.K. Rowling, became one of the most beloved characters ever?", ch:["Harry Potter","Frodo Baggins","Merlin","Gandalf"], a:0, cat:"📚 Culture"},
      {q:"What is the name of the famous clock tower in London that rings every hour and is heard around the world?", ch:["Big Ben","Eiffel Tower","Burj Khalifa","Freedom Tower"], a:0, cat:"🏛️ Monuments"},
      {q:"The UK is famous for inventing which sport, now played by over 250 million people worldwide?", ch:["Football (Soccer)","Baseball","Basketball","Volleyball"], a:0, cat:"⚽ Sports"}
    ],
    celebs:[
      {n:'Winston Churchill', r:'Prime Minister · WWII Leader', e:'🏛️'},
      {n:'The Beatles', r:'Most Famous Band Ever', e:'🎵'},
      {n:'David Beckham', r:'Football Icon', e:'⚽'},
      {n:'Queen Elizabeth II', r:'Longest-Reigning Monarch', e:'👑'},
      {n:'J.K. Rowling', r:'Author of Harry Potter', e:'✍️'},
      {n:'Elton John', r:'Rock & Pop Legend', e:'🎸'},
    ]
  },

  { id:'italy', name:'Italy', flag:'🇮🇹', capital:'Rome', continent:'europe',
    animal:'Italian Wolf', animalEmoji:'🐺', mastername:'Lupo',
    flagColors:['#009246','#FFFFFF','#CE2B37'],
    intro:"Ciao! I'm Lupo the Wolf of Italy! Let me take you on a tasty adventure!",
    funFact:"Italy has more UNESCO World Heritage Sites than any other country in the world! 🎨",
    questions:[
      {q:"Which Italian genius painted the Mona Lisa AND designed flying machines 500 years before aeroplanes were invented?", ch:["Leonardo da Vinci","Michelangelo","Raphael","Botticelli"], a:0, cat:"🎨 Art"},
      {q:"Which famous leaning building — one of the world's most recognised structures — is found in the Italian city of Pisa?", ch:["The Leaning Tower","The Colosseum","The Pantheon","The Duomo"], a:0, cat:"🏛️ Monuments"},
      {q:"Which delicious dish — made with dough, tomato sauce and melted cheese — was invented in Italy?", ch:["Pizza","Tacos","Sushi","Pad Thai"], a:0, cat:"🍕 Food"}
    ],
    celebs:[
      {n:'Leonardo da Vinci', r:'Artist, Inventor, Genius', e:'🎨'},
      {n:'Galileo Galilei', r:'Father of Modern Science', e:'🔭'},
      {n:'Sophia Loren', r:'Oscar-Winning Film Star', e:'🎬'},
      {n:'Luciano Pavarotti', r:"World's Greatest Tenor", e:'🎵'},
      {n:'Roberto Baggio', r:'Football Icon', e:'⚽'},
      {n:'Marco Polo', r:'Explorer of the Silk Road', e:'🧭'},
    ]
  },

  { id:'spain', name:'Spain', flag:'🇪🇸', capital:'Madrid', continent:'europe',
    animal:'Spanish Bull', animalEmoji:'🐂', mastername:'Toro',
    flagColors:['#AA151B','#F1BF00','#AA151B'],
    intro:"¡Hola! I'm Toro the Bull of Spain! Time for a fiesta of knowledge!",
    funFact:"Spain has the second most UNESCO World Heritage Sites in the world! 🌞",
    questions:[
      {q:"Which famous painter, born in Spain, invented the 'Cubism' style of art and painted the legendary 'Guernica'?", ch:["Pablo Picasso","Salvador Dalí","El Greco","Francisco Goya"], a:0, cat:"🎨 Art"},
      {q:"Spain has a famous festival where brave (or slightly crazy!) people run through the streets alongside which animals?", ch:["Bulls","Horses","Elephants","Ostriches"], a:0, cat:"🎭 Culture"},
      {q:"Spain is the birthplace of which passionate dance, performed with rhythmic foot-stomping and colourful swirling dresses?", ch:["Flamenco","Tango","Salsa","Samba"], a:0, cat:"💃 Culture"}
    ],
    celebs:[
      {n:'Pablo Picasso', r:'Cubist Art Pioneer', e:'🎨'},
      {n:'Rafael Nadal', r:'Tennis Grand Slam Champion', e:'🎾'},
      {n:'Salvador Dalí', r:'Surrealist Painter', e:'🖼️'},
      {n:'Penélope Cruz', r:'Oscar-Winning Actress', e:'🎬'},
      {n:'Fernando Alonso', r:'F1 World Champion', e:'🏎️'},
      {n:'Andrés Iniesta', r:'Football World Cup Hero', e:'⚽'},
    ]
  },

  { id:'russia', name:'Russia', flag:'🇷🇺', capital:'Moscow', continent:'europe',
    animal:'Brown Bear', animalEmoji:'🐻', mastername:'Misha',
    flagColors:['#FFFFFF','#0039A6','#D52B1E'],
    intro:"Zdravstvuyte! I'm Misha the Bear of Russia! Let's explore the biggest country!",
    funFact:"Russia is so big that it spans 11 different time zones — that's almost half the world! 🌏",
    questions:[
      {q:"Russia is so enormous it spans 11 time zones. Which ocean does it touch on its FAR eastern coast?", ch:["The Pacific Ocean","The Atlantic Ocean","The Indian Ocean","The Southern Ocean"], a:0, cat:"🌍 Geography"},
      {q:"What is the famous Russian wooden toy where you open it to find smaller and smaller dolls hidden inside?", ch:["Matryoshka","Origami","Boomerang","Domino"], a:0, cat:"🎭 Culture"},
      {q:"Moscow's most iconic landmark is a colourful cathedral with bright onion-shaped domes in Red Square. What is it called?", ch:["St. Basil's Cathedral","Notre-Dame","Hagia Sophia","Westminster Abbey"], a:0, cat:"🏛️ Landmarks"}
    ],
    celebs:[
      {n:'Leo Tolstoy', r:'Author of War and Peace', e:'✍️'},
      {n:'Pyotr Tchaikovsky', r:'Composer · Swan Lake', e:'🎵'},
      {n:'Yuri Gagarin', r:'First Human in Space', e:'🚀'},
      {n:'Maria Sharapova', r:'Tennis Grand Slam Champion', e:'🎾'},
      {n:'Fyodor Dostoevsky', r:'Author of The Brothers Karamazov', e:'📖'},
      {n:'Anna Pavlova', wn:'Anna Pavlova (dancer)', r:'Greatest Ballet Dancer', e:'🩰'},
    ]
  },

  { id:'greece', name:'Greece', flag:'🇬🇷', capital:'Athens', continent:'europe',
    animal:'Dolphin', animalEmoji:'🐬', mastername:'Delphi',
    flagColors:['#0D5EAF','#FFFFFF','#0D5EAF'],
    intro:"Yassas! I'm Delphi the Dolphin of Greece! Greece is where history began!",
    funFact:"Ancient Greece invented the Olympic Games, democracy, and philosophy — 2,500 years ago! 🏛️",
    questions:[
      {q:"Ancient Greece gave the world an incredible gift — a system where citizens vote for their leaders. What is this called?", ch:["Democracy","Monarchy","Theocracy","Oligarchy"], a:0, cat:"🏛️ History"},
      {q:"The famous Parthenon temple sits on a rocky hilltop in Athens. Which goddess was this beautiful temple built for?", ch:["Athena","Aphrodite","Hera","Artemis"], a:0, cat:"🏛️ History"},
      {q:"The ancient Olympic Games were held every four years in Greece. In which Greek city were they FIRST held?", ch:["Olympia","Athens","Sparta","Corinth"], a:0, cat:"🏅 Sports"}
    ],
    celebs:[
      {n:'Alexander the Great', r:'Conqueror of the Known World', e:'👑'},
      {n:'Aristotle', r:'Philosopher & Scientist', e:'📚'},
      {n:'Socrates', r:'Father of Philosophy', e:'💭'},
      {n:'Maria Callas', r:'Greatest Opera Singer', e:'🎵'},
      {n:'Giannis Antetokounmpo', r:'NBA Basketball Champion', e:'🏀'},
      {n:'Pythagoras', r:'Mathematician · His Famous Theorem', e:'📐'},
    ]
  },

  { id:'sweden', name:'Sweden', flag:'🇸🇪', capital:'Stockholm', continent:'europe',
    animal:'Eurasian Elk', animalEmoji:'🦌', mastername:'Sven',
    flagColors:['#006AA7','#FECC02','#006AA7'],
    intro:"Hej! I'm Sven the Elk of Sweden! I'll guide you through the land of Vikings!",
    funFact:"Sweden invented the safety match, the pacemaker, and a certain blue and yellow furniture store! 🏪",
    questions:[
      {q:"Which world-famous furniture store — selling flat-pack furniture in blue and yellow — was founded in Sweden?", ch:["IKEA","ZARA","H&M","Target"], a:0, cat:"🏪 Industry"},
      {q:"Alfred Nobel, the Swedish inventor who created the Nobel Prize, is also famous for inventing what dangerous substance?", ch:["Dynamite","Gunpowder","Nuclear bombs","TNT"], a:0, cat:"🔬 Science"},
      {q:"Long ago, fierce Scandinavian warriors sailed across Europe and even reached North America. What were they called?", ch:["Vikings","Spartans","Samurai","Gladiators"], a:0, cat:"⚔️ History"}
    ],
    celebs:[
      {n:'ABBA', r:'Best-Selling Music Group Ever', e:'🎵'},
      {n:'Zlatan Ibrahimović', r:'Football Superstar', e:'⚽'},
      {n:'Alfred Nobel', r:'Inventor of Dynamite & Nobel Prize', e:'🔬'},
      {n:'Greta Thunberg', r:'Climate Change Activist', e:'🌱'},
      {n:'Avicii', r:'DJ & Electronic Music Pioneer', e:'🎧'},
      {n:'Ingmar Bergman', r:'Greatest Film Director', e:'🎬'},
    ]
  },

  { id:'netherlands', name:'Netherlands', flag:'🇳🇱', capital:'Amsterdam', continent:'europe',
    animal:'Lion', animalEmoji:'🦁', mastername:'Oranje',
    flagColors:['#AE1C28','#FFFFFF','#21468B'],
    intro:"Hallo! I'm Oranje the Lion! The Netherlands is famous for tulips and windmills!",
    funFact:"The Netherlands is below sea level in many places — they built giant dams and windmills to keep the sea out! 🌷",
    questions:[
      {q:"In the 1630s, Dutch traders went completely crazy for one flower — a single bulb could cost as much as a house! Which flower?", ch:["Tulips","Roses","Orchids","Sunflowers"], a:0, cat:"🌷 History"},
      {q:"Which Dutch painter — only famous AFTER his death — created 'The Starry Night' and the famous 'Sunflowers' painting?", ch:["Vincent van Gogh","Rembrandt","Claude Monet","Pablo Picasso"], a:0, cat:"🎨 Art"},
      {q:"Much of the Netherlands is below sea level! The Dutch built massive barriers to stop the sea flooding their land. What are these called?", ch:["Dykes & Dams","Stone Walls","Deep Trenches","Sand Barriers"], a:0, cat:"⚙️ Engineering"}
    ],
    celebs:[
      {n:'Vincent van Gogh', r:'Post-Impressionist Painter', e:'🎨'},
      {n:'Rembrandt', r:'Master of Light & Shadow', e:'🖼️'},
      {n:'Johan Cruyff', r:'Total Football Legend', e:'⚽'},
      {n:'Anne Frank', r:'Diarist & Holocaust Symbol', e:'✍️'},
      {n:'Max Verstappen', r:'F1 World Champion', e:'🏎️'},
      {n:'DJ Tiësto', wn:'Tiësto', r:'Electronic Music Pioneer', e:'🎧'},
    ]
  },

  { id:'portugal', name:'Portugal', flag:'🇵🇹', capital:'Lisbon', continent:'europe',
    animal:'Rooster of Barcelos', animalEmoji:'🐓', mastername:'Galo',
    flagColors:['#006600','#FF0000','#FFD700'],
    intro:"Olá! I'm Galo the Rooster of Portugal! This tiny country discovered half the world!",
    funFact:"Portuguese explorers were the first Europeans to reach India, Brazil, and Japan — in the 1400s! ⛵",
    questions:[
      {q:"Which brave Portuguese sailor was the first European to find a sea route to India by sailing around Africa, in 1498?", ch:["Vasco da Gama","Christopher Columbus","Ferdinand Magellan","Henry the Navigator"], a:0, cat:"⛵ History"},
      {q:"What are the famous Portuguese egg custard tarts — found in bakeries from Tokyo to Toronto — called?", ch:["Pastel de Nata","Croissant","Baklava","Cannoli"], a:0, cat:"🥐 Food"},
      {q:"Portugal's unique, melancholic music style — songs of longing and the sea — is loved worldwide. What is it called?", ch:["Fado","Flamenco","Samba","Bossa Nova"], a:0, cat:"🎵 Music"}
    ],
    celebs:[
      {n:'Cristiano Ronaldo', r:'All-Time Football Goalscorer', e:'⚽'},
      {n:'Vasco da Gama', r:'Explorer who reached India', e:'⛵'},
      {n:'Luís Figo', r:'Ballon d\'Or Football Star', e:'⚽'},
      {n:'Fernando Pessoa', r:'Greatest Portuguese Poet', e:'✍️'},
      {n:'Amália Rodrigues', r:'Queen of Fado Music', e:'🎵'},
      {n:'José Mourinho', r:'Champion Football Manager', e:'🏆'},
    ]
  },

  // ─────────────────────────────────────────
  // ASIA (10 countries)
  // ─────────────────────────────────────────

  { id:'china', name:'China', flag:'🇨🇳', capital:'Beijing', continent:'asia',
    animal:'Giant Panda', animalEmoji:'🐼', mastername:'Bao',
    flagColors:['#DE2910','#FFDE00','#DE2910'],
    intro:"Nǐ hǎo! I'm Bao the Panda of China! China is one of the world's oldest civilizations!",
    funFact:"China's Great Wall is so long it would take 18 months to walk from one end to the other! 🧱",
    questions:[
      {q:"China's Great Wall is one of the longest structures ever built. Roughly how long is it from end to end?", ch:["Over 21,000 km","500 km","3,000 km","8,000 km"], a:0, cat:"🏛️ History"},
      {q:"China's most famous and adorable animal — found only in bamboo forests of central China — is the...", ch:["Giant Panda","Red Panda","Snow Leopard","Siberian Tiger"], a:0, cat:"🐼 Nature"},
      {q:"The ancient Chinese invented something that changed the world — allowing knowledge to be shared in books. What was it?", ch:["Printing with movable type","The internet","The telescope","The steam engine"], a:0, cat:"🔬 Science"}
    ],
    celebs:[
      {n:'Confucius', r:'Philosopher & Teacher', e:'📚'},
      {n:'Yao Ming', r:'NBA Basketball Giant', e:'🏀'},
      {n:'Bruce Lee', r:'Martial Arts Legend', e:'🥋'},
      {n:'Jackie Chan', r:'Action Film Superstar', e:'🎬'},
      {n:'Li Na', r:'Grand Slam Tennis Champion', e:'🎾'},
      {n:'Sun Tzu', r:'Author of The Art of War', e:'⚔️'},
    ]
  },

  { id:'india', name:'India', flag:'🇮🇳', capital:'New Delhi', continent:'asia',
    animal:'Royal Bengal Tiger', animalEmoji:'🐯', mastername:'Raja',
    flagColors:['#FF9933','#FFFFFF','#138808'],
    intro:"Namaste! I'm Raja the Tiger of India! India is the world's largest democracy!",
    funFact:"India invented the number zero, chess, and yoga — pretty impressive, right? 🧘",
    questions:[
      {q:"Which beautiful white marble monument was built by Emperor Shah Jahan as a tomb for his beloved wife, in the city of Agra?", ch:["Taj Mahal","The Parthenon","The Colosseum","The Pyramids"], a:0, cat:"🏛️ Monuments"},
      {q:"India is the birthplace of a practice combining stretching, breathing and meditation, now loved by millions worldwide. What is it?", ch:["Yoga","Kung Fu","Tai Chi","Pilates"], a:0, cat:"🧘 Culture"},
      {q:"Which sport — played with a bat and ball over 5 days — makes India go absolutely wild with excitement?", ch:["Cricket","Football","Tennis","Basketball"], a:0, cat:"🏏 Sports"}
    ],
    celebs:[
      {n:'Mahatma Gandhi', r:'Father of Non-Violent Revolution', e:'🕊️'},
      {n:'Sachin Tendulkar', r:'God of Cricket', e:'🏏'},
      {n:'A.R. Rahman', r:'Oscar-Winning Composer', e:'🎵'},
      {n:'Virat Kohli', r:'Cricket Superstar', e:'🏏'},
      {n:'Deepika Padukone', r:'Bollywood Film Star', e:'🎬'},
      {n:'Srinivasa Ramanujan', r:'Mathematical Genius', e:'🔢'},
    ]
  },

  { id:'japan', name:'Japan', flag:'🇯🇵', capital:'Tokyo', continent:'asia',
    animal:'Japanese Crane', animalEmoji:'🦢', mastername:'Tsuru',
    flagColors:['#FFFFFF','#BC002D','#FFFFFF'],
    intro:"Konnichiwa! I'm Tsuru the Crane of Japan! Japan mixes ancient tradition with modern technology!",
    funFact:"Japan has more than 6,800 islands and over 100 active volcanoes! 🌋",
    questions:[
      {q:"Japan is famous for its super-fast trains. Approximately how fast do Japan's 'Shinkansen' bullet trains travel?", ch:["320 km/h","60 km/h","150 km/h","500 km/h"], a:0, cat:"🚄 Technology"},
      {q:"What is the name of Japan's famous snow-capped volcano and highest mountain, visible from Tokyo on clear days?", ch:["Mount Fuji","Mount Everest","Mount K2","Mount Etna"], a:0, cat:"🏔️ Nature"},
      {q:"Which famous Japanese food — made with vinegared rice and raw fish — is now enjoyed all over the world?", ch:["Sushi","Pizza","Tacos","Pad Thai"], a:0, cat:"🍣 Food"}
    ],
    celebs:[
      {n:'Hayao Miyazaki', r:'Creator of Studio Ghibli Anime', e:'🎨'},
      {n:'Naomi Osaka', r:'Grand Slam Tennis Champion', e:'🎾'},
      {n:'Akira Kurosawa', r:'Greatest Film Director in Asia', e:'🎬'},
      {n:'Haruki Murakami', r:'Bestselling Novelist', e:'✍️'},
      {n:'Ichiro Suzuki', r:'Baseball Hall of Famer', e:'⚾'},
      {n:'Yoko Ono', r:'Artist & Peace Activist', e:'🎵'},
    ]
  },

  { id:'south-korea', name:'South Korea', flag:'🇰🇷', capital:'Seoul', continent:'asia',
    animal:'Siberian Tiger', animalEmoji:'🐯', mastername:'Horangi',
    flagColors:['#FFFFFF','#003478','#FFFFFF'],
    intro:"Annyeong! I'm Horangi the Tiger! South Korea gave us K-pop and amazing technology!",
    funFact:"South Korea has the fastest internet speeds in the world! 💻",
    questions:[
      {q:"South Korea is famous for its hugely popular music style that has fans in every country on Earth. What is it called?", ch:["K-Pop","J-Pop","Afrobeats","Reggae"], a:0, cat:"🎵 Music"},
      {q:"What is the famous spicy Korean fermented vegetable dish, eaten alongside almost every single Korean meal?", ch:["Kimchi","Sushi","Pho","Pad Thai"], a:0, cat:"🥬 Food"},
      {q:"Which world-famous electronics company — making phones, TVs and home appliances — comes from South Korea?", ch:["Samsung","Apple","Sony","Microsoft"], a:0, cat:"💻 Technology"}
    ],
    celebs:[
      {n:'BTS', wn:'BTS (band)', r:'Most Famous K-Pop Group Globally', e:'🎵'},
      {n:'Son Heung-min', r:'Premier League Football Star', e:'⚽'},
      {n:'Bong Joon-ho', r:'Oscar-Winning Film Director', e:'🎬'},
      {n:'Park Ji-sung', r:'Manchester United Football Legend', e:'⚽'},
      {n:'Kim Yuna', r:'Olympic Figure Skating Champion', e:'⛸️'},
      {n:'Lee Se-dol', r:'World Go Champion', e:'🎯'},
    ]
  },

  { id:'thailand', name:'Thailand', flag:'🇹🇭', capital:'Bangkok', continent:'asia',
    animal:'Elephant', animalEmoji:'🐘', mastername:'Chang',
    flagColors:['#A51931','#F4F5F8','#2D2A4A'],
    intro:"Sawasdee! I'm Chang the Elephant of Thailand! The Land of Smiles welcomes you!",
    funFact:"Thailand has over 40,000 Buddhist temples — you can see golden spires everywhere! ⛩️",
    questions:[
      {q:"Thailand's most beloved national animal — a symbol of strength, wisdom and good luck — is the...", ch:["Elephant","Tiger","Monkey","Cobra"], a:0, cat:"🐘 Culture"},
      {q:"Which famous Thai noodle dish — stir-fried with eggs, bean sprouts and crushed peanuts — is loved worldwide?", ch:["Pad Thai","Pho","Ramen","Laksa"], a:0, cat:"🍜 Food"},
      {q:"Most people in Thailand follow a peaceful religion with over 40,000 golden temples across the country. Which religion is it?", ch:["Buddhism","Hinduism","Islam","Christianity"], a:0, cat:"⛩️ Culture"}
    ],
    celebs:[
      {n:'Tony Jaa', r:'Martial Arts Action Film Star', e:'🥋'},
      {n:'Buakaw Banchamek', r:'Muay Thai World Champion', e:'🥊'},
      {n:'Paradorn Srichaphan', r:'Top-10 Tennis Player', e:'🎾'},
      {n:'Tata Young', r:'Pop Music Star', e:'🎵'},
      {n:'Praya Lundberg', r:'Actress & UNDP Goodwill Ambassador', e:'🎬'},
      {n:'Khaosai Galaxy', r:'World Boxing Champion', e:'🥊'},
    ]
  },

  { id:'indonesia', name:'Indonesia', flag:'🇮🇩', capital:'Jakarta', continent:'asia',
    animal:'Komodo Dragon', animalEmoji:'🦎', mastername:'Drago',
    flagColors:['#CE1126','#FFFFFF','#CE1126'],
    intro:"Halo! I'm Drago the Komodo Dragon! Indonesia is the world's biggest island nation!",
    funFact:"Indonesia has over 17,000 islands and is home to the world's largest lizard — the Komodo Dragon! 🦎",
    questions:[
      {q:"Indonesia is home to the world's largest Buddhist temple, built over 1,200 years ago on the island of Java. What is it called?", ch:["Borobudur","Angkor Wat","Shwedagon","Prambanan"], a:0, cat:"🏛️ History"},
      {q:"Indonesia is the world's largest island nation. Approximately how many islands does it have?", ch:["17,000+","500","2,000","5,000"], a:0, cat:"🏝️ Geography"},
      {q:"Which enormous lizard — the world's largest — lives only on a few islands in Indonesia and nowhere else on Earth?", ch:["Komodo Dragon","Giant Iguana","Monitor Lizard","Gila Monster"], a:0, cat:"🦎 Nature"}
    ],
    celebs:[
      {n:'Rudy Hartono', r:'8-Time Badminton World Champion', e:'🏸'},
      {n:'Susi Susanti', r:'Olympic Badminton Champion', e:'🏸'},
      {n:'Taufik Hidayat', r:'Olympic Badminton Champion', e:'🏸'},
      {n:'Iko Uwais', r:'Action Film Star · The Raid', e:'🥋'},
      {n:'Kevin Sanjaya', r:'World #1 Doubles Badminton', e:'🏸'},
      {n:'Pramoedya Ananta Toer', r:'Greatest Indonesian Novelist', e:'✍️'},
    ]
  },

  { id:'uae', name:'UAE', flag:'🇦🇪', capital:'Abu Dhabi', continent:'asia',
    animal:'Peregrine Falcon', animalEmoji:'🦅', mastername:'Falco',
    flagColors:['#00732F','#FFFFFF','#000000'],
    intro:"Marhaba! I'm Falco the Falcon of UAE! Dubai has the world's tallest buildings!",
    funFact:"The Burj Khalifa in Dubai is 828 metres tall — it has 163 floors! 🏙️",
    questions:[
      {q:"The world's tallest skyscraper — with 163 floors and standing 828 metres tall — is in the city of Dubai. What is it called?", ch:["Burj Khalifa","Empire State Building","CN Tower","Petronas Towers"], a:0, cat:"🏙️ Architecture"},
      {q:"The UAE's national bird — the fastest animal on Earth when diving at over 320 km/h — is the...", ch:["Peregrine Falcon","Bald Eagle","Condor","Flamingo"], a:0, cat:"🦅 Nature"},
      {q:"Dubai is home to a spectacular hotel shaped like a billowing sail, often called the world's most luxurious hotel. What is it called?", ch:["Burj Al Arab","Atlantis The Palm","The Palm Hotel","Emirates Grand"], a:0, cat:"🏨 Luxury"}
    ],
    celebs:[
      {n:'Sheikh Zayed Al Nahyan', r:'Founding Father of the UAE', e:'👑'},
      {n:'Mohammed bin Rashid', r:'Builder of Modern Dubai', e:'🏙️'},
      {n:'Ali Hassan Salim', r:'UAE Football Legend', e:'⚽'},
      {n:'Hessa Al Ajou', r:'Pioneer Visual Artist', e:'🎨'},
      {n:'Sara Al Amiri', r:'UAE Mars Mission Lead Scientist', e:'🚀'},
      {n:'Noura Al Kaabi', r:'First UAE Minister of Culture', e:'🏛️'},
    ]
  },

  { id:'vietnam', name:'Vietnam', flag:'🇻🇳', capital:'Hanoi', continent:'asia',
    animal:'Water Buffalo', animalEmoji:'🐃', mastername:'Trau',
    flagColors:['#DA251D','#FFFF00','#DA251D'],
    intro:"Xin chào! I'm Trau the Buffalo of Vietnam! Vietnam is a land of incredible beauty!",
    funFact:"Ha Long Bay in Vietnam has nearly 2,000 limestone islands rising from the sea — it looks like a fairy tale! ⛵",
    questions:[
      {q:"Vietnam's most stunning natural wonder has nearly 2,000 dramatic limestone islands rising from turquoise water. What is it called?", ch:["Ha Long Bay","Manila Bay","Tokyo Bay","Shark Bay"], a:0, cat:"🏝️ Nature"},
      {q:"What is Vietnam's most famous noodle soup — a clear broth with noodles, herbs and meat, eaten morning, noon and night?", ch:["Pho","Ramen","Laksa","Udon"], a:0, cat:"🍜 Food"},
      {q:"Surprisingly, Vietnam is the world's second-largest producer of which popular hot drink? (After Brazil!)", ch:["Coffee","Tea","Cocoa","Orange Juice"], a:0, cat:"☕ Food"}
    ],
    celebs:[
      {n:'Ho Chi Minh', r:'Revolutionary Leader & Nation Founder', e:'🏛️'},
      {n:'Nguyen Du', r:'Greatest Vietnamese Poet', e:'✍️'},
      {n:'Le Cong Vinh', r:'Football Star', e:'⚽'},
      {n:'Pham Nhat Vuong', r:"Vietnam's First Billionaire", e:'💼'},
      {n:'Vo Thi Hoa', r:'Miss Universe Contestant · Cultural Icon', e:'🌸'},
      {n:'Vo Nguyen Giap', r:'Military Genius · General', e:'⭐'},
    ]
  },

  { id:'philippines', name:'Philippines', flag:'🇵🇭', capital:'Manila', continent:'asia',
    animal:'Philippine Eagle', animalEmoji:'🦅', mastername:'Agila',
    flagColors:['#0038A8','#CE1126','#FCD116'],
    intro:"Mabuhay! I'm Agila the Philippine Eagle! The Philippines is a paradise of islands!",
    funFact:"The Philippines has over 7,000 islands and is home to one of the world's rarest and largest eagles! 🦅",
    questions:[
      {q:"The Philippines is made up of approximately how many islands — making it one of the world's largest archipelagos?", ch:["7,000+","200","500","2,000"], a:0, cat:"🏝️ Geography"},
      {q:"Which magnificent eagle — one of the world's largest and rarest birds of prey — is the national bird of the Philippines?", ch:["Philippine Eagle","Bald Eagle","Golden Eagle","Harpy Eagle"], a:0, cat:"🦅 Nature"},
      {q:"The Philippines is the only country in Asia where most people follow which religion, brought by Spanish explorers?", ch:["Christianity","Islam","Buddhism","Hinduism"], a:0, cat:"🕊️ Culture"}
    ],
    celebs:[
      {n:'Manny Pacquiao', r:'8-Division World Boxing Champion', e:'🥊'},
      {n:'Lea Salonga', r:'Broadway & Disney Voice Legend', e:'🎵'},
      {n:'José Rizal', r:'National Hero & Author', e:'✍️'},
      {n:'Efren Reyes', r:'Greatest Billiards Player Ever', e:'🎱'},
      {n:'Lydia de Vega', r:"Asia's Fastest Woman", e:'🏃'},
      {n:'Fernando Poe Jr.', r:'King of Philippine Cinema', e:'🎬'},
    ]
  },

  { id:'saudi-arabia', name:'Saudi Arabia', flag:'🇸🇦', capital:'Riyadh', continent:'asia',
    animal:'Arabian Camel', animalEmoji:'🐪', mastername:'Amir',
    flagColors:['#006C35','#FFFFFF','#006C35'],
    intro:"Marhaba! I'm Amir the Camel of Saudi Arabia! Welcome to the land of deserts and history!",
    funFact:"Saudi Arabia is home to Mecca — the holiest city in Islam, visited by millions every year! 🕌",
    questions:[
      {q:"Saudi Arabia is home to Mecca — the most sacred city in which religion, attracting millions of pilgrims every year?", ch:["Islam","Christianity","Hinduism","Buddhism"], a:0, cat:"🕌 Culture"},
      {q:"Saudi Arabia is the world's largest exporter of which precious natural resource, found deep underground?", ch:["Oil","Gold","Diamonds","Natural Gas"], a:0, cat:"⚡ Resources"},
      {q:"Saudi Arabia's vast desert — one of the world's largest areas of continuous sand dunes — is called the 'Empty Quarter'. What is the Arabic name?", ch:["Rub' al Khali","The Sahara","The Gobi","The Nafud"], a:0, cat:"🌵 Nature"}
    ],
    celebs:[
      {n:'Al-Battani', r:'Medieval Astronomer & Mathematician', e:'🔭'},
      {n:'Ibn al-Haytham', r:'Father of Modern Optics', e:'🔬'},
      {n:'Yasser Al-Qahtani', r:'Football Legend', e:'⚽'},
      {n:'Mohammed Al-Deayea', r:'Legendary Goalkeeper', e:'🥅'},
      {n:'Hisham Fageeh', r:'Comedian & Cultural Icon', e:'🎭'},
      {n:'Rania Al Abdullah', r:'Queen of Jordan · Arab World Icon', e:'👑'},
    ]
  },

  // ─────────────────────────────────────────
  // AFRICA (8 countries)
  // ─────────────────────────────────────────

  { id:'egypt', name:'Egypt', flag:'🇪🇬', capital:'Cairo', continent:'africa',
    animal:'Golden Eagle', animalEmoji:'🦅', mastername:'Horus',
    flagColors:['#CE1126','#FFFFFF','#000000'],
    intro:"Ahlan! I'm Horus the Eagle, guardian of Egypt! One of the oldest civilizations on Earth awaits!",
    funFact:"The Great Pyramid of Giza is the ONLY one of the original Seven Wonders of the Ancient World still standing! 🏺",
    questions:[
      {q:"The famous Pharaoh Tutankhamun ('King Tut') became ruler of Egypt at an astonishingly young age. How old was he?", ch:["About 9 years old","25 years old","40 years old","60 years old"], a:0, cat:"📜 History"},
      {q:"Which is the longest river in the world, flowing all the way through Egypt and emptying into the Mediterranean Sea?", ch:["The Nile","The Amazon","The Mississippi","The Yangtze"], a:0, cat:"🌊 Nature"},
      {q:"Ancient Egyptians wrote using a system of picture symbols. What is this ancient writing system called?", ch:["Hieroglyphics","Cuneiform","Sanskrit","Latin"], a:0, cat:"✍️ History"}
    ],
    celebs:[
      {n:'Cleopatra', r:'Last Pharaoh of Ancient Egypt', e:'👑'},
      {n:'Mohamed Salah', r:'Premier League Football Star', e:'⚽'},
      {n:'Naguib Mahfouz', r:'Nobel Prize in Literature', e:'✍️'},
      {n:'Ahmed Zewail', r:'Nobel Prize in Chemistry', e:'🔬'},
      {n:'Omar Sharif', r:'Hollywood Film Star', e:'🎬'},
      {n:'Ramesses II', r:'Greatest Pharaoh Ever', e:'🏛️'},
    ]
  },

  { id:'south-africa', name:'South Africa', flag:'🇿🇦', capital:'Pretoria', continent:'africa',
    animal:'Springbok', animalEmoji:'🦌', mastername:'Madiba',
    flagColors:['#007A4D','#FFB612','#DE3831'],
    intro:"Sawubona! I'm Madiba the Springbok! South Africa has 11 official languages!",
    funFact:"South Africa is the only country to have ever voluntarily given up its nuclear weapons! 🌈",
    questions:[
      {q:"Which great South African leader spent 27 years in prison before becoming the country's first democratically elected president?", ch:["Nelson Mandela","Desmond Tutu","Thabo Mbeki","Steve Biko"], a:0, cat:"✊ History"},
      {q:"Nelson Mandela was imprisoned on a small island just off Cape Town for 18 years. What is this island called?", ch:["Robben Island","Alcatraz","Devil's Island","Seal Island"], a:0, cat:"📜 History"},
      {q:"South Africa's famous 'Big Five' are iconic safari animals. Which of these is NOT one of the Big Five?", ch:["Cheetah","Lion","Leopard","Rhinoceros"], a:0, cat:"🦁 Nature"}
    ],
    celebs:[
      {n:'Nelson Mandela', r:'President · Symbol of Peace', e:'🕊️'},
      {n:'Elon Musk', r:'Tesla & SpaceX Founder', e:'🚀'},
      {n:'Charlize Theron', r:'Oscar-Winning Actress', e:'🎬'},
      {n:'Desmond Tutu', r:'Nobel Peace Prize Archbishop', e:'✝️'},
      {n:'Gary Player', r:'Golf Grand Slam Champion', e:'🏌️'},
      {n:'Miriam Makeba', r:'Mama Africa · Music Legend', e:'🎵'},
    ]
  },

  { id:'nigeria', name:'Nigeria', flag:'🇳🇬', capital:'Abuja', continent:'africa',
    animal:'Eagle', animalEmoji:'🦅', mastername:'Onyeka',
    flagColors:['#008751','#FFFFFF','#008751'],
    intro:"Ẹ káabọ̀! I'm Onyeka the Eagle of Nigeria! Africa's most populous country!",
    funFact:"Nigeria has the largest film industry in Africa — called Nollywood — producing thousands of films every year! 🎬",
    questions:[
      {q:"Nigeria is the most populous country in Africa. Approximately how many people live there?", ch:["Over 220 million","50 million","100 million","500 million"], a:0, cat:"👥 Geography"},
      {q:"Nigeria is famous worldwide for its vibrant, danceable music genre that has taken over global charts. What is it called?", ch:["Afrobeats","Reggae","Salsa","K-Pop"], a:0, cat:"🎵 Music"},
      {q:"Nigeria has Africa's largest film industry, producing thousands of movies every year. What is it nicknamed?", ch:["Nollywood","Bollywood","Hollywood","Kannywood"], a:0, cat:"🎬 Culture"}
    ],
    celebs:[
      {n:'Wole Soyinka', r:'Nobel Prize in Literature', e:'✍️'},
      {n:'Burna Boy', r:'Grammy-Winning Afrobeats Star', e:'🎵'},
      {n:'Jay-Jay Okocha', r:'Greatest Nigerian Footballer', e:'⚽'},
      {n:'Davido', r:'Afrobeats Global Superstar', e:'🎵'},
      {n:'Ngozi Okonjo-Iweala', r:'Head of World Trade Organization', e:'🏛️'},
      {n:'Chioma Ajunwa', r:'Nigeria\'s First Olympic Gold', e:'🏃'},
    ]
  },

  { id:'kenya', name:'Kenya', flag:'🇰🇪', capital:'Nairobi', continent:'africa',
    animal:'Lion', animalEmoji:'🦁', mastername:'Simba',
    flagColors:['#006600','#BB0000','#FFFFFF'],
    intro:"Jambo! I'm Simba the Lion of Kenya! Kenya is home to the world's greatest wildlife safari!",
    funFact:"Kenyan marathon runner Eliud Kipchoge was the first human to run a full marathon in under 2 hours! 🏃",
    questions:[
      {q:"Kenya is one of the world's top producers of which refreshing drink, enjoyed by millions every morning worldwide?", ch:["Tea","Coffee","Cocoa","Orange Juice"], a:0, cat:"🍵 Food"},
      {q:"Which Kenyan athlete became the first person in history to run a full marathon (42 km) in under 2 hours?", ch:["Eliud Kipchoge","Usain Bolt","Mo Farah","Haile Gebrselassie"], a:0, cat:"🏃 Sports"},
      {q:"Kenya's famous wildlife reserve — known for the spectacular Great Migration of wildebeest — is called...", ch:["Maasai Mara","Serengeti","Kruger","Amboseli"], a:0, cat:"🦁 Nature"}
    ],
    celebs:[
      {n:'Eliud Kipchoge', r:'First Human Under 2 Hours Marathon', e:'🏃'},
      {n:'Wangari Maathai', r:'Nobel Peace Prize · Environmentalist', e:'🌱'},
      {n:'Lupita Nyong\'o', r:'Oscar-Winning Actress', e:'🎬'},
      {n:'Wilson Kipketer', r:'800m World Record Holder', e:'🏃'},
      {n:'John Ngugi', r:'Five-Time World Cross Country Champion', e:'🏃'},
      {n:'Fatuma Roba', r:'Olympic Marathon Champion', e:'🥇'},
    ]
  },

  { id:'morocco', name:'Morocco', flag:'🇲🇦', capital:'Rabat', continent:'africa',
    animal:'Barbary Lion', animalEmoji:'🦁', mastername:'Atlas',
    flagColors:['#C1272D','#006233','#C1272D'],
    intro:"Merhba! I'm Atlas the Lion of Morocco! Gateway between Africa and Europe!",
    funFact:"Morocco's city of Fes has the world's oldest university — founded in the year 859 AD! 📚",
    questions:[
      {q:"Morocco's city of Fes is home to the world's oldest continuously operating university, founded in 859 AD. What is it called?", ch:["University of al-Qarawiyyin","Oxford University","Bologna University","Harvard University"], a:0, cat:"🎓 History"},
      {q:"Which Moroccan city is famous worldwide for its pink-red buildings, lively souks (markets) and colourful culture?", ch:["Marrakech","Rabat","Casablanca","Tangier"], a:0, cat:"🏙️ Culture"},
      {q:"Morocco's famous slow-cooked stew — prepared in a cone-shaped clay pot — shares its name with the pot itself. What is it called?", ch:["Tagine","Curry","Casserole","Harira"], a:0, cat:"🍲 Food"}
    ],
    celebs:[
      {n:'Ibn Battuta', r:'Greatest Explorer of the Medieval World', e:'🧭'},
      {n:'Achraf Hakimi', r:'World-Class Football Star', e:'⚽'},
      {n:'Hicham El Guerrouj', r:'World Record Mile Runner', e:'🏃'},
      {n:'Fatima Al-Fihriya', r:'Founder of World\'s First University', e:'📚'},
      {n:'Youssef En-Nesyri', r:'World Cup Football Sensation', e:'⚽'},
      {n:'Mohammed VI', r:'King of Morocco', e:'👑'},
    ]
  },

  { id:'ethiopia', name:'Ethiopia', flag:'🇪🇹', capital:'Addis Ababa', continent:'africa',
    animal:'Lion of Judah', animalEmoji:'🦁', mastername:'Jah',
    flagColors:['#009A44','#FCDD09','#EF2118'],
    intro:"Selam! I'm Jah the Lion of Ethiopia! Ethiopia is the birthplace of coffee!",
    funFact:"Coffee was first discovered in Ethiopia! A shepherd noticed his goats got very energetic after eating certain berries — that was coffee! ☕",
    questions:[
      {q:"Ethiopia is famous for being the birthplace of which popular hot drink, now enjoyed by billions worldwide every morning?", ch:["Coffee","Tea","Cocoa","Orange Juice"], a:0, cat:"☕ Culture"},
      {q:"Which legendary Ethiopian long-distance runner dominated the Olympics and World Championships throughout the 1990s and 2000s?", ch:["Haile Gebrselassie","Eliud Kipchoge","Mo Farah","Usain Bolt"], a:0, cat:"🏃 Sports"},
      {q:"Ethiopia has its own unique calendar that is about 7-8 years 'behind' the rest of the world. How many months does it have?", ch:["13 months","12 months","10 months","11 months"], a:0, cat:"📅 Culture"}
    ],
    celebs:[
      {n:'Haile Gebrselassie', r:'Greatest Distance Runner Ever', e:'🏃'},
      {n:'Abebe Bikila', r:'First African Olympic Champion', e:'🥇'},
      {n:'Tirunesh Dibaba', r:'Triple Olympic Gold Runner', e:'🏃'},
      {n:'Kenenisa Bekele', r:'World Record 10,000m Runner', e:'🏃'},
      {n:'Haile Selassie', r:'Emperor of Ethiopia', e:'👑'},
      {n:'Lemlem Leikun', r:'World Marathon Champion', e:'🏃'},
    ]
  },

  { id:'ghana', name:'Ghana', flag:'🇬🇭', capital:'Accra', continent:'africa',
    animal:'Tawny Eagle', animalEmoji:'🦅', mastername:'Sankofa',
    flagColors:['#006B3F','#FCD116','#CE1126'],
    intro:"Akwaaba! I'm Sankofa the Eagle of Ghana! First African country to gain independence!",
    funFact:"Ghana was the first country in sub-Saharan Africa to gain independence from colonial rule, in 1957! 🇬🇭",
    questions:[
      {q:"Ghana made history in 1957 by becoming the first country in sub-Saharan Africa to gain independence. From which European country?", ch:["Britain","France","Portugal","Belgium"], a:0, cat:"📜 History"},
      {q:"Ghana is famous for its stunning handwoven, brightly coloured fabric — worn at celebrations and by royalty. What is it called?", ch:["Kente Cloth","Batik","Silk","Tartan"], a:0, cat:"🎨 Culture"},
      {q:"Ghana is one of the world's top producers of which sweet ingredient — the key ingredient in everyone's favourite treat, chocolate!", ch:["Cocoa beans","Vanilla","Sugar","Coffee"], a:0, cat:"🍫 Food"}
    ],
    celebs:[
      {n:'Kofi Annan', r:'UN Secretary-General · Nobel Peace Prize', e:'🕊️'},
      {n:'Kwame Nkrumah', r:'Founding Father of Ghana', e:'🏛️'},
      {n:'Abedi Pelé', r:'African Player of the Century', e:'⚽'},
      {n:'Michael Essien', r:'Champions League Football Star', e:'⚽'},
      {n:'Asamoah Gyan', r:"Ghana's All-Time Top Scorer", e:'⚽'},
      {n:'Efua Sutherland', r:'Pioneer African Playwright', e:'🎭'},
    ]
  },

  { id:'tanzania', name:'Tanzania', flag:'🇹🇿', capital:'Dodoma', continent:'africa',
    animal:'Giraffe', animalEmoji:'🦒', mastername:'Twiga',
    flagColors:['#1EB53A','#FCD116','#00A3DD'],
    intro:"Karibu! I'm Twiga the Giraffe of Tanzania! Home to Africa's highest mountain!",
    funFact:"The Serengeti in Tanzania hosts the world's largest land animal migration — over 1.5 million wildebeest! 🦓",
    questions:[
      {q:"Which is the tallest mountain in ALL of Africa, located in Tanzania and often called the 'Roof of Africa'?", ch:["Mount Kilimanjaro","Mount Kenya","Mount Elgon","Mount Cameroon"], a:0, cat:"🏔️ Nature"},
      {q:"Tanzania's famous national park — home to the greatest wildlife migration on Earth — is called...", ch:["Serengeti","Maasai Mara","Kruger","Okavango"], a:0, cat:"🦁 Nature"},
      {q:"Tanzania's island of Zanzibar was historically known as the 'Spice Island'. Which spice made Zanzibar rich and famous?", ch:["Cloves","Cinnamon","Pepper","Nutmeg"], a:0, cat:"🌿 Culture"}
    ],
    celebs:[
      {n:'Freddie Mercury', r:'Lead Singer of Queen · Born in Zanzibar', e:'🎸'},
      {n:'Julius Nyerere', r:'Father of the Nation · First President', e:'🏛️'},
      {n:'Filbert Bayi', r:'World Record 1500m Runner', e:'🏃'},
      {n:'Diamond Platnumz', r:'Africa\'s Biggest Music Star', e:'🎵'},
      {n:'Juma Mwapachu', r:'East African Community Secretary-General', e:'🌍'},
      {n:'Mary Decker', r:'Pioneer of Tanzanian Athletics', e:'🏃'},
    ]
  },

  // ─────────────────────────────────────────
  // NORTH AMERICA (5 countries)
  // ─────────────────────────────────────────

  { id:'usa', name:'United States', flag:'🇺🇸', capital:'Washington D.C.', continent:'north-america',
    animal:'Bald Eagle', animalEmoji:'🦅', mastername:'Liberty',
    flagColors:['#BF0A30','#FFFFFF','#002868'],
    intro:"Howdy! I'm Liberty the Bald Eagle of the USA! Land of the free, home of the brave!",
    funFact:"The USA was the first country to land humans on the Moon — Neil Armstrong walked on it in 1969! 🚀",
    questions:[
      {q:"The Statue of Liberty — a giant copper statue holding a torch — was a gift to the USA from which country?", ch:["France","UK","Spain","Germany"], a:0, cat:"🏛️ Monuments"},
      {q:"In 1969, NASA's Apollo 11 made history. Who was the FIRST human being to walk on the Moon?", ch:["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","John Glenn"], a:0, cat:"🚀 History"},
      {q:"Which uniquely American music style — full of improvisation and soul — was born in New Orleans, Louisiana?", ch:["Jazz","Rock","Hip-Hop","Country"], a:0, cat:"🎵 Music"}
    ],
    celebs:[
      {n:'Martin Luther King Jr.', r:'Civil Rights Leader · Nobel Peace Prize', e:'🕊️'},
      {n:'Neil Armstrong', r:'First Human to Walk on the Moon', e:'🚀'},
      {n:'Michael Jordan', r:'Greatest Basketball Player Ever', e:'🏀'},
      {n:'Michael Jackson', r:'King of Pop', e:'🎵'},
      {n:'Muhammad Ali', r:'Greatest Boxer of All Time', e:'🥊'},
      {n:'Marilyn Monroe', r:'Hollywood Film Icon', e:'🎬'},
    ]
  },

  { id:'canada', name:'Canada', flag:'🇨🇦', capital:'Ottawa', continent:'north-america',
    animal:'Beaver', animalEmoji:'🦫', mastername:'Maple',
    flagColors:['#FF0000','#FFFFFF','#FF0000'],
    intro:"Hey there! I'm Maple the Beaver of Canada! The Great White North is full of wonders!",
    funFact:"Canada has more lakes than all the rest of the world's countries combined! That's over 60% of the world's lakes! 🏞️",
    questions:[
      {q:"Canada has more of which natural feature than all other countries in the world COMBINED — over 60% of the global total!", ch:["Lakes","Mountains","Deserts","Volcanoes"], a:0, cat:"🏞️ Geography"},
      {q:"Canada's national tree — whose bright red leaf appears on the Canadian flag — is the...", ch:["Maple Tree","Oak Tree","Pine Tree","Cedar Tree"], a:0, cat:"🍁 Nature"},
      {q:"The famous massive waterfall on the border of Canada and the USA — visited by 30 million people per year — is called...", ch:["Niagara Falls","Victoria Falls","Angel Falls","Iguazu Falls"], a:0, cat:"🌊 Nature"}
    ],
    celebs:[
      {n:'Wayne Gretzky', r:'The Great One · Ice Hockey Legend', e:'🏒'},
      {n:'Celine Dion', r:'One of the Best-Selling Artists Ever', e:'🎵'},
      {n:'Justin Bieber', r:'Global Pop Superstar', e:'🎵'},
      {n:'Jim Carrey', r:'Comedy Film Legend', e:'🎬'},
      {n:'Drake', r:'World\'s Best-Selling Rapper', e:'🎵'},
      {n:'Terry Fox', r:'Cancer Fundraising Hero', e:'🏃'},
    ]
  },

  { id:'mexico', name:'Mexico', flag:'🇲🇽', capital:'Mexico City', continent:'north-america',
    animal:'Golden Eagle', animalEmoji:'🦅', mastername:'Quetzal',
    flagColors:['#006847','#FFFFFF','#CE1126'],
    intro:"¡Hola amigo! I'm Quetzal the Eagle of Mexico! Land of ancient pyramids and amazing food!",
    funFact:"The ancient Mayans and Aztecs built incredible pyramids in Mexico — some are as big as those in Egypt! 🌮",
    questions:[
      {q:"Which ancient Mayan pyramid in Mexico — one of the New Seven Wonders of the World — served as a temple and a calendar?", ch:["Chichen Itza","Teotihuacan","Machu Picchu","Angkor Wat"], a:0, cat:"🏛️ History"},
      {q:"Which Mexican food — a folded tortilla filled with meat, cheese and salsa — is enjoyed in every corner of the world?", ch:["Tacos","Sushi","Curry","Pasta"], a:0, cat:"🌮 Food"},
      {q:"Mexico's most colourful holiday — celebrated with altars, marigolds and skeleton face paint — honours deceased loved ones. What is it called?", ch:["Día de los Muertos","Halloween","Carnival","All Saints Day"], a:0, cat:"🎭 Culture"}
    ],
    celebs:[
      {n:'Frida Kahlo', r:'Iconic Self-Portrait Painter', e:'🎨'},
      {n:'Carlos Santana', r:'Rock Guitar Legend', e:'🎸'},
      {n:'Salma Hayek', r:'Hollywood Actress & Producer', e:'🎬'},
      {n:'Hugo Sánchez', r:'Greatest Mexican Footballer', e:'⚽'},
      {n:'Octavio Paz', r:'Nobel Prize in Literature', e:'✍️'},
      {n:'Carlos Slim', r:'One of World\'s Richest People', e:'💼'},
    ]
  },

  { id:'jamaica', name:'Jamaica', flag:'🇯🇲', capital:'Kingston', continent:'north-america',
    animal:'Streamertail Hummingbird', animalEmoji:'🐦', mastername:'Doctor',
    flagColors:['#000000','#FED100','#007B40'],
    intro:"Irie! I'm Doctor the Hummingbird of Jamaica! Fastest man on Earth comes from here!",
    funFact:"Usain Bolt from Jamaica is the fastest human ever — he ran 100m in just 9.58 seconds! ⚡",
    questions:[
      {q:"Which Jamaican athlete holds the world record as the fastest human ever, completing the 100m sprint in just 9.58 seconds?", ch:["Usain Bolt","Mo Farah","Carl Lewis","Asafa Powell"], a:0, cat:"⚡ Sports"},
      {q:"Jamaica is the birthplace of reggae music. Which Jamaican musician became the genre's most legendary artist worldwide?", ch:["Bob Marley","Sean Paul","Shaggy","Jimmy Cliff"], a:0, cat:"🎵 Music"},
      {q:"What is Jamaica's famous national dish — a surprising but delicious combination of a tropical fruit and salted fish?", ch:["Ackee & Saltfish","Jerk Chicken","Rice & Peas","Curry Goat"], a:0, cat:"🍳 Food"}
    ],
    celebs:[
      {n:'Usain Bolt', r:'World\'s Fastest Human · 9.58s 100m', e:'⚡'},
      {n:'Bob Marley', r:'King of Reggae Music', e:'🎵'},
      {n:'Shelly-Ann Fraser-Pryce', r:'Sprint Queen · Olympic Champion', e:'🏃'},
      {n:'Marcus Garvey', r:'Black Liberation Hero', e:'✊'},
      {n:'Grace Jones', r:'Music & Fashion Icon', e:'🎵'},
      {n:'Jimmy Cliff', r:'Reggae Pioneer', e:'🎸'},
    ]
  },

  { id:'cuba', name:'Cuba', flag:'🇨🇺', capital:'Havana', continent:'north-america',
    animal:'Cuban Trogon', animalEmoji:'🐦', mastername:'Tocoro',
    flagColors:['#002A8F','#FFFFFF','#CC0000'],
    intro:"¡Saludos! I'm Tocoro the Trogon of Cuba! Cuba is an island of music and rhythm!",
    funFact:"Cuba's capital Havana has beautifully colourful vintage cars from the 1950s still driving around today! 🚗",
    questions:[
      {q:"Cuba is the LARGEST island in the Caribbean Sea. In which sea is Cuba located?", ch:["The Caribbean Sea","The Pacific Ocean","The Atlantic Ocean","The Gulf of Mexico"], a:0, cat:"🏝️ Geography"},
      {q:"Cuba is famous for which energetic, romantic dance and music style, loved in dance halls around the world?", ch:["Salsa","Reggae","Afrobeats","K-Pop"], a:0, cat:"🎵 Music"},
      {q:"Cuba is world-famous for producing the finest hand-rolled version of which luxury item, enjoyed since the 1500s?", ch:["Cigars","Rum","Coffee","Chocolate"], a:0, cat:"🌿 Culture"}
    ],
    celebs:[
      {n:'Teófilo Stevenson', r:'Three-Time Olympic Boxing Champion', e:'🥊'},
      {n:'Ibrahim Ferrer', r:'Buena Vista Social Club Legend', e:'🎵'},
      {n:'Javier Sotomayor', r:'High Jump World Record Holder', e:'🏃'},
      {n:'Alicia Alonso', r:'Prima Ballerina of the Americas', e:'🩰'},
      {n:'Compay Segundo', r:'Cuban Music Icon', e:'🎸'},
      {n:'Silvio Rodríguez', r:'Singer & Songwriter Icon', e:'🎵'},
    ]
  },

  // ─────────────────────────────────────────
  // SOUTH AMERICA (6 countries)
  // ─────────────────────────────────────────

  { id:'brazil', name:'Brazil', flag:'🇧🇷', capital:'Brasília', continent:'south-america',
    animal:'Jaguar', animalEmoji:'🐆', mastername:'Onça',
    flagColors:['#009B3A','#FEDF00','#002776'],
    intro:"Olá! I'm Onça the Jaguar of Brazil! Brazil has the largest rainforest on Earth!",
    funFact:"Brazil is the only country in South America where Portuguese is the official language — everyone else speaks Spanish! 🌴",
    questions:[
      {q:"Brazil is home to the world's largest rainforest — the 'lungs of the Earth'. What is it called?", ch:["The Amazon Rainforest","The Congo Rainforest","The Borneo Rainforest","The Daintree Rainforest"], a:0, cat:"🌿 Nature"},
      {q:"The famous giant statue 'Christ the Redeemer' — arms outstretched overlooking the city — is found in which Brazilian city?", ch:["Rio de Janeiro","São Paulo","Brasília","Salvador"], a:0, cat:"🏛️ Monuments"},
      {q:"Brazil has won the FIFA Football World Cup more times than any other nation in the world. How many times?", ch:["5 times","3 times","4 times","2 times"], a:0, cat:"⚽ Sports"}
    ],
    celebs:[
      {n:'Pelé', wn:'Pelé', r:'King of Football · 3× World Cup Winner', e:'⚽'},
      {n:'Ayrton Senna', r:'Formula 1 Legend', e:'🏎️'},
      {n:'Ronaldo', r:'World Cup Golden Boot Winner', e:'⚽'},
      {n:'Carmen Miranda', r:'Hollywood Film & Music Star', e:'🎬'},
      {n:'Caetano Veloso', r:"Music Genius of Brazil", e:'🎵'},
      {n:'Oscar Niemeyer', r:'Architect of Brasília', e:'🏗️'},
    ]
  },

  { id:'argentina', name:'Argentina', flag:'🇦🇷', capital:'Buenos Aires', continent:'south-america',
    animal:'Rufous Hornero', animalEmoji:'🐦', mastername:'Maradona',
    flagColors:['#74ACDF','#FFFFFF','#74ACDF'],
    intro:"¡Hola! I'm Maradona the Hornero Bird of Argentina! Home of tango and football legends!",
    funFact:"Argentina's Lionel Messi is considered one of the greatest footballers of all time, having won 8 Ballon d'Or awards! ⚽",
    questions:[
      {q:"Which legendary Argentine footballer has won more Ballon d'Or awards (for world's best player) than anyone else?", ch:["Lionel Messi","Cristiano Ronaldo","Diego Maradona","Gabriel Batistuta"], a:0, cat:"⚽ Sports"},
      {q:"Argentina's beautiful, passionate national dance — danced cheek-to-cheek by pairs — is called the...", ch:["Tango","Salsa","Samba","Flamenco"], a:0, cat:"💃 Culture"},
      {q:"Argentina is famous for producing the world's best beef. What is Argentina's beloved tradition of cooking meat over an open fire called?", ch:["Asado (BBQ)","Fondue","Tagine","Sukiyaki"], a:0, cat:"🥩 Food"}
    ],
    celebs:[
      {n:'Lionel Messi', r:'World Cup & 8× Ballon d\'Or Champion', e:'⚽'},
      {n:'Diego Maradona', r:'Football Genius of the Century', e:'⚽'},
      {n:'Pope Francis', r:'First Latin American Pope', e:'🕊️'},
      {n:'Jorge Luis Borges', r:'Greatest Spanish-Language Author', e:'✍️'},
      {n:'Astor Piazzolla', r:'Tango Music Revolutionary', e:'🎵'},
      {n:'Mercedes Sosa', r:'Voice of Latin America', e:'🎵'},
    ]
  },

  { id:'colombia', name:'Colombia', flag:'🇨🇴', capital:'Bogotá', continent:'south-america',
    animal:'Andean Condor', animalEmoji:'🦅', mastername:'Condor',
    flagColors:['#FCD116','#003087','#CE1126'],
    intro:"¡Bienvenidos! I'm Condor the Andean Condor of Colombia! Coffee capital of the world!",
    funFact:"Colombia is the world's second-largest producer of coffee — Colombians take their coffee VERY seriously! ☕",
    questions:[
      {q:"Colombia is the world's second-largest producer of which popular hot drink, enjoyed worldwide every morning?", ch:["Coffee","Tea","Cocoa","Hot Chocolate"], a:0, cat:"☕ Culture"},
      {q:"Colombia's impressive national bird — one of the world's largest flying birds with a wingspan of up to 3 metres — is the...", ch:["Andean Condor","Harpy Eagle","Macaw","Toucan"], a:0, cat:"🦅 Nature"},
      {q:"Colombia is the world's top producer of which precious green gemstone, used in beautiful jewellery worldwide?", ch:["Emeralds","Diamonds","Rubies","Sapphires"], a:0, cat:"💎 Resources"}
    ],
    celebs:[
      {n:'Gabriel García Márquez', r:'Nobel Prize · 100 Years of Solitude', e:'✍️'},
      {n:'Shakira', r:'Latin Pop & Dance Global Superstar', e:'🎵'},
      {n:'James Rodríguez', r:'World Cup Football Star', e:'⚽'},
      {n:'Fernando Botero', r:'Iconic Sculptor & Painter', e:'🎨'},
      {n:'Falcao García', r:'Champion League Top Scorer', e:'⚽'},
      {n:'Juanes', r:'Latin Grammy Artist', e:'🎸'},
    ]
  },

  { id:'peru', name:'Peru', flag:'🇵🇪', capital:'Lima', continent:'south-america',
    animal:'Vicuña', animalEmoji:'🦙', mastername:'Inca',
    flagColors:['#D91023','#FFFFFF','#D91023'],
    intro:"Rimaykullayki! I'm Inca the Vicuña of Peru! Ancient Incan wonders await you!",
    funFact:"Machu Picchu in Peru was built by the Inca Empire around 1450 AD and was hidden from the world until 1911! 🏔️",
    questions:[
      {q:"The mysterious ancient Incan city, perched high in the Andes Mountains and rediscovered in 1911, is called...", ch:["Machu Picchu","Chichen Itza","Angkor Wat","Petra"], a:0, cat:"🏛️ History"},
      {q:"Peru is home to a sweet-natured national animal, related to the llama, with the world's softest natural wool. What is it called?", ch:["Vicuña","Alpaca","Guanaco","Llama"], a:0, cat:"🦙 Nature"},
      {q:"The mighty Amazon River — the world's largest river by water volume — actually starts its journey in which country?", ch:["Peru","Brazil","Colombia","Ecuador"], a:0, cat:"🌊 Nature"}
    ],
    celebs:[
      {n:'Mario Vargas Llosa', r:'Nobel Prize in Literature', e:'✍️'},
      {n:'Chabuca Granda', r:'Greatest Peruvian Music Composer', e:'🎵'},
      {n:'Gastón Acurio', r:'Latin America\'s Top Chef', e:'👨‍🍳'},
      {n:'Jefferson Farfán', r:'Peru\'s Football Star', e:'⚽'},
      {n:'Kina Malpartida', r:'World Boxing Champion', e:'🥊'},
      {n:'Teófilo Cubillas', r:'Greatest Peruvian Footballer Ever', e:'⚽'},
    ]
  },

  { id:'chile', name:'Chile', flag:'🇨🇱', capital:'Santiago', continent:'south-america',
    animal:'Andean Condor', animalEmoji:'🦅', mastername:'Viento',
    flagColors:['#D52B1E','#FFFFFF','#0039A6'],
    intro:"¡Hola! I'm Viento the Condor of Chile! Chile is the world's longest country!",
    funFact:"The Atacama Desert in Chile is the driest place on Earth — some areas there have NEVER recorded any rain! 🌵",
    questions:[
      {q:"Chile holds a unique geographical record — it stretches an incredible 4,300 km from north to south. What record does it hold?", ch:["World's longest country","World's highest country","World's widest country","World's wettest country"], a:0, cat:"🌍 Geography"},
      {q:"The Atacama Desert in northern Chile is the world's driest place. How much drier is it than the Sahara?", ch:["50 times drier","About the same","Slightly drier","Less dry"], a:0, cat:"🌵 Nature"},
      {q:"Chile's Easter Island is famous for its mysterious giant stone statues, carved by the indigenous Rapa Nui people. What are these statues called?", ch:["Moai","Olmec Heads","Terracotta Warriors","Stone Heads"], a:0, cat:"🗿 History"}
    ],
    celebs:[
      {n:'Pablo Neruda', r:'Nobel Prize · World\'s Greatest Love Poet', e:'✍️'},
      {n:'Gabriela Mistral', r:'First Latin American Nobel Literature Prize', e:'📖'},
      {n:'Alexis Sánchez', r:'Chile\'s Greatest Footballer', e:'⚽'},
      {n:'Marcelo Ríos', r:'First Latin American World #1 Tennis', e:'🎾'},
      {n:'Isabel Allende', r:'International Bestselling Author', e:'✍️'},
      {n:'Arturo Prat', r:'National Naval Hero', e:'⚓'},
    ]
  },

  { id:'venezuela', name:'Venezuela', flag:'🇻🇪', capital:'Caracas', continent:'south-america',
    animal:'Troupial', animalEmoji:'🐦', mastername:'Troupi',
    flagColors:['#CF142B','#00247D','#009E60'],
    intro:"¡Buenas! I'm Troupi the Troupial Bird of Venezuela! Home of the world's tallest waterfall!",
    funFact:"Angel Falls in Venezuela is the world's tallest waterfall — it drops 979 metres! That's taller than the Eiffel Tower by a LOT! 🌊",
    questions:[
      {q:"Angel Falls in Venezuela is the world's tallest waterfall. How high does it drop — compared to the Eiffel Tower (330m)?", ch:["979 metres — nearly 3× the Eiffel Tower!","200 metres","50 metres","1,500 metres"], a:0, cat:"🌊 Nature"},
      {q:"Venezuela's beautiful national bird — known for its bright orange chest and jet-black wings — is the...", ch:["Troupial","Toucan","Macaw","Hummingbird"], a:0, cat:"🐦 Nature"},
      {q:"Venezuela was once considered one of the richest countries in South America because of its enormous reserves of which resource?", ch:["Oil","Gold","Diamonds","Coffee"], a:0, cat:"⚡ Resources"}
    ],
    celebs:[
      {n:'Simón Bolívar', r:'Liberator of South America', e:'👑'},
      {n:'Gustavo Dudamel', r:'World-Famous Orchestra Conductor', e:'🎵'},
      {n:'Carolina Herrera', r:'Global Fashion Designer', e:'👗'},
      {n:'Juan Arango', r:'Venezuela\'s Greatest Footballer', e:'⚽'},
      {n:'Andrés Galarraga', r:'Baseball Hall of Fame Star', e:'⚾'},
      {n:'Chucho Sanoja', r:'Salsa Music Pioneer', e:'🎸'},
    ]
  },

  // ─────────────────────────────────────────
  // OCEANIA (4 countries)
  // ─────────────────────────────────────────

  { id:'australia', name:'Australia', flag:'🇦🇺', capital:'Canberra', continent:'oceania',
    animal:'Red Kangaroo', animalEmoji:'🦘', mastername:'Roo',
    flagColors:['#00008B','#FFFFFF','#FF0000'],
    intro:"G'day! I'm Roo the Kangaroo of Australia! The land Down Under is full of unique animals!",
    funFact:"Australia has more unique species of animals than almost any other country — kangaroos even outnumber people! 🦘",
    questions:[
      {q:"The Platypus is one of the world's strangest animals — it's a mammal that lays eggs and has a duck-like bill! Where is it found?", ch:["Only in Australia","Australia & New Zealand","All of Oceania","Southeast Asia"], a:0, cat:"🦘 Nature"},
      {q:"The world-famous Sydney Opera House, with its distinctive sail-shaped roofs, is in which Australian city?", ch:["Sydney","Melbourne","Canberra","Brisbane"], a:0, cat:"🏛️ Monuments"},
      {q:"Which unique Australian animals carry their babies in a special pouch? (There's more than one answer!)", ch:["All of these — Kangaroos, Koalas & Wombats!","Only Kangaroos","Only Koalas","Only Wombats"], a:0, cat:"🦘 Nature"}
    ],
    celebs:[
      {n:'Steve Irwin', r:'The Crocodile Hunter', e:'🐊'},
      {n:'Cate Blanchett', r:'Two-Time Oscar-Winning Actress', e:'🎬'},
      {n:'Hugh Jackman', r:'Wolverine · Stage & Screen Star', e:'🎬'},
      {n:'Kylie Minogue', r:'Pop Princess of Australia', e:'🎵'},
      {n:'Don Bradman', r:'Greatest Cricketer of All Time', e:'🏏'},
      {n:'Nick Kyrgios', r:'Tennis Superstar', e:'🎾'},
    ]
  },

  { id:'new-zealand', name:'New Zealand', flag:'🇳🇿', capital:'Wellington', continent:'oceania',
    animal:'Kiwi', animalEmoji:'🥝', mastername:'Kiwi',
    flagColors:['#00247D','#FFFFFF','#CC142B'],
    intro:"Kia ora! I'm Kiwi the Kiwi Bird of New Zealand! A bird that doesn't fly but is still amazing!",
    funFact:"New Zealand was the first country in the world to give women the right to vote — back in 1893! 🗳️",
    questions:[
      {q:"New Zealand's national bird cannot fly and hunts at night using its remarkable sense of smell. What is this unusual bird called?", ch:["Kiwi","Emu","Penguin","Ostrich"], a:0, cat:"🐦 Nature"},
      {q:"The breathtaking Lord of the Rings and Hobbit films were almost entirely filmed in which country?", ch:["New Zealand","Australia","Canada","Iceland"], a:0, cat:"🎬 Culture"},
      {q:"New Zealand made history as the FIRST country in the world to give women the right to vote. In which year did this happen?", ch:["1893","1920","1945","1950"], a:0, cat:"🗳️ History"}
    ],
    celebs:[
      {n:'Peter Jackson', r:'Director of Lord of the Rings', e:'🎬'},
      {n:'Richie McCaw', r:'Greatest Rugby Player Ever', e:'🏉'},
      {n:'Edmund Hillary', r:'First to Climb Mount Everest', e:'🏔️'},
      {n:'Lorde', r:'Global Pop Sensation', e:'🎵'},
      {n:'Ernest Rutherford', r:'Father of Nuclear Physics', e:'🔬'},
      {n:'Russell Crowe', r:'Oscar-Winning Actor', e:'🎬'},
    ]
  },

  { id:'fiji', name:'Fiji', flag:'🇫🇯', capital:'Suva', continent:'oceania',
    animal:'Collared Lory', animalEmoji:'🦜', mastername:'Lory',
    flagColors:['#68BFE5','#FFFFFF','#68BFE5'],
    intro:"Bula! I'm Lory the Parrot of Fiji! Fiji is famous for the most beautiful beaches in the world!",
    funFact:"Fiji has over 300 islands and the sea around them is so clear you can see the bottom from a plane! 🏄",
    questions:[
      {q:"Fiji is a beautiful island nation made up of over 300 islands. In which vast ocean — the world's largest — is Fiji located?", ch:["Pacific Ocean","Indian Ocean","Atlantic Ocean","Arctic Ocean"], a:0, cat:"🌊 Geography"},
      {q:"What is the traditional Fijian greeting word — said with a big smile — meaning 'hello', 'welcome' and 'cheers'?", ch:["Bula","Aloha","Talofa","Haka"], a:0, cat:"🌺 Culture"},
      {q:"Fiji is known worldwide as a dream destination. What are the two activities Fiji is most famous for?", ch:["Beach holidays & scuba diving","Desert safaris","Mountain climbing","Polar expeditions"], a:0, cat:"🏝️ Culture"}
    ],
    celebs:[
      {n:'Waisale Serevi', r:'Greatest Sevens Rugby Player Ever', e:'🏉'},
      {n:'Nemani Nadolo', r:'Rugby Union Star', e:'🏉'},
      {n:'Ratu Sir Kamisese Mara', r:'First Prime Minister of Fiji', e:'👑'},
      {n:'Malakai Fekitoa', r:'Rugby Star · All Blacks', e:'🏉'},
      {n:'Sitiveni Rabuka', r:'Former Prime Minister & Military Leader', e:'🏛️'},
      {n:'Petero Civoniceva', r:'NRL Rugby League Legend', e:'🏉'},
    ]
  },

  { id:'papua-new-guinea', name:'Papua New Guinea', flag:'🇵🇬', capital:'Port Moresby', continent:'oceania',
    animal:'Bird of Paradise', animalEmoji:'🐦', mastername:'Paradise',
    flagColors:['#000000','#CE1126','#FCD116'],
    intro:"Gutpela de! I'm Paradise the Bird of Paradise! PNG is the most diverse place on Earth!",
    funFact:"Papua New Guinea has over 800 different languages — that's more languages than any other country in the world! 🗣️",
    questions:[
      {q:"Papua New Guinea's national bird — famous for its extraordinary, elaborate feathers used in traditional ceremonies — is called the...", ch:["Bird of Paradise","Kookaburra","Cassowary","Frigate Bird"], a:0, cat:"🐦 Nature"},
      {q:"Papua New Guinea holds an astonishing world record. How many different languages are spoken there — more than any other country?", ch:["Over 800","About 50","Around 200","More than 400"], a:0, cat:"🗣️ Culture"},
      {q:"Papua New Guinea is one of the world's most biodiverse places. What percentage of its land is covered by untouched rainforest?", ch:["Over 70%","About 20%","Less than 10%","About 50%"], a:0, cat:"🌿 Nature"}
    ],
    celebs:[
      {n:'Grand Chief Michael Somare', r:'Father of the Nation · First PM', e:'🏛️'},
      {n:'Toea Wisil', r:"Pacific Games Sprint Champion", e:'🏃'},
      {n:'Dika Toua', r:'First PNG Olympic Medalist', e:'🏋️'},
      {n:'Peter O\'Neill', r:'Prime Minister', e:'🏛️'},
      {n:'Karo Paxa', r:'Weightlifting Champion', e:'🏋️'},
      {n:'Steven Pirika Kamma', r:'Arts & Culture Pioneer', e:'🎭'},
    ]
  },

];
