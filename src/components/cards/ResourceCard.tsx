import React from 'react';
import { ResourceItem } from '@/types';

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const isExternal = resource.url.startsWith('http');

  return (
    <a
      href={resource.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group relative flex flex-col justify-between bg-surface-container-lowest dark:bg-card border border-outline-variant/70 hover:border-primary/50 dark:border-border rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5 overflow-hidden"
    >
      {/* Subtle hover gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between gap-2 mb-2.5 relative z-10">
          <div className="h-9 w-9 rounded-lg bg-text-blue-600 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-on-primary transition-all duration-200 shrink-0">
            <span className="material-symbols-outlined text-[20px]">
              {resource.icon}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="relative z-10">
          <h3 className="text-[15px] font-bold text-on-surface dark:text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-1">
            {resource.title}
          </h3>
          <p className="text-xs text-on-surface-variant dark:text-muted-foreground line-clamp-2 leading-relaxed mt-1 min-h-[34px]">
            {resource.description}
          </p>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="relative z-10 pt-2.5 mt-2 border-t border-outline-variant/40 dark:border-border/50 flex items-center justify-between text-primary font-semibold text-xs group-hover:text-primary transition-colors">
        <span>{resource.actionText || 'Access Resource'}</span>
        <span className="material-symbols-outlined text-[15px] transform group-hover:translate-x-1 transition-transform">
          {isExternal ? 'open_in_new' : 'arrow_forward'}
        </span>
      </div>
    </a>
  );
};

