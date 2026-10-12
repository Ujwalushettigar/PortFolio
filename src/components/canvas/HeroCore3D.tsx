"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Central Cyber Core
function CoreArtifact({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Base gyroscopic rotation
    const rotSpeed = isHovered ? 1.4 : 0.8;
    meshRef.current.rotation.y += delta * 0.35 * rotSpeed;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.6 * rotSpeed;
      ring1Ref.current.rotation.x += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5 * rotSpeed;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.7 * rotSpeed;
      ring3Ref.current.rotation.y += delta * 0.4;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Solid Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#0e1f3d"
          roughness={0.15}
          metalness={0.9}
          wireframe={false}
          emissive="#0284c7"
          emissiveIntensity={isHovered ? 0.45 : 0.25}
        />
      </mesh>

      {/* Outer Wireframe Hologram */}
      <mesh scale={1.42}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={isHovered ? 0.7 : 0.4}
        />
      </mesh>

      {/* Inner Glowing Core Sphere */}
      <mesh scale={0.65}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Orbital Gimbal Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital Gimbal Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital Gimbal Ring 3 */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.9, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Orbiting Satellite Data Chips */}
      <group ref={nodesRef}>
        {[0, 1, 2, 3].map((idx) => {
          const angle = (idx / 4) * Math.PI * 2;
          const radius = 2.45;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <mesh key={idx} position={[x, (idx % 2 === 0 ? 0.35 : -0.35), z]}>
              <boxGeometry args={[0.22, 0.12, 0.22]} />
              <meshStandardMaterial
                color="#00f0ff"
                emissive="#0284c7"
                emissiveIntensity={0.8}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// 2D Hologram Fallback in case WebGL is disabled or encounters context loss
function FallbackHologram() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center pointer-events-none select-none">
      <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin-slow" />
      <div className="absolute inset-4 rounded-full border border-dashed border-indigo-500/40 animate-[spin_18s_linear_infinite_reverse]" />
      <div className="absolute inset-10 rounded-full border border-blue-400/20 animate-spin" />
      <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-cyan-950 via-blue-900 to-indigo-950 border border-cyan-400/40 shadow-neon-cyan flex items-center justify-center transform rotate-45 animate-float">
        <div className="w-16 h-16 rounded-xl border border-white/20 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center transform -rotate-45">
          <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">UJWAL</span>
        </div>
      </div>
      <div className="absolute bottom-2 font-mono text-[10px] text-cyan-400/60 uppercase tracking-widest">
        Holographic Artifact Core
      </div>
    </div>
  );
}

export default function HeroCore3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === false) {
    return <FallbackHologram />;
  }

  return (
    <div
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute w-56 h-56 rounded-full bg-indigo-600/15 blur-2xl pointer-events-none" />

      {/* Tech corner accents */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400/60 flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D CORE // ACTIVE</span>
      </div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500 pointer-events-none">
        DRAG TO ROTATE · HOVER TO ENGAGE
      </div>

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-4, -3, -2]} intensity={2.5} color="#00f0ff" />
        <pointLight position={[3, -4, 3]} intensity={2.0} color="#818cf8" />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
            <CoreArtifact isHovered={isHovered} />
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.7}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.8}
        />
      </Canvas>
    </div>
  );
}
