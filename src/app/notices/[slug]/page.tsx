import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockNotices } from '@/data/notices';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';

interface NoticeDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function NoticeDetailsPage({ params }: NoticeDetailsPageProps) {
  const notice = mockNotices.find((n) => n.slug === params.slug) || mockNotices[0];
  if (!notice) {
    notFound();
  }

  const relatedNotices = mockNotices.filter((n) => n.id !== notice.id).slice(0, 3);

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16">
      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Notices', href: '/notices' },
          { label: 'Notice Details' },
        ]}
        className="mb-8"
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-gutter">
        {/* Left Column: Main Notice Content (8-col) */}
        <div className="flex-grow lg:w-8/12 xl:w-9/12 max-w-3xl">
          {/* Header */}
          <header className="mb-8 pb-6 border-b border-outline-variant">
            <div className="flex items-center gap-3 mb-4">
              <Badge priority={notice.priority}>
                {notice.priority === 'very-important'
                  ? 'Very Important'
                  : notice.priority === 'important'
                  ? 'Important'
                  : 'Normal'}
              </Badge>
              <span className="text-on-surface-variant font-body-md text-xs sm:text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                {notice.date}
              </span>
            </div>

            <h1 className="font-h1 text-h2 md:text-h1 text-on-surface mb-3 leading-tight">
              {notice.title}
            </h1>

            <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-sm">
              <span className="material-symbols-outlined text-[18px]">account_circle</span>
              <span>
                Issued by: <strong className="text-on-surface font-semibold">{notice.issuedBy}</strong>
              </span>
            </div>
          </header>

          {/* Notice Body */}
          <article className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant space-y-6 mb-12 leading-relaxed">
            {notice.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Important Instructions Box */}
            {notice.instructions && notice.instructions.length > 0 && (
              <div className="bg-surface-container-low p-6 sm:p-8 rounded-lg border border-outline-variant my-8">
                <h3 className="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-primary text-[24px]">info</span>
                  Important Instructions
                </h3>
                <ul className="list-disc list-inside space-y-2.5 font-body-md text-sm sm:text-base ml-2 text-on-surface">
                  {notice.instructions.map((inst, idx) => (
                    <li key={idx} className="leading-normal">{inst}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Attachments Section */}
          {notice.attachments && notice.attachments.length > 0 && (
            <section className="border-t border-outline-variant pt-8">
              <h2 className="font-h3 text-h3 text-on-surface mb-5 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">attachment</span>
                Official Attachments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {notice.attachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex items-center justify-between hover:shadow-subtle transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className="w-10 h-10 bg-error-container text-on-error-container rounded flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-label-sm text-xs font-semibold text-on-surface truncate">
                          {att.name}
                        </h4>
                        <span className="font-body-md text-[11px] text-on-surface-variant">
                          {att.size} • {att.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        title="Download Document"
                        className="p-2 text-primary hover:bg-primary-fixed rounded transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar: Related Notices (4-col) */}
        <aside className="lg:w-4/12 xl:w-3/12">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sticky top-28 shadow-sm">
            <h3 className="font-h3 text-[18px] font-bold text-on-surface mb-6 pb-4 border-b border-outline-variant">
              Related Notices
            </h3>

            <div className="space-y-6">
              {relatedNotices.map((rel) => (
                <Link key={rel.id} href={`/notices/${rel.slug}`} className="block group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge priority={rel.priority} size="sm">
                      {rel.priority === 'very-important'
                        ? 'Very Important'
                        : rel.priority === 'important'
                        ? 'Important'
                        : 'Normal'}
                    </Badge>
                    <span className="text-on-surface-variant font-body-md text-[11px]">
                      {rel.date}
                    </span>
                  </div>
                  <h4 className="font-label-sm text-xs sm:text-sm font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant text-center">
              <Link
                href="/notices"
                className="text-primary font-label-sm text-xs sm:text-sm font-semibold hover:underline inline-flex items-center justify-center gap-1"
              >
                View All Notices
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
