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
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}