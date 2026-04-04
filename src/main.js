import * as THREE from 'three';
import { RUBIKS_CUBE_COLORS as colors } from './globals.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as TWEEN from '@tweenjs/tween.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
document.getElementById('app').appendChild(renderer.domElement);
//document.body.style.background = 'radial-gradient(ellipse at center, #ffffff 0%, #a8d4f5 100%)';

renderer.setClearColor(0x000000, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;

const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
scene.add(ambientLight);

const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight1.position.set(10, 20, 10);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
dirLight2.position.set(-10, 10, -10);
scene.add(dirLight2);

const dirLight3 = new THREE.DirectionalLight(0xffffff, 1.0);
dirLight3.position.set(10, -10, -10);
scene.add(dirLight3);

const cubies = [];
const cubeGroup = new THREE.Group();
scene.add(cubeGroup);



const coreGeometry = new RoundedBoxGeometry(0.99, 0.99, 0.99, 5, 0.10);
const coreMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7, metalness: 0.1 });
const stickerGeometryX = new RoundedBoxGeometry(0.06, 0.83, 0.83, 6, 0.12);
const stickerGeometryY = new RoundedBoxGeometry(0.83, 0.06, 0.83, 6, 0.12);
const stickerGeometryZ = new RoundedBoxGeometry(0.83, 0.83, 0.06, 6, 0.12);

const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 256;
const context = canvas.getContext('2d');
context.fillStyle = '#ffffff';
context.fillRect(0, 0, 256, 256);
for (let i = 0; i < 20000; i++) {
  context.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  context.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
}
const noiseTexture = new THREE.CanvasTexture(canvas);
noiseTexture.wrapS = THREE.RepeatWrapping;
noiseTexture.wrapT = THREE.RepeatWrapping;

const getStickerMat = (color) => new THREE.MeshStandardMaterial({
  color,
  roughness: 0.9,
  metalness: 0.1,
  bumpMap: noiseTexture,
  bumpScale: 0.003
});

for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      const cubieGroup = new THREE.Group();
      cubieGroup.position.set(x, y, z);

      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      cubieGroup.add(core);

      const addSticker = (geom, col, pos) => {
        const mat = getStickerMat(col);
        const stick = new THREE.Mesh(geom, mat);
        stick.position.set(...pos);
        stick.userData = { isSticker: true, originalColor: col };
        cubieGroup.add(stick);
      };

      if (x === 1) addSticker(stickerGeometryX, colors.right, [0.49, 0, 0]);
      if (x === -1) addSticker(stickerGeometryX, colors.left, [-0.49, 0, 0]);
      if (y === 1) addSticker(stickerGeometryY, colors.top, [0, 0.49, 0]);
      if (y === -1) addSticker(stickerGeometryY, colors.bottom, [0, -0.49, 0]);
      if (z === 1) addSticker(stickerGeometryZ, colors.front, [0, 0, 0.49]);
      if (z === -1) addSticker(stickerGeometryZ, colors.back, [0, 0, -0.49]);

      cubeGroup.add(cubieGroup);
      cubies.push(cubieGroup);
    }
  }
}

let isAnimating = false;

function rotateLayer(axis, layer, angle, duration = 300) {
  return new Promise((resolve) => {
    if (isAnimating && duration > 0) return;
    isAnimating = true;

    const activeCubies = cubies.filter(c => Math.abs(Math.round(c.position[axis]) - layer) < 0.1);

    const pivot = new THREE.Group();
    cubeGroup.add(pivot);
    activeCubies.forEach(c => pivot.attach(c));

    const targetProps = { val: angle };

    if (duration > 0) {
      new TWEEN.Tween({ val: 0 })
        .to(targetProps, duration)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate((obj) => pivot.rotation[axis] = obj.val)
        .onComplete(() => finishRotation(pivot, activeCubies, resolve))
        .start();
    } else {
      pivot.rotation[axis] = angle;
      finishRotation(pivot, activeCubies, resolve);
    }
  });
}

function finishRotation(pivot, activeCubies, resolve) {
  pivot.updateMatrixWorld();
  activeCubies.forEach(c => {
    cubeGroup.attach(c);
    c.position.x = Math.round(c.position.x);
    c.position.y = Math.round(c.position.y);
    c.position.z = Math.round(c.position.z);

    const euler = new THREE.Euler().setFromQuaternion(c.quaternion);
    euler.x = Math.round(euler.x / (Math.PI / 2)) * (Math.PI / 2);
    euler.y = Math.round(euler.y / (Math.PI / 2)) * (Math.PI / 2);
    euler.z = Math.round(euler.z / (Math.PI / 2)) * (Math.PI / 2);
    c.quaternion.setFromEuler(euler);
  });
  cubeGroup.remove(pivot);
  isAnimating = false;
  if (resolve) resolve();
}

const MOVES = {
  'L': ['x', -1, Math.PI / 2], 'M': ['x', 0, Math.PI / 2], 'R': ['x', 1, -Math.PI / 2],
  'U': ['y', 1, -Math.PI / 2], 'E': ['y', 0, Math.PI / 2], 'D': ['y', -1, Math.PI / 2],
  'F': ['z', 1, -Math.PI / 2], 'S': ['z', 0, -Math.PI / 2], 'B': ['z', -1, Math.PI / 2]
};

Object.keys(MOVES).forEach(key => {
  const btn = document.getElementById('btn' + key);
  if (btn) {
    btn.addEventListener('click', () => {
      if (!isAnimating) rotateLayer(...MOVES[key], 300);
    });
  }
});

document.getElementById('shuffleBtn').addEventListener('click', async () => {
  if (isAnimating) return;
  const moveKeys = Object.keys(MOVES);
  for (let i = 0; i < 20; i++) {
    const randomMove = moveKeys[Math.floor(Math.random() * moveKeys.length)];
    const m = MOVES[randomMove];
    const dir = Math.random() > 0.5 ? 1 : -1;
    await rotateLayer(m[0], m[1], m[2] * dir, 800);
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (isAnimating) return;
  window.location.reload();
});

// Mode Switching and Routing
let currentMode = 'home';

const appContainer = document.getElementById('app');
const homeView = document.getElementById('home-view');
const comingSoonView = document.getElementById('coming-soon-view');
const comingSoonTitle = document.getElementById('coming-soon-title');

const navBtns = document.querySelectorAll('.navbar [data-route]');

function handleNavigation(path, addToHistory = true) {
  if (isAnimating) return;
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
  [homeView, comingSoonView].forEach(v => v.classList.add('d-none'));
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
    controls.enableRotate = true;
    controls.enableZoom = true;
    homeView.classList.remove('d-none');

    scene.traverse(child => {
      if (child.userData.isSticker && child.userData.originalColor) {
        child.material.color.setHex(child.userData.originalColor);
      }
    });

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
    comingSoonTitle.innerText = getTitleFromPath(path) || 'FEATURE';
    comingSoonView.classList.remove('d-none');
  }

  window.dispatchEvent(new CustomEvent('route-changed', { detail: path }));
}

// Initial route
updateViewBasedOnRoute();

function animate(time) {
  requestAnimationFrame(animate);
  if (currentMode === '' || currentMode === '/') {
    TWEEN.update(time);
    controls.update();
    renderer.render(scene, camera);
  }
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
