import { WebGPUCanvas } from './canvas';
import type { ReactNode } from 'react';
import { useAspect, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useContext, useMemo } from 'react';
import gsap from 'gsap';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
} from 'three/tsl';

import * as THREE from 'three/webgpu';
import { useGSAP } from '@gsap/react';
import { GlobalContext, ContextProvider } from '../context/global-context';
import { PostProcessing } from './post-processing';
import TEXTUREMAP from '../assets/background-2.png';
import DEPTHMAP from '../assets/depth-map-2.png';

const WIDTH = 1500;
const HEIGHT = 2000;

const Scene = () => {
  const { setIsLoading } = useContext(GlobalContext);

  const [rawMap, depthMap] = useTexture([TEXTUREMAP, DEPTHMAP], () => {
    setIsLoading(false);
    rawMap.colorSpace = THREE.SRGBColorSpace;
  });

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    const flow = oneMinus(smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useGSAP(() => {
    gsap.to(uniforms.uProgress, {
      value: 1,
      repeat: -1,
      duration: 3,
      ease: 'power1.out',
    });
  }, [uniforms.uProgress]);

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh scale={[w, h, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

const Html = (props: { children: ReactNode }) => {
  const { isLoading } = useContext(GlobalContext);

  useGSAP(() => {
    if (!isLoading) {
      gsap
        .timeline()
        .to('[data-loader]', {
          opacity: 0,
        })
        .from('[data-title]', {
          yPercent: -100,
          stagger: {
            each: 0.15,
          },
          ease: 'power1.out',
        })
        .from('[data-desc]', {
          opacity: 0,
          yPercent: 100,
        });
    }
  }, [isLoading]);

  return (
    <div className="h-svh">
      <WebGPUCanvas>
        <PostProcessing></PostProcessing>
        <Scene></Scene>
      </WebGPUCanvas>
      <div className="absolute top-0 left-0">
        {props.children}
      </div>
    </div>
  );
};

export default function Background(props: { children: ReactNode }) {
  return (
    <ContextProvider>
      <Html>
        {props.children}
      </Html>
    </ContextProvider>
  );
}
