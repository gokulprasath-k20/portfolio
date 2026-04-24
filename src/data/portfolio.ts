import { Project, Skill, Experience, Contact } from '@/types';

export const portfolioData = {
  personal: {
    name: "Gokulprasath",
    title: "Full Stack Developer",
    bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems.",
    avatar: "/620123205015.jpeg",
    resumeUrl: "/resume.pdf"
  },

  projects: [
    {
      id: "1",
      title: "Zentrix Technology",
      description: "A professional technology solutions platform providing modern web services and digital transformation.",
      image: "/project1.jpg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://zentrix-technology.vercel.app/",
      githubUrl: "https://github.com/gokulprasath-k20/zentrix-technology"
    },
    {
      id: "2",
      title: "TGStreams",
      description: "Real-time communication and streaming platform built for seamless interaction and content sharing.",
      image: "/project2.jpg",
      tags: ["React", "Node.js", "WebRTC", "Socket.io", "Express"],
      liveUrl: "http://tgstreams.vercel.app/",
      githubUrl: "https://github.com/gokulprasath-k20/tgstreams"
    },
    {
      id: "3",
      title: "SkillToJob AI",
      description: "AI-powered career development platform that bridges the gap between skills and job opportunities.",
      image: "/project3.jpg",
      tags: ["Next.js", "AI", "OpenAI", "PostgreSQL", "TypeScript"],
      liveUrl: "https://skilltojob-ai.vercel.app/",
      githubUrl: "https://github.com/gokulprasath-k20/skilltojob-ai"
    },
    {
      id: "4",
      title: "AVS Nexus",
      description: "A modular student skill evaluation platform with a real-time coding environment, multi-role access (student/admin/super admin), dynamic modules, partial scoring, and advanced admin controls including filtering and activity tracking.",
      image: "/project4.jpg",
      tags: ["Next.js", "MongoDB", "TypeScript", "Node.js", "Real-time"],
      liveUrl: "https://avsnexus.vercel.app",
      githubUrl: ""
    }
  ] as Project[],

  skills: [
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "PostgreSQL", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Docker", level: 60, category: "tools" },
    { name: "AWS", level: 55, category: "tools" },
    { name: "Figma", level: 70, category: "design" }
  ] as Skill[],

  experience: [
    {
      company: "Trident Creative Lab",
      position: "Video Editor",
      period: "2026 - Present",
      description: [
        "Crafting high-quality visual content and professional video edits",
        "Collaborating with creative teams to deliver engaging multimedia experiences",
        "Utilizing advanced editing techniques to enhance storytelling and brand identity"
      ],
      technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator"]
    },
  ] as Experience[],

  contact: {
    email: "gokulprasath.k20@gmail.com",
    phone: "+91 6380957425",
    linkedin: "https://www.linkedin.com/in/gokul-prasath-6048382a1/",
    github: "https://github.com/gokulprasath-k20",
    twitter: "https://twitter.com/gokulprasath",
    location: "Salem, Tamil Nadu, India"
  } as Contact
};