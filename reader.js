/* reader.js — Picture-book page navigator + TTS */

// ── State ──────────────────────────────────────────────────────
let story         = null;
let currentLang   = 'en';
let currentPage   = 0;
let isPlaying     = false;
let speechRate    = 1;
let voices        = [];
let selectedVoice = null;
let utterance     = null;
let autoAdvance   = true;
let audioReady    = false;   // AudioEngine initialized on first gesture

// ── Scene SFX lookup ──────────────────────────────────────────
const PAGE_SFX = {
  '1:4': 'roar',
  '1:5': 'squeak',
  '3:8': 'water-drop',
  '4:5': 'magic',
  '4:6': 'magic',
  '5:9': 'wolf-howl',
};

// ── Boot ──────────────────────────────────────────────────────
const params  = new URLSearchParams(location.search);
const storyId = parseInt(params.get('id')) || 1;
const startMode = params.get('mode') || 'read';
currentLang   = params.get('lang') || localStorage.getItem('kidsStoryLang') || 'en';

const UI = {
  en: {
    listen: '▶ Listen', pause: '⏸ Pause',
    done: 'Story Complete! 🎉',
    doneMsg: 'Amazing! You finished the whole story! You\'re a super reader! 🌟',
    readAgain: '🔄 Read Again', more: '📚 More Stories'
  },
  hi: {
    listen: '▶ सुनो', pause: '⏸ रुको',
    done: 'कहानी पूरी हुई! 🎉',
    doneMsg: 'शाबाश! तुमने पूरी कहानी सुन ली! तुम बहुत शानदार हो! 🌟',
    readAgain: '🔄 फिर सुनो', more: '📚 और कहानियाँ'
  }
};

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  story = STORIES.find(s => s.id === storyId);
  if (!story) { location.href = 'index.html'; return; }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;

  applyLang(currentLang, false);
  setupSwipe();

  // Init audio on first user gesture
  document.addEventListener('pointerdown', initAudioOnGesture, { once: true });
  document.addEventListener('keydown',     initAudioOnGesture, { once: true });

  if (startMode === 'listen') {
    setTimeout(startReading, 600);
  }
});

function initAudioOnGesture() {
  if (audioReady) return;
  if (typeof AudioEngine !== 'undefined') {
    AudioEngine.init();
    audioReady = true;
    // Start music for the current page's mood
    playMusicForPage(currentPage);
  }
}

function playMusicForPage(idx) {
  if (!audioReady || typeof AudioEngine === 'undefined') return;
  const storyScenes = (typeof SCENES !== 'undefined') ? SCENES[storyId] : null;
  const mood = (storyScenes && storyScenes[idx]) ? storyScenes[idx].bg : 'meadow';
  AudioEngine.playMusic(mood);
}

// ── Language ──────────────────────────────────────────────────
function setLang(lang) {
  stopSpeech();
  currentLang = lang;
  localStorage.setItem('kidsStoryLang', lang);
  currentPage = 0;
  applyLang(lang, false);
}

function applyLang(lang) {
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
  document.documentElement.lang = lang;

  const data = story[lang];
  document.getElementById('bookTitleEmoji').textContent = story.emoji;
  document.getElementById('bookTitleText').textContent  = data.title;
  document.title = data.title + ' — KidsStory';

  updateCompletionText();
  buildDots();
  renderPage(currentPage, null);
  loadVoices();
}

// ── Page render ───────────────────────────────────────────────
let isFirstRender = true;

function renderPage(idx, direction) {
  const data  = story[currentLang];
  const total = data.text.length;
  if (idx < 0 || idx >= total) return;
  currentPage = idx;

  // ─ Illustration ─
  const illusWrap  = document.getElementById('bookIllustration');
  const illusHeight = illusWrap.offsetHeight || 300;
  const sceneHTML  = renderBookScene(storyId, idx, illusHeight);

  if (direction) {
    illusWrap.innerHTML = sceneHTML;
    const cls = direction === 'right' ? 'page-enter-right' : 'page-enter-left';
    illusWrap.querySelector('.book-scene').classList.add(cls);
  } else {
    illusWrap.innerHTML = sceneHTML;
  }

  // ─ Text ─
  const textEl  = document.getElementById('bookParaText');
  const paraText = data.text[idx];
  const isHindi  = currentLang === 'hi';
  const isLesson = idx === total - 1;

  textEl.textContent = paraText;
  textEl.className   = 'book-para-text'
    + (isHindi  ? ' hindi-text'  : '')
    + (isLesson ? ' lesson-para' : '');

  if (direction) {
    const tCls = direction === 'right' ? 'page-enter-right' : 'page-enter-left';
    textEl.classList.add(tCls);
    setTimeout(() => textEl.classList.remove(tCls), 400);
  }

  // ─ Controls ─
  updateProgress();

  // ─ Audio ─
  if (!isFirstRender && audioReady) {
    AudioEngine.playEffect('page-turn');
  }
  isFirstRender = false;

  if (audioReady) {
    playMusicForPage(idx);
    const sfxKey = `${storyId}:${idx}`;
    if (PAGE_SFX[sfxKey]) {
      setTimeout(() => AudioEngine.playEffect(PAGE_SFX[sfxKey]), 400);
    }
  }
}

