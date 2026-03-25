import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as TWEEN from '@tweenjs/tween.js';
import Cube from 'cubejs';

setTimeout(() => Cube.initSolver(), 100);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
document.getElementById('app').appendChild(renderer.domElement);
document.body.style.background = 'radial-gradient(ellipse at center, #ffffff 0%, #a8d4f5 100%)';

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

// Mode Switching, Raycasting, and Solver UI Elements
let currentMode = 'home';
let selectedColorHex = 0xFFFFFF;

const homeView = document.getElementById('home-view');
const solveView = document.getElementById('solve-view');
const navHome = document.getElementById('navHome');
const navSolve = document.getElementById('navSolve');
const paintPhase = document.getElementById('paint-phase');
const playbackPhase = document.getElementById('playback-phase');
const solverStatus = document.querySelector('.solver-status');
const cubeSolvedMsg = document.getElementById('cubeSolvedMsg');

navHome.addEventListener('click', () => setMode('home'));
navSolve.addEventListener('click', () => setMode('solve'));

function setMode(mode) {
  if (isAnimating) return;
  currentMode = mode;
  if (cubeSolvedMsg) cubeSolvedMsg.classList.add('d-none');

  if (mode === 'home') {
    controls.enableRotate = true;
    controls.enableZoom = true;

    navHome.classList.add('active');
    navSolve.classList.remove('active');
    homeView.classList.remove('d-none');
    solveView.classList.add('d-none');

    paintPhase.classList.remove('d-none');
    playbackPhase.classList.add('d-none');
    solverStatus.innerText = "";

    scene.traverse(child => {
      if (child.userData.isSticker) {
        child.material.color.setHex(child.userData.originalColor);
      }
    });
  } else if (mode === 'solve') {
    controls.enableRotate = false;
    controls.enableZoom = false;

    navSolve.classList.add('active');
    navHome.classList.remove('active');
    solveView.classList.remove('d-none');
    homeView.classList.add('d-none');

    paintPhase.classList.remove('d-none');
    playbackPhase.classList.add('d-none');
    solverStatus.innerText = "";

    scene.traverse(child => {
      if (child.userData.isSticker) {
        child.material.color.setHex(0x555555);
      }
    });
  }
}

// Swatch Selection
const swatches = document.querySelectorAll('.swatch');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    selectedColorHex = parseInt(swatch.dataset.color, 16);
  });
});

// Tile Painting Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

const OPPOSITE_COLORS = {
  0xFFFFFF: 0xFFD500, 0xFFD500: 0xFFFFFF,
  0x0051BA: 0x009E60, 0x009E60: 0x0051BA,
  0xC41E3A: 0xFF5800, 0xFF5800: 0xC41E3A,
  0x2A62C9: 0x3DBD62, 0x3DBD62: 0x2A62C9,
  0xDFBD28: 0xFFFFFF
};

window.addEventListener('pointerdown', (e) => {
  if (e.target !== renderer.domElement) return;
  pointerDownPos.x = e.clientX;
  pointerDownPos.y = e.clientY;
});

window.addEventListener('pointerup', (e) => {
  if (currentMode !== 'solve') return;
  if (e.target !== renderer.domElement) return;
  if (!playbackPhase.classList.contains('d-none')) return; // Disallow painting during playback UI
  if (isAnimating) return; // Prevent painting while checking visibility over uncommitted rotations

  const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
  if (dist > 5) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cubeGroup.children, true);

  const hit = intersects.find(i => {
    if (!i.object.userData.isSticker) return false;
    const pos = new THREE.Vector3();
    i.object.getWorldPosition(pos);
    // Only accept hits on the 3 camera-facing sides (X+, Y+, Z+)
    return pos.x > 1.4 || pos.y > 1.4 || pos.z > 1.4;
  });

  if (hit) {
    hit.object.material = hit.object.material.clone();
    hit.object.material.color.setHex(selectedColorHex);

    const cubieGroup = hit.object.parent;
    
    const absSum = Math.abs(Math.round(cubieGroup.position.x)) + 
                   Math.abs(Math.round(cubieGroup.position.y)) + 
                   Math.abs(Math.round(cubieGroup.position.z));

    if (absSum === 1 && OPPOSITE_COLORS[selectedColorHex] !== undefined) {
      const oppX = -Math.round(cubieGroup.position.x);
      const oppY = -Math.round(cubieGroup.position.y);
      const oppZ = -Math.round(cubieGroup.position.z);
      const oppCubie = cubies.find(c => 
        Math.round(c.position.x) === oppX && 
        Math.round(c.position.y) === oppY && 
        Math.round(c.position.z) === oppZ
      );
      if (oppCubie) {
        const oppSticker = oppCubie.children.find(child => child.userData && child.userData.isSticker);
        if (oppSticker) {
          oppSticker.material = oppSticker.material.clone();
          oppSticker.material.color.setHex(OPPOSITE_COLORS[selectedColorHex]);
        }
      }
    } else {
      setTimeout(() => autoDeducePieces(), 0);
    }

    autoFillCenters();
  }
});

