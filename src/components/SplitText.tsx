"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    threshold, 
    margin: rootMargin 
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  const splitText = splitType === 'chars' 
    ? text.split('') 
    : text.split(' ');

  // Convert ease string to framer-motion easing
  const getEasing = (easeString: string) => {
    switch (easeString) {
      case 'power3.out':
        return [0.215, 0.61, 0.355, 1];
      case 'power2.out':
        return [0.25, 0.46, 0.45, 0.94];
      case 'power4.out':
        return [0.165, 0.84, 0.44, 1];
      default:
        return [0.215, 0.61, 0.355, 1];
    }
  };

  useEffect(() => {
    if (animationComplete && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [animationComplete, onLetterAnimationComplete]);

  const handleAnimationComplete = (index: number) => {
    if (index === splitText.length - 1) {
      setAnimationComplete(true);
    }
  };

  return (
    <div 
      ref={ref} 
      className={`inline-block ${className}`}
      style={{ textAlign }}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            delay: (delay / 1000) * index,
            ease: getEasing(ease)
          }}
          onAnimationComplete={() => handleAnimationComplete(index)}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            minWidth: char === ' ' ? '0.3em' : 'auto'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;