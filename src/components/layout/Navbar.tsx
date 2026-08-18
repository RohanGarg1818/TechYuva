'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchBar } from '@/components/ui/SearchBar';
import { MobileMenu } from '@/components/layout/MobileMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Announcements', href: '/announcements' },
  { name: 'Notices', href: '/notices' },
  { name: 'Clubs', href: '/clubs' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-surface border-b border-outline-variant sticky top-0 z-40 w-full">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20">
          {/* Mobile Hamburger (visible on < lg) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 -ml-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 sm:gap-2 flex-shrink-0 group">
            <span className="font-h1 text-xl sm:text-2xl lg:text-3xl font-bold text-primary tracking-tight group-hover:opacity-90 transition-opacity">
              TECHYUVA
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-on-surface-variant uppercase tracking-wider bg-surface-container-high px-1.5 py-0.5 rounded">
              USICT
            </span>
          </Link>

          {/* Desktop Navigation Links (visible on lg+) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 h-full">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`h-full flex items-center px-2.5 xl:px-3.5 text-xs xl:text-sm font-medium transition-colors relative whitespace-nowrap ${
                    active
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
            {/* Search Input (visible on xl+) */}
            <div className="hidden xl:block">
              <SearchBar placeholder="Search campus..." variant="nav" className="w-48 xl:w-56" />
            </div>

            {/* Search Icon button (visible on lg only) */}
            <Link
              href="/search"
              aria-label="Search"
              className="hidden lg:flex xl:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </Link>

            {/* Explore Events Button (visible on md+) */}
            <Link
              href="/events"
              className="hidden sm:inline-flex bg-primary text-on-primary text-xs xl:text-sm font-semibold px-3.5 py-2 xl:px-5 xl:py-2.5 rounded hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
            >
              Explore Events
            </Link>

            {/* Mobile Search Icon (visible on < lg) */}
            <Link
              href="/search"
              aria-label="Search"
              className="lg:hidden p-2 -mr-2 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">search</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
};
