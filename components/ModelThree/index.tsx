import { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../lib/model';
import { ModelThreeContainer } from './ModelThreeContainer';
import { ModelThreeSpinner } from './ModelThreeSpinner';

const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const ModelThreeComponent: FC = (): JSX.Element => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const refRenderer = useRef<any>();
  const urlModelThreeGLB = '/retro_computer.glb';

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      // const target = new THREE.Vector3(-0.5, 1.2, 0);
      const target = new THREE.Vector3(-0.001, 0.1, 0);
      const initialCameraPosition = new THREE.Vector3(
        90 * Math.sin(0.2 * Math.PI),
        80,
        90 * Math.cos(0.2 * Math.PI),
      );

      // 640 -> 240
      // 8   -> 6
      // const scale = scH * 0.005 + 4.8;
      const scale = scH * 0.005 + -1.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      let req = 0;
      let frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      loadGLTFModel(scene, urlModelThreeGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <ModelThreeContainer ref={refContainer}>
      {loading && <ModelThreeSpinner />}
    </ModelThreeContainer>
  );
};

ModelThreeComponent.displayName = 'ModelThree';

export const ModelThree = Object.assign(ModelThreeComponent, {
  Container: ModelThreeContainer,
  Spinner: ModelThreeSpinner,
});
