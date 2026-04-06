import * as THREE from 'three';
import { RUBIKS_CUBE_COLORS as colors } from './globals.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as TWEEN from '@tweenjs/tween.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

let patterns = [];

// Base path from Vite (e.g., '/magic_cube/' in prod, '/' with http-server)
const BASE_PATH = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
  ? import.meta.env.BASE_URL.replace(/\/$/, '')
  : '';

// DOM Elements
const gridContainer = document.getElementById('cubeArtsGrid');
const btnViewPattern = document.getElementById('btnViewPattern');
const patternViewOverlay = document.getElementById('patternViewOverlay');
const modalCubeContainer = document.getElementById('modal-cube-container');
const closePatternModalBtn = document.getElementById('closePatternModal');
const modalPatternName = document.getElementById('modalPatternName');

let typeFilter = 'All';
let diffFilter = 'All';

// --- UI rendering and filtering ---
async function loadCubeArts() {
  try {
    const res = await fetch((import.meta.env?.BASE_URL || '/') + 'data/cube-arts.json');
    const data = await res.json();

    // Flatten the object keys (3x3x3, 2x2x2, 4x4x4) into the patterns array
    patterns = [];
    for (const type in data) {
      data[type].forEach(pattern => {
        // Add the type to the pattern object for the filter logic to work
        pattern.type = type;
        patterns.push(pattern);
      });
    }

    initFilters();
    renderCards();
  } catch (err) {
    console.warn("Could not load cube arts json", err);
  }
}

function initFilters() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const type = item.dataset.filterType;
      const value = item.dataset.filterValue;

      if (type === 'All') {
        typeFilter = 'All';
        diffFilter = 'All';
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      } else {
        // Remove "All" active state
        document.querySelector('.sidebar-item[data-filter-type="All"]').classList.remove('active');

        if (type === 'type') {
          if (typeFilter === value) {
            typeFilter = 'All';
            item.classList.remove('active');
          } else {
            typeFilter = value;
            document.querySelectorAll('.sidebar-item[data-filter-type="type"]').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        } else if (type === 'difficulty') {
          if (diffFilter === value) {
            diffFilter = 'All';
            item.classList.remove('active');
          } else {
            diffFilter = value;
            document.querySelectorAll('.sidebar-item[data-filter-type="difficulty"]').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        }

        // If both are All, re-activate "All"
        if (typeFilter === 'All' && diffFilter === 'All') {
          document.querySelector('.sidebar-item[data-filter-type="All"]').classList.add('active');
        }
      }

      renderCards();
    });
  });
}

