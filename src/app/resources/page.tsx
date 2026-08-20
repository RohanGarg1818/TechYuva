import React from 'react';
import { mockResources } from '@/data/resources';
import { ResourceCard } from '@/components/cards/ResourceCard';

export default function ResourcesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-6 flex flex-col gap-4">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-outline-variant/60 pb-2.5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-on-surface tracking-tight">
            Campus Resources
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl font-body-md mt-0.5">
            Quick directory to official USICT portals, examination results, syllabi, fee payment, and utilities.
          </p>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{mockResources.length} Portals</span>
        </div>
      </div>

      {/* 4x2 Grid Layout fitting within single viewport */}
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
          {mockResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}



