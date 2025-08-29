"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'I write maintainable, scalable code following best practices and industry standards.'
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive and beautiful user interfaces that provide excellent user experience.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast, optimized applications that deliver exceptional performance.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Strong communication skills and experience working in cross-functional teams.'
  }
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer with a love for creating digital experiences 
            that make a difference. With expertise in modern web technologies, I transform 
            ideas into reality through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg border border-border/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-foreground/70">
                <p>
                  My journey in web development started with a curiosity about how websites work. 
                  What began as a hobby quickly became a passion, and now I&apos;m dedicated to 
                  crafting exceptional digital experiences.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest 
                  technologies. When I&apos;m not coding, you&apos;ll find me exploring new frameworks, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
                <p>
                  I&apos;m always excited to take on new challenges and collaborate with 
                  like-minded individuals to create something amazing.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-3">
                {[
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Projects Completed', value: '25+' },
                  { label: 'Happy Clients', value: '15+' },
                  { label: 'Coffee Cups', value: '∞' }
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-accent/50 rounded-lg"
                  >
                    <span className="font-medium">{fact.label}:</span>
                    <span className="text-primary font-bold">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}