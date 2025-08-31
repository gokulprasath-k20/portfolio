"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Full Stack Developer specializing in creating innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="block text-foreground/70 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${contact.email}`}
                className="block text-foreground/70 hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="block text-foreground/70 hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              )}
            </div>
            
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/60 text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart size={16} className="text-red-500" /> by Your Name
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Back to top <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}