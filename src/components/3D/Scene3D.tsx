import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingPlanet } from './FloatingPlanet';
import { StarField } from './StarField';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const Scene3D = ({ 
  children, 
  enableControls = false, 
  cameraPosition = [0, 0, 8] 
}: Scene3DProps) => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          className="w-full h-full"
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
          onError={(error) => {
            console.warn('Canvas error:', error);
          }}
        >
          <PerspectiveCamera makeDefault position={cameraPosition} fov={60} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} color="#C400FF" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.5} 
            color="#2A00A2" 
          />
          
          {/* Background Elements */}
          <Suspense fallback={null}>
            <StarField />
          </Suspense>
          
          {/* Main Content */}
          <Suspense fallback={null}>
            {children || <FloatingPlanet />}
          </Suspense>
          
          {/* Controls */}
          {enableControls && (
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
};