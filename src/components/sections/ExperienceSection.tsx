import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Plasmid Innovation',
    role: 'Cybersecurity Intern',
    duration: 'Jan – Mar 2025',
    location: 'Remote',
    description: 'Worked with Tor, Nmap, Kali Linux. Hands-on with network footprinting and vulnerability scanning.',
    tech: ['Tor', 'Nmap', 'Kali Linux', 'Network Security', 'Vulnerability Assessment'],
    type: 'Internship',
  },
  {
    id: 2,
    company: 'Codec Technologies',
    role: 'Application Development Intern',
    duration: 'June – July 2025',
    location: 'Remote',
    description: 'Built cross-platform applications, focused on UI, responsiveness, debugging, and performance.',
    tech: ['React', 'Cross-platform Development', 'UI/UX', 'Performance Optimization'],
    type: 'Internship',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-secondary rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Professional <span className="glow-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Building expertise through hands-on experience in cybersecurity and application development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 hover:shadow-neon transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Info */}
                <div className="md:w-1/3">
                  <motion.div
                    className="flex items-center gap-3 mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-xl group-hover:text-primary transition-colors">
                        {experience.company}
                      </h3>
                      <span className="text-sm px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                        {experience.type}
                      </span>
                    </div>
                  </motion.div>
                  
                  <div className="space-y-2 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="md:w-2/3">
                  <h4 className="text-xl font-orbitron font-semibold mb-3 text-foreground/90">
                    {experience.role}
                  </h4>
                  
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border opacity-0 group-hover:opacity-30 rounded-xl"
                style={{
                  background: 'linear-gradient(45deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            className="glass-card p-6 inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-orbitron font-medium mb-2 text-primary">
              🚀 Always Learning
            </h4>
            <p className="text-foreground/70 text-sm">
              Continuously expanding my skill set through internships, projects, and certifications
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};