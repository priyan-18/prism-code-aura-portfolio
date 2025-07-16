import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Scene3D } from '../3D/Scene3D';
import { ErrorBoundary } from '../ErrorBoundary';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Web Developer with a passion for Cybersecurity & UI Excellence";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <Scene3D />
        </ErrorBoundary>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center max-w-4xl mx-auto px-4"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl font-grotesk text-foreground/80">
            Hi, I'm{' '}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6"
        >
          <span className="glow-text">Priyadharshan</span>
          <br />
          <span className="text-secondary">S</span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-grotesk text-foreground/90">
            <span className="border-r-2 border-primary pr-1 animate-pulse">
              {text}
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technology, while securing the digital frontier through cybersecurity expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.a
            href="/Priyadharshan_resume.pdf"
            download="Priyadharshan_resume.pdf"
            className="neon-button group flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 rounded-lg"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary font-medium rounded-lg transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground group flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: '0 0 10px hsl(var(--secondary) / 0.3)' }}
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/priyan-18', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/priyadharshan-s-271820269', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 glass-card hover:shadow-neon transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};