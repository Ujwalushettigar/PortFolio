"use client";

import React, { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SKILLS } from "@/data/skills";
import { SkillItem } from "@/types/portfolio";
import { soundFx } from "@/lib/audio";

interface KeycapProps {
  skill: SkillItem;
  position: [number, number, number];
  isSelected: boolean;
  isPressed: boolean;
  onSelect: (skill: SkillItem) => void;
}

function KeycapMesh({ skill, position, isSelected, isPressed, onSelect }: KeycapProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  const targetY = useRef(position[1]);

  // Determine current vertical depression
  useEffect(() => {
    if (isPressed) {
      targetY.current = position[1] - 0.16;
    } else if (isHovered || isSelected) {
      targetY.current = position[1] + 0.05;
    } else {
      targetY.current = position[1];
    }
  }, [isPressed, isHovered, isSelected, position]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.position.y += (targetY.current - meshRef.current.position.y) * Math.min(delta * 22, 1);
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    soundFx.playKeyClick(isSelected ? 1.2 : 1.0);
    onSelect(skill);
  };

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setIsHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    setIsHovered(false);
    document.body.style.cursor = "auto";
  };

  // Dynamic colors
  const keyColor = isSelected ? "#0284c7" : isHovered ? "#1e293b" : "#0f172a";
  const emissiveColor = isSelected ? skill.accent : isHovered ? "#38bdf8" : "#090d16";
  const emissiveIntensity = isSelected ? 0.7 : isHovered ? 0.45 : 0.08;

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {/* 3D Keycap Shape */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.92, 0.45, 0.92]} />
        <meshStandardMaterial
          color={keyColor}
          roughness={0.25}
          metalness={0.7}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* Underglow LED Ring */}
      {(isSelected || isHovered) && (
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[1.05, 0.05, 1.05]} />
          <meshBasicMaterial color={skill.accent} transparent opacity={0.65} />
        </mesh>
      )}

      {/* Key Top Text Label */}
      <Text
        position={[0, 0.235, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.2}
        color={isSelected ? "#ffffff" : isHovered ? "#38bdf8" : "#94a3b8"}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {skill.keyLabel}
      </Text>
    </group>
  );
}

// 3D Keyboard Chassis & Grid
function KeyboardRig({
  selectedSkill,
  onSelectSkill,
  pressedKeyId,
}: {
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem) => void;
  pressedKeyId: string | null;
}) {
  // Map skills into rows
  const keyLayout = useMemo(() => {
    const rows = [
      SKILLS.filter((s) => s.row === 0),
      SKILLS.filter((s) => s.row === 1),
      SKILLS.filter((s) => s.row === 2),
    ];

    const keysWithPos: Array<{ skill: SkillItem; pos: [number, number, number] }> = [];

    rows.forEach((rowSkills, rIdx) => {
      const rowOffset = rIdx * 0.25; // Ergonomic stagger
      const totalWidth = rowSkills.length * 1.05;
      const startX = -totalWidth / 2 + 0.5 + rowOffset;
      const zPos = (rIdx - 1) * 1.15;

      rowSkills.forEach((skill, cIdx) => {
        const xPos = startX + cIdx * 1.05;
        keysWithPos.push({
          skill,
          pos: [xPos, 0.25, zPos],
        });
      });
    });

    return keysWithPos;
  }, []);

  return (
    <group rotation={[Math.PI / 8.5, -Math.PI / 16, 0]}>
      {/* Keyboard Case / Aluminum Body */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[12.2, 0.6, 4.4]} />
        <meshStandardMaterial
          color="#090d16"
          metalness={0.85}
          roughness={0.35}
          emissive="#040711"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Beveled Top Plate / Switch Mounting Plate */}
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[11.8, 0.08, 4.0]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Decorative LED Edge Strip */}
      <mesh position={[0, 0.16, 2.05]}>
        <boxGeometry args={[11.7, 0.04, 0.05]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Keycaps */}
      {keyLayout.map(({ skill, pos }) => (
        <KeycapMesh
          key={skill.id}
          skill={skill}
          position={pos}
          isSelected={selectedSkill?.id === skill.id}
          isPressed={pressedKeyId === skill.id}
          onSelect={onSelectSkill}
        />
      ))}
    </group>
  );
}

interface KeyboardScene3DProps {
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem) => void;
}

export default function KeyboardScene3D({ selectedSkill, onSelectSkill }: KeyboardScene3DProps) {
  const [pressedKeyId, setPressedKeyId] = useState<string | null>(null);

  // Listen to physical keyboard presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing input if user is in an input field / textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      const matched = SKILLS.find(
        (s) =>
          s.keyLabel.toUpperCase() === key ||
          s.name.toUpperCase().startsWith(key) ||
          s.id.toUpperCase().startsWith(key)
      );

      if (matched) {
        setPressedKeyId(matched.id);
        onSelectSkill(matched);
        soundFx.playKeyClick(1.05);
      }
    };

    const handleKeyUp = () => {
      setPressedKeyId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onSelectSkill]);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px]">
      <Canvas
        camera={{ position: [0, 5.5, 7.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        shadows
      >
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[5, 12, 6]}
          intensity={2.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-6, 3, 3]} intensity={2.4} color="#00f0ff" />
        <pointLight position={[6, 3, -3]} intensity={2.0} color="#818cf8" />
        <pointLight position={[0, 4, 0]} intensity={1.5} color="#38bdf8" />

        <Suspense fallback={null}>
          <KeyboardRig
            selectedSkill={selectedSkill}
            onSelectSkill={onSelectSkill}
            pressedKeyId={pressedKeyId}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 4.5}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={-Math.PI / 5}
        />
      </Canvas>
    </div>
  );
}