const ALL_COLORS = [0xFFFFFF, 0xFFD500, 0x0051BA, 0x009E60, 0xC41E3A, 0xFF5800];

const VALID_EDGES = [];
for (let i = 0; i < ALL_COLORS.length; i++) {
  for (let j = i + 1; j < ALL_COLORS.length; j++) {
    const c1 = ALL_COLORS[i];
    const c2 = ALL_COLORS[j];
    if (OPPOSITE_COLORS[c1] !== c2) {
      VALID_EDGES.push([c1, c2]);
    }
  }
}

const VALID_CORNERS = [];
for (let i = 0; i < ALL_COLORS.length; i++) {
  for (let j = i + 1; j < ALL_COLORS.length; j++) {
    for (let k = j + 1; k < ALL_COLORS.length; k++) {
      const c1 = ALL_COLORS[i];
      const c2 = ALL_COLORS[j];
      const c3 = ALL_COLORS[k];
      if (OPPOSITE_COLORS[c1] !== c2 && OPPOSITE_COLORS[c1] !== c3 && OPPOSITE_COLORS[c2] !== c3) {
        VALID_CORNERS.push([c1, c2, c3]);
      }
    }
  }
}

function autoDeducePieces() {
  let madeChanges = false;
  
  const pieces = [];
  cubies.forEach(cubie => {
    const stickers = cubie.children.filter(c => c.userData && c.userData.isSticker);
    if (stickers.length > 1) { // 2 for edge, 3 for corner
      pieces.push({
        cubie,
        stickers,
        colors: stickers.map(s => s.material.color.getHex()),
        isEdge: stickers.length === 2,
        isCorner: stickers.length === 3
      });
    }
  });

  const fullyPaintedEdges = pieces.filter(p => p.isEdge && !p.colors.includes(0x555555)).map(p => p.colors);
  const fullyPaintedCorners = pieces.filter(p => p.isCorner && !p.colors.includes(0x555555)).map(p => p.colors);

  pieces.forEach(p => {
    if (p.colors.includes(0x555555)) {
      const paintedColors = p.colors.filter(c => c !== 0x555555);
      
      if (p.isEdge && paintedColors.length === 1) {
        const c1 = paintedColors[0];
        const possiblePairs = VALID_EDGES.filter(pair => pair.includes(c1));
        const remainingPairs = possiblePairs.filter(pair => {
            return !fullyPaintedEdges.some(fp => fp.includes(pair[0]) && fp.includes(pair[1]));
        });
        
        if (remainingPairs.length === 1) {
            const deducedColor = remainingPairs[0].find(c => c !== c1);
            const unpaintedSticker = p.stickers.find(s => s.material.color.getHex() === 0x555555);
            if (unpaintedSticker) {
              unpaintedSticker.material = unpaintedSticker.material.clone();
              unpaintedSticker.material.color.setHex(deducedColor);
              madeChanges = true;
            }
        }
      } 
      else if (p.isCorner && paintedColors.length === 2) {
        const c1 = paintedColors[0];
        const c2 = paintedColors[1];
        const possibleTriplets = VALID_CORNERS.filter(trip => trip.includes(c1) && trip.includes(c2));
        const remainingTriplets = possibleTriplets.filter(trip => {
           return !fullyPaintedCorners.some(fp => fp.includes(trip[0]) && fp.includes(trip[1]) && fp.includes(trip[2]));
        });
        
        if (remainingTriplets.length === 1) {
           const deducedColor = remainingTriplets[0].find(c => c !== c1 && c !== c2);
           const unpaintedSticker = p.stickers.find(s => s.material.color.getHex() === 0x555555);
           if (unpaintedSticker) {
             unpaintedSticker.material = unpaintedSticker.material.clone();
             unpaintedSticker.material.color.setHex(deducedColor);
             madeChanges = true;
           }
        }
      }
    }
  });

  if (madeChanges) {
    autoDeducePieces();
  }
}

