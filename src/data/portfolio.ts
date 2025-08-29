import { Project, Skill, Experience, Contact } from '@/types';

export const portfolioData = {
  personal: {
    name: "Gokulprasath",
    title: "Full Stack Developer",
    bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems.",
    avatar: "/avatar.jpg",
    resumeUrl: "/resume.pdf"
  },

  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/project1.jpg",
      tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/gokulprasath-k20/ecommerce-platform"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      image: "/project2.jpg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/gokulprasath-k20/task-management-app"
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts.",
      image: "/project3.jpg",
      tags: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/gokulprasath-k20/weather-dashboard"
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
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: [
        "Led development of multiple client projects using React and Node.js",
        "Implemented CI/CD pipelines improving deployment efficiency by 40%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications using React and Vue.js",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized application performance resulting in 50% faster load times"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Webpack"]
    }
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