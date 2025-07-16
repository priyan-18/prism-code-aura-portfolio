
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CyberPlanet } from './CyberPlanet';
import { ParticleField } from './ParticleField';

interface EnhancedScene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <div className="absolute inset-0 w-16 h-16 border-4 border-secondary/20 border-b-secondary rounded-full animate-spin animate-reverse" />
    </div>
  </div>
);

export const EnhancedScene3D = ({ 
  children, 
  enableControls = false, 
  cameraPosition = [0, 0, 10] 
}: EnhancedScene3DProps) => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          className="w-full h-full"
          camera={{ position: cameraPosition, fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={Math.min(window.devicePixelRatio, 2)}
        >
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.2} color="#C400FF" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color="#2A00A2" 
          />
          <directionalLight 
            position={[-10, -10, -5]} 
            intensity={0.5} 
            color="#C400FF" 
          />
          
          {/* Background Elements */}
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
          
          {/* Main Content */}
          <Suspense fallback={null}>
            {children || <CyberPlanet />}
          </Suspense>
          
          {/* Fog for depth */}
          <fog attach="fog" args={['#0F0F0F', 15, 50]} />
        </Canvas>
      </Suspense>
    </div>
  );
};
