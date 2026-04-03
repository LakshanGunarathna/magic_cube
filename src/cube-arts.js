import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as TWEEN from '@tweenjs/tween.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

let patterns = [];

// DOM Elements
const gridContainer = document.getElementById('cubeArtsGrid');
const filterTypeBtn = document.getElementById('filterType');
const filterDiffBtn = document.getElementById('filterDifficulty');

// --- UI rendering and filtering ---
async function loadCubeArts() {
  try {
    const res = await fetch('./public/data/cube-arts.json');
    patterns = await res.json();
    renderCards();
  } catch (err) {
    console.warn("Could not load cube arts json", err);
  }
}

function renderCards() {
  const typeFilter = filterTypeBtn.value;
  const diffFilter = filterDiffBtn.value;

  gridContainer.innerHTML = '';

  const filtered = patterns.filter(p => {
    if (typeFilter !== 'All' && p.type !== typeFilter) return false;
    if (diffFilter !== 'All' && p.difficulty !== diffFilter) return false;
    return true;
  });

  filtered.forEach(p => {
    const el = document.createElement('div');
    el.className = 'cube-art-card';
    el.innerHTML = `
      <img src="${p.imageUrl}" alt="${p.name}" class="cube-art-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjdW50cmFsIj5QYXR0ZXJuPC90ZXh0Pjwvc3ZnPg=='"/>
      <div class="cube-art-body">
        <div class="cube-art-title">${p.name}</div>
        <div class="cube-art-meta">
          <span class="meta-badge">${p.type}</span>
          <span class="meta-badge">${p.difficulty}</span>
          <span class="meta-badge">${p.moves.trim().split(' ').length} Moves</span>
        </div>
      </div>
    `;
    el.addEventListener('click', () => {
      // Currently we only support 3x3x3 3D player. So alert if other types.
      if (p.type !== '3x3x3') {
         alert("3D guide is only available for 3x3x3 puzzles at the moment!");
         return;
      }
      playPattern(p);
    });
    gridContainer.appendChild(el);
  });
}

filterTypeBtn.addEventListener('change', renderCards);
filterDiffBtn.addEventListener('change', renderCards);

// --- 3D Scene setup ---
const container = document.getElementById('app-cube-arts');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.enableRotate = false; // Disable global rotation during step sequence
controls.enableZoom = false;

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

const colors = {
  right: 0x2A62C9, left: 0x3DBD62,
  top: 0xFFFFFF, bottom: 0xDFBD28,
  front: 0xC41E3A, back: 0xFF5800
};

const coreGeometry = new RoundedBoxGeometry(0.99, 0.99, 0.99, 5, 0.10);
const coreMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7, metalness: 0.1 });
const stickerGeometryX = new RoundedBoxGeometry(0.06, 0.83, 0.83, 6, 0.12);
const stickerGeometryY = new RoundedBoxGeometry(0.83, 0.06, 0.83, 6, 0.12);
const stickerGeometryZ = new RoundedBoxGeometry(0.83, 0.83, 0.06, 6, 0.12);

const canvasText = document.createElement('canvas');
canvasText.width = 256; canvasText.height = 256;
const contextText = canvasText.getContext('2d');
contextText.fillStyle = '#ffffff';
contextText.fillRect(0, 0, 256, 256);
for (let i = 0; i < 20000; i++) {
  contextText.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  contextText.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
}
const noiseTexture = new THREE.CanvasTexture(canvasText);
noiseTexture.wrapS = THREE.RepeatWrapping;
noiseTexture.wrapT = THREE.RepeatWrapping;

const getStickerMat = (color) => new THREE.MeshStandardMaterial({
  color, roughness: 0.9, metalness: 0.1, bumpMap: noiseTexture, bumpScale: 0.003
});

function initCube() {
  // Clear old cubies
  cubies.forEach(c => cubeGroup.remove(c));
  cubies.length = 0;

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
}

initCube();

let isAnimating = false;

