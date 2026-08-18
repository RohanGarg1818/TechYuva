import React from 'react';
import Link from 'next/link';
import { ClubItem } from '@/types';

interface ClubCardProps {
  club: ClubItem;
  featured?: boolean;
}

export const ClubCard: React.FC<ClubCardProps> = ({ club, featured = false }) => {
  if (featured && club.featuredSize === 'large') {
    return (
      <Link
        href={`/clubs/${club.slug}`}
        className="col-span-1 md:col-span-8 group relative rounded-xl overflow-hidden bg-surface border border-outline-variant transition-all duration-300 hover:shadow-subtle min-h-[400px] flex flex-col justify-end"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${club.bannerImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative z-10 p-8 flex flex-col gap-4">
          <span className="self-start px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm backdrop-blur-sm uppercase tracking-wider">
            {club.category}
          </span>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-surface flex items-center justify-center p-2 flex-shrink-0 shadow-md">
              <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-h2 text-h2 text-white">{club.name}</h3>
          </div>
          <p className="font-body-md text-white/90 max-w-2xl">{club.description}</p>
          {club.upcomingActivity && (
            <div className="mt-2 flex items-center gap-2 text-white/80 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">event</span>
              <span>{club.upcomingActivity}</span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  if (featured && club.featuredSize === 'small') {
    return (
      <Link
        href={`/clubs/${club.slug}`}
        className="flex-1 group relative rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant transition-all duration-300 hover:shadow-subtle p-6 flex flex-col gap-4 justify-between"
      >
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
            <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
          </div>
          <span className="px-2.5 py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px] font-bold uppercase tracking-wider">
            {club.category}
          </span>
        </div>
        <div>
          <h3 className="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary transition-colors">
            {club.name}
          </h3>
          <p className="font-body-md text-on-surface-variant text-sm line-clamp-2">
            {club.description}
          </p>
        </div>
        {club.upcomingActivity && (
          <div className="pt-3 border-t border-outline-variant flex items-center gap-2 text-primary font-label-sm text-xs font-semibold">
            <span className="material-symbols-outlined text-[16px]">notifications_active</span>
            <span>{club.upcomingActivity}</span>
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-300 flex flex-col group"
    >
      <div className="h-32 bg-surface-container relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          style={{ backgroundImage: `url('${club.bannerImage}')` }}
        />
        <div className="absolute -bottom-6 left-6 w-12 h-12 rounded border-2 border-surface bg-white shadow-sm overflow-hidden z-10">
          <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="pt-10 px-6 pb-6 flex flex-col gap-3 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-h3 text-h3 text-on-surface group-hover:text-primary transition-colors">
            {club.name}
          </h3>
          <span className="text-xs font-label-sm px-2 py-0.5 bg-surface-container-high rounded text-on-surface-variant uppercase font-semibold">
            {club.category}
          </span>
        </div>
        <p className="font-body-md text-on-surface-variant text-sm flex-grow line-clamp-2">
          {club.description}
        </p>
        <div className="mt-2 pt-4 border-t border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-1 text-on-surface-variant text-xs">
            <span className="material-symbols-outlined text-[14px]">group</span>
            <span>{club.memberCount || 'Active Club'}</span>
          </div>
          <span className="text-primary font-label-sm text-sm font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            View Profile
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
};
