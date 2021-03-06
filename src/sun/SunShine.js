import * as THREE from 'three';
// import MathEx from './js-util/MathEx';

import raw from "raw.macro";

const vs = raw('./glsl/sunshine.vs')
const fs = raw('./glsl/sunshine.fs')


export default class SunShine extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.RingBufferGeometry(4, 22, 24);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          type: 'f',
          value: 0
        },
        texture: {
          type: 't',
          value: null
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
    });

    // Create Object3D
    super(geometry, material);
    this.position.z =   0;
    this.name = 'SunShine';
  }
  start(texture) {
    this.material.uniforms.texture.value = texture;
  }
  update(time) {
    this.material.uniforms.time.value += time;
  }
}
