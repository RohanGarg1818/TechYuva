'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