const CANONICAL_NORMALS = {
  0xFFFFFF: new THREE.Vector3(0, 1, 0),
  0xFFD500: new THREE.Vector3(0, -1, 0),
  0xDFBD28: new THREE.Vector3(0, -1, 0),
  0xC41E3A: new THREE.Vector3(0, 0, 1),
  0xFF5800: new THREE.Vector3(0, 0, -1),
  0x0051BA: new THREE.Vector3(1, 0, 0),
  0x2A62C9: new THREE.Vector3(1, 0, 0),
  0x009E60: new THREE.Vector3(-1, 0, 0),
  0x3DBD62: new THREE.Vector3(-1, 0, 0)
};

const COLOR_FROM_NORMAL = {
  "0,1,0": 0xFFFFFF, "0,-1,0": 0xFFD500,
  "0,0,1": 0xC41E3A, "0,0,-1": 0xFF5800,
  "1,0,0": 0x0051BA, "-1,0,0": 0x009E60
};

function autoFillCenters() {
  const centerStickers = [];
  cubies.forEach(c => {
    if (Math.abs(Math.round(c.position.x)) + Math.abs(Math.round(c.position.y)) + Math.abs(Math.round(c.position.z)) === 1) {
      const st = c.children.find(child => child.userData && child.userData.isSticker);
      if (st) {
        centerStickers.push({
          sticker: st,
          normal: new THREE.Vector3(Math.round(c.position.x), Math.round(c.position.y), Math.round(c.position.z)),
          color: st.material.color.getHex()
        });
      }
    }
  });

  const painted = centerStickers.filter(s => s.color !== 0x555555);
  let s1 = null, s2 = null;
  for (let i = 0; i < painted.length; i++) {
    for (let j = i + 1; j < painted.length; j++) {
      if (painted[i].normal.dot(painted[j].normal) === 0) { 
        s1 = painted[i];
        s2 = painted[j];
        break;
      }
    }
    if (s1) break;
  }

  if (s1 && s2) {
    const v1 = CANONICAL_NORMALS[s1.color];
    const v2 = CANONICAL_NORMALS[s2.color];
    if (!v1 || !v2) return;
    
    const n3 = new THREE.Vector3().crossVectors(s1.normal, s2.normal);
    const v3 = new THREE.Vector3().crossVectors(v1, v2);
    
    const mapping = [
      { n: s1.normal, v: v1 },
      { n: new THREE.Vector3(-s1.normal.x, -s1.normal.y, -s1.normal.z), v: new THREE.Vector3(-v1.x, -v1.y, -v1.z) },
      { n: s2.normal, v: v2 },
      { n: new THREE.Vector3(-s2.normal.x, -s2.normal.y, -s2.normal.z), v: new THREE.Vector3(-v2.x, -v2.y, -v2.z) },
      { n: n3, v: v3 },
      { n: new THREE.Vector3(-n3.x, -n3.y, -n3.z), v: new THREE.Vector3(-v3.x, -v3.y, -v3.z) }
    ];
    
    centerStickers.forEach(cs => {
      const mapItem = mapping.find(m => m.n.equals(cs.normal));
      if (mapItem) {
        const canonicalKey = `${Math.round(mapItem.v.x)},${Math.round(mapItem.v.y)},${Math.round(mapItem.v.z)}`;
        const targetHex = COLOR_FROM_NORMAL[canonicalKey];
        if (targetHex !== undefined && cs.color !== targetHex) {
          cs.sticker.material = cs.sticker.material.clone();
          cs.sticker.material.color.setHex(targetHex);
        }
      }
    });
  }
}

