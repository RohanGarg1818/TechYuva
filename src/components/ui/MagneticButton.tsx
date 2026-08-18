'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '',
  stiffness = 150,
  damping = 15,
  mass = 0.5
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values to track the raw position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the actual movement
  const springX = useSpring(x, { stiffness, damping, mass });
  const springY = useSpring(y, { stiffness, damping, mass });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Get the bounding box of the element
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate the center point
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from the center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Set the target offset (dampened so it doesn't move 1:1 with the mouse)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    // Reset back to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
