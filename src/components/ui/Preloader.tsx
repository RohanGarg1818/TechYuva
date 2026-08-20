'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [statusText, setStatusText] = useState('INITIALIZING CAMPUS PORTAL...');

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      let step = Math.random() * 4 + 1.5;

      if (currentProgress > 30 && currentProgress < 45) {
        step = 0.8;
      }
      if (currentProgress > 75 && currentProgress < 85) {
        step = 0.6;
      }

      currentProgress += step;

      if (currentProgress < 30) {
        setStatusText('INITIALIZING CAMPUS PORTAL...');
      } else if (currentProgress < 65) {
        setStatusText('CONNECTING USICT SCHOOL & CLUBS...');
      } else if (currentProgress < 90) {
        setStatusText('LOADING EVENTS & NOTICES...');
      } else {
        setStatusText('WELCOME TO TECHYUVA');
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }

      setProgress(Math.floor(currentProgress));
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const brandLetters = 'TECHYUVA'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Futuristic Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-lg w-full">
            {/* Tech Hub Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 mb-2"
            >
              <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  hub
                </span>
              </div>
            </motion.div>

            {/* Glowing TECHYUVA Typography */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              {brandLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: 'easeOut',
                  }}
                  className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-blue-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold text-blue-300 tracking-[0.3em] uppercase -mt-3"
            >
              Digital Campus of USICT
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 sm:w-80 flex flex-col items-center gap-3 mt-4">
              <div className="w-full h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden p-[1px]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Status & Percentage Indicator */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono font-medium text-slate-400 px-1">
                <span className="truncate max-w-[200px] text-left text-slate-400 tracking-wider">
                  {statusText}
                </span>
                <span className="font-bold text-blue-400 font-sans text-xs">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
