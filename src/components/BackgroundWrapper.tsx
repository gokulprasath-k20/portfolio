"use client";

import { ReactNode } from 'react';
import { AnimatedBackground } from './AnimatedBackground';

interface BackgroundWrapperProps {
  children: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function BackgroundWrapper({ 
  children 
}: BackgroundWrapperProps) {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}