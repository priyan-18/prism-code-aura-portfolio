
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className = '', 
  hover3D = true, 
  glowOnHover = true,
  delay = 0 
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={`glass-card transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={hover3D ? { 
        y: -10, 
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: glowOnHover ? "0 20px 40px rgba(42, 0, 162, 0.3)" : undefined
      } : undefined}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {children}
    </motion.div>
  );
};
