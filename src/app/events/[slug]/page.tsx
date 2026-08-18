'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockEvents } from '@/data/events';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

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

  const relatedEvents = mockEvents.filter((e) => e.id !== event.id).slice(0, 2);

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Events', href: '/events' },
          { label: event.title },
        ]}
        className="mb-8"
      />

      {/* Hero Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-12 lg:mb-16">
        {/* Main Hero Image */}
        <div className="col-span-1 lg:col-span-8 relative rounded-xl overflow-hidden shadow-sm border border-outline-variant group bg-surface-container-low min-h-[300px] lg:min-h-[460px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <span className="bg-error text-on-error font-label-sm text-xs px-3.5 py-1 rounded shadow-sm uppercase tracking-wider font-bold">
              Flagship Event
            </span>
            <span className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded">
              USICT Campus
            </span>
          </div>
        </div>

        {/* Quick Details Sidebar */}
        <div className="col-span-1 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 sm:p-8 border border-outline-variant shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-primary font-label-sm text-xs font-bold uppercase tracking-wider block mb-1">
              {event.category}
            </span>
            <h1 className="font-h2 text-h2 text-on-surface mb-6 leading-tight">
              {event.title}
            </h1>

            <div className="space-y-5">
              {/* Date & Time */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">
                    Date & Time
                  </h3>
                  <p className="font-body-md text-sm font-semibold text-on-surface">{event.date}</p>
                  <p className="font-body-md text-xs text-on-surface-variant">{event.time}</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">
                    Venue
                  </h3>
                  <p className="font-body-md text-sm font-semibold text-on-surface">{event.venue}</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[22px]">group</span>
                </div>
                <div>
                  <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">
                    Organized By
                  </h3>
                  <p className="font-body-md text-sm font-semibold text-on-surface">{event.organizer}</p>
                  <p className="font-body-md text-xs text-on-surface-variant">{event.department}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant">
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="text-on-surface-variant">{event.registrationDeadline || 'Registrations Open'}</span>
              <span className="text-error font-bold">Limited Seats</span>
            </div>

            <button
              onClick={() => setRegistered(!registered)}
              className={`w-full py-3.5 rounded-lg font-label-sm text-sm font-bold transition-all shadow-md flex justify-center items-center gap-2 ${
                registered
                  ? 'bg-surface-container-high text-on-surface border border-outline'
                  : 'bg-primary hover:bg-primary-container text-on-primary'
              }`}
            >
              {registered ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Registered for Event
                </>
              ) : (
                <>
                  Register for Event
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid: Tabs & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left 8-col: Tabs & Detail Content */}
        <div className="col-span-1 lg:col-span-8 space-y-10">
          {/* Tabs Navigation */}
          <div className="flex border-b border-outline-variant overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-4 font-label-sm text-xs sm:text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === 'about'
                  ? 'text-primary border-b-2 border-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface font-medium'
              }`}
            >
              About Event
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-4 font-label-sm text-xs sm:text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === 'schedule'
                  ? 'text-primary border-b-2 border-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface font-medium'
              }`}
            >
              Schedule & Timeline
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`px-6 py-4 font-label-sm text-xs sm:text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === 'guidelines'
                  ? 'text-primary border-b-2 border-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface font-medium'
              }`}
            >
              Guidelines & Rules
            </button>
          </div>

          {/* Tab 1: About */}
          {activeTab === 'about' && (
            <article className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h2 className="font-h2 text-h2 text-on-surface mb-4">Event Overview</h2>
                <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
                  {event.fullDescription || event.description}
                </p>
              </div>

              {event.highlights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                  {event.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm"
                    >
                      <span className="material-symbols-outlined text-primary text-[32px] mb-3">
                        {h.icon}
                      </span>
                      <h3 className="font-h3 text-h3 text-on-surface mb-2">{h.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant">{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          )}

          {/* Tab 2: Schedule */}
          {activeTab === 'schedule' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[28px]">schedule</span>
                Event Schedule
              </h2>

              {event.schedule ? (
                <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest divide-y divide-outline-variant">
                  {event.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row hover:bg-surface-container-low transition-colors p-6 group gap-4"
                    >
                      <div className="w-full md:w-44 flex-shrink-0">
                        <span className="font-h3 text-[18px] text-primary font-bold">{item.time}</span>
                        <p className="font-label-sm text-xs text-on-surface-variant uppercase mt-1">
                          {item.venue}
                        </p>
                      </div>
                      <div className="flex-grow">
                        {item.badge && (
                          <span className="inline-block bg-primary-fixed text-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
                        <h4 className="font-h3 text-[17px] text-on-surface mb-1.5 font-bold">
                          {item.title}
                        </h4>
                        <p className="font-body-md text-sm text-on-surface-variant mb-3">
                          {item.description}
                        </p>
                        {item.speaker && (
                          <div className="flex items-center gap-3 pt-2">
                            <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
                              <img
                                src={item.speaker.avatar}
                                alt={item.speaker.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <span className="font-label-sm text-xs font-bold text-on-surface block">
                                {item.speaker.name}
                              </span>
                              <span className="text-[11px] text-on-surface-variant block">
                                {item.speaker.role}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-lg text-center text-on-surface-variant">
                  Detailed schedule will be released 48 hours before the event.
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Guidelines */}
          {activeTab === 'guidelines' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[28px]">policy</span>
                Participation Guidelines
              </h2>
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant space-y-4">
                {event.guidelines && event.guidelines.length > 0 ? (
                  <ul className="space-y-3.5">
                    {event.guidelines.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body-md text-on-surface-variant text-sm sm:text-base">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-on-surface-variant text-sm">
                    Standard USICT campus code of conduct applies to all participants.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right 4-col: Organizer & Related Events */}
        <div className="col-span-1 lg:col-span-4 space-y-8">
          {/* Organizer Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm">
            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-6">
              Organizer Details
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-surface-variant overflow-hidden border border-outline-variant flex-shrink-0">
                <img
                  src={event.organizerLogo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgbueeX66yUwggw0icxjZTI366If5Vo_cXMkjGEhnOLmCfMqYnP3sbKKB8Ul8m2UeOlNdbeaONKJf0RNxIct8qWw8SREqSet8fmiCoyzi7SS4bPgCMHvHEhNA2AEFowPtCU9XQfaVM3MPyt6MPezzfF-tTWj3V-Mm6GFQXm6Z8-tjC0Z8ZtePY4ydaCx43Y-dumSggWM5F6waB7UCHB7UmE1rJQAgtj5jPAW8XrjhU9XysTT2ZRbmg'}
                  alt={event.organizer}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-h3 text-base text-on-surface font-bold">{event.organizer}</h4>
                <p className="font-body-md text-xs text-on-surface-variant">{event.organizerRole || 'Event Coordinating Body'}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm font-body-md">
              <a
                href={`mailto:${event.organizerEmail || 'events@techyuva.edu'}`}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-1"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span className="truncate">{event.organizerEmail || 'events@techyuva.edu'}</span>
              </a>
              <div className="flex items-center gap-3 text-on-surface-variant py-1">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{event.organizerPhone || '+91 98765 43210'}</span>
              </div>
            </div>

            <Link
              href="/about#departments"
              className="w-full mt-6 py-2.5 border border-outline-variant rounded-lg font-label-sm text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors block text-center"
            >
              View Department Page
            </Link>
          </div>

          {/* Related Events */}
          <div>
            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-4 px-1">
              Related Events
            </h3>
            <div className="space-y-4">
              {relatedEvents.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/events/${rel.slug}`}
                  className="block bg-surface-container-lowest rounded-lg p-4 border border-outline-variant hover:border-primary hover:shadow-subtle transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded bg-surface-variant overflow-hidden flex-shrink-0">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="font-label-sm text-[11px] text-primary font-bold mb-1">
                        {rel.date}
                      </span>
                      <h4 className="font-body-md text-sm font-semibold text-on-surface leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <span className="font-label-sm text-[11px] text-on-surface-variant mt-1.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        <span className="truncate">{rel.venue}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
