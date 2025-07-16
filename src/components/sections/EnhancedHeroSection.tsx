
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { EnhancedScene3D } from '../3D/EnhancedScene3D';
import { FloatingElements } from '../ui/FloatingElements';
import { ErrorBoundary } from '../ErrorBoundary';
import { useEffect, useState } from 'react';

export const EnhancedHeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Frontend Developer & Cybersecurity Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <EnhancedScene3D />
        </ErrorBoundary>
      </div>
      
      {/* Floating UI Elements */}
      <FloatingElements />
      
      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/60 z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-transparent z-10" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center max-w-5xl mx-auto px-4"
      >
        {/* Welcome Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-grotesk text-foreground/80">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Enhanced Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl font-grotesk text-foreground/80">
            Hello World! I'm{' '}
            <motion.span
              className="inline-block"
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
          </span>
        </motion.div>

        {/* Enhanced Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-bold mb-8"
        >
          <motion.span 
            className="glow-text block"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(42, 0, 162, 0.5)",
                "0 0 40px rgba(42, 0, 162, 0.8)",
                "0 0 20px rgba(42, 0, 162, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Priyadharshan
          </motion.span>
          <motion.span 
            className="text-secondary block mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            S
          </motion.span>
        </motion.h1>

        {/* Enhanced Typewriter */}
        <motion.div
          variants={itemVariants}
          className="mb-12 h-20 flex items-center justify-center"
        >
          <div className="relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-grotesk text-foreground/90">
              <span className="relative">
                {text}
                <motion.span
                  className="absolute right-0 top-0 w-1 h-full bg-primary"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </h2>
            {/* Glow effect under text */}
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences with{' '}
          <span className="text-primary font-semibold">cutting-edge technology</span>,
          while securing the digital frontier through{' '}
          <span className="text-secondary font-semibold">cybersecurity expertise</span>.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="neon-button group relative overflow-hidden flex items-center gap-3 px-8 py-4"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(42, 0, 162, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} />
            Download Resume
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-medium rounded-lg transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground group flex items-center gap-3 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(196, 0, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
            Contact Me
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            />
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
            { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              className={`p-4 glass-card hover:shadow-neon transition-all duration-300 group ${color}`}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(42, 0, 162, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-foreground/60 font-grotesk">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [1, 0.3, 1] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <ArrowDown className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
