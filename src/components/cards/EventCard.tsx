'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EventItem } from '@/types';

interface EventCardProps {
  event: EventItem;
  featured?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, featured = false }) => {
  if (featured) {
    return (
      <Link href={`/events/${event.slug}`} className="block">
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group bg-surface/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row cursor-pointer shadow-glass hover:shadow-glass-hover transition-all"
        >
          <div className="md:w-2/3 h-64 md:h-auto min-h-[300px] relative overflow-hidden bg-surface-container-low">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-sm text-xs font-bold uppercase tracking-wider shadow-sm">
              Featured
            </div>
          </div>
          <div className="md:w-1/3 p-8 flex flex-col justify-center">
            <div className="text-primary font-label-sm text-xs font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              {event.date}
            </div>
            <h2 className="font-h2 text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-on-surface">
              {event.title}
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3">
              {event.description}
            </p>
            <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-xs mt-auto">
              <span className="flex items-center gap-1.5 opacity-80">
                <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                {event.venue}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/events/${event.slug}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-card/60 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden flex flex-col cursor-pointer shadow-glass hover:shadow-glass-hover transition-all h-full"
      >
        {/* Event Image */}
        <div className="aspect-video w-full bg-surface-container-low relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-md text-on-surface text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/20">
            {event.date.split(' ').slice(0, 2).join(' ')}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              {event.category}
            </span>
            {event.department && (
              <span className="bg-card/50 backdrop-blur-sm text-on-surface-variant px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide border border-white/10">
                {event.department}
              </span>
            )}
          </div>

          <h3 className="font-h3 text-xl font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-2">
            {event.description}
          </p>

          <div className="mt-auto flex items-center text-on-surface-variant text-xs gap-2 opacity-80 pt-4 border-t border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span className="truncate">{event.venue}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
