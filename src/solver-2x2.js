import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as TWEEN from '@tweenjs/tween.js';
import Cube from 'cubejs';

setTimeout(() => Cube.initSolver(), 100);

const container = document.getElementById('app-2x2');
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
controls.enableRotate = false;
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

const canvas = document.createElement('canvas');
canvas.width = 256; canvas.height = 256;
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
  color, roughness: 0.9, metalness: 0.1, bumpMap: noiseTexture, bumpScale: 0.003
});

for (let x of [-0.5, 0.5]) {
  for (let y of [-0.5, 0.5]) {
    for (let z of [-0.5, 0.5]) {
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

      if (x === 0.5) addSticker(stickerGeometryX, colors.right, [0.49, 0, 0]);
      if (x === -0.5) addSticker(stickerGeometryX, colors.left, [-0.49, 0, 0]);
      if (y === 0.5) addSticker(stickerGeometryY, colors.top, [0, 0.49, 0]);
      if (y === -0.5) addSticker(stickerGeometryY, colors.bottom, [0, -0.49, 0]);
      if (z === 0.5) addSticker(stickerGeometryZ, colors.front, [0, 0, 0.49]);
      if (z === -0.5) addSticker(stickerGeometryZ, colors.back, [0, 0, -0.49]);

      cubeGroup.add(cubieGroup);
      cubies.push(cubieGroup);
    }
  }
}

// Visual scaling to match aesthetic dimensions
cubeGroup.scale.set(1.5, 1.5, 1.5);

let isAnimating = false;

function rotateLayer(axis, layer, angle, duration = 300) {
  return new Promise((resolve) => {
    if (isAnimating && duration > 0) return;
    isAnimating = true;

    const activeCubies = cubies.filter(c => Math.abs(c.position[axis] - layer) < 0.1);

    const pivot = new THREE.Group();
    cubeGroup.add(pivot);
    activeCubies.forEach(c => pivot.attach(c));

    if (duration > 0) {
      new TWEEN.Tween({ val: 0 })
        .to({ val: angle }, duration)
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
    c.position.x = Math.round(c.position.x * 2) / 2;
    c.position.y = Math.round(c.position.y * 2) / 2;
    c.position.z = Math.round(c.position.z * 2) / 2;

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
  'L': ['x', -0.5, Math.PI / 2], 'R': ['x', 0.5, -Math.PI / 2],
  'U': ['y', 0.5, -Math.PI / 2], 'D': ['y', -0.5, Math.PI / 2],
  'F': ['z', 0.5, -Math.PI / 2], 'B': ['z', -0.5, Math.PI / 2]
};

// Mode handling
let isActive = false;
window.addEventListener('route-changed', (e) => {
  const path = e.detail;
  if (path === '/solver/2x2x2 cube' || path === '/solver/2x2x2-cube') {
    isActive = true;
    container.style.display = 'block';
    
    // Reset all stickers to unpainted placeholder when entering mode
    scene.traverse(child => {
      if (child.userData.isSticker) {
        child.material.color.setHex(0x555555);
      }
    });

    document.getElementById('paint-phase-2x2').classList.remove('d-none');
    document.getElementById('playback-phase-2x2').classList.add('d-none');
    document.getElementById('solver-status-2x2').innerText = "";
    document.getElementById('cubeSolvedMsg-2x2').classList.add('d-none');
  } else {
    isActive = false;
    container.style.display = 'none';
    const solvedMsg = document.getElementById('cubeSolvedMsg-2x2');
    if (solvedMsg) solvedMsg.classList.add('d-none');
  }
});

let selectedColorHex = 0xFFFFFF;
const swatches = document.querySelectorAll('.swatch-2x2');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    selectedColorHex = parseInt(swatch.dataset.color, 16);
  });
});

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
  if (!isActive) return;
  if (e.target !== renderer.domElement) return;
  pointerDownPos.x = e.clientX;
  pointerDownPos.y = e.clientY;
});

window.addEventListener('pointerup', (e) => {
  if (!isActive) return;
  if (e.target !== renderer.domElement) return;
  if (!document.getElementById('playback-phase-2x2').classList.contains('d-none')) return;
  if (isAnimating) return;

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
    return pos.x > 0.8 || pos.y > 0.8 || pos.z > 0.8; 
  });

  if (hit) {
    hit.object.material = hit.object.material.clone();
    hit.object.material.color.setHex(selectedColorHex);
    setTimeout(() => autoDeducePieces(), 0);
  }
});

const ALL_COLORS = [0xFFFFFF, 0xFFD500, 0x0051BA, 0x009E60, 0xC41E3A, 0xFF5800];
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
    if (stickers.length === 3) {
      pieces.push({
        cubie,
        stickers,
        colors: stickers.map(s => s.material.color.getHex())
      });
    }
  });

  const fullyPaintedCorners = pieces.filter(p => !p.colors.includes(0x555555)).map(p => p.colors);

  pieces.forEach(p => {
    if (p.colors.includes(0x555555)) {
      const paintedColors = p.colors.filter(c => c !== 0x555555);
      
      if (paintedColors.length === 2) {
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

document.getElementById('rotLeft-2x2').addEventListener('click', () => rotateWholeCube('y', -Math.PI / 2));
document.getElementById('rotRight-2x2').addEventListener('click', () => rotateWholeCube('y', Math.PI / 2));
document.getElementById('rotUp-2x2').addEventListener('click', () => rotateWholeCube('x', -Math.PI / 2));
document.getElementById('rotDown-2x2').addEventListener('click', () => rotateWholeCube('x', Math.PI / 2));

const confirmResetOverlay = document.getElementById('confirmResetOverlay-2x2');
document.getElementById('btnPaintReset-2x2').addEventListener('click', () => {
  confirmResetOverlay.classList.remove('d-none');
});
document.getElementById('confirmResetCancel-2x2').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
});
document.getElementById('confirmResetOk-2x2').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
  scene.traverse(child => {
    if (child.userData.isSticker) child.material.color.setHex(0x555555);
  });
});
confirmResetOverlay.addEventListener('click', (e) => {
  if (e.target === confirmResetOverlay) confirmResetOverlay.classList.add('d-none');
});

