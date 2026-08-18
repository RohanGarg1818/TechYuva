import React from 'react';
import Link from 'next/link';
import { AnnouncementItem as AnnouncementType } from '@/types';

interface AnnouncementItemProps {
  announcement: AnnouncementType;
}

export const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ announcement }) => {
  return (
    <Link
      href={`/announcements`}
      className="block border-b border-outline-variant py-6 hover:bg-surface-container-low transition-colors group px-4 -mx-4 rounded"
    >
      <div className="flex items-start gap-6">
        <div className="w-20 sm:w-24 flex-shrink-0 pt-1">
          <div className="font-label-sm text-xs sm:text-sm font-semibold text-primary">
            {announcement.date}
          </div>
          <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">
            {announcement.category}
          </span>
        </div>
        <div className="flex-grow">
          <h3 className="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary transition-colors">
            {announcement.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
            {announcement.description}
          </p>
        </div>
        <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block">
          arrow_forward
        </span>
      </div>
    </Link>
  );
};
