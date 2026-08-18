'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PerspectiveRevealProps {
  children: React.ReactNode;
  className?: string;
  index?: number; // Used for staggering the effect slightly if needed
}

export const PerspectiveReveal: React.FC<PerspectiveRevealProps> = ({ 
  children, 
  className = '',
  index = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1.2", "1 1"] // Start animating when top of container hits bottom+20% of viewport, end when bottom hits bottom of viewport
  });

  // Crazy 3D Unfold Transformations
  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20 + (index * 10), 0]); // Slight twist based on index
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]); // Fly up

  return (
    <div 
      ref={containerRef} 
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          y,
          transformOrigin: "bottom center"
        }}
        className="will-change-transform h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
