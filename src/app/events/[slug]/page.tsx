'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockEvents } from '@/data/events';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { motion } from 'framer-motion';

interface EventDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'schedule' | 'guidelines'>('about');
  const [registered, setRegistered] = useState(false);

  const event = mockEvents.find((e) => e.slug === params.slug) || mockEvents[0];
  if (!event) {
    notFound();
  }

  const relatedEvents = mockEvents.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <AuroraBackground className="min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24 relative z-20">
        
        <FadeIn>
          {/* Cinematic Hero Banner */}
          <div className="group relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl mb-12">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Heavy Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 leading-[1.1]">
                {event.title}
              </h1>
            </div>
          </div>
        </FadeIn>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content (Left 8 cols) */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
            
            {/* iOS-Style Segmented Tabs */}
            <FadeIn delay={0.1}>
              <div className="flex gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-full inline-flex border border-white/60 shadow-glass">
                {(['about', 'schedule', 'guidelines'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 capitalize ${
                      activeTab === tab 
                        ? 'text-slate-900' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="event-tab-indicator"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab === 'about' ? 'Overview' : tab === 'schedule' ? 'Schedule' : 'Guidelines'}
                    </span>
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Tab Content Container */}
            <FadeIn delay={0.2}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 md:p-10 min-h-[400px]">
                {/* Tab 1: About */}
                {activeTab === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">Event Overview</h2>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {event.fullDescription || event.description}
                      </p>
                    </div>

                    {event.highlights && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        {event.highlights.map((h, i) => (
                          <div key={i} className="bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
                            <span className="material-symbols-outlined text-blue-600 text-[32px] mb-3">
                              {h.icon}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{h.title}</h3>
                            <p className="text-sm text-slate-600">{h.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Tab 2: Schedule */}
                {activeTab === 'schedule' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600">schedule</span>
                      Official Schedule
                    </h2>

                    {event.schedule ? (
                      <div className="space-y-4">
                        {event.schedule.map((item, idx) => (
                          <div key={idx} className="flex flex-col md:flex-row bg-white/50 rounded-2xl border border-white/60 p-6 gap-6 hover:bg-white/80 transition-colors shadow-sm">
                            <div className="md:w-40 flex-shrink-0">
                              <span className="text-lg text-blue-600 font-bold block">{item.time}</span>
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.venue}</span>
                            </div>
                            <div>
                              {item.badge && (
                                <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-widest">
                                  {item.badge}
                                </span>
                              )}
                              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                              <p className="text-sm text-slate-600">{item.description}</p>
                              
                              {item.speaker && (
                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200/50">
                                  <img src={item.speaker.avatar} alt={item.speaker.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                                  <div>
                                    <span className="text-sm font-bold text-slate-900 block">{item.speaker.name}</span>
                                    <span className="text-xs text-slate-500">{item.speaker.role}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center text-slate-500 font-medium bg-white/40 rounded-2xl border border-dashed border-slate-300">
                        Detailed schedule will be released 48 hours before the event.
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Tab 3: Guidelines */}
                {activeTab === 'guidelines' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600">policy</span>
                      Rules & Guidelines
                    </h2>
                    <div className="bg-white/50 p-6 md:p-8 rounded-2xl border border-white/60 shadow-sm">
                      {event.guidelines && event.guidelines.length > 0 ? (
                        <ul className="space-y-4">
                          {event.guidelines.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-slate-700">
                              <span className="material-symbols-outlined text-blue-600 mt-0.5">check_circle</span>
                              <span className="font-medium">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-600 font-medium">Standard USICT campus code of conduct applies to all participants.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Sidebar (Right 4 cols) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-8">
            
            {/* Action / Details Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 md:p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">calendar_month</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Date & Time</span>
                      <p className="font-bold text-slate-900 text-base">{event.date}</p>
                      <p className="text-sm font-medium text-slate-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Venue</span>
                      <p className="font-bold text-slate-900 text-base">{event.venue}</p>
                      <p className="text-sm font-medium text-slate-600">USICT Campus</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/60">
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {event.registrationDeadline ? `Closes: ${event.registrationDeadline}` : 'Status: Open Now'}
                      </span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        Limited Seats
                      </span>
                    </div>
                  </div>

                  <MagneticButton stiffness={150} className="w-full">
                    <button
                      onClick={() => setRegistered(!registered)}
                      className={`w-full py-4 rounded-xl text-sm font-bold transition-all flex justify-center items-center gap-2 shadow-lg ${
                        registered
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
                      }`}
                    >
                      {registered ? (
                        <>
                          <span className="material-symbols-outlined text-[20px]">check_circle</span>
                          Registered
                        </>
                      ) : (
                        <>
                          Register Now
                          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </FadeIn>

            {/* Organizer Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 md:p-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Organized By</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={event.organizerLogo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgbueeX66yUwggw0icxjZTI366If5Vo_cXMkjGEhnOLmCfMqYnP3sbKKB8Ul8m2UeOlNdbeaONKJf0RNxIct8qWw8SREqSet8fmiCoyzi7SS4bPgCMHvHEhNA2AEFowPtCU9XQfaVM3MPyt6MPezzfF-tTWj3V-Mm6GFQXm6Z8-tjC0Z8ZtePY4ydaCx43Y-dumSggWM5F6waB7UCHB7UmE1rJQAgtj5jPAW8XrjhU9XysTT2ZRbmg'}
                    alt={event.organizer}
                    className="w-16 h-16 rounded-2xl object-cover shadow-sm border border-slate-200/50"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">{event.organizer}</h4>
                    <p className="text-xs font-medium text-slate-500">{event.organizerRole || 'Coordinating Body'}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href={`mailto:${event.organizerEmail || 'events@techyuva.edu'}`} className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    {event.organizerEmail || 'events@techyuva.edu'}
                  </a>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    {event.organizerPhone || '+91 98765 43210'}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Related Events */}
            <FadeIn delay={0.3}>
              <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 md:p-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">More Events</h3>
                <div className="space-y-4">
                  {relatedEvents.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/events/${rel.slug}`}
                      className="group flex gap-4 p-3 -mx-3 rounded-2xl hover:bg-white/80 transition-colors"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-20 h-20 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">{rel.date}</span>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
