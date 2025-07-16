import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingPlanet = () => {
  const planetRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
      planetRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.005;
      ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group>
        {/* Main Planet */}
        <Sphere ref={planetRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.7}
            roughness={0.3}
            emissive="#2A00A2"
            emissiveIntensity={0.2}
          />
        </Sphere>

        {/* Glowing Rings */}
        <group ref={ringsRef}>
          <Ring args={[2.2, 2.5, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial
              color="#C400FF"
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
            />
          </Ring>
          
          <Ring args={[2.8, 3.0, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial
              color="#2A00A2"
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </Ring>
        </group>

        {/* Ambient glow */}
        <pointLight position={[0, 0, 0]} color="#2A00A2" intensity={1} distance={10} />
        <pointLight position={[0, 0, 0]} color="#C400FF" intensity={0.5} distance={15} />
      </group>
    </Float>
  );
};