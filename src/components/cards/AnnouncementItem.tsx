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
    <Link href={`/announcements`} className="block">
      <motion.div
        whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        className="flex items-start gap-6 border-b border-outline-variant/30 py-6 transition-all group px-6 -mx-6 rounded-2xl"
      >
        <div className="w-20 sm:w-28 flex-shrink-0 pt-1">
          <div className="font-label-sm text-xs sm:text-sm font-bold text-primary">
            {announcement.date}
          </div>
          <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container-highest/50 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full shadow-sm">
            {announcement.category}
          </span>
        </div>
        <div className="flex-grow">
          <h3 className="font-h3 text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
            {announcement.title}
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
            {announcement.description}
          </p>
        </div>
        <div className="hidden sm:flex items-center pt-2">
          <span className="material-symbols-outlined text-outline/50 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 text-[24px]">
            arrow_forward
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
