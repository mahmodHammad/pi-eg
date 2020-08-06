import * as THREE from 'three';
// import MathEx from './js-util/MathEx';
import raw from "raw.macro";

const vs = raw('./glsl/background.vs')
const fs = raw('./glsl/background.fs')

export default class Background extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.SphereBufferGeometry(50, 12, 12);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          type: 'f',
          value: 0
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
      side: THREE.BackSide,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'Background';
  }
  start() {
  }
  update(time) {
    this.material.uniforms.time.value += time;
  }
}
