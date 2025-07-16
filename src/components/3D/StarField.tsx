import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    try {
      const positions = new Float32Array(500 * 3); // Reduced from 1000 for performance
      const colors = new Float32Array(500 * 3);
      
      for (let i = 0; i < 500; i++) {
        // Distribute stars in a sphere around the scene
        const radius = Math.random() * 30 + 15; // Reduced range
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        
        // Alternate between blue and purple colors
        const color = Math.random() > 0.5 ? new THREE.Color('#2A00A2') : new THREE.Color('#C400FF');
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      return [positions, colors];
    } catch (error) {
      console.warn('StarField generation error:', error);
      return [new Float32Array(0), new Float32Array(0)];
    }
  }, []);

  useFrame(() => {
    try {
      if (ref.current) {
        ref.current.rotation.y += 0.0005;
        ref.current.rotation.x += 0.0002;
      }
    } catch (error) {
      console.warn('StarField animation error:', error);
    }
  });

  if (positions.length === 0) return null;

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};