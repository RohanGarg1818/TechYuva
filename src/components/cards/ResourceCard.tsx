import React from 'react';
import { ResourceItem } from '@/types';

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <a
      href={resource.url}
      className="group bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col gap-4 hover:shadow-subtle transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
      <div className="h-12 w-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary relative z-10">
        <span className="material-symbols-outlined text-[26px]">
          {resource.icon}
        </span>
      </div>
      <div className="relative z-10 flex flex-col gap-1.5 flex-grow">
        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
          {resource.category}
        </span>
        <h3 className="font-h3 text-h3 text-on-surface group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
          {resource.description}
        </p>
      </div>
      <div className="mt-auto relative z-10 pt-2 flex items-center text-primary font-label-sm text-label-sm font-semibold group-hover:translate-x-1 transition-all">
        {resource.actionText || 'Access Resource'}{' '}
        <span className="material-symbols-outlined text-[16px] ml-1">
          arrow_forward
        </span>
      </div>
    </a>
  );
};
