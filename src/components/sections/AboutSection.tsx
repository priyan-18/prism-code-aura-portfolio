import { motion } from 'framer-motion';
import { Code, Shield, Zap, Download } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Implementing security best practices and protecting digital infrastructure',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Creative solutions for complex technical challenges',
    },
    {
      icon: Code,
      title: 'UI/UX Awareness',
      description: 'Designing intuitive and engaging user experiences',
    },
    {
      icon: Shield,
      title: 'Performance & Security',
      description: 'Optimizing applications for speed and robust security',
    },
    {
      icon: Zap,
      title: 'Application Development',
      description: 'End-to-end development of scalable applications',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-cyber-grid bg-[length:50px_50px]" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Model Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 text-center">
              {/* Placeholder for 3D Avatar */}
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-4xl font-orbitron font-bold text-white">PS</span>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="absolute top-4 left-4 glass-card p-2 animate-bounce">
                <span className="text-primary font-mono text-sm">&lt;React /&gt;</span>
              </div>
              <div className="absolute top-16 right-8 glass-card p-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-secondary font-mono text-sm">{ }</span>
              </div>
              <div className="absolute bottom-16 left-8 glass-card p-2 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-primary font-mono text-sm">.tsx</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-orbitron font-semibold mb-6">
              Passionate Developer & Security Enthusiast
            </h3>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a web developer with a passion for building immersive digital experiences and a strong enthusiasm for cybersecurity. I combine creative problem-solving with secure development practices to craft applications that are visually engaging, user-friendly, and resilient.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise in modern web technologies and a deep understanding of security principles, I ensure every project is both innovative and robust.
            </p>

            {/* Skills Grid */}
            <div className="grid gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-4 flex items-start gap-4 group hover:shadow-neon transition-all duration-300"
                >
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-lg mb-2">{skill.title}</h4>
                    <p className="text-foreground/70">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              className="neon-button mt-8 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};