function updateProgress() {
  const total = story[currentLang].text.length;
  document.getElementById('pageNum').textContent   = currentPage + 1;
  document.getElementById('pageTotal').textContent = total;

  document.getElementById('prevBtn').disabled = (currentPage === 0);
  document.getElementById('nextBtn').disabled = (currentPage === total - 1);
  document.getElementById('arrowLeft').disabled  = (currentPage === 0);
  document.getElementById('arrowRight').disabled = (currentPage === total - 1);

  updateDots();
}

// ── Dots ─────────────────────────────────────────────────────
function buildDots() {
  const total = story[currentLang].text.length;
  const row   = document.getElementById('pageDots');

  const maxDots = 20;
  if (total > maxDots) {
    row.innerHTML = '';
    return;
  }

  row.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="page-dot" onclick="jumpToPage(${i})" aria-label="Page ${i+1}"></button>`
  ).join('');
  updateDots();
}

function updateDots() {
  document.querySelectorAll('.page-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentPage);
    dot.classList.toggle('read',   i < currentPage);
  });
}

// ── Navigation ───────────────────────────────────────────────
function prevPage() {
  if (currentPage <= 0) return;
  const wasPlaying = isPlaying;
  stopSpeech();
  renderPage(currentPage - 1, 'left');
  if (wasPlaying) setTimeout(startReading, 150);
}

function nextPage() {
  const total = story[currentLang].text.length;
  if (currentPage >= total - 1) {
    onStoryComplete();
    return;
  }
  const wasPlaying = isPlaying;
  stopSpeech();
  renderPage(currentPage + 1, 'right');
  if (wasPlaying) setTimeout(startReading, 150);
}

function jumpToPage(idx) {
  const wasPlaying = isPlaying;
  stopSpeech();
  const dir = idx > currentPage ? 'right' : 'left';
  renderPage(idx, dir);
  if (wasPlaying) setTimeout(startReading, 150);
}

function goBack() {
  stopSpeech();
  if (audioReady && typeof AudioEngine !== 'undefined') AudioEngine.stopMusic();
  history.back();
}

// ── TTS ──────────────────────────────────────────────────────
const HI_VOICE_PRIORITY = ['Google हिन्दी', 'Microsoft Swara', 'Lekha', 'Samiksha'];

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
  const sel      = document.getElementById('voiceSelect');
  const isHindi  = currentLang === 'hi';
  const langCode = isHindi ? 'hi' : 'en';
  const relevant = voices.filter(v => v.lang.toLowerCase().startsWith(langCode));
  const pool     = relevant.length > 0 ? relevant : voices;

  if (pool.length === 0) {
    sel.innerHTML = '<option value="">Default</option>';
    selectedVoice = null;
    return;
  }

  sel.innerHTML = pool.map(v =>
    `<option value="${v.name}">${v.name.replace(/Microsoft |Google |Apple /, '').trim()}</option>`
  ).join('');

  let preferred;
  if (isHindi) {
    // Try priority Hindi voices
    for (const name of HI_VOICE_PRIORITY) {
      preferred = pool.find(v => v.name === name || v.name.toLowerCase().includes(name.toLowerCase()));
      if (preferred) break;
    }
    // Fallback to any hi-IN
    if (!preferred) preferred = pool.find(v => v.lang === 'hi-IN') || pool[0];
  } else {
    preferred = pool.find(v =>
      /female|zira|samantha|karen|victoria|susan/i.test(v.name)
    ) || pool[0];
  }

  sel.value     = preferred.name;
  selectedVoice = preferred;
}

function onVoiceChange() {
  const name = document.getElementById('voiceSelect').value;
  selectedVoice = voices.find(v => v.name === name) || null;
  if (isPlaying) { stopSpeech(); startReading(); }
}

function togglePlay() {
  // Init audio on explicit play button press
  initAudioOnGesture();
  if (isPlaying) pauseReading();
  else startReading();
}

function startReading() {
  if (!window.speechSynthesis) {
    alert('Your browser does not support text-to-speech. Try Chrome or Edge!');
    return;
  }

  isPlaying = true;
  setPlayState(true);
  speakCurrentPage();
}

function speakCurrentPage() {
  const text = story[currentLang].text[currentPage];
  if (!text) { onStoryComplete(); return; }

  const isHindi = currentLang === 'hi';

  utterance         = new SpeechSynthesisUtterance(text);
  utterance.rate    = isHindi ? speechRate * 0.82 : speechRate;
  utterance.pitch   = isHindi ? 1.08 : 1.05;
  utterance.volume  = 1;

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  } else {
    utterance.lang = isHindi ? 'hi-IN' : 'en-US';
  }
  if (isHindi) utterance.lang = 'hi-IN';

  utterance.onend = () => {
    if (!isPlaying) return;
    const total = story[currentLang].text.length;
    if (autoAdvance && currentPage < total - 1) {
      renderPage(currentPage + 1, 'right');
      setTimeout(speakCurrentPage, 300);
    } else if (currentPage >= total - 1) {
      isPlaying = false;
      setPlayState(false);
      onStoryComplete();
    }
  };

  utterance.onerror = (e) => {
    if (e.error === 'interrupted' || e.error === 'canceled') return;
    if (isPlaying && autoAdvance) {
      renderPage(currentPage + 1, 'right');
      setTimeout(speakCurrentPage, 300);
    }
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function pauseReading() {
  isPlaying = false;
  window.speechSynthesis.cancel();
  setPlayState(false);
}

function stopSpeech() {
  isPlaying = false;
  window.speechSynthesis.cancel();
  utterance = null;
  setPlayState(false);
}

function setPlayState(playing) {
  const btn   = document.getElementById('bookPlayBtn');
  const icon  = document.getElementById('playIcon');
  const label = document.getElementById('playLabel');

  btn.classList.toggle('playing', playing);
  icon.textContent  = playing ? '⏸' : '▶';
  label.textContent = playing ? (currentLang === 'hi' ? 'रुको' : 'Pause')
                               : (currentLang === 'hi' ? 'सुनो'  : 'Listen');
}

// ── Music toggle (called from header button) ─────────────────
function toggleMusic() {
  initAudioOnGesture();
  if (typeof AudioEngine === 'undefined') return;
  const nowMuted = AudioEngine.toggleMute();
  const btn = document.getElementById('musicBtn');
  if (btn) btn.textContent = nowMuted ? '🔇' : '🔊';
}

// ── Speed ────────────────────────────────────────────────────
function setSpeed(rate) {
  speechRate = rate;
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.dataset.speed) === rate);
  });
  if (isPlaying) { stopSpeech(); startReading(); }
}

// ── Completion ───────────────────────────────────────────────
function updateCompletionText() {
  const t = UI[currentLang];
  const el1 = document.getElementById('completeTitle');
  const el2 = document.getElementById('completeMsg');
  const el3 = document.querySelector('.complete-actions .btn-read');
  const el4 = document.querySelector('.complete-actions .btn-listen');
  if (el1) el1.textContent = t.done;
  if (el2) el2.textContent = t.doneMsg;
  if (el3) el3.textContent = t.readAgain;
  if (el4) el4.textContent = t.more;
}

function onStoryComplete() {
  stopSpeech();
  if (audioReady && typeof AudioEngine !== 'undefined') {
    AudioEngine.playEffect('celebrate');
  }
  document.getElementById('bookCompleteOverlay').classList.add('show');
}

function restartStory() {
  document.getElementById('bookCompleteOverlay').classList.remove('show');
  stopSpeech();
  currentPage = 0;
  renderPage(0, null);
}

// ── Swipe navigation ──────────────────────────────────────────
function setupSwipe() {
  let startX = 0;
  const stage = document.querySelector('.book-stage');
  stage.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) nextPage();
    else prevPage();
  });
}

// ── Cleanup ──────────────────────────────────────────────────
window.addEventListener('beforeunload', () => {
  stopSpeech();
  if (audioReady && typeof AudioEngine !== 'undefined') AudioEngine.stopMusic();
});
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseReading(); });

// ── Keyboard navigation ───────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextPage(); }
  if (e.key === 'ArrowLeft')                   { e.preventDefault(); prevPage(); }
  if (e.key === 'Enter')                       { e.preventDefault(); togglePlay(); }
  if (e.key === 'm' || e.key === 'M')          { toggleMusic(); }
});
