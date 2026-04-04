import * as THREE from 'three';
import { RUBIKS_CUBE_COLORS as colors, white, yellow, blue, green, red, orange } from './globals.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as TWEEN from '@tweenjs/tween.js';

const container = document.getElementById('app-4x4');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(7, 7, 10); // Slightly further back for 4x4

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

const coreGeometry = new RoundedBoxGeometry(0.99, 0.99, 0.99, 5, 0.10);
const coreMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7, metalness: 0.1 });
const stickerGeometryX = new RoundedBoxGeometry(0.06, 0.83, 0.83, 6, 0.12);
const stickerGeometryY = new RoundedBoxGeometry(0.83, 0.06, 0.83, 6, 0.12);
const stickerGeometryZ = new RoundedBoxGeometry(0.83, 0.83, 0.06, 6, 0.12);

// Noise texture for stickers
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

// 4x4 dimensions: -1.5, -0.5, 0.5, 1.5
for (let x of [-1.5, -0.5, 0.5, 1.5]) {
  for (let y of [-1.5, -0.5, 0.5, 1.5]) {
    for (let z of [-1.5, -0.5, 0.5, 1.5]) {
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

      if (x === 1.5) addSticker(stickerGeometryX, colors.right, [0.49, 0, 0]);
      if (x === -1.5) addSticker(stickerGeometryX, colors.left, [-0.49, 0, 0]);
      if (y === 1.5) addSticker(stickerGeometryY, colors.top, [0, 0.49, 0]);
      if (y === -1.5) addSticker(stickerGeometryY, colors.bottom, [0, -0.49, 0]);
      if (z === 1.5) addSticker(stickerGeometryZ, colors.front, [0, 0, 0.49]);
      if (z === -1.5) addSticker(stickerGeometryZ, colors.back, [0, 0, -0.49]);

      cubeGroup.add(cubieGroup);
      cubies.push(cubieGroup);
    }
  }
}

let isAnimating = false;

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

// Mode Selection
let isActive = false;
window.addEventListener('route-changed', (e) => {
  const path = e.detail;
  if (path === '/solver/4x4x4 cube' || path === '/solver/4x4x4-cube') {
    isActive = true;
    container.style.display = 'block';

    scene.traverse(child => {
      if (child.userData.isSticker) {
        child.material.color.setHex(0x555555);
      }
    });

    document.getElementById('paint-phase-4x4').classList.remove('d-none');
    document.getElementById('playback-phase-4x4').classList.add('d-none');
    document.getElementById('solver-status-4x4').innerText = "";
    document.getElementById('cubeSolvedMsg-4x4').classList.add('d-none');
  } else {
    isActive = false;
    container.style.display = 'none';
    const solvedMsg = document.getElementById('cubeSolvedMsg-4x4');
    if (solvedMsg) solvedMsg.classList.add('d-none');
  }
});

// Color Palette Setup
let selectedColorHex = white;
const EXPECTED_COLORS_ARR = [white, yellow, blue, green, red, orange];
const swatches = [];
const paletteContainer = document.querySelector('.color-palette-4x4');
if (paletteContainer) {
  EXPECTED_COLORS_ARR.forEach((colorCode) => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch-4x4 swatch';
    if (colorCode === white) swatch.classList.add('selected');
    swatch.dataset.color = colorCode;
    swatch.style.background = '#' + colorCode.toString(16).padStart(6, '0');
    
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      selectedColorHex = colorCode;
    });
    
    swatches.push(swatch);
    paletteContainer.appendChild(swatch);
  });
}

// Painting Interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

window.addEventListener('pointerdown', (e) => {
  if (!isActive) return;
  if (e.target !== renderer.domElement) return;
  pointerDownPos.x = e.clientX;
  pointerDownPos.y = e.clientY;
});

window.addEventListener('pointerup', (e) => {
  if (!isActive) return;
  if (e.target !== renderer.domElement) return;
  if (document.getElementById('paint-phase-4x4').classList.contains('d-none')) return;
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
    // Stickers are at absolute coordinate ~2.0 (1.5 + 0.49)
    return pos.x > 1.9 || pos.y > 1.9 || pos.z > 1.9;
  });

  if (hit) {
    hit.object.material = hit.object.material.clone();
    hit.object.material.color.setHex(selectedColorHex);
  }
});

// UI Controls
document.getElementById('rotLeft-4x4').addEventListener('click', () => rotateWholeCube('y', -Math.PI / 2));
document.getElementById('rotRight-4x4').addEventListener('click', () => rotateWholeCube('y', Math.PI / 2));
document.getElementById('rotUp-4x4').addEventListener('click', () => rotateWholeCube('x', -Math.PI / 2));
document.getElementById('rotDown-4x4').addEventListener('click', () => rotateWholeCube('x', Math.PI / 2));

const confirmResetOverlay = document.getElementById('confirmResetOverlay-4x4');
document.getElementById('btnPaintReset-4x4').addEventListener('click', () => {
  confirmResetOverlay.classList.remove('d-none');
});
document.getElementById('confirmResetCancel-4x4').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
});
document.getElementById('confirmResetOk-4x4').addEventListener('click', () => {
  confirmResetOverlay.classList.add('d-none');
  scene.traverse(child => {
    if (child.userData.isSticker) child.material.color.setHex(0x555555);
  });
});

document.getElementById('btnStartSolve-4x4').addEventListener('click', () => {
  const statusEl = document.getElementById('solver-status-4x4');
  statusEl.innerText = "Solver not implemented for 4x4 yet.";
  setTimeout(() => statusEl.innerText = "", 3000);
});

// Render Loop
function animate(time) {
  requestAnimationFrame(animate);
  if (isActive) {
    TWEEN.update(time);
    controls.update();
    renderer.render(scene, camera);
  }
}
animate();
