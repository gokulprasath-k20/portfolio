"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionWrapper } from './SectionWrapper';

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my development career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    className="bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-foreground/80">{exp.company}</h4>
                        <div className="flex items-center gap-2 text-foreground/60 mt-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.2 + descIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="text-foreground/70 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {desc}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for the other side on larger screens */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-secondary/50 backdrop-blur-md rounded-2xl p-8 border border-border/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Education & Learning</h3>
              <p className="text-foreground/70 leading-relaxed">
                I hold a degree in Computer Science and continuously expand my knowledge through 
                online courses, workshops, and hands-on projects. I believe that learning never stops, 
                especially in the rapidly evolving world of technology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}