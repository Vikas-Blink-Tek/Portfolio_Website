"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { concrete, steel } from "./Workspace";

const ACCENT = new THREE.Color("#FF4D24");

export function Platform() {
  return (
    <group position={[0, -1.1, 0]}>
      <mesh receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[10, 0.3, 8]} />
        <primitive object={concrete} attach="material" />
      </mesh>
      {/* orange seam running across the slab */}
      <mesh position={[0, 0.005, 0]}>
        <boxGeometry args={[10.02, 0.02, 0.04]} />
        <meshBasicMaterial color={ACCENT} />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[8.02, 0.02, 0.04]} />
        <meshBasicMaterial color={ACCENT} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Instanced floating concrete cubes — one draw call
export function FloatingCubes({ count = 26 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3((Math.random() - 0.5) * 22, Math.random() * 12 - 2, (Math.random() - 0.5) * 14 - 3),
        rot: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
        scale: 0.2 + Math.random() * 0.7,
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      })),
    [count]
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      dummy.position.set(s.pos.x, s.pos.y + Math.sin(t * s.speed + s.phase) * 0.5, s.pos.z);
      dummy.rotation.set(s.rot.x + t * 0.05, s.rot.y + t * 0.04, s.rot.z);
      dummy.scale.setScalar(s.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <primitive object={concrete} attach="material" />
    </instancedMesh>
  );
}

export function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.children[0].rotation.z = s.clock.elapsedTime * 0.04;
    g.current.children[1].rotation.z = -s.clock.elapsedTime * 0.03;
  });
  return (
    <group ref={g} position={[0, 1, -2]}>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[6, 0.02, 12, 120]} />
        <primitive object={steel} attach="material" />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0, -0.4]}>
        <torusGeometry args={[7.4, 0.015, 12, 120]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.4} toneMapped={false} />
      </mesh>
    </group>
  );
}

export function Particles({ count = 240 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      a[i] = (Math.random() - 0.5) * 24;
      a[i + 1] = (Math.random() - 0.5) * 16;
      a[i + 2] = (Math.random() - 0.5) * 14;
    }
    return a;
  }, [count]);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.01;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#e0dfdb" size={0.03} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}
