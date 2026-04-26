"use client";

import { SectionWrapper } from './SectionWrapper';

export function SkillsSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "HTML/CSS", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "Adobe Photoshop",
    "Adobe Illustrator", "Abode premiere pro", "Adobe after effects",
  ];

  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-200 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="text-foreground font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}