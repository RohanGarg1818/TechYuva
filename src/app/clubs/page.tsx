'use client';

import React, { useState } from 'react';
import { mockClubs } from '@/data/clubs';
import { ClubCard } from '@/components/cards/ClubCard';

export default function ClubsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Technical',
    'Cultural',
    'Sports',
    'Arts',
    'Social',
    'Entrepreneurship',
  ];

  const featuredClubs = mockClubs.filter((c) => c.isFeatured);
  const largeFeatured = featuredClubs.find((c) => c.featuredSize === 'large') || featuredClubs[0];
  const smallFeatured = featuredClubs.filter((c) => c.id !== largeFeatured?.id);

  const filteredClubs = mockClubs.filter((c) => {
    if (selectedCategory !== 'All' && c.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-16 lg:gap-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
          Find your community.
        </h1>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
          Explore technical clubs, cultural societies, sports councils, and entrepreneurship cells across USICT.
        </p>
      </section>

      {/* Category Filters */}
      <section className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-label-sm text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-on-primary shadow-sm scale-105'
                : 'bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {cat === 'All' ? 'All Clubs' : cat}
          </button>
        ))}
      </section>

      {/* Featured Bento Section (shown when All is selected) */}
      {selectedCategory === 'All' && (
        <section className="flex flex-col gap-6">
          <h2 className="font-h2 text-h2 text-on-surface border-b border-outline-variant pb-4">
            Featured Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Large Featured Card (8-col) */}
            {largeFeatured && <ClubCard club={largeFeatured} featured />}

            {/* Smaller Stacked Cards (4-col) */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              {smallFeatured.map((club) => (
                <ClubCard key={club.id} club={club} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Clubs Grid */}
      <section className="flex flex-col gap-6">
        <h2 className="font-h2 text-h2 text-on-surface border-b border-outline-variant pb-4">
          {selectedCategory === 'All' ? 'All Communities' : `${selectedCategory} Communities`}
        </h2>

        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-container-lowest border border-outline-variant rounded-lg">
            <span className="material-symbols-outlined text-[48px] text-outline mb-2">groups</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-1">No clubs found</h3>
            <p className="font-body-md text-sm text-on-surface-variant">Try selecting a different category filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
