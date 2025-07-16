
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, Code, Zap } from 'lucide-react';
import { useState } from 'react';
import { AnimatedCard } from '../ui/AnimatedCard';

const projects = [
  {
    id: 1,
    title: 'Neural Nexus Dashboard',
    description: 'AI-powered cybersecurity monitoring dashboard with real-time threat detection, machine learning analytics, and quantum encryption protocols.',
    image: '/api/placeholder/500/300',
    tech: ['React', 'TypeScript', 'Three.js', 'TensorFlow.js', 'WebGL'],
    github: '#',
    live: '#',
    featured: true,
    stats: { stars: 247, forks: 52 },
    category: 'Cybersecurity'
  },
  {
    id: 2,
    title: 'Quantum Portfolio Matrix',
    description: 'A revolutionary portfolio website featuring quantum-inspired animations, particle systems, and immersive 3D environments.',
    image: '/api/placeholder/500/300',
    tech: ['Next.js', 'Framer Motion', 'GLSL', 'WebGL', 'Three.js'],
    github: '#',
    live: '#',
    featured: true,
    stats: { stars: 189, forks: 34 },
    category: 'Frontend'
  },
  {
    id: 3,
    title: 'CyberShield Analytics',
    description: 'Advanced threat intelligence platform with real-time vulnerability scanning and automated security response systems.',
    image: '/api/placeholder/500/300',
    tech: ['React', 'D3.js', 'Node.js', 'WebAuthn', 'Blockchain'],
    github: '#',
    live: '#',
    featured: false,
    stats: { stars: 156, forks: 28 },
    category: 'Security'
  },
  {
    id: 4,
    title: 'Holographic UI Framework',
    description: 'Next-generation UI component library with holographic effects, spatial computing integration, and AR/VR compatibility.',
    image: '/api/placeholder/500/300',
    tech: ['React', 'WebXR', 'Three.js', 'Storybook', 'TypeScript'],
    github: '#',
    live: '#',
    featured: false,
    stats: { stars: 98, forks: 19 },
    category: 'UI/UX'
  },
];

export const EnhancedProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Cybersecurity', 'Security', 'UI/UX'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-12 h-12 text-primary mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Explore my portfolio of innovative projects that push the boundaries of 
            web development and cybersecurity.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-grotesk font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-neon'
                  : 'glass-card text-foreground/70 hover:text-primary hover:shadow-glow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              delay={index * 0.2}
              className={`group relative overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Preview */}
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-white opacity-50" />
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                >
                  <div className="flex gap-6">
                    <motion.a
                      href={project.github}
                      className="p-4 bg-background/20 rounded-full hover:bg-background/40 transition-colors backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-8 h-8 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-4 bg-background/20 rounded-full hover:bg-background/40 transition-colors backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full backdrop-blur-sm"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-orbitron font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(42, 0, 162, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-foreground/70 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Animated Border */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
                    backgroundSize: '200% 200%',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'subtract',
                    padding: '2px',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="neon-button px-8 py-4 text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(42, 0, 162, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
