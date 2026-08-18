'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockClubs } from '@/data/clubs';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface ClubDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function ClubDetailsPage({ params }: ClubDetailsPageProps) {
  const [joined, setJoined] = useState(false);
  const club = mockClubs.find((c) => c.slug === params.slug) || mockClubs[0];

  if (!club) {
    notFound();
  }

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 flex flex-col gap-12 lg:gap-16">
      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Clubs', href: '/clubs' },
          { label: club.name },
        ]}
      />

      {/* Club Hero (Asymmetric) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-lowest p-6 sm:p-10 rounded-2xl border border-outline-variant shadow-sm">
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-surface-container-highest bg-white shadow-elevated relative flex-shrink-0">
            <img
              src={club.logo}
              alt={club.name}
              className="w-full h-full object-cover p-3"
            />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-1">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded font-label-sm text-xs uppercase tracking-wider font-bold">
                {club.category}
              </span>
              <span className="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">group</span>
                {club.memberCount}
              </span>
            </div>
            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold">
              {club.name}
            </h1>
            <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              {club.tagline || club.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
            <button
              onClick={() => setJoined(!joined)}
              className={`px-8 py-3.5 rounded font-label-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                joined
                  ? 'bg-surface-container-high text-on-surface border border-outline'
                  : 'bg-primary text-on-primary hover:bg-primary-container'
              }`}
            >
              {joined ? 'Membership Requested ✓' : 'Join Community'}
            </button>
            <a
              href="mailto:infox@techyuva.edu"
              className="bg-transparent text-primary border border-primary px-6 py-3.5 rounded hover:bg-primary-fixed transition-colors font-label-sm text-xs uppercase tracking-wider font-bold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contact Leads
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* About Section (8-col) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary text-[28px]">info</span>
            <h2 className="font-h2 text-h2 text-on-surface">About Community</h2>
          </div>

          <div className="prose prose-lg text-on-surface-variant font-body-md space-y-4 leading-relaxed">
            {club.fullDescription ? (
              club.fullDescription.map((p, idx) => <p key={idx}>{p}</p>)
            ) : (
              <p>{club.description}</p>
            )}
          </div>

          {club.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {club.stats.map((s, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-lg text-center border border-outline-variant">
                  <div className="font-h2 text-primary font-bold text-2xl sm:text-3xl">{s.value}</div>
                  <div className="text-xs text-on-surface-variant mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Leadership (4-col) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary text-[28px]">shield_person</span>
            <h2 className="font-h3 text-h3 text-on-surface font-bold">Leadership Team</h2>
          </div>

          <div className="flex flex-col gap-4">
            {club.leadership ? (
              club.leadership.map((leader, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed overflow-hidden flex-shrink-0 border border-outline-variant">
                    <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-h3 text-sm font-bold text-on-surface">{leader.name}</div>
                    <div className="text-xs text-on-surface-variant">{leader.role}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-sm text-on-surface-variant py-4">Student council appointments are updated each semester.</div>
            )}
          </div>
        </div>

        {/* Upcoming Events (12-col) */}
        {club.upcomingEvents && club.upcomingEvents.length > 0 && (
          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">event</span>
                <h2 className="font-h2 text-h2 text-on-surface">Club Activities & Workshops</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {club.upcomingEvents.map((act, i) => (
                <div key={i} className="border border-outline-variant rounded-lg flex flex-col sm:flex-row overflow-hidden hover:shadow-subtle transition-all bg-surface">
                  <div className="w-full sm:w-48 h-44 sm:h-auto flex-shrink-0 relative overflow-hidden bg-surface-container">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                          {act.badge}
                        </span>
                      </div>
                      <h3 className="font-h3 text-base font-bold text-on-surface mb-2">{act.title}</h3>
                      <p className="text-on-surface-variant text-xs line-clamp-2 mb-3">{act.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium pt-2 border-t border-outline-variant/40">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {act.date}
                      </span>
                      <Link href="/events" className="text-primary font-bold hover:underline">
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery / Moments (12-col) */}
        {club.gallery && club.gallery.length > 0 && (
          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
              <span className="material-symbols-outlined text-primary text-[28px]">photo_library</span>
              <h2 className="font-h2 text-h2 text-on-surface">Moments & Achievements</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {club.gallery.map((g, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden group h-44 sm:h-52 bg-surface-container">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold">{g.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
