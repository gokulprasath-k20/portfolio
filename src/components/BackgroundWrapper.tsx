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
          className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm"
        />
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}