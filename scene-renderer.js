/* scene-renderer.js
   Per-paragraph illustrated scenes for every story.
   Each scene entry: { bg, chars: [[id,left%,bottom%,em,anim|null]], props: [...same] }
   id values: character IDs from CHARS (characters.js) or plain emoji for decorative elements.
   anim keys: breathe | bounce | float | float-up | pulse | twinkle | sparkle |
              shake | ltr | rtl | sway | spin | shout | wand | grow | sneak
   For ltr/rtl the `left` value is ignored — the animation owns left.
*/

/* ── Background gradients ─────────────────────────────────────── */
const SCENE_BG = {
  forest:  'linear-gradient(180deg,#87CEEB 0%,#AED6F1 34%,#27AE60 34%,#1E8449 62%,#784212 62%,#5D3C1E 100%)',
  savanna: 'linear-gradient(180deg,#FFEAA0 0%,#FFB347 46%,#6DBF3E 46%,#3D8B1F 100%)',
  meadow:  'linear-gradient(180deg,#87CEEB 0%,#B0E0FF 42%,#52BE80 42%,#27AE60 100%)',
  sunset:  'linear-gradient(180deg,#FF7E5F 0%,#FEB47B 38%,#74B49B 38%,#2F855A 100%)',
  night:   'linear-gradient(180deg,#0D1B4B 0%,#1F3A7B 44%,#4A148C 44%,#2D1B69 100%)',
  magic:   'linear-gradient(180deg,#0B0C2A 0%,#1A237E 42%,#6A1B9A 42%,#4A0080 100%)',
  ballroom:'linear-gradient(180deg,#FFF8E1 0%,#FFECB3 38%,#FDD835 38%,#F9A825 100%)',
  palace:  'linear-gradient(180deg,#E8EAF6 0%,#C5CAE9 40%,#7986CB 40%,#3F51B5 100%)',
  hill:    'linear-gradient(180deg,#B3E5FC 0%,#81D4FA 40%,#A5D6A7 40%,#2E7D32 100%)',
  field:   'linear-gradient(180deg,#87CEEB 0%,#AAD9F7 48%,#C8A96B 48%,#7B5C2A 100%)',
  garden:  'linear-gradient(180deg,#87CEEB 0%,#B3E5FC 46%,#8B5E3C 46%,#5C3A1E 100%)',
  indoor:  'linear-gradient(180deg,#FFF9C4 0%,#FFF176 36%,#D4AC0D 36%,#8B6914 100%)',
  race:    'linear-gradient(180deg,#B3E5FC 0%,#81D4FA 40%,#C8E6C9 40%,#2E7D32 100%)',
  lesson:  'linear-gradient(135deg,#FFF3E0 0%,#FFE0B2 45%,#E1F5FE 45%,#B3E5FC 100%)',
  fireplace:'linear-gradient(180deg,#3E2723 0%,#5D4037 38%,#6D4C41 38%,#4E342E 100%)',
  cloud:   'linear-gradient(180deg,#E3F2FD 0%,#BBDEFB 100%)',
};

/* ── Animation CSS map ────────────────────────────────────────── */
const ANIM_CSS = {
  breathe:  'anim-breathe 3s ease-in-out infinite',
  bounce:   'anim-bounce 1.4s ease-in-out infinite',
  float:    'anim-float 2.5s ease-in-out infinite',
  'float-up':'anim-float-up 2.5s ease-in-out infinite',
  pulse:    'anim-pulse 2s ease-in-out infinite',
  twinkle:  'anim-twinkle 2s ease-in-out infinite',
  sparkle:  'anim-sparkle 2.2s ease-in-out infinite',
  shake:    'anim-shake 0.55s ease-in-out infinite',
  ltr:      'anim-ltr 4.5s linear infinite',
  rtl:      'anim-rtl 4.5s linear infinite',
  sway:     'anim-sway 3s ease-in-out infinite',
  spin:     'anim-sun-spin 10s linear infinite',
  shout:    'anim-shout 1.6s ease-in-out infinite',
  wand:     'anim-wand 1.5s ease-in-out infinite',
  grow:     'anim-sprout-grow 6s ease-in-out infinite',
  sneak:    'anim-wolf-sneak 6s ease-in-out infinite',
  'star-blink':'anim-star-blink 2.3s ease-in-out infinite',
};

