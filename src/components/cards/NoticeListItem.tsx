import React from 'react';
import Link from 'next/link';
import { NoticeItem } from '@/types';
import { Badge } from '@/components/ui/Badge';

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
      <div className="flex gap-4 items-start py-3">
        <div className="mt-0.5 flex-shrink-0">
          <Badge priority={notice.priority} size="sm">
            {notice.priority === 'very-important' ? 'Very Important' : notice.priority === 'important' ? 'Important' : 'Normal'}
          </Badge>
        </div>
        <div className="flex-grow min-w-0">
          <Link
            href={`/notices/${notice.slug}`}
            className="font-body-md text-sm font-medium text-on-surface hover:text-primary hover:underline line-clamp-2 mb-1 block"
          >
            {notice.title}
          </Link>
          <div className="font-label-sm text-xs text-on-surface-variant opacity-70">
            {notice.department} • {notice.timeAgo || notice.date}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/notices/${notice.slug}`}
      className="group flex flex-col sm:flex-row gap-6 py-6 border-b border-outline-variant hover:bg-surface-container-low transition-colors duration-200 px-4 -mx-4 rounded"
    >
      <div className="flex-shrink-0 w-32 flex flex-col gap-2 pt-1">
        <Badge priority={notice.priority}>
          {notice.priority === 'very-important' ? 'Very Important' : notice.priority === 'important' ? 'Important' : 'Normal'}
        </Badge>
        <span className="font-label-sm text-xs text-on-surface-variant">
          {notice.date}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 flex-grow">
        <span className="font-label-sm text-xs text-primary font-medium tracking-wide">
          {notice.department}
        </span>
        <h3 className="font-h3 text-h3 text-on-surface group-hover:text-primary transition-colors">
          {notice.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
          {notice.excerpt}
        </p>
      </div>

      <div className="hidden sm:flex items-center text-outline group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </Link>
  );
};
