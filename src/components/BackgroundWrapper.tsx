"use client";

import { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function BackgroundWrapper({ 
  children, 
  overlay = true, 
  overlayOpacity = 0.8 
}: BackgroundWrapperProps) {
  return (
    <div className="relative min-h-screen">
      {/* Dark Overlay for better text readability */}
      {overlay && (
        <div 
          className="fixed inset-0 -z-10 bg-background/20 backdrop-blur-sm"
          style={{ backgroundColor: `rgba(var(--background-rgb, 0 0 0) / ${overlayOpacity * 0.3})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}