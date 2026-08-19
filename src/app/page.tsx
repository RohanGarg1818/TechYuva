'use client';

import React from 'react';
import Link from 'next/link';
import { mockEvents } from '@/data/events';
import { mockAnnouncements } from '@/data/announcements';
import { EventCard } from '@/components/cards/EventCard';
import { AnnouncementItem } from '@/components/cards/AnnouncementItem';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PerspectiveReveal } from '@/components/ui/PerspectiveReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { motion } from 'framer-motion';

export default function HomePage() {
  const upcomingEvents = mockEvents.slice(0, 3);
  const latestAnnouncements = mockAnnouncements.slice(0, 5);

  return (
    <div className="w-full overflow-x-hidden relative bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <AuroraBackground className="pt-20 md:pt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-4 max-w-7xl mx-auto py-10 md:py-16"
        >
          {/* Left Side: Campus Photo */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 relative perspective-1000 order-2 md:order-1 mt-10 md:mt-0">
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative bg-white/30 backdrop-blur-md p-2"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="/college-hero.jpeg"
                  alt="USICT Campus Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
            
          </div>

          {/* Right Side: Hero Text */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-glass backdrop-blur-md mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Digital Campus of USICT</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold font-heading text-foreground tracking-tighter leading-[1.05] mb-4 relative">
              Engineering Ideas
              <br className="hidden lg:block" />
              Into <span className="text-primary relative inline-block">
                Impact
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-accent/80 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium mb-8">
              Discover research, join technical societies, and stay updated with the latest from USICT. A digital ecosystem designed for modern students and faculty.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton>
                <Link
                  href="/events"
                  className="bg-slate-950 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)] transition-all flex items-center gap-2"
                >
                  Explore Events
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </MagneticButton>
              <MagneticButton stiffness={100} mass={0.8}>
                <Link
                  href="/announcements"
                  className="bg-white/60 backdrop-blur-md border border-white/60 text-slate-900 text-sm sm:text-base font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-glass flex items-center gap-2"
                >
                  Announcements
                </Link>
              </MagneticButton>
            </div>
            
          </div>
        </motion.div>

        {/* Stats Strip Pattern */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 pb-16 md:pb-24 pt-4 z-20 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 flex items-center gap-5 hover:bg-white/80 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <span className="material-symbols-outlined text-[28px]">groups</span>
              </div>
              <div className="text-left">
                <AnimatedCounter value={20} suffix="+" className="text-3xl font-bold text-slate-900 leading-none mb-1 block" />
                <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">Active Clubs</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 flex items-center gap-5 hover:bg-white/80 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <span className="material-symbols-outlined text-[28px]">celebration</span>
              </div>
              <div className="text-left">
                <AnimatedCounter value={1000} suffix="+" className="text-3xl font-bold text-slate-900 leading-none mb-1 block" />
                <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">Participants</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-glass rounded-[2rem] p-6 flex items-center gap-5 hover:bg-white/80 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <span className="material-symbols-outlined text-[28px]">event_star</span>
              </div>
              <div className="text-left">
                <AnimatedCounter value={100} suffix="+" className="text-3xl font-bold text-slate-900 leading-none mb-1 block" />
                <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">Events Yearly</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* 3. Upcoming Events Section */}
      <section className="w-full relative z-10 py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
                  Upcoming Events
                </h2>
                <p className="text-base text-muted-foreground mt-3 font-medium">
                  Discover upcoming technical events, workshops, and symposiums.
                </p>
              </div>
              <Link href="/events" className="hidden md:flex bg-muted hover:bg-slate-200/50 text-foreground text-sm font-bold px-6 py-3 rounded-full transition-colors items-center gap-2">
                View All Events <span className="material-symbols-outlined text-[18px]">east</span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
            {upcomingEvents.map((event, index) => (
              <PerspectiveReveal key={event.id} index={index} className="h-full">
                <EventCard event={event} />
              </PerspectiveReveal>
            ))}
          </div>
          
          <Link href="/events" className="flex md:hidden mt-8 w-full justify-center bg-muted hover:bg-slate-200/50 text-foreground text-sm font-bold px-6 py-4 rounded-xl transition-colors items-center gap-2">
            View All Events <span className="material-symbols-outlined text-[18px]">east</span>
          </Link>
        </div>
      </section>

      {/* 4. Updates Section */}
      <section className="w-full relative z-10 py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn>
            <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">Latest Announcements</h2>
            </div>
            <div className="flex flex-col space-y-2 max-w-4xl mx-auto">
              {latestAnnouncements.map((announcement) => (
                <AnnouncementItem key={announcement.id} announcement={announcement} />
              ))}
            </div>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/announcements"
                className="mt-8 block w-full py-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold rounded-xl text-center hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                Browse All Announcements
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="w-full relative z-10 py-32 md:py-48 text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 -z-10" />
        
        <FadeIn>
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-glass rotate-3">
              <span className="material-symbols-outlined text-white text-[40px]">rocket_launch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
              Ready to explore your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">digital campus?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-body-md max-w-xl mx-auto font-medium">
              Join the community. Don’t miss out on important academic deadlines, student society activities, and major campus symposiums.
            </p>
            <div className="pt-6 flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/events"
                  className="inline-block bg-white text-slate-950 text-sm sm:text-base font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
                >
                  View Campus Events
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