/* ── Per-story per-paragraph scenes ──────────────────────────── */
// Each entry: { bg, chars|props: [[id, left%, bottom%, sizeEm, anim?]] }
// id: character key from CHARS, or plain emoji for decorative elements
// ltr/rtl: left% is ignored; animation drives it.
const SCENES = {

  /* ======================================================
     STORY 1 — The Lion and the Mouse
     ====================================================== */
  1: [
    // 0: lion sleeping, mouse playing nearby
    { bg:'forest',
      chars:[['lion',48,26,3.5,'breathe'],['mouse',22,26,1.4,'bounce']],
      props:[['tree',5,34,2.5,null],['tree',80,36,2.2,null],['💤',61,52,0.9,'float-up'],['🌾',34,27,0.8,'sway']] },

    // 1: lion wakes angry, paw catches mouse
    { bg:'forest',
      chars:[['lion-angry',46,26,3.2,'shake'],['mouse',56,34,1.3,'shake']],
      props:[['tree',5,34,2.5,null],['⚡',38,54,1.1,'sparkle'],['💢',58,54,0.9,'float-up']] },

    // 2: mouse begging, lion laughing
    { bg:'forest',
      chars:[['lion',50,26,3.2,'pulse'],['mouse',38,38,1.3,null]],
      props:[['tree',5,34,2.5,null],['💬',28,48,1.4,null],['😂',55,48,1,'float-up']] },

    // 3: lion lets mouse go free
    { bg:'forest',
      chars:[['lion',52,26,3.2,null],['mouse',0,26,1.4,'ltr']],
      props:[['tree',5,34,2.5,null],['❤️',48,52,1.1,'float-up'],['🌟',65,38,0.9,'twinkle']] },

    // 4: lion trapped in hunter's net
    { bg:'forest',
      chars:[['lion',46,26,3.2,'shake'],['🕸️',46,30,3.5,'pulse']],
      props:[['tree',5,34,2.5,null],['tree',80,36,2,null],['😰',52,55,1,'float-up']] },

    // 5: mouse hears roar, runs toward lion
    { bg:'forest',
      chars:[['mouse',0,27,1.5,'ltr'],['lion',68,26,2.8,'shake']],
      props:[['tree',5,34,2,null],['📢',54,44,1,'pulse'],['💨',24,34,0.8,'ltr']] },

    // 6: mouse chewing the ropes
    { bg:'forest',
      chars:[['mouse',52,38,1.7,'bounce'],['lion',46,26,3.2,'breathe']],
      props:[['tree',5,34,2.5,null],['✂️',60,40,1,'pulse'],['🌟',35,48,0.8,'sparkle']] },

    // 7: lion free — thanks mouse
    { bg:'meadow',
      chars:[['lion',46,26,3.5,'bounce'],['mouse',58,44,1.6,'float']],
      props:[['🌸',22,27,0.9,'sway'],['❤️',50,54,1.2,'sparkle'],['✨',33,46,0.8,'twinkle']] },

    // 8: mouse proud — "I told you!"
    { bg:'meadow',
      chars:[['mouse',44,30,2.6,'bounce'],['lion',68,26,2.8,null]],
      props:[['⭐',28,54,1,'twinkle'],['✨',55,52,0.8,'twinkle'],['🌸',18,28,0.8,'sway']] },

    // 9: best friends together
    { bg:'sunset',
      chars:[['lion',42,26,3.2,'breathe'],['mouse',55,42,1.5,'float']],
      props:[['🌻',18,28,1.2,'sway'],['🌸',74,28,1,'sway'],['❤️',46,54,1.2,'sparkle'],['sun',82,65,1.5,'pulse']] },

    // 10: lesson page
    { bg:'lesson',
      chars:[['⭐',48,32,4,'pulse']],
      props:[['lion',16,25,1.8,null],['mouse',76,25,1.5,null],['✨',28,54,1,'sparkle'],['💫',65,52,0.9,'spin'],['❤️',48,56,1,'float-up']] },
  ],

  /* ======================================================
     STORY 2 — The Tortoise and the Hare
     ====================================================== */
  2: [
    // 0: proud hare taunting slow tortoise
    { bg:'meadow',
      chars:[['hare',55,28,2.8,'bounce'],['tortoise',22,27,1.9,null]],
      props:[['tree',5,35,2.2,null],['🌼',72,28,0.8,'sway'],['😤',60,50,0.9,'float-up']] },

    // 1: hare laughs "You are so slow!"
    { bg:'meadow',
      chars:[['hare',52,28,2.8,'pulse'],['tortoise',28,27,1.9,null]],
      props:[['💬',58,48,1.5,null],['😢',24,44,0.9,'float-up'],['tree',5,35,2,null]] },

    // 2: tortoise accepts challenge
    { bg:'hill',
      chars:[['tortoise',42,28,2,'pulse'],['hare',58,28,2.6,null]],
      props:[['⛰️',48,28,3.5,null],['🏁',82,38,1.4,null],['💪',42,48,0.9,'float-up']] },

    // 3: all animals gather, fox blows whistle
    { bg:'race',
      chars:[['🦊',50,28,2.2,'shout'],['hare',25,28,2.2,null],['tortoise',35,27,1.8,null]],
      props:[['🐸',70,28,1.2,null],['crow',80,30,1,null],['🐿️',15,28,1.1,null],['🏁',90,36,1.5,null]] },

    // 4: hare zooms way ahead
    { bg:'race',
      chars:[['hare',0,28,2.6,'ltr'],['tortoise',14,27,1.8,null]],
      props:[['💨',16,34,1,'ltr'],['💨',22,36,0.8,'ltr'],['🏁',88,36,1.4,null]] },

    // 5: hare decides to rest
    { bg:'meadow',
      chars:[['hare',48,28,2.8,'breathe'],['tree',50,30,3,null]],
      props:[['😪',52,50,1,'float-up'],['tortoise',10,27,1.5,null],['💤',54,52,0.8,'float-up']] },

    // 6: hare fast asleep under tree
    { bg:'meadow',
      chars:[['hare',48,28,3,'breathe']],
      props:[['tree',50,30,3,null],['💤',56,52,1,'float-up'],['💤',60,58,0.7,'float-up'],['tortoise',80,27,1.3,null]] },

    // 7: tortoise plods on steadily
    { bg:'race',
      chars:[['tortoise',0,27,2,'ltr']],
      props:[['tree',5,35,2,null],['🌸',60,28,0.8,'sway'],['hare',72,28,2,'breathe'],['🏁',90,36,1.5,null]] },

    // 8: hare wakes up confused
    { bg:'meadow',
      chars:[['hare',48,28,2.8,'shake']],
      props:[['tree',50,30,3,null],['❓',58,52,1,'float-up'],['❓',44,52,0.8,'float-up']] },

    // 9: tortoise crosses finish line
    { bg:'race',
      chars:[['tortoise',78,28,2.2,'bounce'],['hare',0,28,2.6,'ltr']],
      props:[['🏁',88,36,1.5,null],['🎉',72,50,1.2,'sparkle'],['⭐',82,48,0.9,'twinkle']] },

    // 10: tortoise wins! animals cheer
    { bg:'meadow',
      chars:[['tortoise',46,28,2.5,'bounce'],['🏆',50,46,1.8,'pulse']],
      props:[['🎉',28,50,1.2,'sparkle'],['🎊',68,50,1,'sparkle'],['⭐',48,55,1,'float-up'],['🦊',24,28,1.4,'bounce'],['🐸',70,28,1.2,'bounce']] },

    // 11: hare hangs head in shame
    { bg:'meadow',
      chars:[['hare',48,28,2.8,'breathe']],
      props:[['😞',48,50,1.2,'float-up'],['🏆',72,36,1.4,null],['tortoise',72,28,1.8,null]] },

    // 12: lesson
    { bg:'lesson',
      chars:[['⭐',48,32,4,'pulse']],
      props:[['tortoise',18,25,2,null],['🏁',72,25,1.6,null],['✨',30,54,1,'sparkle'],['💫',62,52,0.9,'twinkle']] },
  ],

  /* ======================================================
     STORY 3 — The Clever Crow
     ====================================================== */
  3: [
    // 0: crow flying around searching for water (args swapped in original)
    { bg:'cloud',
      chars:[['crow',0,50,'ltr',2]],
      props:[['sun',80,68,1.6,'spin'],['cloud',28,56,1.2,null],['🌡️',52,54,1.2,'pulse']] },

    // 1: crow very thirsty, tired wings
    { bg:'cloud',
      chars:[['crow',48,50,2.5,'breathe']],
      props:[['sun',80,68,1.6,'spin'],['💧',40,58,0.8,'float-up'],['💧',56,60,0.7,'float-up'],['😰',50,62,0.9,'float-up']] },

    // 2: crow spots the pot!
    { bg:'field',
      chars:[['crow',35,54,2.4,'bounce']],
      props:[['pot',66,28,2.5,null],['sun',82,66,1.5,'spin'],['💡',40,62,1,'sparkle']] },

    // 3: crow flies down to look in pot
    { bg:'field',
      chars:[['crow',56,40,2.2,'breathe'],['pot',56,26,2.5,null]],
      props:[['sun',82,66,1.5,'spin'],['💧',58,36,0.8,null]] },

    // 4: water deep at bottom — crow sad
    { bg:'field',
      chars:[['crow',56,40,2.2,null],['pot',56,26,2.5,null]],
      props:[['😟',52,52,0.9,'float-up'],['💧',60,30,0.7,null],['sun',82,66,1.4,'spin']] },

    // 5: crow tries to reach beak but can't
    { bg:'field',
      chars:[['crow',54,38,2.5,'pulse'],['pot',56,26,2.5,null]],
      props:[['😫',50,52,0.9,'float-up'],['❌',60,40,0.8,'sparkle']] },

    // 6: crow sits and thinks — pebbles around
    { bg:'field',
      chars:[['crow',44,30,2.5,'breathe']],
      props:[['pot',66,26,2.5,null],['🪨',28,26,0.7,null],['🪨',34,26,0.6,null],['🪨',20,26,0.8,null],['💭',48,46,1.2,'pulse']] },

    // 7: "I have an idea!" crow excited
    { bg:'field',
      chars:[['crow',44,30,2.5,'bounce']],
      props:[['💡',48,50,1.4,'sparkle'],['✨',36,48,0.8,'twinkle'],['✨',58,48,0.7,'twinkle'],['pot',70,26,2.2,null]] },

    // 8: crow picks up first pebble, drops it in
    { bg:'field',
      chars:[['crow',52,38,2.2,null],['pot',54,26,2.5,null]],
      props:[['⚫',52,30,0.7,'float-up'],['🪨',28,26,0.7,null],['🪨',34,26,0.6,null],['💧',55,28,0.5,null]] },

    // 9: many pebbles dropping — plop plop plop
    { bg:'field',
      chars:[['crow',52,38,2.2,'bounce'],['pot',54,26,2.5,null]],
      props:[['⚫',51,38,0.7,'float-up'],['⚫',54,40,0.6,'float-up'],['⚫',49,36,0.65,'float-up'],['🪨',30,26,0.5,null]] },

    // 10: water rising higher with each pebble
    { bg:'field',
      chars:[['crow',52,34,2.2,'pulse'],['pot',54,26,2.5,null]],
      props:[['💧',55,34,0.9,'pulse'],['⬆️',44,38,0.8,'bounce'],['⚫',52,30,0.6,null],['⚫',55,28,0.5,null]] },

    // 11: crow drinks happily!
    { bg:'field',
      chars:[['crow',52,38,2.5,'bounce'],['pot',54,26,2.5,null]],
      props:[['💧',50,38,0.8,'float-up'],['sun',80,66,1.5,'spin'],['✨',40,48,0.8,'sparkle'],['😄',48,50,0.9,'float-up']] },

    // 12: lesson
    { bg:'lesson',
      chars:[['⭐',48,32,4,'pulse']],
      props:[['crow',18,25,2,null],['pot',74,25,2,null],['💡',45,52,1.2,'sparkle'],['✨',30,50,0.8,'twinkle']] },
  ],

  /* ======================================================
     STORY 4 — Cinderella
     ====================================================== */
  4: [
    // 0: Cinderella in rags, stepmother + stepsisters mean to her
    { bg:'indoor',
      chars:[['cinderella',36,26,2.8,null],['👩',60,28,2.5,null],['👩',72,28,2.2,null]],
      props:[['🧹',34,34,1.2,null],['😢',32,48,0.8,'float-up'],['😡',65,46,0.7,'float-up']] },

    // 1: Cinderella never complains, stays cheerful
    { bg:'indoor',
      chars:[['cinderella',46,28,2.8,'breathe']],
      props:[['🧹',44,34,1.2,null],['🌸',58,30,0.9,'sway'],['💛',50,50,1,'float-up'],['sun',76,60,1.3,'pulse']] },

    // 2: royal invitation arrives
    { bg:'palace',
      chars:[['cinderella',44,28,2.8,'pulse']],
      props:[['📜',52,38,1.8,'bounce'],['👑',50,54,1.2,'sparkle'],['✨',35,50,0.8,'twinkle'],['✨',62,50,0.7,'twinkle']] },

    // 3: stepsisters leaving with dresses, Cinderella can't go
    { bg:'indoor',
      chars:[['👩',55,28,2.2,'ltr'],['👩',65,28,2,null],['cinderella',24,28,2.5,null]],
      props:[['👗',58,38,1.2,null],['😢',24,48,0.9,'float-up'],['🛍️',68,38,1.1,null]] },

    // 4: Cinderella crying by the fireplace
    { bg:'fireplace',
      chars:[['cinderella',46,28,2.8,'breathe']],
      props:[['fire',50,26,1.8,'pulse'],['😭',44,48,1,'float-up'],['💧',40,40,0.7,'float-up'],['💧',52,42,0.6,'float-up']] },

    // 5: fairy godmother appears magically
    { bg:'magic',
      chars:[['fairy',28,28,3,'float'],['cinderella',62,28,2.6,'pulse']],
      props:[['✨',42,52,1.2,'sparkle'],['✨',50,54,0.9,'twinkle'],['💫',36,48,1,'spin'],['⭐',55,50,0.8,'twinkle']] },

    // 6: magic wand transforms pumpkin → carriage, mice → horses
    { bg:'magic',
      chars:[['fairy',28,28,2.8,'float'],['🎃',56,26,2.5,'pulse']],
      props:[['🪄',34,42,1.5,'wand'],['✨',42,52,1.2,'sparkle'],['✨',60,48,0.9,'sparkle'],['💫',50,55,1,'spin']] },

    // 7: Cinderella in beautiful ball gown + glass slippers
    { bg:'magic',
      chars:[['princess',46,28,3.2,'pulse']],
      props:[['✨',32,50,1.2,'sparkle'],['✨',62,50,0.9,'twinkle'],['slipper',54,34,1.1,'bounce'],['⭐',44,52,0.8,'float-up']] },

    // 8: warning — magic ends at midnight
    { bg:'night',
      chars:[['princess',36,28,2.8,null],['fairy',66,28,2.5,'float']],
      props:[['🕛',50,40,2,'pulse'],['⚠️',50,54,1,'bounce'],['✨',42,48,0.7,'twinkle']] },

    // 9: ball — Prince dances only with Cinderella
    { bg:'ballroom',
      chars:[['prince',40,28,3,'breathe'],['princess',52,28,3,'breathe']],
      props:[['🎶',28,50,1,'float-up'],['🎵',68,50,0.9,'float-up'],['❤️',46,52,1.2,'sparkle'],['🕯️',18,32,1.2,'pulse'],['🕯️',76,32,1.2,'pulse']] },

    // 10: clock strikes midnight, Cinderella runs
    { bg:'palace',
      chars:[['princess',0,28,2.8,'ltr']],
      props:[['🕛',72,44,2,'shake'],['✨',36,48,1,'float-up'],['✨',52,50,0.8,'float-up']] },

    // 11: glass slipper left on palace steps
    { bg:'palace',
      chars:[['slipper',46,30,3,'float']],
      props:[['⭐',32,48,1,'twinkle'],['⭐',62,46,0.9,'twinkle'],['✨',46,50,0.8,'sparkle'],['🏰',14,28,2,null]] },

    // 12: Prince searches with the slipper
    { bg:'palace',
      chars:[['prince',42,28,3,'breathe'],['slipper',55,36,1.5,'bounce']],
      props:[['🏰',14,28,2,null],['🗺️',66,36,1.2,null],['⭐',46,52,0.8,'twinkle']] },

    // 13: stepsisters fail — too small!
    { bg:'indoor',
      chars:[['👩',36,28,2.5,'shake'],['👩',60,28,2.3,'shake']],
      props:[['slipper',46,32,1.4,null],['❌',36,46,0.9,'float-up'],['❌',60,46,0.9,'float-up']] },

    // 14: Cinderella tries — perfect fit!
    { bg:'palace',
      chars:[['princess',40,28,3,'pulse'],['prince',60,28,3,'bounce']],
      props:[['slipper',44,34,1.5,'sparkle'],['❤️',50,52,1.2,'float-up'],['✨',30,50,0.9,'sparkle'],['✨',68,50,0.8,'twinkle']] },

    // 15: happily ever after
    { bg:'magic',
      chars:[['prince',38,28,3,'breathe'],['princess',54,28,3,'breathe']],
      props:[['🏰',14,28,2.5,null],['❤️',46,52,1.3,'sparkle'],['⭐',28,50,0.9,'twinkle'],['⭐',66,50,0.8,'twinkle'],['✨',46,55,1,'float-up']] },
  ],

  /* ======================================================
     STORY 5 — The Boy Who Cried Wolf
     ====================================================== */
  5: [
    // 0: shepherd boy watching sheep on hillside
    { bg:'hill',
      chars:[['boy',44,40,2.6,null],['sheep',28,28,1.6,null],['sheep',60,28,1.5,null]],
      props:[['⛰️',46,28,3.5,null],['tree',10,35,2.2,null],['sun',82,66,1.4,'spin'],['🌸',72,28,0.8,'sway']] },

    // 1: bored boy planning trick
    { bg:'hill',
      chars:[['boy',48,42,2.8,'breathe']],
      props:[['💭',52,54,1.4,'pulse'],['😏',52,56,0.9,'float-up'],['sheep',28,28,1.5,null],['⛰️',48,28,3.2,null]] },

    // 2: boy shouts "Wolf! Wolf!"
    { bg:'hill',
      chars:[['boy',46,42,2.8,'shout'],['📢',54,46,1.4,'pulse']],
      props:[['⛰️',46,28,3.2,null],['sheep',26,28,1.5,null],['sheep',62,28,1.3,null]] },

    // 3: villagers running up with sticks
    { bg:'hill',
      chars:[['👨',0,28,2,'ltr'],['👩',0,28,2.2,'ltr'],['👴',0,28,1.8,'ltr']],
      props:[['🪵',12,34,0.8,'ltr'],['boy',72,42,2,'shout'],['⛰️',48,28,3,null]] },

    // 4: no wolf — boy laughing, villagers angry
    { bg:'hill',
      chars:[['boy',44,42,2.8,'bounce'],['👨',62,28,2,'shake']],
      props:[['😂',46,55,1.1,'float-up'],['😡',66,46,0.9,'float-up'],['sheep',22,28,1.5,null]] },

    // 5: angry villagers walk back down
    { bg:'hill',
      chars:[['👨',0,28,2,'rtl'],['👩',0,28,2,'rtl']],
      props:[['😤',28,46,0.9,'float-up'],['boy',70,42,2,'breathe'],['⛰️',48,28,3,null]] },

    // 6: boy cries wolf again
    { bg:'hill',
      chars:[['boy',46,42,2.8,'shout'],['📢',54,46,1.5,'pulse']],
      props:[['⛰️',46,28,3.2,null],['💨',56,42,0.8,'ltr'],['sheep',24,28,1.5,null]] },

    // 7: villagers come again — no wolf — boy laughs again
    { bg:'hill',
      chars:[['👨',52,28,2.2,'shake'],['boy',42,42,2.8,'bounce']],
      props:[['😂',42,55,1,'float-up'],['😡',56,46,1,'float-up'],['sheep',22,28,1.4,null]] },

    // 8: villagers warn "Don't cry wolf unless really there!"
    { bg:'hill',
      chars:[['👨',52,28,2.5,'shout'],['boy',34,42,2.5,'breathe']],
      props:[['👆',56,46,1,'bounce'],['💬',52,48,1.5,null],['sheep',18,28,1.4,null]] },

    // 9: REAL wolf appears from forest!
    { bg:'forest',
      chars:[['wolf',0,26,3,'sneak'],['sheep',68,27,1.6,'shake'],['sheep',78,27,1.4,'shake']],
      props:[['tree',5,36,2.5,null],['⚡',56,52,1.1,'sparkle'],['😱',70,46,1,'float-up']] },

    // 10: boy screams desperately — REAL wolf!
    { bg:'hill',
      chars:[['boy',44,42,3,'shout'],['wolf',72,28,2.5,null]],
      props:[['📢',54,48,1.6,'pulse'],['😱',44,56,1,'float-up'],['sheep',0,27,1.5,'rtl'],['sheep',8,27,1.3,'rtl']] },

    // 11: villagers at home — don't believe him
    { bg:'indoor',
      chars:[['👨',38,28,2.5,'breathe'],['👩',58,28,2.3,null]],
      props:[['🙉',40,46,1,'float-up'],['😴',62,44,0.9,'float-up'],['boy',86,42,1.5,'shout']] },

    // 12: wolf chases sheep, boy alone crying
    { bg:'hill',
      chars:[['😢',46,42,2.8,'breathe'],['wolf',0,26,2.8,'ltr']],
      props:[['sheep',0,27,1.5,'ltr'],['sheep',8,27,1.3,'ltr'],['💧',44,55,0.7,'float-up'],['🌑',82,66,1.5,null]] },

    // 13: lesson
    { bg:'lesson',
      chars:[['⭐',48,32,4,'pulse']],
      props:[['boy',20,25,1.8,null],['wolf',72,26,1.8,null],['✨',32,52,0.9,'sparkle'],['💡',48,54,1.1,'sparkle']] },
  ],

  /* ======================================================
     STORY 6 — The Magic Seed
     ====================================================== */
  6: [
    // 0: Priya finds a small seed on the ground
    { bg:'garden',
      chars:[['girl',44,28,2.8,'breathe']],
      props:[['sprout',50,26,1.2,'bounce'],['sun',80,66,1.5,'spin'],['🌸',24,28,0.8,'sway'],['crow',66,44,1,'float']] },

    // 1: she asks her grandmother
    { bg:'garden',
      chars:[['girl',36,28,2.5,null],['grandmother',58,28,2.5,'breathe']],
      props:[['sprout',46,26,1.2,null],['💬',56,46,1.4,null],['sun',82,66,1.4,'spin']] },

    // 2: grandmother explains — "It is a magic seed!"
    { bg:'garden',
      chars:[['grandmother',42,28,2.8,'pulse'],['girl',62,28,2.4,'bounce']],
      props:[['🌟',44,48,1.2,'sparkle'],['✨',34,46,0.8,'twinkle'],['✨',58,46,0.7,'twinkle'],['sprout',48,28,1,null]] },

    // 3: Priya digs and plants the seed
    { bg:'garden',
      chars:[['girl',44,28,2.8,'bounce']],
      props:[['🪣',54,36,1.2,null],['⛏️',38,36,1.1,null],['sprout',48,26,0.8,null],['sun',80,66,1.4,'spin']] },

    // 4: next morning — nothing, just soil
    { bg:'garden',
      chars:[['girl',44,30,2.8,'breathe']],
      props:[['😕',44,50,0.9,'float-up'],['🪣',56,34,1.2,null],['sun',82,66,1.4,'spin'],['sprout',64,26,0.7,null]] },

    // 5: "Where is my plant?" — sad Priya
    { bg:'garden',
      chars:[['girl',44,28,2.8,null]],
      props:[['💬',48,48,1.5,null],['😢',42,50,0.8,'float-up'],['cloud',28,58,1,'pulse'],['🪣',60,34,1.1,null]] },

    // 6: grandmother says "Seeds need time, come back tomorrow"
    { bg:'garden',
      chars:[['grandmother',42,28,2.8,'breathe'],['girl',62,28,2.4,null]],
      props:[['💬',40,48,1.5,null],['⏳',50,36,1.2,'pulse'],['sun',82,66,1.3,'spin']] },

    // 7: next day — still nothing
    { bg:'garden',
      chars:[['girl',44,28,2.8,'shake']],
      props:[['🪣',56,34,1.2,null],['❓',44,50,0.9,'float-up'],['😞',48,52,0.8,'float-up'],['cloud',32,60,1.2,null]] },

    // 8: almost gave up — grandmother "Keep watering, keep believing"
    { bg:'garden',
      chars:[['grandmother',40,28,2.8,'breathe'],['girl',62,28,2.4,'breathe']],
      props:[['💧',50,36,0.8,'float-up'],['💧',54,38,0.7,'float-up'],['💪',62,48,0.8,'float-up'],['sprout',22,26,0.8,'pulse']] },

    // 9: tiny green shoot appears!
    { bg:'garden',
      chars:[['girl',38,28,2.8,'bounce'],['sprout',56,28,1.8,'bounce']],
      props:[['🌟',56,44,1.1,'sparkle'],['✨',44,46,0.8,'twinkle'],['sun',82,66,1.4,'spin'],['💧',34,34,0.8,'float-up']] },

    // 10: shoot grows bigger every day
    { bg:'garden',
      chars:[['girl',36,28,2.5,null],['sprout',56,26,2.5,'sway']],
      props:[['🪣',28,34,1.2,null],['💧',30,38,0.8,'float-up'],['sun',82,66,1.4,'spin'],['🦋',62,44,1,'float']] },

    // 11: beautiful sunflower — tall and golden!
    { bg:'garden',
      chars:[['sunflower',50,26,4,'sway']],
      props:[['girl',28,28,2.2,'bounce'],['grandmother',72,28,2,'breathe'],['🦋',50,52,1.1,'float'],['sun',80,66,1.5,'spin'],['🌸',18,28,0.8,'sway'],['🌼',76,28,0.8,'sway']] },

    // 12: "I did it!" Priya celebrating
    { bg:'garden',
      chars:[['girl',42,28,3,'bounce']],
      props:[['sunflower',60,26,3,'sway'],['🎉',36,50,1.2,'sparkle'],['⭐',48,52,1,'float-up'],['✨',65,50,0.8,'twinkle'],['❤️',44,54,0.9,'float-up']] },

    // 13: grandmother smiles — "you learned patience"
    { bg:'garden',
      chars:[['grandmother',40,28,3,'pulse'],['girl',60,28,2.6,'bounce']],
      props:[['sunflower',72,26,2.5,'sway'],['💛',50,50,1.1,'float-up'],['✨',34,48,0.8,'twinkle'],['🌸',20,28,0.8,'sway']] },

    // 14: lesson
    { bg:'lesson',
      chars:[['⭐',48,32,4,'pulse']],
      props:[['sprout',20,26,1.2,null],['sunflower',74,26,2.5,'sway'],['✨',32,52,0.9,'sparkle'],['💫',62,50,0.9,'spin'],['❤️',48,54,1,'float-up']] },
  ],
};

