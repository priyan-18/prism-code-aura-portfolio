import { Canvas } from '@react-three/fiber';
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
          camera={{ position: cameraPosition, fov: 60 }}
          gl={{ antialias: false, alpha: true }}
          dpr={1}
        >
          {/* Simple Lighting */}
          <ambientLight intensity={0.3} color="#C400FF" />
          <directionalLight 
            position={[5, 5, 5]} 
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
        </Canvas>
      </Suspense>
    </div>
  );
};