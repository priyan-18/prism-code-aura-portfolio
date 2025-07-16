import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingPlanet } from './FloatingPlanet';
import { StarField } from './StarField';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

export const Scene3D = ({ 
  children, 
  enableControls = false, 
  cameraPosition = [0, 0, 8] 
}: Scene3DProps) => {
  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
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
      <StarField />
      
      {/* Main Content */}
      {children || <FloatingPlanet />}
      
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
  );
};