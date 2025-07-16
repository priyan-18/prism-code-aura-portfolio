import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'CyberShield Dashboard',
    description: 'A comprehensive cybersecurity monitoring dashboard with real-time threat detection and analytics.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'TypeScript', 'Three.js', 'WebGL'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures with real-time data flow animation.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Three.js', 'WebGL', 'TensorFlow.js'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Quantum Portfolio',
    description: 'A futuristic portfolio website featuring quantum-inspired animations and particle systems.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'Framer Motion', 'GLSL', 'WebGL'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'SecureAuth System',
    description: 'Multi-factor authentication system with biometric integration and advanced security features.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Node.js', 'WebAuthn', 'Crypto'],
    github: '#',
    live: '#',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Projects I've <span className="glow-text">Crafted</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore my portfolio of innovative projects that blend cutting-edge technology 
            with exceptional user experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card overflow-hidden h-full transition-all duration-500 group-hover:shadow-neon">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-white opacity-50" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-3 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-foreground/70 hover:text-secondary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Floating Badge for Featured Projects */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: hoveredProject === project.id 
                    ? 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))' 
                    : 'transparent',
                  backgroundSize: '200% 200%',
                  animation: hoveredProject === project.id ? 'shimmer 2s linear infinite' : 'none',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="neon-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};