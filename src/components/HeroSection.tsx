"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SplitText from './SplitText';

export function HeroSection() {
  const { personal, contact } = portfolioData;

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleDownloadResume = () => {
    // You can replace this with actual resume download logic
    window.open(personal.resumeUrl, '_blank');
  };

  const socialLinks = [
    {
      icon: Github,
      href: contact.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: contact.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${contact.email}`,
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-cyan-500/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 100% 100%, rgba(139, 92, 246, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 0% 100%, rgba(6, 182, 212, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.3), transparent 50%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
                {personal.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6"
          >
            {personal.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}\n          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}