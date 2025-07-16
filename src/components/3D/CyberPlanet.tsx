
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CyberPlanet = () => {
  const planetRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005;
      planetRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.008;
      ringRef.current.rotation.y += 0.002;
    }
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial 
          color="#2A00A2"
          transparent={true}
          opacity={0.1}
        />
      </mesh>

      {/* Main planet */}
      <mesh ref={planetRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#2A00A2"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Ring system */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[2.5, 3.2, 64]} />
        <meshBasicMaterial 
          color="#C400FF"
          transparent={true}
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2.5, 0, Math.PI / 4]}>
        <ringGeometry args={[2.8, 3.0, 32]} />
        <meshBasicMaterial 
          color="#00D4FF"
          transparent={true}
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ambient lighting */}
      <pointLight 
        position={[0, 0, 0]} 
        color="#2A00A2" 
        intensity={2} 
        distance={15} 
      />
      <pointLight 
        position={[5, 5, 5]} 
        color="#C400FF" 
        intensity={1} 
        distance={20} 
      />
    </group>
  );
};
