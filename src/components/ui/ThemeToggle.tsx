'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-14 h-8 bg-slate-200/50 dark:bg-slate-800/50 rounded-full animate-pulse" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex items-center justify-between w-16 h-8 p-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon */}
      <div className="z-10 flex items-center justify-center w-6 h-6">
        <span className={`material-symbols-outlined text-[16px] transition-colors ${!isDark ? 'text-amber-500' : 'text-slate-500'}`}>light_mode</span>
      </div>
      
      {/* Moon Icon */}
      <div className="z-10 flex items-center justify-center w-6 h-6">
        <span className={`material-symbols-outlined text-[16px] transition-colors ${isDark ? 'text-blue-300' : 'text-slate-400'}`}>dark_mode</span>
      </div>

      {/* Sliding Pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="absolute w-6 h-6 bg-white dark:bg-slate-900 rounded-full shadow-sm"
        style={{
          left: isDark ? 'auto' : '4px',
          right: isDark ? '4px' : 'auto',
        }}
      />
    </button>
  );
}
