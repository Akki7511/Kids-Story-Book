/* app.js — Library page logic */

let currentLang = localStorage.getItem('kidsStoryLang') || 'en';
let currentFilter = 'all';
let searchTerm = '';

const UI_TEXT = {
  en: {
    heroTitle: 'Choose Your Adventure!',
    heroSubtitle: 'Pick a story, read along, or press play and listen. Switch between English and Hindi anytime!',
    searchPlaceholder: 'Search stories...',
    read: '📖 Read',
    listen: '🎧 Listen',
    ageLabel: 'Ages',
    allStories: 'All Stories',
    noResults: '🔍 No stories found. Try a different search!'
  },
  hi: {
    heroTitle: 'अपनी कहानी चुनो!',
    heroSubtitle: 'कोई कहानी चुनो, पढ़ो या सुनो। कभी भी हिंदी और अंग्रेज़ी बदलो!',
    searchPlaceholder: 'कहानी खोजें...',
    read: '📖 पढ़ो',
    listen: '🎧 सुनो',
    ageLabel: 'उम्र',
    allStories: 'सभी कहानियाँ',
    noResults: '🔍 कोई कहानी नहीं मिली। दूसरा शब्द आज़माएँ!'
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('kidsStoryLang', lang);

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
  document.documentElement.lang = lang;

  const t = UI_TEXT[lang];
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
  document.getElementById('searchInput').placeholder = t.searchPlaceholder;
  document.getElementById('emptyState').querySelector('p').textContent = t.noResults;

  renderStories();
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderStories();
}

function filterStories() {
  searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  renderStories();
}

function storyMatchesFilter(story) {
  if (currentFilter === 'all') return true;
  return story.ageRange === currentFilter;
}

function storyMatchesSearch(story) {
  if (!searchTerm) return true;
  const lang = currentLang;
  const title = story[lang].title.toLowerCase();
  const desc = story[lang].description.toLowerCase();
  return title.includes(searchTerm) || desc.includes(searchTerm);
}

function openStory(id, mode) {
  // mode: 'read' or 'listen'
  const url = `story.html?id=${id}&mode=${mode}&lang=${currentLang}`;
  window.location.href = url;
}

function renderStories() {
  const grid = document.getElementById('storiesGrid');
  const empty = document.getElementById('emptyState');
  const t = UI_TEXT[currentLang];

  const filtered = STORIES.filter(s => storyMatchesFilter(s) && storyMatchesSearch(s));

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.add('show');
    return;
  }

  empty.classList.remove('show');

  grid.innerHTML = filtered.map((story, idx) => {
    const data = story[currentLang];
    const isHindi = currentLang === 'hi';
    const animScene = getStoryAnimation(story.id, false);
    return `
      <article class="story-card" style="animation-delay:${idx * 0.05}s">
        <div class="card-top">
          ${animScene}
          <div class="card-badges">
            <span class="badge badge-age">${t.ageLabel} ${story.ageRange}</span>
            <span class="badge badge-time">${story.readTime}</span>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title ${isHindi ? 'hindi-text' : ''}">${data.title}</h2>
          <p class="card-desc ${isHindi ? 'hindi-text' : ''}">${data.description}</p>
          <div class="card-actions">
            <button class="btn btn-read" onclick="openStory(${story.id}, 'read')">${t.read}</button>
            <button class="btn btn-listen" onclick="openStory(${story.id}, 'listen')">${t.listen}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Init
(function init() {
  setLang(currentLang);
})();
