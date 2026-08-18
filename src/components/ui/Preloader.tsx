'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate realistic loading with slow steps (like the Framer SmartPreloader)
    // It speeds up, hangs around 27% and 82%, then finishes.
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      // Logic for irregular speed
      let step = Math.random() * 3 + 1;
      
      // Slow down at specific intervals to feel realistic
      if (currentProgress > 25 && currentProgress < 35) step = 0.5;
      if (currentProgress > 80 && currentProgress < 85) step = 0.3;
      
      currentProgress += step;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Wait half a second at 100% before sliding out
      }
      
      setProgress(Math.floor(currentProgress));
    }, 20); // 20ms update interval for smooth counting

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} // Cinematic ease
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col justify-end p-8 md:p-12"
        >
          {/* Progress fill */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-indigo-600/50 to-violet-600/80"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progress / 100 }}
            transition={{ duration: 0.1 }}
            style={{ transformOrigin: "bottom" }}
          />

          {/* Counter Text */}
          <div className="relative z-10 flex justify-end w-full">
            <motion.div 
              className="text-white text-[56px] md:text-[80px] font-semibold tracking-tighter leading-none mix-blend-difference"
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
