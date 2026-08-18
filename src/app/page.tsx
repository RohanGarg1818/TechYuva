import React from 'react';
import Link from 'next/link';
import { mockEvents } from '@/data/events';
import { mockNotices } from '@/data/notices';
import { mockAnnouncements } from '@/data/announcements';
import { EventCard } from '@/components/cards/EventCard';
import { NoticeListItem } from '@/components/cards/NoticeListItem';
import { AnnouncementItem } from '@/components/cards/AnnouncementItem';

export default function HomePage() {
  const urgentNotice = mockNotices.find((n) => n.priority === 'very-important') || mockNotices[0];
  const upcomingEvents = mockEvents.slice(0, 3);
  const latestAnnouncements = mockAnnouncements.slice(0, 3);
  const officialNotices = mockNotices.slice(0, 4);

  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. Important Notice Banner */}
      {urgentNotice && (
        <section className="w-full bg-error-container text-on-error-container border-b border-outline-variant py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="bg-error text-on-error text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm tracking-wider flex-shrink-0">
                Urgent
              </span>
              <Link
                href={`/notices/${urgentNotice.slug}`}
                className="font-body-md text-xs sm:text-sm font-semibold hover:underline truncate"
              >
                {urgentNotice.title}
              </Link>
            </div>
            <div className="flex items-center gap-3 text-xs opacity-85 font-medium flex-shrink-0">
              <span>{urgentNotice.date}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{urgentNotice.department}</span>
            </div>
          </div>
        </section>
      )}

      {/* 2. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="col-span-1 md:col-span-6 space-y-4 md:space-y-6 text-center md:text-left">
          <div className="hidden md:block text-xs font-bold text-primary uppercase tracking-widest">
            TECHYUVA: DIGITAL CAMPUS OF USICT
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-on-surface leading-tight tracking-tight">
            Everything happening on campus.{' '}
            <span className="text-outline block md:inline">In one place.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl mx-auto md:mx-0 leading-relaxed font-body-md">
            Discover events, join clubs, and stay updated with the latest from USICT.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/events"
              className="bg-primary text-on-primary text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-primary-container transition-all shadow-md"
            >
              Explore Events
            </Link>
            <Link
              href="/notices"
              className="hidden sm:inline-block bg-transparent border border-outline-variant text-on-surface text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-surface-container-low transition-colors"
            >
              Explore Notices
            </Link>
          </div>
        </div>

        <div className="hidden md:block col-span-1 md:col-span-6 relative">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-outline-variant shadow-elevated relative bg-surface-container-low">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBurYuxlfVaBJ__-2_vTVeP6Gr69AFkuhuRzsvZt8HUkpJXstpMIHlobf1bF8S-_lmDM7UXaPqcGL4xnu_gT4pNA6S-XmUY4JcwCZKYmIN9FsBwmKFkFRSKdR0i27KMxB4QENF1Uac-0lThCOt8xO3Kz1egI3U4_uLDjq6pNWSgDXXtKjperOoCKqXbGFoMJka8mm2Z4kua05_mMbftM4hJzqNT03oPm732Ed858yuAFe0agVwpkUMZ"
              alt="USICT Campus Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Bento Grid: Snapshot & Quick Resources */}
      <section className="w-full bg-surface py-10 md:py-20 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* College Snapshot */}
          <div className="col-span-1 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-on-surface mb-1.5">College Snapshot</h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 font-body-md">
                A vibrant academic and technological ecosystem fostering student leadership.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant pt-2">
              <div className="text-center pt-3 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-1">40+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Active Clubs</div>
              </div>
              <div className="text-center pt-3 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-1">120+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Annual Events</div>
              </div>
              <div className="text-center pt-3 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-1">15K+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Students &amp; Alumni</div>
              </div>
            </div>
          </div>

          {/* Quick Resources */}
          <div className="col-span-1 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 sm:p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold font-heading mb-4">Quick Resources</h2>
            <div className="grid grid-cols-2 gap-3 flex-grow">
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 flex flex-col items-center justify-center text-center transition-colors group"
              >
                <span className="material-symbols-outlined text-[24px] mb-1 group-hover:scale-110 transition-transform">
                  account_circle
                </span>
                <span className="text-xs font-semibold">Student Portal</span>
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 flex flex-col items-center justify-center text-center transition-colors group"
              >
                <span className="material-symbols-outlined text-[24px] mb-1 group-hover:scale-110 transition-transform">
                  menu_book
                </span>
                <span className="text-xs font-semibold">Digital Library</span>
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 flex flex-col items-center justify-center text-center transition-colors group"
              >
                <span className="material-symbols-outlined text-[24px] mb-1 group-hover:scale-110 transition-transform">
                  calendar_month
                </span>
                <span className="text-xs font-semibold">Academic Cal</span>
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 flex flex-col items-center justify-center text-center transition-colors group"
              >
                <span className="material-symbols-outlined text-[24px] mb-1 group-hover:scale-110 transition-transform">
                  help_center
                </span>
                <span className="text-xs font-semibold">Helpdesk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events Section */}
      <section className="w-full bg-surface-container-lowest py-10 md:py-20 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-6 md:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-on-surface tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant hidden md:block mt-1">
                Discover upcoming technical events, workshops, and symposiums.
              </p>
            </div>
            <Link href="/events" className="text-primary text-xs sm:text-sm font-semibold hover:underline">
              View All
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto hide-scrollbar pb-3 snap-x snap-mandatory -mx-4 px-4">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="min-w-[260px] max-w-[260px] snap-center bg-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-card"
              >
                <div className="h-32 w-full relative bg-surface-container-highest">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                    {event.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-sm font-bold font-heading text-on-surface line-clamp-2 leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                    <span className="material-symbols-outlined text-[15px] text-primary">calendar_month</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Updates & Notices Split Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Latest Updates */}
        <div className="col-span-1 lg:col-span-7">
          <div className="flex justify-between items-end mb-4 border-b border-outline-variant pb-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-on-surface">Latest Updates</h2>
            <Link href="/announcements" className="text-primary text-xs sm:text-sm font-semibold hover:underline hidden md:inline">
              View All
            </Link>
          </div>
          <div className="flex flex-col divide-y divide-outline-variant md:divide-y-0">
            {latestAnnouncements.map((announcement) => (
              <AnnouncementItem key={announcement.id} announcement={announcement} />
            ))}
          </div>
          <Link
            href="/announcements"
            className="md:hidden block w-full py-3 border border-outline-variant text-on-surface text-xs font-semibold rounded-lg mt-4 text-center hover:bg-surface-container-low transition-colors"
          >
            View All Updates
          </Link>
        </div>

        {/* Explore Clubs (Mobile) / Official Notices (Desktop) */}
        <div className="col-span-1 lg:col-span-5">
          {/* Mobile Clubs Grid */}
          <div className="md:hidden space-y-4">
            <h2 className="text-xl font-bold font-heading text-on-surface">Explore Clubs</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/clubs"
                className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col gap-2.5 items-start active:bg-surface-container-low"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </div>
                <span className="text-sm font-bold font-heading text-on-surface">Technical</span>
              </Link>
              <Link
                href="/clubs"
                className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col gap-2.5 items-start active:bg-surface-container-low"
              >
                <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">palette</span>
                </div>
                <span className="text-sm font-bold font-heading text-on-surface">Cultural</span>
              </Link>
              <Link
                href="/clubs"
                className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col gap-2.5 items-start active:bg-surface-container-low"
              >
                <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[18px]">sports_basketball</span>
                </div>
                <span className="text-sm font-bold font-heading text-on-surface">Sports</span>
              </Link>
              <Link
                href="/clubs"
                className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col gap-2.5 items-start active:bg-surface-container-low"
              >
                <div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
                <span className="text-sm font-bold font-heading text-on-surface">View All</span>
              </Link>
            </div>
          </div>

          {/* Desktop Official Notices Card */}
          <div className="hidden md:block bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-outline-variant">
              <h2 className="text-xl font-bold font-heading text-on-surface">Official Notices</h2>
              <span className="material-symbols-outlined text-outline text-[20px]">campaign</span>
            </div>

            <div className="space-y-4">
              {officialNotices.map((notice) => (
                <NoticeListItem key={notice.id} notice={notice} variant="compact" />
              ))}
            </div>

            <Link
              href="/notices"
              className="mt-6 block text-center border border-outline-variant py-2.5 rounded text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
            >
              Browse Notice Board
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="w-full bg-surface-container-low py-14 md:py-24 border-t border-outline-variant text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-on-surface">
            Stay connected with campus.
          </h2>
          <p className="text-xs sm:text-base text-on-surface-variant font-body-md">
            Don’t miss out on important academic deadlines, student society activities, and major campus symposiums.
          </p>
          <div className="pt-2">
            <Link
              href="/events"
              className="inline-block bg-primary text-on-primary text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded hover:bg-primary-container transition-colors shadow-sm"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
