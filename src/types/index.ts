export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
}