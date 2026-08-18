import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-highest border-t border-outline-variant mt-auto text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-bold font-heading text-primary tracking-tight">TECHYUVA</span>
            </Link>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant max-w-sm">
              Digital Campus Platform of USICT — University School of Information, Communication & Technology.
            </p>
            <div className="text-xs text-on-surface-variant flex items-center gap-1.5 pt-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>GGSIPU Campus, Dwarka Sector 16C, New Delhi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-bold">
              Platform
            </h4>
            <ul className="space-y-2 font-body-md text-xs sm:text-sm">
              <li>
                <Link href="/events" className="text-on-surface-variant hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/notices" className="text-on-surface-variant hover:text-primary transition-colors">
                  Notices
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-on-surface-variant hover:text-primary transition-colors">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-on-surface-variant hover:text-primary transition-colors">
                  Clubs & Societies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-bold">
              Resources
            </h4>
            <ul className="space-y-2 font-body-md text-xs sm:text-sm">
              <li>
                <Link href="/resources" className="text-on-surface-variant hover:text-primary transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-on-surface-variant hover:text-primary transition-colors">
                  Academic Portal
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-on-surface-variant hover:text-primary transition-colors">
                  Digital Library
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-on-surface-variant hover:text-primary transition-colors">
                  Examination Cell
                </Link>
              </li>
            </ul>
          </div>

          {/* Institution */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-bold">
              Institution
            </h4>
            <ul className="space-y-2 font-body-md text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
                  About USICT
                </Link>
              </li>
              <li>
                <Link href="/about#campus-life" className="text-on-surface-variant hover:text-primary transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <a href="mailto:contact@techyuva.edu" className="text-on-surface-variant hover:text-primary transition-colors">
                  Contact Helpdesk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-body-md text-on-surface-variant">
          <div>
            © {new Date().getFullYear()} TECHYUVA USICT. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-on-surface transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
