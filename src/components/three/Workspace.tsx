"use client";
import { useRef, useMemo, useEffect } from "react";
import type { ThreeElements } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "./scrollProgress";

const ACCENT = "#FF4D24";

// Shared palette materials
const concrete = new THREE.MeshStandardMaterial({ color: "#26262a", roughness: 0.92, metalness: 0.08 });
const darkMetal = new THREE.MeshStandardMaterial({ color: "#161618", roughness: 0.4, metalness: 0.8 });
const steel = new THREE.MeshStandardMaterial({ color: "#9CA0A8", roughness: 0.35, metalness: 0.85 });
const glassScreen = new THREE.MeshStandardMaterial({ color: "#0c0c0e", roughness: 0.2, metalness: 0.4, emissive: new THREE.Color(ACCENT), emissiveIntensity: 0.10 });

function retint(root: THREE.Object3D, mat: THREE.Material, screenMat?: THREE.Material) {
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    m.castShadow = true;
    m.receiveShadow = true;
    const name = (Array.isArray(m.material) ? m.material[0]?.name : (m.material as THREE.Material)?.name) || "";
    m.material = screenMat && /screen|led|display/i.test(name) ? screenMat : mat;
  });
}

function Floating({ children, amp = 0.06, speed = 0.8, rot = 0.04, phase = 0 }: { children: React.ReactNode; amp?: number; speed?: number; rot?: number; phase?: number }) {
  const ref = useRef<THREE.Group>(null);
  const y0 = useRef(0);
  useFrame((state) => {
    if (!ref.current) return;
    if (!y0.current) y0.current = ref.current.position.y;
    const t = state.clock.elapsedTime;
    ref.current.position.y = y0.current + Math.sin(t * speed + phase) * amp;
    ref.current.rotation.y += rot * 0.01;
  });
  return <group ref={ref}>{children}</group>;
}

export function Laptop(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/laptop.glb");
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => retint(cloned, darkMetal, glassScreen), [cloned]);
  return <primitive object={cloned} {...props} />;
}

export function Keyboard(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/keyboard.glb");
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => retint(cloned, darkMetal), [cloned]);
  return <primitive object={cloned} {...props} />;
}

export function Phone(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/phone.glb");
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => retint(cloned, darkMetal, glassScreen), [cloned]);
  return <primitive object={cloned} {...props} />;
}

// Keyboard sealed in a glass containment case (Keylogger research)
export function GlassCase({ children }: { children: React.ReactNode }) {
  return (
    <group>
      {children}
      <mesh position={[0, 0.32, 0]}>
        <boxGeometry args={[3.6, 1.0, 2.2]} />
        <meshPhysicalMaterial color="#8fb4c8" transparent opacity={0.08} roughness={0.05} metalness={0} transmission={0.6} thickness={0.5} />
      </mesh>
      <lineSegments position={[0, 0.32, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(3.6, 1.0, 2.2)]} />
        <lineBasicMaterial color={ACCENT} transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
}

export { concrete, darkMetal, steel };
useGLTF.preload("/models/laptop.glb");
