import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EventItem } from '@/types';

interface EventCardProps {
  event: EventItem;
  featured?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, featured = false }) => {
  if (featured) {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col md:flex-row cursor-pointer event-card-hover transition-all duration-300"
      >
        <div className="md:w-2/3 h-64 md:h-auto min-h-[300px] relative overflow-hidden bg-surface-container-low">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
            Featured
          </div>
        </div>
        <div className="md:w-1/3 p-8 flex flex-col justify-center">
          <div className="text-primary font-label-sm text-label-sm mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            {event.date}
          </div>
          <h2 className="font-h2 text-h2 mb-4 group-hover:text-primary transition-colors text-on-surface">
            {event.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
            {event.description}
          </p>
          <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm mt-auto">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
              {event.venue}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col cursor-pointer event-card-hover transition-all duration-300"
    >
      {/* Event Image */}
      <div className="aspect-video w-full bg-surface-container-low relative overflow-hidden border-b border-outline-variant">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded shadow-sm border border-outline-variant">
          {event.date.split(' ').slice(0, 2).join(' ')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            {event.category}
          </span>
          {event.department && (
            <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-semibold">
              {event.department}
            </span>
          )}
        </div>

        <h3 className="font-h3 text-h3 text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="mt-auto flex items-center text-on-surface-variant font-label-sm text-label-sm gap-2 opacity-80 pt-4 border-t border-outline-variant/40">
          <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
          <span className="truncate">{event.venue}</span>
        </div>
      </div>
    </Link>
  );
};
