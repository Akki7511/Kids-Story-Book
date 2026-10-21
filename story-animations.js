/* story-animations.js
   Returns animated scene HTML for each story.
   getStoryAnimation(storyId, isHero) → HTML string
*/

function getStoryAnimation(storyId, isHero) {
  const h  = isHero ? 230 : 170;   // scene height px
  const s  = isHero ? 1.55 : 1;    // emoji scale multiplier
  const br = isHero ? '24px' : '16px 16px 0 0'; // border-radius

  const builders = {
    1: sceneLionMouse,
    2: sceneTortoiseHare,
    3: sceneCrowPot,
    4: sceneCinderella,
    5: sceneBoyWolf,
    6: sceneMagicSeed
  };

  const fn = builders[storyId] || sceneDefault;
  return fn(h, s, br);
}

/* =========================================================
   STORY 1 — The Lion and the Mouse
   Savanna: sleeping lion + floating ZZZ + scurrying mouse
   ========================================================= */
function sceneLionMouse(h, s, br) {
  const eS  = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#FFEAA0 0%,#FFB347 46%,#6DBF3E 46%,#3D8B1F 100%);">

  <!-- Sun -->
  <span class="anim-e" style="top:7%;left:10%;font-size:${eS(1.5)};
    animation:anim-pulse 4s ease-in-out infinite;">☀️</span>

  <!-- Drifting cloud -->
  <span class="anim-e" style="top:10%;left:-10%;font-size:${eS(1)};opacity:0.75;
    animation:anim-cloud-drift 20s linear infinite;">☁️</span>

  <!-- Left palm tree -->
  <span class="anim-e" style="bottom:29%;left:4%;font-size:${eS(2.2)};">🌴</span>

  <!-- Right bush -->
  <span class="anim-e" style="bottom:29%;right:5%;font-size:${eS(1.8)};">🌿</span>

  <!-- Sleeping Lion (center) -->
  <span class="anim-e" style="bottom:24%;left:36%;font-size:${eS(3)};
    animation:anim-breathe 3s ease-in-out infinite;">🦁</span>

  <!-- ZZZ bubble 1 -->
  <span class="anim-e" style="bottom:56%;left:54%;font-size:${eS(0.95)};
    animation:anim-float-up 2.4s ease-in-out infinite;">💤</span>

  <!-- ZZZ bubble 2 (delayed) -->
  <span class="anim-e" style="bottom:62%;left:59%;font-size:${eS(0.7)};
    animation:anim-float-up 2.4s ease-in-out infinite 1.2s;">💤</span>

  <!-- Running mouse -->
  <span class="anim-e" style="bottom:24%;left:-12%;font-size:${eS(1.3)};
    animation:anim-ltr 3.8s linear infinite;">🐭</span>

  <!-- Grass tufts -->
  <span class="anim-e" style="bottom:27%;left:18%;font-size:${eS(0.75)};opacity:0.85;
    animation:anim-grass-wave 3s ease-in-out infinite;">🌾</span>
  <span class="anim-e" style="bottom:27%;left:62%;font-size:${eS(0.65)};opacity:0.85;
    animation:anim-grass-wave 3s ease-in-out infinite 1.5s;">🌾</span>

  <!-- Stars (decorative) -->
  <span class="anim-e" style="top:12%;right:18%;font-size:${eS(0.6)};
    animation:anim-twinkle 2.5s ease-in-out infinite;">⭐</span>
  <span class="anim-e" style="top:18%;right:30%;font-size:${eS(0.5)};
    animation:anim-twinkle 2.5s ease-in-out infinite 1.1s;">✨</span>
</div>`;
}

/* =========================================================
   STORY 2 — The Tortoise and the Hare
   Meadow: hare sprints then sleeps; tortoise wins
   ========================================================= */
function sceneTortoiseHare(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#A8D8EA 0%,#87CEEB 42%,#78D24B 42%,#3E9A1F 100%);">

  <!-- Clouds -->
  <span class="anim-e" style="top:8%;left:-10%;font-size:${eS(1.1)};opacity:0.8;
    animation:anim-cloud-drift 22s linear infinite;">☁️</span>
  <span class="anim-e" style="top:5%;left:-10%;font-size:${eS(0.85)};opacity:0.65;
    animation:anim-cloud-drift 28s linear infinite 6s;">☁️</span>

  <!-- Finish flag (right) -->
  <span class="anim-e" style="bottom:29%;right:6%;font-size:${eS(1.8)};">🏁</span>

  <!-- Left tree -->
  <span class="anim-e" style="bottom:29%;left:3%;font-size:${eS(2)};">🌳</span>

  <!-- Hare: sprints to middle then flops to sleep -->
  <span class="anim-e" style="bottom:27%;left:-5%;font-size:${eS(1.9)};
    animation:anim-hare 6s ease-in-out infinite;">🐇</span>

  <!-- ZZZ over hare (appears after hare stops) -->
  <span class="anim-e" style="bottom:55%;left:60%;font-size:${eS(0.85)};
    animation:anim-float-up 2s ease-in-out infinite 2s;">💤</span>

  <!-- Tortoise: slow steady plod -->
  <span class="anim-e" style="bottom:27%;left:-5%;font-size:${eS(1.6)};
    animation:anim-tortoise 7.5s linear infinite;">🐢</span>

  <!-- Sun -->
  <span class="anim-e" style="top:8%;right:10%;font-size:${eS(1.4)};
    animation:anim-sun-spin 12s linear infinite;">☀️</span>

  <!-- Grass -->
  <span class="anim-e" style="bottom:28%;left:25%;font-size:${eS(0.7)};opacity:0.8;
    animation:anim-grass-wave 2.8s ease-in-out infinite;">🌿</span>
  <span class="anim-e" style="bottom:28%;left:50%;font-size:${eS(0.65)};opacity:0.8;
    animation:anim-grass-wave 2.8s ease-in-out infinite 1.4s;">🌿</span>

  <!-- Flowers -->
  <span class="anim-e" style="bottom:27%;left:35%;font-size:${eS(0.7)};
    animation:anim-float 3s ease-in-out infinite;">🌸</span>
  <span class="anim-e" style="bottom:27%;left:72%;font-size:${eS(0.65)};
    animation:anim-float 3s ease-in-out infinite 1.5s;">🌼</span>
</div>`;
}