// Paint mode rotations and reset
function rotateWholeCube(axis, angle) {
  if (isAnimating) return;
  isAnimating = true;

  const pivot = new THREE.Group();
  cubeGroup.add(pivot);
  cubies.forEach(c => pivot.attach(c));

  new TWEEN.Tween({ val: 0 })
    .to({ val: angle }, 300)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate((obj) => pivot.rotation[axis] = obj.val)
    .onComplete(() => finishRotation(pivot, cubies))
    .start();
}

document.getElementById('rotLeft').addEventListener('click', () => rotateWholeCube('y', -Math.PI / 2));
document.getElementById('rotRight').addEventListener('click', () => rotateWholeCube('y', Math.PI / 2));
document.getElementById('rotUp').addEventListener('click', () => rotateWholeCube('x', -Math.PI / 2));
document.getElementById('rotDown').addEventListener('click', () => rotateWholeCube('x', Math.PI / 2));

const confirmResetOverlay = document.getElementById('confirmResetOverlay');
document.getElementById('btnPaintReset').addEventListener('click', () => {
  confirmResetOverlay.classList.remove('d-none');
});
document.getElementById('confirmResetCancel').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
});
document.getElementById('confirmResetOk').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
  scene.traverse(child => {
    if (child.userData.isSticker) child.material.color.setHex(0x555555);
  });
});
confirmResetOverlay.addEventListener('click', (e) => {
  if (e.target === confirmResetOverlay) confirmResetOverlay.classList.add('d-none');
});

// ==== AUTO SOLVER LOGIC ====
let solutionSteps = [];
let currentStepIndex = 0;
let lastActionDirection = 1;

const btnStartSolve = document.getElementById('btnStartSolve');
const btnSideBack = document.getElementById('btnSideBack');
const btnSideNext = document.getElementById('btnSideNext');
const solutionText = document.getElementById('solutionText');
const humanInstruction = document.getElementById('humanInstruction');

function getCubeString() {
  let getColor = (x, y, z, faceAxis) => {
    const cubie = cubies.find(c => Math.round(c.position.x) === x && Math.round(c.position.y) === y && Math.round(c.position.z) === z);
    if (!cubie) throw new Error(`Missing cubie at ${x},${y},${z}`);

    const sticker = cubie.children.find(child => {
      if (!child.userData || !child.userData.isSticker) return false;
      const childWorldPos = new THREE.Vector3();
      child.getWorldPosition(childWorldPos);
      const cubieWorldPos = new THREE.Vector3();
      cubie.getWorldPosition(cubieWorldPos);
      const diff = childWorldPos.clone().sub(cubieWorldPos);
      return Math.abs(diff[faceAxis]) > 0.1;
    });

    if (!sticker) throw new Error(`Missing sticker on face ${faceAxis} at ${x},${y},${z}`);
    if (sticker.material.color.getHex() === 0x555555) throw new Error("Cube is not fully painted!");
    return sticker.material.color.getHex();
  };

  const centerColors = {};
  centerColors[getColor(0, 1, 0, 'y')] = 'U';
  centerColors[getColor(1, 0, 0, 'x')] = 'R';
  centerColors[getColor(0, 0, 1, 'z')] = 'F';
  centerColors[getColor(0, -1, 0, 'y')] = 'D';
  centerColors[getColor(-1, 0, 0, 'x')] = 'L';
  centerColors[getColor(0, 0, -1, 'z')] = 'B';

  if (Object.keys(centerColors).length !== 6) throw new Error("Center tiles must have 6 distinct colors! Ensure the middle of each face is uniquely colored.");

  let str = '';
  // Form U (Top)
  for (let z of [-1, 0, 1]) for (let x of [-1, 0, 1]) str += centerColors[getColor(x, 1, z, 'y')];
  // R (Right)
  for (let y of [1, 0, -1]) for (let z of [1, 0, -1]) str += centerColors[getColor(1, y, z, 'x')];
  // F (Front)
  for (let y of [1, 0, -1]) for (let x of [-1, 0, 1]) str += centerColors[getColor(x, y, 1, 'z')];
  // D (Bottom)
  for (let z of [1, 0, -1]) for (let x of [-1, 0, 1]) str += centerColors[getColor(x, -1, z, 'y')];
  // L (Left)
  for (let y of [1, 0, -1]) for (let z of [-1, 0, 1]) str += centerColors[getColor(-1, y, z, 'x')];
  // B (Back)
  for (let y of [1, 0, -1]) for (let x of [1, 0, -1]) str += centerColors[getColor(x, y, -1, 'z')];

  return str;
}

