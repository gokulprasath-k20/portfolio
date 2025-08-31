"use client";

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { BackgroundWrapper } from '@/components/BackgroundWrapper';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <BackgroundWrapper>
      {showWelcome && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {!showWelcome && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
        </>
      )}
    </BackgroundWrapper>
  );
}