function renderCards() {
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
        <div class="cube-art-title">${p.id} - ${p.name}</div>
        <div class="cube-art-meta">
          <span class="meta-badge">${p.type}</span>
          <span class="meta-badge">${p.difficulty}</span>
          <span class="meta-badge">${p.moves.trim().split(' ').length} Moves</span>
        </div>
      </div>
    `;
    el.addEventListener('click', () => {
      // Currently we only support 3x3x3, 2x2x2 and 4x4x4 3D players. 
      if (p.type !== '3x3x3' && p.type !== '2x2x2' && p.type !== '4x4x4') {
        alert("3D guide is only available for 2x2, 3x3 and 4x4 puzzles at the moment!");
        return;
      }
      playPattern(p);
    });
    gridContainer.appendChild(el);
  });
}

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

// --- Modal 3D Scene setup ---
let modalScene, modalCamera, modalRenderer, modalControls, modalCubeGroup;
let modalCubies = [];
let isModalActive = false;

function initModalScene() {
  modalScene = new THREE.Scene();
  modalCamera = new THREE.PerspectiveCamera(45, modalCubeContainer.clientWidth / modalCubeContainer.clientHeight, 0.1, 100);
  modalCamera.position.set(3.3, 3.3, 4.9);

  modalRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  modalRenderer.setSize(modalCubeContainer.clientWidth, modalCubeContainer.clientHeight);
  modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  modalCubeContainer.appendChild(modalRenderer.domElement);

  modalControls = new OrbitControls(modalCamera, modalRenderer.domElement);
  modalControls.enableDamping = true;
  modalControls.dampingFactor = 0.05;
  modalControls.enablePan = false;
  modalControls.enableZoom = false;

  const ambient = new THREE.AmbientLight(0xffffff, 2.5);
  modalScene.add(ambient);
  const d1 = new THREE.DirectionalLight(0xffffff, 1.5);
  d1.position.set(10, 20, 10);
  modalScene.add(d1);
  const d2 = new THREE.DirectionalLight(0xffffff, 1.0);
  d2.position.set(-10, 10, -10);
  modalScene.add(d2);

  modalCubeGroup = new THREE.Group();
  modalScene.add(modalCubeGroup);
}

const cubies = [];
const cubeGroup = new THREE.Group();
scene.add(cubeGroup);



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

function initCube(type = '3x3x3') {
  // Clear old cubies
  cubies.forEach(c => cubeGroup.remove(c));
  cubies.length = 0;

  let offsets = [];
  if (type === '2x2x2') {
    offsets = [-0.5, 0.5];
    cubeGroup.scale.set(1.5, 1.5, 1.5);
  } else if (type === '4x4x4') {
    offsets = [-1.5, -0.5, 0.5, 1.5];
    cubeGroup.scale.set(0.8, 0.8, 0.8);
  } else {
    offsets = [-1, 0, 1];
    cubeGroup.scale.set(1, 1, 1);
  }

  for (let x of offsets) {
    for (let y of offsets) {
      for (let z of offsets) {
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

        if (type === '4x4x4') {
          if (x === 1.5) addSticker(stickerGeometryX, colors.right, [0.49, 0, 0]);
          if (x === -1.5) addSticker(stickerGeometryX, colors.left, [-0.49, 0, 0]);
          if (y === 1.5) addSticker(stickerGeometryY, colors.top, [0, 0.49, 0]);
          if (y === -1.5) addSticker(stickerGeometryY, colors.bottom, [0, -0.49, 0]);
          if (z === 1.5) addSticker(stickerGeometryZ, colors.front, [0, 0, 0.49]);
          if (z === -1.5) addSticker(stickerGeometryZ, colors.back, [0, 0, -0.49]);
        } else {
          if (x > 0) addSticker(stickerGeometryX, colors.right, [0.49, 0, 0]);
          if (x < 0) addSticker(stickerGeometryX, colors.left, [-0.49, 0, 0]);
          if (y > 0) addSticker(stickerGeometryY, colors.top, [0, 0.49, 0]);
          if (y < 0) addSticker(stickerGeometryY, colors.bottom, [0, -0.49, 0]);
          if (z > 0) addSticker(stickerGeometryZ, colors.front, [0, 0, 0.49]);
          if (z < 0) addSticker(stickerGeometryZ, colors.back, [0, 0, -0.49]);
        }

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

    const is2x2 = currentPattern && currentPattern.type === '2x2x2';
    const is4x4 = currentPattern && currentPattern.type === '4x4x4';
    const activeCubies = cubies.filter(c => {
      const pos = (is2x2 || is4x4) ? Math.round(c.position[axis] * 2) / 2 : Math.round(c.position[axis]);
      if (Array.isArray(layer)) {
        return layer.some(l => Math.abs(pos - l) < 0.1);
      }
      return Math.abs(pos - layer) < 0.1;
    });

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
  const is2x2 = currentPattern && currentPattern.type === '2x2x2';
  const is4x4 = currentPattern && currentPattern.type === '4x4x4';
  pivot.updateMatrixWorld();
  activeCubies.forEach(c => {
    cubeGroup.attach(c);
    if (is2x2 || is4x4) {
      c.position.x = Math.round(c.position.x * 2) / 2;
      c.position.y = Math.round(c.position.y * 2) / 2;
      c.position.z = Math.round(c.position.z * 2) / 2;
    } else {
      c.position.x = Math.round(c.position.x);
      c.position.y = Math.round(c.position.y);
      c.position.z = Math.round(c.position.z);
    }

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

const MOVES_3X3 = {
  'L': ['x', -1, Math.PI / 2], 'M': ['x', 0, Math.PI / 2], 'R': ['x', 1, -Math.PI / 2],
  'U': ['y', 1, -Math.PI / 2], 'E': ['y', 0, Math.PI / 2], 'D': ['y', -1, Math.PI / 2],
  'F': ['z', 1, -Math.PI / 2], 'S': ['z', 0, -Math.PI / 2], 'B': ['z', -1, Math.PI / 2],
  'x': ['x', [-1, 0, 1], -Math.PI / 2], 'y': ['y', [-1, 0, 1], -Math.PI / 2], 'z': ['z', [-1, 0, 1], -Math.PI / 2]
};

const MOVES_2X2 = {
  'L': ['x', -0.5, Math.PI / 2], 'R': ['x', 0.5, -Math.PI / 2],
  'U': ['y', 0.5, -Math.PI / 2], 'D': ['y', -0.5, Math.PI / 2],
  'F': ['z', 0.5, -Math.PI / 2], 'B': ['z', -0.5, Math.PI / 2],
  'x': ['x', [-0.5, 0.5], -Math.PI / 2], 'y': ['y', [-0.5, 0.5], -Math.PI / 2], 'z': ['z', [-0.5, 0.5], -Math.PI / 2]
};

const MOVES_4X4 = {
  'L': ['x', [-1.5], Math.PI / 2], 'R': ['x', [1.5], -Math.PI / 2],
  'U': ['y', [1.5], -Math.PI / 2], 'D': ['y', [-1.5], Math.PI / 2],
  'F': ['z', [1.5], -Math.PI / 2], 'B': ['z', [-1.5], Math.PI / 2],
  'Lw': ['x', [-1.5, -0.5], Math.PI / 2], 'Rw': ['x', [1.5, 0.5], -Math.PI / 2],
  'Uw': ['y', [1.5, 0.5], -Math.PI / 2], 'Dw': ['y', [-1.5, -0.5], Math.PI / 2],
  'Fw': ['z', [1.5, 0.5], -Math.PI / 2], 'Bw': ['z', [-1.5, -0.5], Math.PI / 2],
  'l': ['x', [-0.5], Math.PI / 2], 'r': ['x', [0.5], -Math.PI / 2],
  'u': ['y', [0.5], -Math.PI / 2], 'd': ['y', [-0.5], Math.PI / 2],
  'f': ['z', [0.5], -Math.PI / 2], 'b': ['z', [-0.5], Math.PI / 2],
  'M': ['x', [-0.5, 0.5], Math.PI / 2], 'E': ['y', [-0.5, 0.5], Math.PI / 2], 'S': ['z', [-0.5, 0.5], -Math.PI / 2],
  'x': ['x', [-1.5, -0.5, 0.5, 1.5], -Math.PI / 2], 'y': ['y', [-1.5, -0.5, 0.5, 1.5], -Math.PI / 2], 'z': ['z', [-1.5, -0.5, 0.5, 1.5], -Math.PI / 2]
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
  initCube(p.type);

  const MOVES = p.type === '2x2x2' ? MOVES_2X2 : (p.type === '4x4x4' ? MOVES_4X4 : MOVES_3X3);

  // Parse moves exactly as they are written to form the pattern
  const rawMovesArray = p.moves.trim().split(/\s+/).filter(m => m);
  solutionSteps = [];

  for (let m of rawMovesArray) {
    let face = m.replace(/[2']+/g, "");
    let modifier = m.replace(/^[a-zA-Z]+/g, "");

    let moveDef = MOVES[face];
    if (!moveDef) {
      console.warn("Unknown move notation:", face, "in", m);
      continue;
    }
    let angle = moveDef[2];
    if (modifier.includes("'")) angle = -angle;
    if (modifier.includes("2")) angle = angle * 2;

    solutionSteps.push({ raw: m, axis: moveDef[0], layer: moveDef[1], angle: angle });
  }

  currentStepIndex = 0;
  lastActionDirection = 1;

  window.history.pushState({}, '', BASE_PATH + '/cube-arts/play/' + encodeURIComponent(p.id));
  window.dispatchEvent(new Event('popstate'));

  container.style.display = 'block';
  updatePlaybackUI();
}

const FACE_NAMES = {
  'U': 'TOP', 'D': 'BOTTOM', 'F': 'FRONT', 'B': 'BACK', 'L': 'LEFT', 'R': 'RIGHT',
  'M': 'MIDDLE', 'E': 'EQUATOR', 'S': 'STANDING',
  'l': 'LEFT INNER', 'r': 'RIGHT INNER', 'u': 'TOP INNER', 'd': 'BOTTOM INNER', 'f': 'FRONT INNER', 'b': 'BACK INNER',
  'Lw': 'LEFT WIDE', 'Rw': 'RIGHT WIDE', 'Uw': 'TOP WIDE', 'Dw': 'BOTTOM WIDE', 'Fw': 'FRONT WIDE', 'Bw': 'BACK WIDE',
  'x': 'ENTIRE CUBE (X-axis)', 'y': 'ENTIRE CUBE (Y-axis)', 'z': 'ENTIRE CUBE (Z-axis)'
};

function getHumanReadableMove(rawMove) {
  const face = rawMove.replace(/[2']+/g, "");
  const mod = rawMove.replace(/^[a-zA-Z]+/g, "");
  const faceName = FACE_NAMES[face] || face;
  if (mod.includes("'")) return `Turn the ${faceName} layer 90° counterclockwise.`;
  if (mod.includes("2")) return `Turn the ${faceName} layer 180°.`;
  return `Turn the ${faceName} layer 90° clockwise.`;
}

function getReverseHumanReadableMove(rawMove) {
  const face = rawMove.replace(/[2']+/g, "");
  const mod = rawMove.replace(/^[a-zA-Z]+/g, "");
  const faceName = FACE_NAMES[face] || face;
  if (mod.includes("'")) return `Turn the ${faceName} layer 90° clockwise.`;
  if (mod.includes("2")) return `Turn the ${faceName} layer 180°.`;
  return `Turn the ${faceName} layer 90° counterclockwise.`;
}

function getInverseMoveNotation(rawMove) {
  const face = rawMove.replace(/[2']+/g, "");
  const mod = rawMove.replace(/^[a-zA-Z]+/g, "");
  if (mod.includes("'")) return face;
  if (mod.includes("2")) return face + "2'";
  return face + "'";
}

function updatePlaybackUI() {
  const humanInstruction = document.getElementById('artInstruction');
  const solutionText = document.getElementById('artSolutionText');
  const btnSideBack = document.getElementById('btnArtSideBack');
  const btnSideNext = document.getElementById('btnArtSideNext');
  const artBadge = document.getElementById('artBadge');

  if (currentPattern) {
    artBadge.innerText = `${currentPattern.id} - ${currentPattern.name}`;
  }

  // View button should ONLY be visible when the pattern is fully completed
  if (currentStepIndex >= solutionSteps.length && lastActionDirection === 1) {
    btnViewPattern.classList.remove('d-none');
  } else {
    btnViewPattern.classList.add('d-none');
  }

  if (currentStepIndex === 0 && lastActionDirection === 1) {
    humanInstruction.innerText = "READY TO MAKE";
    solutionText.innerHTML = `Hold your SOLVED Cube as shown below, press "Next" to start.`;
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
    btnSideNext.innerHTML = 'Done';
  } else {
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
  }
}

function openPatternModal() {
  if (!modalRenderer) initModalScene();

  isModalActive = true;
  patternViewOverlay.classList.remove('d-none');
  modalPatternName.innerText = currentPattern.id + " - " + currentPattern.name;

  // Sync modal cube with current cube
  modalCubies.forEach(c => modalCubeGroup.remove(c));
  modalCubies = [];

  cubies.forEach(cubie => {
    const clone = cubie.clone();
    // We need to clone materials to avoid sharing state if we wanted to animate, 
    // but for static view it's mostly fine. However, let's ensure stickers are correct.
    modalCubeGroup.add(clone);
    modalCubies.push(clone);
  });

  // Dynamic zoom for modal view
  if (currentPattern && currentPattern.type === '2x2x2') {
    modalCamera.position.set(2.5, 2.5, 3.75);
  } else if (currentPattern && currentPattern.type === '4x4x4') {
    modalCamera.position.set(4, 4, 6);
  } else {
    modalCamera.position.set(3.3, 3.3, 4.9);
  }

  // Handle resize for modal
  const width = modalCubeContainer.clientWidth;
  const height = modalCubeContainer.clientHeight;
  modalCamera.aspect = width / height;
  modalCamera.updateProjectionMatrix();
  modalRenderer.setSize(width, height);
}

function closePatternModal() {
  isModalActive = false;
  patternViewOverlay.classList.add('d-none');
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
btnViewPattern.addEventListener('click', openPatternModal);
closePatternModalBtn.addEventListener('click', closePatternModal);
patternViewOverlay.addEventListener('click', (e) => {
  if (e.target === patternViewOverlay) closePatternModal();
});

function animate(time) {
  requestAnimationFrame(animate);
  if (isActive && container.style.display !== 'none') {
    TWEEN.update(time);
    if (!isModalActive) {
      controls.update();
      renderer.render(scene, camera);
    }
  }

  if (isModalActive && modalRenderer) {
    modalControls.update();
    modalRenderer.render(modalScene, modalCamera);
  }
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Init if we load initially on this route
(function () {
  const raw = decodeURIComponent(window.location.pathname).replace(/\/$/, '');
  let routePath = raw;
  if (BASE_PATH && raw.startsWith(BASE_PATH)) {
    routePath = raw.slice(BASE_PATH.length) || '/';
  }
  if (routePath === '/cube-arts') {
    loadCubeArts();
  }
})();