const errorPopupOverlay = document.getElementById('errorPopupOverlay');
const errorList = document.getElementById('errorList');
document.getElementById('errorPopupClose').addEventListener('click', () => {
  errorPopupOverlay.classList.add('d-none');
});
errorPopupOverlay.addEventListener('click', (e) => {
  if (e.target === errorPopupOverlay) errorPopupOverlay.classList.add('d-none');
});

const HEX_TO_NAME = {
  0xFFFFFF: 'white', 0xFFD500: 'yellow', 0x0051BA: 'blue',
  0x009E60: 'green', 0xC41E3A: 'red', 0xFF5800: 'orange',
  0xDFBD28: 'yellow', 0x2A62C9: 'blue', 0x3DBD62: 'green'
};
const EXPECTED_COLORS = [0xFFFFFF, 0xFFD500, 0x0051BA, 0x009E60, 0xC41E3A, 0xFF5800];

function showErrorPopup(messages) {
  errorList.innerHTML = '';
  messages.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = msg;
    errorList.appendChild(li);
  });
  errorPopupOverlay.classList.remove('d-none');
  solverStatus.innerText = '';
}

btnStartSolve.addEventListener('click', () => {
  try {
    solverStatus.innerText = "Validating...";
    
    const colorCounts = {};
    let hasUnpainted = false;
    const paintedPieces = [];
    
    cubies.forEach(cubie => {
      const stickers = cubie.children.filter(c => c.userData && c.userData.isSticker);
      const pieceColors = [];
      stickers.forEach(s => {
        const hex = s.material.color.getHex();
        if (hex === 0x555555) hasUnpainted = true;
        else {
          colorCounts[hex] = (colorCounts[hex] || 0) + 1;
          pieceColors.push(hex);
        }
      });
      if (pieceColors.length > 0) paintedPieces.push({ cubie, colors: pieceColors });
    });

    if (hasUnpainted) {
      const errors = ['You have unpainted tiles on the cube.'];
      // Also check color counts for helpful hints
      EXPECTED_COLORS.forEach(hex => {
        const name = HEX_TO_NAME[hex];
        const count = colorCounts[hex] || 0;
        if (count < 9) errors.push(`You do not have enough ${name} tiles.`);
        else if (count > 9) errors.push(`You have too many ${name} tiles.`);
      });
      showErrorPopup(errors);
      return;
    }

    // Check color counts
    const colorErrors = [];
    EXPECTED_COLORS.forEach(hex => {
      const name = HEX_TO_NAME[hex];
      const count = colorCounts[hex] || 0;
      if (count < 9) colorErrors.push(`You do not have enough ${name} tiles.`);
      else if (count > 9) colorErrors.push(`You have too many ${name} tiles.`);
    });

    // Check for colors not in the expected set
    const usedHexes = Object.keys(colorCounts).map(Number);
    const unexpectedColors = usedHexes.filter(h => !EXPECTED_COLORS.includes(h));
    if (unexpectedColors.length > 0) {
      colorErrors.push('Some tiles use unexpected colors.');
    }

    if (colorErrors.length > 0) {
      showErrorPopup(colorErrors);
      return;
    }

    // Validate opposite colors on pieces
    const centerPieces = paintedPieces.filter(p => p.colors.length === 1);
    if (centerPieces.length !== 6) {
      showErrorPopup(['Invalid center pieces detected.']);
      return;
    }
    
    const centerOpposites = new Map();
    centerPieces.forEach(p => {
      const x = Math.round(p.cubie.position.x);
      const y = Math.round(p.cubie.position.y);
      const z = Math.round(p.cubie.position.z);
      const oppP = centerPieces.find(op => 
        Math.round(op.cubie.position.x) === -x && 
        Math.round(op.cubie.position.y) === -y && 
        Math.round(op.cubie.position.z) === -z
      );
      if (oppP) centerOpposites.set(p.colors[0], oppP.colors[0]);
    });

    let edgeErrors = 0;
    let cornerErrors = 0;
    paintedPieces.forEach(p => {
      if (p.colors.length > 1) {
        let hasError = false;
        for (let i = 0; i < p.colors.length; i++) {
          for (let j = i + 1; j < p.colors.length; j++) {
             const c1 = p.colors[i];
             const c2 = p.colors[j];
             if (centerOpposites.get(c1) === c2) {
               hasError = true;
             }
          }
        }
        if (hasError) {
          if (p.colors.length === 2) edgeErrors++;
          else if (p.colors.length === 3) cornerErrors++;
        }
      }
    });

    const totalPieceErrors = edgeErrors + cornerErrors;
    if (totalPieceErrors > 0) {
      const errors = [];
      if (edgeErrors > 0) errors.push(`${edgeErrors} edge piece(s) have opposite face colors.`);
      if (cornerErrors > 0) errors.push(`${cornerErrors} corner piece(s) have opposite face colors.`);
      showErrorPopup(errors);
      return;
    }

    solverStatus.innerText = "Calculating...";
    const stateStr = getCubeString();

    const cube = Cube.fromString(stateStr);
    const solution = cube.solve();

    solutionSteps = [];
    const movesArr = solution.split(' ').filter(m => m);
    for (let m of movesArr) {
      let face = m[0];
      let modifier = m.length > 1 ? m[1] : '';

      let moveDef = MOVES[face];
      let angle = moveDef[2];
      if (modifier === "'") angle = -angle;
      if (modifier === "2") angle = angle * 2;

      solutionSteps.push({ raw: m, axis: moveDef[0], layer: moveDef[1], angle: angle });
    }

    currentStepIndex = 0;
    lastActionDirection = 1;
    paintPhase.classList.add('d-none');
    playbackPhase.classList.remove('d-none');
    controls.enableRotate = false;
    controls.enableZoom = false;
    updatePlaybackUI();

  } catch (err) {
    showErrorPopup(['Your puzzle cannot be solved.']);
    console.error(err);
  }
});

