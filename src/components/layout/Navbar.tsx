'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchBar } from '@/components/ui/SearchBar';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

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
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-[100] w-full transition-all duration-300 ease-in-out',
          scrolled 
            ? 'bg-slate-50/80 backdrop-blur-2xl border-b border-white shadow-[5px_5px_15px_rgba(163,177,198,0.3),-5px_-5px_15px_rgba(255,255,255,0.8)]' 
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20">
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 -ml-2 text-slate-800 hover:text-primary transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 group">
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
              TECHYUVA
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest bg-blue-600 px-1.5 py-0.5 rounded-sm">
              USICT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full relative gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-[13px] xl:text-sm font-semibold transition-colors rounded-md',
                    active ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 rounded-t-full"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <div className="hidden xl:block">
              <SearchBar 
                placeholder="Search campus..." 
                variant="nav" 
                className="w-48 bg-slate-100/80 border border-slate-200/60 focus-within:bg-white focus-within:border-blue-400 transition-colors shadow-none text-sm h-9 rounded-full" 
              />
            </div>

            <Link
              href="/search"
              aria-label="Search"
              className="hidden lg:flex xl:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/events"
                  className="hidden sm:inline-flex bg-slate-900 text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all whitespace-nowrap"
                >
                  Join Event
                </Link>
              </motion.div>
              <div className="pl-2 border-l border-slate-200/50">
                <ThemeToggle />
              </div>
            </div>

            <Link
              href="/search"
              aria-label="Search"
              className="lg:hidden p-2 -mr-2 text-slate-800 hover:text-blue-600 transition-colors"
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