/* =========================================================
   STORY 3 — The Clever Crow
   Open field: crow flies to pot, drops pebbles, water rises
   ========================================================= */
function sceneCrowPot(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  const pw = Math.round(36 * s);
  const ph = Math.round(30 * s);
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#87CEEB 0%,#AAD9F7 48%,#C8A96B 48%,#8B6914 100%);">

  <!-- Spinning sun -->
  <span class="anim-e" style="top:7%;right:12%;font-size:${eS(1.6)};
    animation:anim-sun-spin 10s linear infinite;">🌞</span>

  <!-- Cloud -->
  <span class="anim-e" style="top:10%;left:-10%;font-size:${eS(0.9)};opacity:0.75;
    animation:anim-cloud-drift 25s linear infinite;">☁️</span>

  <!-- Clay pot (center) -->
  <span class="anim-e" style="bottom:23%;left:46%;font-size:${eS(2.8)};">🏺</span>

  <!-- Water inside pot (rises) -->
  <div style="position:absolute;bottom:${Math.round(23*s)}%;left:calc(46% + ${Math.round(10*s)}px);
    width:${pw}px;overflow:hidden;">
    <div class="anim-water-fill" style="width:${pw}px;"></div>
  </div>

  <!-- Pebble 1 -->
  <span class="anim-e" style="bottom:40%;left:49%;font-size:${eS(0.7)};
    animation:anim-pebble 5s ease-in-out infinite;">⚫</span>

  <!-- Pebble 2 (staggered) -->
  <span class="anim-e" style="bottom:38%;left:51%;font-size:${eS(0.6)};
    animation:anim-pebble 5s ease-in-out infinite 0.8s;">⚫</span>

  <!-- Pebbles on ground -->
  <span class="anim-e" style="bottom:24%;left:25%;font-size:${eS(0.55)};opacity:0.8;">🪨</span>
  <span class="anim-e" style="bottom:24%;left:34%;font-size:${eS(0.5)};opacity:0.8;">🪨</span>
  <span class="anim-e" style="bottom:24%;left:28%;font-size:${eS(0.45)};opacity:0.8;">🪨</span>

  <!-- Flying crow -->
  <span class="anim-e" style="bottom:95%;left:62%;font-size:${eS(1.8)};
    animation:anim-fly-arc 5s ease-in-out infinite;">🐦</span>

  <!-- Tree -->
  <span class="anim-e" style="bottom:28%;left:4%;font-size:${eS(2)};">🌵</span>

  <!-- Droplets hint -->
  <span class="anim-e" style="bottom:44%;left:50%;font-size:${eS(0.6)};
    animation:anim-float-up 3s ease-in-out infinite 2.5s;opacity:0;">💧</span>
</div>`;
}

/* =========================================================
   STORY 4 — Cinderella
   Night scene: girl transforms with magic wand + sparkles
   ========================================================= */
function sceneCinderella(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#0D1B4B 0%,#1A2A72 45%,#4B3B8C 45%,#2D1B69 100%);">

  <!-- Night stars scattered -->
  <span class="anim-e" style="top:6%;left:8%;font-size:${eS(0.7)};
    animation:anim-star-blink 2.3s ease-in-out infinite;">⭐</span>
  <span class="anim-e" style="top:12%;left:22%;font-size:${eS(0.55)};
    animation:anim-star-blink 2.3s ease-in-out infinite 0.7s;">✨</span>
  <span class="anim-e" style="top:5%;right:20%;font-size:${eS(0.65)};
    animation:anim-star-blink 2.3s ease-in-out infinite 1.4s;">⭐</span>
  <span class="anim-e" style="top:15%;right:8%;font-size:${eS(0.5)};
    animation:anim-star-blink 2.3s ease-in-out infinite 0.3s;">✨</span>
  <span class="anim-e" style="top:9%;left:55%;font-size:${eS(0.6)};
    animation:anim-star-blink 2.3s ease-in-out infinite 1.1s;">⭐</span>

  <!-- Moon -->
  <span class="anim-e" style="top:7%;right:12%;font-size:${eS(1.5)};
    animation:anim-float 5s ease-in-out infinite;">🌙</span>

  <!-- Fairy Godmother (left) with wand -->
  <span class="anim-e" style="bottom:24%;left:12%;font-size:${eS(2)};
    animation:anim-float 3s ease-in-out infinite;">🧙‍♀️</span>
  <span class="anim-e" style="bottom:42%;left:22%;font-size:${eS(1.3)};
    animation:anim-wand 1.5s ease-in-out infinite;">🪄</span>

  <!-- Sparkles from wand -->
  <span class="anim-e" style="bottom:54%;left:28%;font-size:${eS(0.9)};
    animation:anim-sparkle 2s ease-in-out infinite;">✨</span>
  <span class="anim-e" style="bottom:58%;left:34%;font-size:${eS(0.75)};
    animation:anim-sparkle 2s ease-in-out infinite 0.5s;">⭐</span>
  <span class="anim-e" style="bottom:50%;left:38%;font-size:${eS(0.8)};
    animation:anim-sparkle 2s ease-in-out infinite 1s;">✨</span>
  <span class="anim-e" style="bottom:62%;left:41%;font-size:${eS(0.65)};
    animation:anim-sparkle 2s ease-in-out infinite 1.5s;">💫</span>

  <!-- Cinderella transforming (center) -->
  <span class="anim-e" style="bottom:24%;left:40%;font-size:${eS(2.8)};
    animation:anim-transform-glow 5s ease-in-out infinite;">👸</span>

  <!-- Glass slipper -->
  <span class="anim-e" style="bottom:24%;left:60%;font-size:${eS(1.2)};
    animation:anim-float 2.5s ease-in-out infinite 0.6s;">👠</span>

  <!-- Pumpkin → carriage (right) -->
  <span class="anim-e" style="bottom:22%;right:8%;font-size:${eS(2)};
    animation:anim-pumpkin-morph 5s ease-in-out infinite;">🎃</span>

  <!-- Palace silhouette -->
  <span class="anim-e" style="bottom:23%;right:6%;font-size:${eS(1.1)};opacity:0.5;">🏰</span>
</div>`;
}

