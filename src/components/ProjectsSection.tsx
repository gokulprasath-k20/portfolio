"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { projects } = portfolioData;
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              Selected <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-xl text-foreground max-w-2xl">
              A curated collection of digital experiences and solutions.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-[60vh] min-w-[300px] md:min-w-[500px] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-slate-200"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
              
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-black text-primary/20">0{index + 1}</span>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200/50 rounded-full hover:bg-primary hover:text-white transition-all">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200/50 rounded-full hover:bg-primary hover:text-white transition-all">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 text-xs font-semibold bg-slate-100 border border-slate-200 rounded-full text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Explore Case Study <Eye size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}