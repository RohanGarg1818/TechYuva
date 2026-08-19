'use client';

import React from 'react';
import Link from 'next/link';
import { AnnouncementItem as AnnouncementType } from '@/types';
import { motion } from 'framer-motion';

interface AnnouncementItemProps {
  announcement: AnnouncementType;
}

export const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ announcement }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group w-full mb-4"
    >
      <Link href={`/announcements`} className="block w-full">
        <div className="relative overflow-hidden flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-surface/40 backdrop-blur-md border border-outline-variant/30 shadow-subtle hover:shadow-elevated hover:bg-surface/80 transition-all duration-500 z-10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10">
          
          {/* Date & Category Indicator */}
          <div className="flex-shrink-0 sm:w-36 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5 sm:pr-4 sm:border-r border-outline-variant/30">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container-highest/50 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full shadow-sm">
              {announcement.category}
            </span>
            <div className="flex items-center gap-1.5 text-on-surface-variant mt-1">
              <span className="material-symbols-outlined text-[16px] opacity-70">calendar_today</span>
              <span className="font-label-sm text-xs font-semibold tracking-wide uppercase">
                {announcement.date}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-2 flex-grow min-w-0 justify-center">
            {announcement.isFeatured && (
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[14px] text-accent">star</span>
                <span className="font-label-sm text-xs text-accent font-bold tracking-widest uppercase">
                  Featured
                </span>
              </div>
            )}
            
            <h3 className="font-h3 text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
              {announcement.title}
            </h3>
            
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mt-1">
              {announcement.description}
            </p>
          </div>

          {/* Action Icon */}
          <div className="hidden sm:flex items-center justify-center pl-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low border border-outline-variant/50 text-outline group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary group-hover:-rotate-45 transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
