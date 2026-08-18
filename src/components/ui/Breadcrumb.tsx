import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant ${className}`}>
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="material-symbols-outlined text-[16px] text-outline">
            chevron_right
          </span>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-semibold truncate max-w-xs md:max-w-md">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
