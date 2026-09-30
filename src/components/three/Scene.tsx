"use client";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { bindScroll, scrollState } from "./scrollProgress";
import { Platform, FloatingCubes, Rings, Particles } from "./Environment3D";
import { Laptop, Keyboard, Phone, GlassCase } from "./Workspace";
import { useQualityTier, useReducedMotion } from "@/hooks/useEnv";

// Camera keyframes across scroll (0..1): [x, y, z] position + look target
const KEYS: { p: number; pos: [number, number, number]; look: [number, number, number] }[] = [
  { p: 0.0, pos: [0.2, 1.4, 9.5], look: [0, 0.2, 0] },
  { p: 0.28, pos: [-3.6, 0.6, 6.2], look: [-0.5, 0, 0] },
  { p: 0.5, pos: [3.4, 1.2, 5.6], look: [1.2, -0.2, 0] },
  { p: 0.72, pos: [-2.2, 2.4, 6.8], look: [0, 0.4, 0] },
  { p: 1.0, pos: [0.4, 3.2, 10.5], look: [0, -0.4, 0] },
];

function lerp3(a: number[], b: number[], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}
function sample(p: number) {
  let i = 0;
  while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = THREE.MathUtils.clamp((p - a.p) / (b.p - a.p), 0, 1);
  const e = t * t * (3 - 2 * t); // smoothstep
  return { pos: lerp3(a.pos, b.pos, e), look: lerp3(a.look, b.look, e) };
}

function CameraRig({ still }: { still: boolean }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.2, 0));
  useFrame(() => {
    const { pos, look } = sample(scrollState.progress);
    const px = still ? 0 : scrollState.mouseX * 0.5;
    const py = still ? 0 : scrollState.mouseY * 0.35;
    camera.position.lerp(new THREE.Vector3(pos[0] + px, pos[1] + py, pos[2]), 0.06);
    target.current.lerp(new THREE.Vector3(look[0], look[1], look[2]), 0.06);
    camera.lookAt(target.current);
  });
  return null;
}

function SceneContents({ tier }: { tier: number }) {
  return (
    <>
      <ambientLight intensity={0.5} color="#20202a" />
      <directionalLight position={[6, 9, 6]} intensity={2.6} color="#f5f3ee" castShadow={tier >= 2} shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-7, -1, -4]} intensity={0.7} color="#7a8090" />
      <pointLight position={[-1.5, 0.6, 2.6]} intensity={6} distance={12} decay={1.8} color="#FF4D24" />

      <group position={[0, -0.2, 0]}>
        <Platform />
        <Suspense fallback={null}>
          {/* Laptop — hero object, slightly right */}
          <Laptop position={[1.6, -0.55, 0.3]} rotation={[0, -0.5, 0]} scale={1.15} />
          {/* Keyboard sealed in glass — left */}
          <GlassCase>
            <Keyboard position={[-2.4, -0.75, 1.1]} rotation={[0, 0.3, 0]} scale={0.5} />
          </GlassCase>
          {/* Phone — foreground right */}
          <Phone position={[3.1, -0.5, 1.6]} rotation={[-0.15, -0.4, 0.05]} scale={0.7} />
        </Suspense>
        <Rings />
        {tier >= 1 && <FloatingCubes count={tier >= 2 ? 26 : 12} />}
        {tier >= 1 && <Particles count={tier >= 2 ? 240 : 90} />}
      </group>
    </>
  );
}

export default function Scene() {
  const tier = useQualityTier();
  const reduced = useReducedMotion();
  useEffect(() => bindScroll(), []);

  if (tier === 0) return null; // low-end: no canvas, HTML-only

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        shadows={tier >= 2}
        dpr={[1, tier >= 2 ? 1.75 : 1.4]}
        camera={{ fov: 42, position: [0.2, 1.4, 9.5], near: 0.1, far: 100 }}
        gl={{ antialias: tier >= 2, powerPreference: "high-performance", alpha: true }}
        frameloop={reduced ? "demand" : "always"}
        onCreated={({ scene, gl }) => {
          scene.fog = new THREE.FogExp2(new THREE.Color("#0B0B0D"), 0.05);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <SceneContents tier={tier} />
        <CameraRig still={reduced} />
      </Canvas>
    </div>
  );
}
