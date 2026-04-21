"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function PerspectiveSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Aramco-style 3D perspective and skew
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const skewY = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothSkewY = useSpring(skewY, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: smoothRotateX,
        skewY: smoothSkewY,
        scale: smoothScale,
        opacity: smoothOpacity,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
