import * as THREE from 'three'; 
import raw from "raw.macro";

const vs = raw('./glsl/core.vs')
const fs = raw('./glsl/core.fs')

export default class Core extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.SphereBufferGeometry(6, 32, 32);

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
        textureNormal: {
          type: 't',
          value: null
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'Core';
  }
  start(texture, textureNormal) {
    this.material.uniforms.texture.value = texture;
    this.material.uniforms.textureNormal.value = textureNormal;
  }
  update(time) {
    this.material.uniforms.time.value += time;
  }
}
