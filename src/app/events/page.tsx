'use client';

import React, { useState } from 'react';
import { mockEvents } from '@/data/events';
import { EventCard } from '@/components/cards/EventCard';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const featuredEvent = mockEvents.find((e) => e.isFeatured) || mockEvents[0];

  const filteredEvents = mockEvents.filter((event) => {
    if (selectedCategory !== 'All' && event.category !== selectedCategory) return false;
    if (selectedDepartment !== 'All' && event.department !== selectedDepartment) return false;
    return true;
  });

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Academic', 'Workshop'];
  const departments = ['All', 'Computer Science', 'Information Technology', 'Electronics & Communication', 'Physical Education', 'Student Affairs'];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 text-on-surface">
          Events
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl font-body-md">
          Discover workshops, hackathons, symposiums, and cultural fests across the USICT campus.
        </p>
      </div>

      {/* Featured Event Hero */}
      {featuredEvent && (
        <div className="mb-12 md:mb-16">
          <EventCard event={featuredEvent} featured />
        </div>
      )}

      {/* Filters & Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-outline-variant pb-3">
        {/* Tabs */}
        <div className="flex gap-6 sm:gap-8">
          <button
            onClick={() => setActiveTab('Upcoming')}
            className={`text-xs sm:text-sm font-semibold pb-3.5 -mb-[15px] transition-colors ${
              activeTab === 'Upcoming'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('Past')}
            className={`text-xs sm:text-sm font-semibold pb-3.5 -mb-[15px] transition-colors ${
              activeTab === 'Past'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Past Archives
          </button>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 text-xs font-medium focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-on-surface cursor-pointer flex-1 sm:flex-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All Categories' : c}
              </option>
            ))}
          </select>

          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 text-xs font-medium focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-on-surface cursor-pointer flex-1 sm:flex-none"
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d === 'All' ? 'All Departments' : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Event Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface-container-lowest border border-outline-variant rounded-xl">
          <span className="material-symbols-outlined text-[44px] text-outline mb-2">event_busy</span>
          <h3 className="text-lg font-bold font-heading text-on-surface mb-1">No events found</h3>
          <p className="text-xs text-on-surface-variant">Try selecting a different category or department filter.</p>
        </div>
      )}

      {/* Load More Button */}
      <div className="mt-12 flex justify-center">
        <button className="border border-outline-variant bg-transparent text-on-surface px-6 py-2.5 rounded text-xs font-semibold hover:bg-surface-container-low transition-colors">
          Load More Events
        </button>
      </div>
    </div>
  );
}