const errorPopupOverlay = document.getElementById('errorPopupOverlay-2x2');
const errorList = document.getElementById('errorList-2x2');
document.getElementById('errorPopupClose-2x2').addEventListener('click', () => {
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
  document.getElementById('solver-status-2x2').innerText = '';
}

function getCubeString2x2() {
  let getColor = (x, y, z, faceAxis) => {
    const cubie = cubies.find(c => Math.abs(c.position.x - x) < 0.1 && Math.abs(c.position.y - y) < 0.1 && Math.abs(c.position.z - z) < 0.1);
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

    if (!sticker) return 0x555555;
    return sticker.material.color.getHex();
  };

  const centerColors = {
    [colors.top]: 'U', [colors.right]: 'R', [colors.front]: 'F',
    [colors.bottom]: 'D', [colors.left]: 'L', [colors.back]: 'B'
  };

  let str = '';
  for (let z of [-1, 0, 1]) for (let x of [-1, 0, 1]) {
    if (x===0 || z===0) str += 'U'; else str += centerColors[getColor(x/2, 0.5, z/2, 'y')];
  }
  for (let y of [1, 0, -1]) for (let z of [1, 0, -1]) {
    if (y===0 || z===0) str += 'R'; else str += centerColors[getColor(0.5, y/2, z/2, 'x')];
  }
  for (let y of [1, 0, -1]) for (let x of [-1, 0, 1]) {
    if (y===0 || x===0) str += 'F'; else str += centerColors[getColor(x/2, y/2, 0.5, 'z')];
  }
  for (let z of [1, 0, -1]) for (let x of [-1, 0, 1]) {
    if (x===0 || z===0) str += 'D'; else str += centerColors[getColor(x/2, -0.5, z/2, 'y')];
  }
  for (let y of [1, 0, -1]) for (let z of [-1, 0, 1]) {
    if (y===0 || z===0) str += 'L'; else str += centerColors[getColor(-0.5, y/2, z/2, 'x')];
  }
  for (let y of [1, 0, -1]) for (let x of [1, 0, -1]) {
    if (y===0 || x===0) str += 'B'; else str += centerColors[getColor(x/2, y/2, -0.5, 'z')];
  }

  if (str.includes('undefined')) throw new Error("Cube is not fully painted!");
  return str;
}

let solutionSteps = [];
let currentStepIndex = 0;
let lastActionDirection = 1;

document.getElementById('btnStartSolve-2x2').addEventListener('click', () => {
  try {
    document.getElementById('solver-status-2x2').innerText = "Validating...";
    
    const colorCounts = {};
    let hasUnpainted = false;
    
    cubies.forEach(cubie => {
      const stickers = cubie.children.filter(c => c.userData && c.userData.isSticker);
      stickers.forEach(s => {
        const hex = s.material.color.getHex();
        if (hex === 0x555555) hasUnpainted = true;
        else colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      });
    });

    if (hasUnpainted) {
      showErrorPopup(['You have unpainted tiles on the cube.']);
      return;
    }

    const colorErrors = [];
    EXPECTED_COLORS.forEach(hex => {
      const name = HEX_TO_NAME[hex];
      const count = colorCounts[hex] || 0;
      if (count < 4) colorErrors.push(`You do not have enough ${name} tiles.`);
      else if (count > 4) colorErrors.push(`You have too many ${name} tiles.`);
    });
    const usedHexes = Object.keys(colorCounts).map(Number);
    const unexpectedColors = usedHexes.filter(h => !EXPECTED_COLORS.includes(h));
    if (unexpectedColors.length > 0) colorErrors.push('Some tiles use unexpected colors.');

    if (colorErrors.length > 0) {
      showErrorPopup(colorErrors);
      return;
    }

    document.getElementById('solver-status-2x2').innerText = "Calculating...";
    const stateStr = getCubeString2x2();

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
    document.getElementById('paint-phase-2x2').classList.add('d-none');
    document.getElementById('playback-phase-2x2').classList.remove('d-none');
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
  const humanInstruction = document.getElementById('humanInstruction-2x2');
  const solutionText = document.getElementById('solutionText-2x2');
  const btnSideBack = document.getElementById('btnSideBack-2x2');
  const btnSideNext = document.getElementById('btnSideNext-2x2');
  const cubeSolvedMsg = document.getElementById('cubeSolvedMsg-2x2');

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

document.getElementById('btnSideNext-2x2').addEventListener('click', handleNext);
document.getElementById('btnSideBack-2x2').addEventListener('click', handleBack);

function animate(time) {
  requestAnimationFrame(animate);
  if (isActive) {
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
