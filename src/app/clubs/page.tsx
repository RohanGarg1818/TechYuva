'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usictClubs, dswClubs } from '@/data/clubs';
import { ClubItem } from '@/types';

interface ClubRowProps {
  title: string;
  subtitle: string;
  badge: string;
  clubs: ClubItem[];
  categoryFilter: string;
}

function ClubHorizontalRow({ title, subtitle, badge, clubs, categoryFilter }: ClubRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col gap-5 w-full">
      {/* Header with Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-outline-variant pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-primary/10 text-primary text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {badge}
            </span>
          </div>
          <h2 className="font-h2 text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant font-medium mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Navigation Arrow Buttons */}
        {clubs.length > 0 && (
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant hover:bg-surface-container-high hover:border-outline text-on-surface flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant hover:bg-surface-container-high hover:border-outline text-on-surface flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Scrollable Cards Row */}
      {clubs.length > 0 ? (
        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-2 px-1 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clubs.map((club) => (
            <div
              key={club.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-outline transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image & Category Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-surface-container-high">
                  <img
                    src={club.bannerImage || club.logo}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                  <span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-outline-variant/50 shadow-sm">
                    {club.category}
                  </span>
                </div>

                {/* Club Info */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-h3 text-base md:text-lg font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium line-clamp-2 leading-relaxed">
                    {club.description}
                  </p>
                </div>
              </div>

              {/* Read More Action */}
              <div className="p-5 pt-0 mt-auto">
                <Link
                  href={`/clubs/${club.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary border border-outline-variant hover:border-primary text-on-surface font-label-sm text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-surface-container-lowest border border-dashed border-outline-variant rounded-2xl">
          <span className="material-symbols-outlined text-[36px] text-outline mb-1">filter_alt_off</span>
          <h3 className="text-sm font-bold text-on-surface">No clubs found</h3>
          <p className="text-xs text-on-surface-variant">No items in {title} match category "{categoryFilter}".</p>
        </div>
      )}
    </section>
  );
}

export default function ClubsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Technical',
    'Cultural',
    'Sports',
    'Arts',
    'Social',
    'Academic',
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredUsict = usictClubs.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  const filteredDsw = dswClubs.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-12 lg:gap-16">
      {/* Hero Header Section */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
          Find your community.
        </h1>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
          Explore official technical clubs, cells, and cultural societies across USICT and the Directorate of Students Welfare.
        </p>
      </section>

      {/* Right-Aligned Filter Button Dropdown */}
      <section className="flex justify-end w-full relative">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container border border-outline-variant text-on-surface font-label-sm text-xs font-semibold hover:bg-surface-container-high hover:border-outline transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            aria-expanded={isFilterOpen}
            aria-haspopup="true"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filter{selectedCategory !== 'All' ? `: ${selectedCategory}` : ''}</span>
            <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-surface-container-high border border-outline-variant shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-lg">
              <div className="px-4 py-2 border-b border-outline-variant/50 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                Filter by Category
              </div>
              <div className="py-1">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'text-on-surface hover:bg-surface-container-highest'
                      }`}
                    >
                      <span>{cat === 'All' ? 'All Clubs' : cat}</span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Block 1: Under USICT */}
      <ClubHorizontalRow
        title="Under USICT"
        subtitle="Official technical clubs, research cells, labs, and placement committees under USICT"
        badge={`${filteredUsict.length} Clubs & Cells`}
        clubs={filteredUsict}
        categoryFilter={selectedCategory}
      />

      {/* Block 2: Under DSW */}
      <ClubHorizontalRow
        title="Under DSW"
        subtitle="Cultural, literary, arts, social welfare, and environmental clubs under Directorate of Students Welfare"
        badge={`${filteredDsw.length} Societies & Clubs`}
        clubs={filteredDsw}
        categoryFilter={selectedCategory}
      />
    </div>
  );
}
