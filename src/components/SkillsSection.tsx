"use client";

import { SectionWrapper } from './SectionWrapper';

export function SkillsSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "HTML/CSS", "Tailwind CSS", "Git", "MongoDB", "PostgreSQL", "AWS"
  ];

  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}