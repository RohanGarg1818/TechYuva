'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { mockEvents } from '@/data/events';
import { mockNotices } from '@/data/notices';
import { mockAnnouncements } from '@/data/announcements';
import { mockClubs } from '@/data/clubs';
import { EventCard } from '@/components/cards/EventCard';
import { SearchBar } from '@/components/ui/SearchBar';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Events' | 'Clubs' | 'Notices' | 'Announcements'>('All');

  const q = query.toLowerCase().trim();

  const matchingEvents = mockEvents.filter(
    (e) => !q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  );

  const matchingNotices = mockNotices.filter(
    (n) => !q || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q) || n.department.toLowerCase().includes(q)
  );

  const matchingAnnouncements = mockAnnouncements.filter(
    (a) => !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
  );

  const matchingClubs = mockClubs.filter(
    (c) => !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
  );

  const totalResults =
    matchingEvents.length + matchingNotices.length + matchingAnnouncements.length + matchingClubs.length;

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      {/* Search Header */}
      <div className="mb-10 border-b border-outline-variant pb-8">
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-3">
          Search Results
        </h1>

        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-6">
          {query ? (
            <>
              Showing results for <span className="font-bold text-primary">&quot;{query}&quot;</span> ({totalResults} found)
            </>
          ) : (
            <>Showing all campus information &amp; directory items</>
          )}
        </p>

        <div className="max-w-xl">
          <SearchBar
            variant="page"
            placeholder="Search events, clubs, notices..."
            initialValue={query}
            onSearch={(newQuery) => setQuery(newQuery)}
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2.5 mt-8 overflow-x-auto pb-2 hide-scrollbar">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2 rounded-full font-label-sm text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'All'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container border border-outline-variant text-on-surface'
            }`}
          >
            All Results ({totalResults})
          </button>
          <button
            onClick={() => setActiveFilter('Events')}
            className={`px-4 py-2 rounded-full font-label-sm text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'Events'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container border border-outline-variant text-on-surface'
            }`}
          >
            Events ({matchingEvents.length})
          </button>
          <button
            onClick={() => setActiveFilter('Clubs')}
            className={`px-4 py-2 rounded-full font-label-sm text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'Clubs'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container border border-outline-variant text-on-surface'
            }`}
          >
            Clubs ({matchingClubs.length})
          </button>
          <button
            onClick={() => setActiveFilter('Notices')}
            className={`px-4 py-2 rounded-full font-label-sm text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'Notices'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container border border-outline-variant text-on-surface'
            }`}
          >
            Notices ({matchingNotices.length})
          </button>
          <button
            onClick={() => setActiveFilter('Announcements')}
            className={`px-4 py-2 rounded-full font-label-sm text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === 'Announcements'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container border border-outline-variant text-on-surface'
            }`}
          >
            Announcements ({matchingAnnouncements.length})
          </button>
        </div>
      </div>

      {totalResults === 0 ? (
        <div className="text-center py-20 bg-surface-container-lowest border border-outline-variant rounded-xl">
          <span className="material-symbols-outlined text-[56px] text-outline mb-3">search_off</span>
          <h3 className="font-h3 text-h3 text-on-surface mb-2 font-bold">No matching results</h3>
          <p className="font-body-md text-sm text-on-surface-variant max-w-sm mx-auto">
            We couldn&apos;t find anything matching &quot;{query}&quot;. Try searching for &quot;hackathon&quot;, &quot;exam&quot;, &quot;coding&quot;, or &quot;library&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main Column (8-col) */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Events Section */}
            {(activeFilter === 'All' || activeFilter === 'Events') && matchingEvents.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">event</span>
                  <h2 className="font-h2 text-h2 text-on-surface">Campus Events</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {matchingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* Announcements Section */}
            {(activeFilter === 'All' || activeFilter === 'Announcements') && matchingAnnouncements.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">campaign</span>
                  <h2 className="font-h2 text-h2 text-on-surface">Announcements &amp; News</h2>
                </div>
                <div className="flex flex-col divide-y divide-outline-variant bg-surface-container-lowest border border-outline-variant rounded-xl px-6 py-2">
                  {matchingAnnouncements.map((ann) => (
                    <div key={ann.id} className="py-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-primary">{ann.date}</span>
                        <span className="text-on-surface-variant text-xs">• {ann.category}</span>
                      </div>
                      <h3 className="font-h3 text-base font-bold text-on-surface mb-1">{ann.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant">{ann.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Side Column (4-col) */}
          <div className="md:col-span-4 flex flex-col gap-10">
            {/* Notices Section */}
            {(activeFilter === 'All' || activeFilter === 'Notices') && matchingNotices.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-3">
                  <span className="material-symbols-outlined text-error text-[24px]">priority_high</span>
                  <h2 className="font-h2 text-h2 text-on-surface">Official Notices</h2>
                </div>
                <div className="space-y-4">
                  {matchingNotices.map((notice) => (
                    <Link
                      key={notice.id}
                      href={`/notices/${notice.slug}`}
                      className="block p-5 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-subtle hover:border-primary transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            notice.priority === 'very-important'
                              ? 'bg-error text-on-error'
                              : notice.priority === 'important'
                              ? 'bg-tertiary-container text-on-tertiary-container'
                              : 'bg-surface-container-high text-on-surface'
                          }`}
                        >
                          {notice.priority.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-on-surface-variant">{notice.date}</span>
                      </div>
                      <h3 className="font-h3 text-sm font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                        {notice.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2">{notice.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Clubs Section */}
            {(activeFilter === 'All' || activeFilter === 'Clubs') && matchingClubs.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">groups</span>
                  <h2 className="font-h2 text-h2 text-on-surface">Student Societies</h2>
                </div>
                <div className="space-y-3">
                  {matchingClubs.map((club) => (
                    <Link
                      key={club.id}
                      href={`/clubs/${club.slug}`}
                      className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary hover:shadow-subtle transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden p-1 flex-shrink-0 border border-outline-variant">
                        <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-h3 text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                          {club.name}
                        </h3>
                        <p className="text-xs text-on-surface-variant truncate">{club.category}</p>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all text-[20px]">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-on-surface-variant">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
