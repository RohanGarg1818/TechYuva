'use client';

import React, { useState } from 'react';
import { mockNotices } from '@/data/notices';
import { NoticeListItem } from '@/components/cards/NoticeListItem';

export default function NoticesPage() {
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [deptFilter, setDeptFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotices = mockNotices.filter((notice) => {
    if (priorityFilter !== 'all' && notice.priority !== priorityFilter) return false;
    if (deptFilter !== 'all' && notice.department !== deptFilter) return false;
    return true;
  });

  const departments = [
    'all',
    'Academic Administration',
    'Dean of Students',
    'Student Affairs',
    'Accounts Office',
    'Department of CSE',
    'Central Library',
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col gap-8">
      {/* Header Section */}
      <section className="flex flex-col gap-2.5 border-b border-outline-variant pb-6 md:pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-on-surface">
          Official Notices
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl font-body-md">
          Important academic notifications, circulars, and official updates from the administration of USICT.
        </p>
      </section>

      {/* Filters Section */}
      <section className="flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between bg-surface-container-lowest p-4 sm:p-5 rounded-lg border border-outline-variant shadow-sm w-full">
        <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
          {/* Priority Select */}
          <div className="relative flex-1 sm:w-44">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full appearance-none bg-surface border border-outline-variant rounded px-3 py-2 pr-8 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs font-medium text-on-surface cursor-pointer"
            >
              <option value="all">All Priorities</option>
              <option value="very-important">Very Important</option>
              <option value="important">Important</option>
              <option value="normal">Normal</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
              expand_more
            </span>
          </div>

          {/* Department Select */}
          <div className="relative flex-1 sm:w-52">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="w-full appearance-none bg-surface border border-outline-variant rounded px-3 py-2 pr-8 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-xs font-medium text-on-surface cursor-pointer"
            >
              <option value="all">All Departments</option>
              {departments.filter((d) => d !== 'all').map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
              expand_more
            </span>
          </div>
        </div>

        <div className="text-xs text-on-surface-variant font-medium">
          Showing {filteredNotices.length} notices
        </div>
      </section>

      {/* Notices List */}
      <section className="flex flex-col w-full">
        <div className="w-full max-w-4xl mx-auto flex flex-col">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <NoticeListItem key={notice.id} notice={notice} />
            ))
          ) : (
            <div className="text-center py-16 bg-surface-container-lowest border border-outline-variant rounded-xl">
              <span className="material-symbols-outlined text-[44px] text-outline mb-2">find_in_page</span>
              <h3 className="text-lg font-bold font-heading text-on-surface mb-1">No notices found</h3>
              <p className="text-xs text-on-surface-variant">Try selecting a different filter above.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-9 h-9 rounded text-xs font-bold ${
              currentPage === 1
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant text-on-surface hover:bg-surface-container-low'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`w-9 h-9 rounded text-xs font-bold ${
              currentPage === 2
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant text-on-surface hover:bg-surface-container-low'
            }`}
          >
            2
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="w-9 h-9 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
}
