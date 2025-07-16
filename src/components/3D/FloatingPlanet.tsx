import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const FloatingPlanet = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Simple Planet */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#2A00A2"
          emissive="#1a1a2e"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Simple Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.5, 32]} />
        <meshBasicMaterial 
          color="#C400FF"
          transparent={true}
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Basic Lighting */}
      <pointLight 
        position={[0, 0, 0]} 
        color="#2A00A2" 
        intensity={1} 
        distance={10} 
      />
    </group>
  );
};