const FACE_NAMES = { 'U': 'TOP', 'D': 'BOTTOM', 'F': 'FRONT', 'B': 'BACK', 'L': 'LEFT', 'R': 'RIGHT' };

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
  if (mod === "2") return face + "2'";
  return face + "'";
}

function updatePlaybackUI() {
  if (currentStepIndex === 0 && lastActionDirection === 1) {
    humanInstruction.innerText = "READY TO SOLVE!";
    solutionText.innerHTML = `Hold your puzzle as shown below, hit "next" to start.`;
    btnSideBack.disabled = true;
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
    if (cubeSolvedMsg) cubeSolvedMsg.classList.add('d-none');
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
    if (cubeSolvedMsg) cubeSolvedMsg.classList.add('d-none');
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
    btnSideNext.innerHTML = 'Done!';
    if (cubeSolvedMsg) cubeSolvedMsg.classList.remove('d-none');
  } else {
    btnSideNext.disabled = false;
    btnSideNext.innerHTML = 'Next &gt;';
    if (cubeSolvedMsg) cubeSolvedMsg.classList.add('d-none');
  }
}

async function handleNext() {
  if (isAnimating || currentStepIndex >= solutionSteps.length) return;
  let move = solutionSteps[currentStepIndex];
  lastActionDirection = 1;
  currentStepIndex++;
  updatePlaybackUI();
  await rotateLayer(move.axis, move.layer, move.angle, 600); // 600ms default speed
}

async function handleBack() {
  if (isAnimating || currentStepIndex <= 0) return;
  currentStepIndex--;
  lastActionDirection = -1;
  let move = solutionSteps[currentStepIndex];
  updatePlaybackUI();
  await rotateLayer(move.axis, move.layer, -move.angle, 600); // reverse angle for back step
}

btnSideNext.addEventListener('click', handleNext);
btnSideBack.addEventListener('click', handleBack);

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
