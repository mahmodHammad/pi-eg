import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { displayCoards } from "./Coards";


let width = window.innerWidth;
let height = window.innerHeight;

const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // fov = field of view
  width / height, // aspect ratio
  0.1, // near plane
  1000 // far plane
);

camera.position.set(50, 50, -50);
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = 3.13 / 2;
controls.enableZoom=false
const handleWindowResize = () => {
  width = window.innerWidth;
  height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

const sceneSetup = () => {
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", handleWindowResize);
};

function render() {
  renderer.render(scene, camera);
}

export { sceneSetup, scene, controls, render, camera };
