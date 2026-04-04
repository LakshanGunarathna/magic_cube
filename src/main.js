// Mode Switching and Routing
let currentMode = 'home';

const appContainer = document.getElementById('app');
const homeView = document.getElementById('home-view');
const cube3x3View = document.getElementById('cube-3x3-view');
const comingSoonView = document.getElementById('coming-soon-view');

const navBtns = document.querySelectorAll('.navbar [data-route]');

function handleNavigation(path, addToHistory = true) {
  if (addToHistory) {
    window.history.pushState({}, '', path);
  }
  updateViewBasedOnRoute();
}

navBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    handleNavigation(e.currentTarget.getAttribute('data-route'));
  });
});

window.addEventListener('popstate', () => {
  updateViewBasedOnRoute();
});

function getTitleFromPath(path) {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return '';
  const lastPart = parts[parts.length - 1];
  return lastPart.replace(/-/g, ' ').toUpperCase();
}

function updateViewBasedOnRoute() {
  const path = decodeURIComponent(window.location.pathname).replace(/\/$/, "");

  // Reset navs for both top level buttons and dropdown links
  document.querySelectorAll('.navbar .nav-btn, .navbar [data-route]').forEach(btn => btn.classList.remove('active'));
  // Find active nav and highlight
  const activeNav = document.querySelector(`.navbar [data-route="${path || '/'}"]`);
  if (activeNav && activeNav.classList.contains('nav-btn')) {
    activeNav.classList.add('active');
  } else if (activeNav) {
    activeNav.classList.add('active'); // highlight the specific dropdown link
    const parentDropBtn = activeNav.closest('.dropdown')?.querySelector('.nav-btn');
    if (parentDropBtn) parentDropBtn.classList.add('active');
  }

  // Reset views
  [homeView, cube3x3View, comingSoonView].forEach(v => {
    if (v) v.classList.add('d-none');
  });
  const s3x3 = document.getElementById('solve-3x3-view');
  if (s3x3) s3x3.classList.add('d-none');
  const s2x2 = document.getElementById('solve-2x2-view');
  if (s2x2) s2x2.classList.add('d-none');
  const cubeArtsView = document.getElementById('cube-arts-view');
  if (cubeArtsView) cubeArtsView.classList.add('d-none');
  const cubeArtsPlayerView = document.getElementById('cube-arts-player-view');
  if (cubeArtsPlayerView) cubeArtsPlayerView.classList.add('d-none');

  appContainer.style.display = 'block';
  currentMode = path;

  if (path === '' || path === '/') {
    appContainer.style.display = 'none';
    homeView.classList.remove('d-none');

  } else if (path === '/cubes/3x3x3 cube' || path === '/cubes/3x3x3-cube') {
    appContainer.style.display = 'block';
    if (cube3x3View) cube3x3View.classList.remove('d-none');

  } else if (path === '/solver/3x3x3 cube' || path === '/solver/3x3x3-cube') {
    appContainer.style.display = 'none';
    if (s3x3) s3x3.classList.remove('d-none');

  } else if (path === '/solver/2x2x2 cube' || path === '/solver/2x2x2-cube') {
    appContainer.style.display = 'none';
    if (s2x2) s2x2.classList.remove('d-none');

  } else if (path === '/cube-arts') {
    appContainer.style.display = 'none';
    if (cubeArtsView) cubeArtsView.classList.remove('d-none');

  } else if (path.startsWith('/cube-arts/play')) {
    appContainer.style.display = 'none';
    if (cubeArtsPlayerView) cubeArtsPlayerView.classList.remove('d-none');

  } else {
    // Other routes go to coming soon
    appContainer.style.display = 'none';
    const comingSoonTitle = document.getElementById('coming-soon-title');
    if (comingSoonTitle) comingSoonTitle.innerText = getTitleFromPath(path) || 'FEATURE';
    comingSoonView.classList.remove('d-none');
  }

  window.dispatchEvent(new CustomEvent('route-changed', { detail: path }));
}

// Initial route
updateViewBasedOnRoute();
