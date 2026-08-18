import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = 'View All',
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 ${className}`}>
      <div>
        <h2 className="font-h2 text-h2 text-on-surface tracking-tight">{title}</h2>
        {subtitle && (
          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">{subtitle}</p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline group"
        >
          {viewAllLabel}
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </Link>
      )}
    </div>
  );
};
