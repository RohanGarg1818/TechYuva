'use client';

import React, { useState } from 'react';
import { mockResources } from '@/data/resources';
import { ResourceCard } from '@/components/cards/ResourceCard';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Student Services',
    'Academic',
    'Library',
    'Forms',
    'Scholarships',
    'Admissions',
  ];

  const filtered = mockResources.filter((r) => {
    if (activeCategory !== 'All' && r.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-2.5 border-b border-outline-variant pb-6 md:pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-on-surface">
          Campus Resources
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl font-body-md">
          Centralized directory for official student portals, academic examination links, library catalogues, and downloadable administrative forms.
        </p>

        {/* Mobile/Tablet Category Horizontal Scroll */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 pt-3 hide-scrollbar -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container border border-outline-variant text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Layout with Desktop Sidebar */}
      <section className="flex gap-8 items-start w-full">
        {/* Desktop Categories Sidebar */}
        <aside className="w-56 hidden lg:flex flex-col gap-1 shrink-0 sticky top-28 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <h3 className="text-xs text-outline uppercase tracking-wider font-bold px-3 py-2">
            Categories
          </h3>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-fixed text-primary border-l-4 border-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              {cat === 'All' ? 'All Resources' : cat}
            </button>
          ))}
        </aside>

        {/* Resources Grid */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}
