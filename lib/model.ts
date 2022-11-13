/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(
  scene: any,
  glbPath: any,
  options = { receiveShadow: true, castShadow: true },
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'old_computer';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}
