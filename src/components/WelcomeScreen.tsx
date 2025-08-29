"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from './SplitText';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    // Wait 1.5 seconds after animation completes, then transition
    setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 1500);
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-background/90 backdrop-blur-sm" />
          {/* Subtle Animation Overlay */}
          <motion.div
            className="absolute inset-0 -z-5 opacity-20"
            animate={{
              background: [
                "radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.2), transparent 70%)",
                "radial-gradient(600px circle at 100% 100%, rgba(139, 92, 246, 0.2), transparent 70%)",
                "radial-gradient(600px circle at 0% 100%, rgba(6, 182, 212, 0.2), transparent 70%)",
                "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.2), transparent 70%)",
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Welcome Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <SplitText
                text="Hello, you"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-center"
                delay={150}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-lg md:text-xl text-foreground/70"
            >
              Welcome to my portfolio
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="flex space-x-1">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}