"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize mouse position to range [-0.5, 0.5]
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax effect for blobs based on scroll
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse influence transforms
  const moveX1 = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);
  const moveY1 = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]);
  
  const moveX2 = useTransform(springX, [-0.5, 0.5], ["5%", "-5%"]);
  const moveY2 = useTransform(springY, [-0.5, 0.5], ["5%", "-5%"]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-20 overflow-hidden bg-white"
      aria-hidden="true"
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Animated Blobs */}
      <motion.div
        style={{ 
          y: blob1Y,
          x: moveX1,
          translateY: moveY1
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-50/50 blur-[120px]"
      />
      
      <motion.div
        style={{ 
          y: blob2Y,
          x: moveX2,
          translateY: moveY2
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-50/40 blur-[100px]"
      />
      
      <motion.div
        style={{ 
          y: blob3Y,
          x: moveX1,
          translateY: moveY2
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-50/30 blur-[130px]"
      />

      <motion.div
        style={{ 
          x: moveX2,
          translateY: moveY1
        }}
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] left-[10%] w-[45%] h-[45%] rounded-full bg-emerald-50/30 blur-[110px]"
      />

      {/* Subtle Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Light sweep animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none" />
    </div>
  );
};
