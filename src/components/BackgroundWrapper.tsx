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
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-attachment-fixed"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/15/24/18/152418768633740511.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      {overlay && (
        <div 
          className="fixed inset-0 -z-10 bg-background/80 backdrop-blur-sm"
          style={{ backgroundColor: `rgba(var(--background-rgb, 0 0 0) / ${overlayOpacity})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}