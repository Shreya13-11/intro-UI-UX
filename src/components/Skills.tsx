import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'Figma', level: 95, color: 'bg-cta-yellow' },
  { name: 'Figma Jam', level: 85, color: 'bg-accent-blue' },
  { name: 'Canva', level: 80, color: 'bg-green-500' },
  { name: 'Photoshop', level: 70, color: 'bg-pink-500' },
  { name: 'HTML/CSS', level: 75, color: 'bg-orange-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-blue font-semibold mb-2 uppercase tracking-widest text-sm">
              My Skills
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Top Tools I Use as a UI/UX Designer
            </h2>

            <p className="text-text-secondary mb-4 max-w-md">
              I use modern design and development tools to create clean,
              interactive, and user-friendly digital experiences.
            </p>
          </motion.div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  
                  <span className="font-display font-bold text-sm tracking-wider">
                    {skill.name}
                  </span>

                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/5">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
