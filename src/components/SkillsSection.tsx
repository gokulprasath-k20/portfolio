"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { SectionWrapper } from './SectionWrapper';

const skillCategories = {
  frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  backend: { title: 'Backend', color: 'from-green-500 to-emerald-500' },
  tools: { title: 'Tools', color: 'from-purple-500 to-pink-500' },
  design: { title: 'Design', color: 'from-orange-500 to-red-500' }
};

export function SkillsSection() {
  const { skills } = portfolioData;
  
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life. I'm always learning 
            and exploring new technologies to stay current with industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/90 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <div className={cn(
                    "w-3 h-3 rounded-full bg-gradient-to-r",
                    skillCategories[category as keyof typeof skillCategories].color
                  )} />
                  {skillCategories[category as keyof typeof skillCategories].title}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-foreground/60">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-accent rounded-full overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full bg-gradient-to-r rounded-full",
                          skillCategories[skill.category].color
                        )}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              The technology landscape is constantly evolving, and I believe in continuous learning. 
              I regularly explore new frameworks, attend webinars, and work on side projects to 
              keep my skills sharp and stay ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}