import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 75, icon: '🎨' },
      { name: 'JavaScript', level: 90, icon: '⚡' },
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 75, icon: '💨' },
      { name: 'Framer Motion', level: 75, icon: '🎭' },
      { name: 'Three.js', level: 70, icon: '🎮' },
    ],
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚂' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'SQL', level: 75, icon: '🗄️' },
      { name: 'API Integration', level: 75, icon: '🔗' },
    ],
  },
  {
    name: 'Security & Others',
    skills: [
      { name: 'Cybersecurity', level: 80, icon: '🛡️' },
      { name: 'Git & GitHub', level: 85, icon: '🐙' },
      { name: 'Linux', level: 80, icon: '🐧' },
      { name: 'Network Security', level: 75, icon: '🔒' },
      { name: 'Penetration Testing', level: 70, icon: '🔍' },
      { name: 'VS Code', level: 90, icon: '💻' },
    ],
  },
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="relative py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
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
            My <span className="glow-text">Toolkit</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive arsenal of modern technologies and cybersecurity expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-neon'
                  : 'glass-card text-foreground/70 hover:text-primary hover:shadow-glow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 group hover:shadow-neon transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-semibold text-lg mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{skill.level}% Proficiency</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  />
                </div>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute top-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 blur-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                />
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-70"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-semibold mb-8">
            Certifications & Learning
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Certified JavaScript Developer', org: 'Udemy', status: 'Completed' },
              { name: 'Cybersecurity', org: 'Great Learning', status: 'Completed' },
              { name: 'MongoDB, Node.js Internship', org: 'GeeksForGeeks', status: 'Completed' },
              { name: 'NASA Space App Challenge', org: 'NASA', status: 'Participant (2024)' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-4 text-center min-w-[200px]"
              >
                <h4 className="font-orbitron font-medium mb-2">{cert.name}</h4>
                <p className="text-sm text-foreground/70 mb-2">{cert.org}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cert.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400'
                    : cert.status === 'In Progress'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-secondary/20 text-secondary'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};