/* ── Renderer ────────────────────────────────────────────────── */
function renderBookScene(storyId, paraIdx, height) {
  height = height || 340;
  const storyScenes = SCENES[storyId];

  // Graceful fallback if scene data missing
  const scene = (storyScenes && storyScenes[paraIdx])
    ? storyScenes[paraIdx]
    : { bg: 'meadow', chars: [], props: [] };

  const bg = SCENE_BG[scene.bg] || SCENE_BG.meadow;
  const chars = scene.chars || [];
  const props  = scene.props || [];

  let html = `<div class="book-scene" style="height:${height}px;background:${bg};" aria-hidden="true">`;

  // Render props first (behind characters)
  props.forEach((el, i) => { html += buildElement(el, i * 0.1); });

  // Render characters on top
  chars.forEach((el, i) => { html += buildElement(el, 0); });

  html += '</div>';
  return html;
}

function buildElement(el, delayS) {
  // el = [id, left%, bottom%, sizeEm, anim?]
  // Some entries might be in the wrong order from scene data — handle both
  const [id, rawLeft, rawBottom, rawSize, rawAnim] = el;

  // Detect transposed [id, left%, bottom%, anim, size] entries
  let left   = parseFloat(rawLeft);
  let bottom = parseFloat(rawBottom);
  let size   = parseFloat(rawSize);
  let anim   = rawAnim || null;

  // If size looks like a string animation name, slots were swapped
  if (typeof rawSize === 'string' && isNaN(size)) {
    anim   = rawSize;
    size   = parseFloat(rawAnim) || 2;
  }

  if (isNaN(left))   left   = 50;
  if (isNaN(bottom)) bottom = 25;
  if (isNaN(size))   size   = 1.5;

  // ltr/rtl animations own the left position
  if (anim === 'ltr') left = -12;
  if (anim === 'rtl') left = 112;

  const animCSS = anim && ANIM_CSS[anim] ? ANIM_CSS[anim] : '';
  const delay   = delayS ? `animation-delay:${delayS.toFixed(2)}s;` : '';

  // SVG character rendering
  const svgContent = (typeof getChar === 'function') ? getChar(id) : '';
  if (svgContent) {
    const px = Math.round(size * 46);
    return `<div class="scene-char" style="left:${left}%;bottom:${bottom}%;width:${px}px;${animCSS ? 'animation:' + animCSS + ';' : ''}${delay}">${svgContent}</div>`;
  }

  // Fallback: emoji span for decorative elements
  return `<span class="anim-e" style="left:${left}%;bottom:${bottom}%;font-size:${size}em;${animCSS ? 'animation:' + animCSS + ';' : ''}${delay}">${id}</span>`;
}
