'use client';

import React, { useState } from 'react';
import { mockEvents } from '@/data/events';
import { EventCard } from '@/components/cards/EventCard';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { PerspectiveReveal } from '@/components/ui/PerspectiveReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredEvent = mockEvents.find((e) => e.isFeatured) || mockEvents[0];

  const filteredEvents = mockEvents.filter((event) => {
    if (selectedCategory !== 'All' && event.category !== selectedCategory) return false;
    if (selectedDepartment !== 'All' && event.department !== selectedDepartment) return false;
    return true;
  });

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Academic', 'Workshop'];
  const departments = ['All', 'Computer Science', 'Information Technology', 'Electronics & Communication', 'Student Affairs'];

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Premium Hero Section */}
      <AuroraBackground className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading mb-4 text-slate-950 tracking-tighter leading-[1.05]">
                Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">campus life.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 font-medium max-w-2xl">
                Explore hackathons, workshops, symposiums, and cultural festivals happening across USICT.
              </p>
            </div>
          </FadeIn>

          {/* Massive Featured Event Banner */}
          {featuredEvent && (
            <FadeIn delay={0.2}>
              <Link href={`/events/${featuredEvent.id}`} className="group block relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Heavy Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                      Featured Event
                    </span>
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                      {featuredEvent.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredEvent.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm md:text-base font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                      {featuredEvent.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                      {featuredEvent.venue}
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}
        </div>
      </AuroraBackground>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
        
        {/* Modern Pill-Based Filtering */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Main Tabs (Segmented Control Style) */}
          <div className="flex gap-1 bg-slate-100/80 p-1.5 rounded-full inline-flex self-start border border-slate-200/60 shadow-inner">
            {(['Upcoming', 'Past'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-slate-950 rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab} Events</span>
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-4 px-6 shadow-sm flex flex-col gap-4">
            {/* Categories Horizontal Scroll */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex-shrink-0 w-24">Categories</span>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0 w-full">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setSelectedCategory(c); setVisibleCount(6); }}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                      selectedCategory === c
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-slate-100" />

            {/* Departments Horizontal Scroll */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex-shrink-0 w-24">Departments</span>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0 w-full">
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setSelectedDepartment(d); setVisibleCount(6); }}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${
                      selectedDepartment === d
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Animated Event Grid */}
        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000"
            >
              {displayedEvents.map((event, index) => (
                <PerspectiveReveal key={event.id} index={index} className="h-full">
                  <EventCard event={event} />
                </PerspectiveReveal>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col items-center justify-center py-24 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px] text-slate-400">event_busy</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No events found</h3>
              <p className="text-slate-500 font-medium">Try adjusting your category or department filters.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedDepartment('All'); setVisibleCount(6); }}
                className="mt-6 text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Magnetic Load More */}
        {filteredEvents.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            <MagneticButton stiffness={100} mass={0.8}>
              <button 
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Load More Events
              </button>
            </MagneticButton>
          </div>
        )}
      </div>
    </div>
  );
}
