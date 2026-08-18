'use client';

import React, { useState } from 'react';
import { mockAnnouncements } from '@/data/announcements';
import { AnnouncementItem } from '@/components/cards/AnnouncementItem';

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic', 'Campus', 'Student', 'Department'];

  const filtered = mockAnnouncements.filter((a) => {
    if (selectedCategory !== 'All' && a.category !== selectedCategory) return false;
    return true;
  });

  const featured = mockAnnouncements.find((a) => a.isFeatured) || mockAnnouncements[0];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-10">
      {/* Header Section */}
      <section className="flex flex-col gap-3 border-b border-outline-variant pb-8">
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
          Announcements
        </h1>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-3xl">
          Stay updated with the latest university stories, student achievements, and academic news.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-label-sm text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest border border-outline-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Highlight Banner */}
      {featured && selectedCategory === 'All' && (
        <section className="bg-primary text-on-primary rounded-xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="bg-white/20 text-white font-label-sm text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider inline-block backdrop-blur-sm">
              Featured Story • {featured.date}
            </span>
            <h2 className="font-h2 text-h2 text-white leading-tight font-bold">
              {featured.title}
            </h2>
            <p className="font-body-lg text-white/90 text-sm sm:text-base leading-relaxed">
              {featured.description}
            </p>
          </div>
        </section>
      )}

      {/* Announcements Editorial List */}
      <section className="max-w-4xl w-full mx-auto">
        <div className="flex flex-col divide-y-0">
          {filtered.map((announcement) => (
            <AnnouncementItem key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </section>
    </div>
  );
}
