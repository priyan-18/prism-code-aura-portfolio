import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-orbitron font-bold glow-text mb-2">
              P<span className="text-secondary">S</span>
            </div>
            <p className="text-foreground/60 text-sm flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Priyadharshan S
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              © 2024 All rights reserved
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8 text-sm"
          >
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-card hover:shadow-neon transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </footer>
  );
};