function rotateLayer(axis, layer, angle, duration = 300) {
  return new Promise((resolve) => {
    if (isAnimating && duration > 0) return;
    isAnimating = true;

    const activeCubies = cubies.filter(c => Math.abs(Math.round(c.position[axis]) - layer) < 0.1);

    const pivot = new THREE.Group();
    cubeGroup.add(pivot);
    activeCubies.forEach(c => pivot.attach(c));

    if (duration > 0) {
      new TWEEN.Tween({ val: 0 })
        .to({ val: angle }, duration)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate((obj) => pivot.rotation[axis] = obj.val)
        .onComplete(() => {
          finishRotation(pivot, activeCubies, resolve);
        })
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

let isActive = false;
let currentPattern = null;
let currentStepIndex = 0;
let solutionSteps = [];
let lastActionDirection = 1;

window.addEventListener('route-changed', (e) => {
  const path = e.detail;
  if (path === '/cube-arts' || path.startsWith('/cube-arts/play')) {
    isActive = true;
    if (path === '/cube-arts') {
      // Return from play
      currentPattern = null;
      container.style.display = 'none';
      if (patterns.length === 0) loadCubeArts();
    }
  } else {
    isActive = false;
    container.style.display = 'none';
  }
});

function playPattern(p) {
  currentPattern = p;
  initCube();
  
  // Parse moves exactly as they are written to form the pattern
  const rawMovesArray = p.moves.trim().split(' ').filter(m => m);
  solutionSteps = [];
  
  for (let m of rawMovesArray) {
    let face = m[0];
    let modifier = m.length > 1 ? m[1] : '';

    let moveDef = MOVES[face];
    if (!moveDef) continue;
    let angle = moveDef[2];
    if (modifier === "'") angle = -angle;
    if (modifier === "2") angle = angle * 2;

    solutionSteps.push({ raw: m, axis: moveDef[0], layer: moveDef[1], angle: angle });
  }

  currentStepIndex = 0;
  lastActionDirection = 1;

  window.history.pushState({}, '', '/cube-arts/play/' + encodeURIComponent(p.id));
  window.dispatchEvent(new Event('popstate'));
  
  container.style.display = 'block';
  updatePlaybackUI();
}

const FACE_NAMES = { 'U': 'TOP', 'D': 'BOTTOM', 'F': 'FRONT', 'B': 'BACK', 'L': 'LEFT', 'R': 'RIGHT', 'M': 'MIDDLE', 'E': 'EQUATOR', 'S': 'STANDING' };

function getHumanReadableMove(rawMove) {
  const face = rawMove[0];
  const mod = rawMove.length > 1 ? rawMove[1] : '';
  const faceName = FACE_NAMES[face];
  if (mod === "'") return `Turn the ${faceName} layer 90° counterclockwise.`;
  if (mod === "2") return `Turn the ${faceName} layer 180°.`;
  return `Turn the ${faceName} layer 90° clockwise.`;
}

function getReverseHumanReadableMove(rawMove) {
  const face = rawMove[0];
  const mod = rawMove.length > 1 ? rawMove[1] : '';
  const faceName = FACE_NAMES[face];
  if (mod === "'") return `Turn the ${faceName} layer 90° clockwise.`;
  if (mod === "2") return `Turn the ${faceName} layer 180°.`;
  return `Turn the ${faceName} layer 90° counterclockwise.`;
}

function getInverseMoveNotation(rawMove) {
  const face = rawMove[0];
  const mod = rawMove.length > 1 ? rawMove[1] : '';
  if (mod === "'") return face;
  if (mod === "2") return face + "2'"; // This is technically inaccurate standard notation but suitable for UI reverse indication
  return face + "'";
}

function updatePlaybackUI() {
  const humanInstruction = document.getElementById('artInstruction');
  const solutionText = document.getElementById('artSolutionText');
  const btnSideBack = document.getElementById('btnArtSideBack');
  const btnSideNext = document.getElementById('btnArtSideNext');

  if (currentStepIndex === 0 && lastActionDirection === 1) {
    humanInstruction.innerText = "READY TO LEARN: " + currentPattern.name.toUpperCase();
    solutionText.innerHTML = `Hold your SOLVED Cube as shown below, hit "next" to start creating the pattern.`;
    btnSideBack.disabled = true;
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
    return;
  }

  if (lastActionDirection === -1) {
    const move = solutionSteps[currentStepIndex];
    humanInstruction.innerText = getReverseHumanReadableMove(move.raw);
    
    let txt = `Undo Step ${currentStepIndex + 1} / ${solutionSteps.length}: `;
    txt += `<strong style="color:#eab308">${getInverseMoveNotation(move.raw)}</strong>`;
    solutionText.innerHTML = txt;

    btnSideBack.disabled = currentStepIndex <= 0;
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
    return;
  }

  const move = solutionSteps[currentStepIndex - 1];
  humanInstruction.innerText = getHumanReadableMove(move.raw);

  let txt = `Step ${currentStepIndex} / ${solutionSteps.length}: `;
  txt += `<strong style="color:#2563eb">${move.raw}</strong>`;
  solutionText.innerHTML = txt;

  btnSideBack.disabled = false;

  if (currentStepIndex >= solutionSteps.length) {
    btnSideNext.disabled = true;
    btnSideNext.innerHTML = 'Pattern Created!';
  } else {
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
  }
}

async function handleNext() {
  if (isAnimating || currentStepIndex >= solutionSteps.length) return;
  let move = solutionSteps[currentStepIndex];
  lastActionDirection = 1;
  currentStepIndex++;
  updatePlaybackUI();
  await rotateLayer(move.axis, move.layer, move.angle, 600);
}

async function handleBack() {
  if (isAnimating || currentStepIndex <= 0) return;
  currentStepIndex--;
  lastActionDirection = -1;
  let move = solutionSteps[currentStepIndex];
  updatePlaybackUI();
  await rotateLayer(move.axis, move.layer, -move.angle, 600);
}

document.getElementById('btnArtSideNext').addEventListener('click', handleNext);
document.getElementById('btnArtSideBack').addEventListener('click', handleBack);
document.getElementById('btnArtExit').addEventListener('click', () => {
    window.history.pushState({}, '', '/cube-arts');
    window.dispatchEvent(new Event('popstate'));
});

function animate(time) {
  requestAnimationFrame(animate);
  if (isActive && container.style.display !== 'none') {
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

// Init if we load initially on this route
if (decodeURIComponent(window.location.pathname).replace(/\/$/, "") === '/cube-arts') {
  loadCubeArts();
}
