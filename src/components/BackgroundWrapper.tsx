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
          backgroundImage: `url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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