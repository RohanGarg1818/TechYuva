'use client';

import React from 'react';
import Link from 'next/link';
import { NoticeItem } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';

interface NoticeListItemProps {
  notice: NoticeItem;
  variant?: 'editorial' | 'compact';
}

export const NoticeListItem: React.FC<NoticeListItemProps> = ({
  notice,
  variant = 'editorial',
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex gap-4 items-start py-3 group">
        <div className="mt-0.5 flex-shrink-0">
          <Badge priority={notice.priority} size="sm">
            {notice.priority === 'very-important' ? 'Very Important' : notice.priority === 'important' ? 'Important' : 'Normal'}
          </Badge>
        </div>
        <div className="flex-grow min-w-0">
          <Link
            href={`/notices/${notice.slug}`}
            className="font-body-md text-sm font-semibold text-on-surface hover:text-primary transition-colors line-clamp-2 mb-1 block group-hover:translate-x-1 duration-300"
          >
            {notice.title}
          </Link>
          <div className="font-label-sm text-xs text-on-surface-variant opacity-70 font-medium">
            {notice.department} • {notice.timeAgo || notice.date}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/notices/${notice.slug}`} className="block">
      <motion.div
        whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        className="group flex flex-col sm:flex-row gap-6 py-6 border-b border-outline-variant/30 transition-all duration-300 px-6 -mx-6 rounded-2xl"
      >
        <div className="flex-shrink-0 w-32 flex flex-col gap-2 pt-1">
          <Badge priority={notice.priority}>
            {notice.priority === 'very-important' ? 'Very Important' : notice.priority === 'important' ? 'Important' : 'Normal'}
          </Badge>
          <span className="font-label-sm text-xs font-semibold text-on-surface-variant">
            {notice.date}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 flex-grow">
          <span className="font-label-sm text-xs text-primary font-bold tracking-widest uppercase">
            {notice.department}
          </span>
          <h3 className="font-h3 text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
            {notice.title}
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
            {notice.excerpt}
          </p>
        </div>

        <div className="hidden sm:flex items-center text-outline/50 group-hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform duration-300">
            arrow_forward
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