/* =========================================================
   STORY 5 — The Boy Who Cried Wolf
   Hillside: boy shouts, wolf sneaks, sheep bolt
   ========================================================= */
function sceneBoyWolf(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#87CEEB 0%,#B0E0FF 44%,#6DBF3E 44%,#3D8B1F 100%);">

  <!-- Sun -->
  <span class="anim-e" style="top:7%;left:10%;font-size:${eS(1.4)};
    animation:anim-pulse 4s ease-in-out infinite;">☀️</span>

  <!-- Clouds -->
  <span class="anim-e" style="top:10%;left:-10%;font-size:${eS(1)};opacity:0.8;
    animation:anim-cloud-drift 24s linear infinite;">☁️</span>

  <!-- Hill bump (emoji hill) -->
  <span class="anim-e" style="bottom:28%;left:26%;font-size:${eS(3.5)};opacity:0.5;">⛰️</span>

  <!-- Boy shouting on hill -->
  <span class="anim-e" style="bottom:46%;left:34%;font-size:${eS(1.9)};
    animation:anim-shout 1.8s ease-in-out infinite;">🧒</span>

  <!-- Megaphone / shout indicator -->
  <span class="anim-e" style="bottom:52%;left:43%;font-size:${eS(1.1)};
    animation:anim-shout 1.8s ease-in-out infinite 0.4s;">📢</span>

  <!-- Shout ripple rings -->
  <div style="position:absolute;bottom:54%;left:47%;width:${Math.round(20*s)}px;height:${Math.round(20*s)}px;">
    <div class="anim-ripple-ring" style="width:100%;height:100%;animation:anim-ripple 1.5s ease-out infinite;"></div>
    <div class="anim-ripple-ring" style="width:100%;height:100%;animation:anim-ripple 1.5s ease-out infinite 0.5s;"></div>
  </div>

  <!-- Wolf sneaking from right -->
  <span class="anim-e" style="bottom:28%;left:110%;font-size:${eS(1.9)};
    animation:anim-wolf-sneak 6s ease-in-out infinite;">🐺</span>

  <!-- Tree on right hiding wolf -->
  <span class="anim-e" style="bottom:28%;right:3%;font-size:${eS(2.2)};">🌲</span>
  <span class="anim-e" style="bottom:28%;left:5%;font-size:${eS(1.8)};">🌳</span>

  <!-- Sheep bolt leftward -->
  <span class="anim-e" style="bottom:28%;left:38%;font-size:${eS(1.4)};
    animation:anim-sheep-bolt 4s linear infinite 1s;">🐑</span>
  <span class="anim-e" style="bottom:28%;left:48%;font-size:${eS(1.2)};
    animation:anim-sheep-bolt 4s linear infinite 2.2s;">🐑</span>

  <!-- Grass -->
  <span class="anim-e" style="bottom:28%;left:18%;font-size:${eS(0.7)};opacity:0.8;
    animation:anim-grass-wave 3s ease-in-out infinite;">🌾</span>
  <span class="anim-e" style="bottom:28%;left:68%;font-size:${eS(0.65)};opacity:0.8;
    animation:anim-grass-wave 3s ease-in-out infinite 1.5s;">🌾</span>
</div>`;
}

/* =========================================================
   STORY 6 — The Magic Seed
   Garden: seed sprouts and grows into sunflower over loop
   ========================================================= */
function sceneMagicSeed(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#87CEEB 0%,#AAD9F7 46%,#8B5E3C 46%,#5C3A1E 100%);">

  <!-- Spinning sun -->
  <span class="anim-e" style="top:6%;right:10%;font-size:${eS(1.8)};
    animation:anim-sun-spin 12s linear infinite;">🌞</span>

  <!-- Sun rays (sparkle) -->
  <span class="anim-e" style="top:4%;right:22%;font-size:${eS(0.7)};
    animation:anim-twinkle 1.8s ease-in-out infinite;">✨</span>
  <span class="anim-e" style="top:14%;right:8%;font-size:${eS(0.6)};
    animation:anim-twinkle 1.8s ease-in-out infinite 0.9s;">✨</span>

  <!-- Cloud -->
  <span class="anim-e" style="top:10%;left:-10%;font-size:${eS(0.95)};opacity:0.75;
    animation:anim-cloud-drift 26s linear infinite;">☁️</span>

  <!-- Watering can (left) -->
  <span class="anim-e" style="bottom:28%;left:10%;font-size:${eS(1.8)};
    animation:anim-float 3.5s ease-in-out infinite;">🪣</span>

  <!-- Water drops falling -->
  <span class="anim-e" style="bottom:44%;left:16%;font-size:${eS(0.7)};
    animation:anim-float-up 1.8s ease-in-out infinite;transform:rotate(180deg);">💧</span>
  <span class="anim-e" style="bottom:48%;left:19%;font-size:${eS(0.6)};
    animation:anim-float-up 1.8s ease-in-out infinite 0.6s;transform:rotate(180deg);">💧</span>

  <!-- Growing seed / sprout / flower (center) -->
  <span class="anim-e" style="bottom:22%;left:42%;font-size:0.5em;
    animation:anim-sprout-grow 6s ease-in-out infinite;">🌻</span>

  <!-- Surrounding flowers -->
  <span class="anim-e" style="bottom:25%;left:28%;font-size:${eS(1.1)};
    animation:anim-sway 3s ease-in-out infinite;">🌸</span>
  <span class="anim-e" style="bottom:25%;right:22%;font-size:${eS(0.95)};
    animation:anim-sway 3s ease-in-out infinite 1.5s;">🌼</span>
  <span class="anim-e" style="bottom:25%;right:10%;font-size:${eS(1.2)};
    animation:anim-sway 3s ease-in-out infinite 0.8s;">🌷</span>

  <!-- Butterfly -->
  <span class="anim-e" style="bottom:52%;left:55%;font-size:${eS(1)};
    animation:anim-float 2.5s ease-in-out infinite 1s;">🦋</span>

  <!-- Grandmother (right) -->
  <span class="anim-e" style="bottom:27%;right:5%;font-size:${eS(2)};
    animation:anim-breathe 4s ease-in-out infinite;">👵</span>

  <!-- Little girl (left of flower) -->
  <span class="anim-e" style="bottom:27%;left:20%;font-size:${eS(1.9)};
    animation:anim-float 3s ease-in-out infinite 0.5s;">👧</span>

  <!-- Happy sparkles -->
  <span class="anim-e" style="bottom:55%;left:55%;font-size:${eS(0.75)};
    animation:anim-sparkle 3s ease-in-out infinite 1s;">⭐</span>
  <span class="anim-e" style="bottom:60%;left:60%;font-size:${eS(0.6)};
    animation:anim-sparkle 3s ease-in-out infinite 2s;">✨</span>
</div>`;
}

/* =========================================================
   FALLBACK — Generic storybook scene
   ========================================================= */
function sceneDefault(h, s, br) {
  const eS = n => `${(n * s).toFixed(2)}em`;
  return `
<div class="anim-scene" style="height:${h}px;border-radius:${br};
  background:linear-gradient(180deg,#87CEEB 50%,#78D24B 50%);">
  <span class="anim-e" style="bottom:30%;left:38%;font-size:${eS(3)};
    animation:anim-float 3s ease-in-out infinite;">📖</span>
  <span class="anim-e" style="top:10%;left:12%;font-size:${eS(1.4)};
    animation:anim-pulse 4s ease-in-out infinite;">☀️</span>
  <span class="anim-e" style="top:8%;left:-10%;font-size:${eS(0.9)};opacity:0.8;
    animation:anim-cloud-drift 20s linear infinite;">☁️</span>
</div>`;
}
