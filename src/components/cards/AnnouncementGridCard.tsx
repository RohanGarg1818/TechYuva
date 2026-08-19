'use client';

import React from 'react';
import Link from 'next/link';
import { AnnouncementItem as AnnouncementType } from '@/types';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnnouncementGridCardProps {
  announcement: AnnouncementType;
  className?: string;
  isLarge?: boolean;
}

export const AnnouncementGridCard: React.FC<AnnouncementGridCardProps> = ({ 
  announcement, 
  className,
  isLarge = false
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn("group w-full h-full", className)}
    >
      <Link href={`/announcements`} className="block w-full h-full">
        <div className="flex flex-col justify-between h-full rounded-2xl bg-surface border border-outline-variant p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm">
          
          {/* Top Section: Badges & Date */}
          <div className="flex justify-between items-start mb-6">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              {announcement.isFeatured && <span className="material-symbols-outlined text-[12px]">star</span>}
              {announcement.category}
            </span>

            <div className="flex items-center gap-1.5 font-label-sm text-xs font-medium text-on-surface-variant">
              {announcement.date}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-2 mt-auto">
            <h3 className={cn(
              "font-h3 font-bold text-lg md:text-xl text-on-surface leading-snug group-hover:text-primary transition-colors",
              isLarge ? "line-clamp-4 md:text-2xl" : "line-clamp-3"
            )}>
              {announcement.title}
            </h3>
            
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mt-1">
              {announcement.description}
            </p>
          </div>

          {isLarge && (
            <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm transition-colors w-fit group-hover:gap-3">
              Read Full Story <span className="material-symbols-outlined text-[18px]">east</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
