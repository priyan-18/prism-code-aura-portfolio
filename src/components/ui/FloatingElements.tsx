
import { motion } from 'framer-motion';
import { Code, Shield, Zap, Cpu, Database, Globe } from 'lucide-react';

const floatingIcons = [
  { icon: Code, position: { top: '20%', left: '10%' }, delay: 0 },
  { icon: Shield, position: { top: '30%', right: '15%' }, delay: 0.5 },
  { icon: Zap, position: { bottom: '25%', left: '20%' }, delay: 1 },
  { icon: Cpu, position: { top: '60%', right: '25%' }, delay: 1.5 },
  { icon: Database, position: { bottom: '40%', right: '10%' }, delay: 2 },
  { icon: Globe, position: { top: '10%', left: '50%' }, delay: 2.5 },
];

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ icon: Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="glass-card p-3 rounded-full">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      ))}
      
      {/* Floating geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
