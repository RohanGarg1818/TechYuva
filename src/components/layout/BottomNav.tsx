'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const isTabActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: 'home',
      active: isTabActive('/'),
    },
    {
      label: 'Events',
      href: '/events',
      icon: 'event',
      active: isTabActive('/events'),
    },
    {
      label: 'Announcements',
      href: '/announcements',
      icon: 'campaign',
      active: isTabActive('/announcements'),
    },
    {
      label: 'Clubs',
      href: '/clubs',
      icon: 'groups',
      active: isTabActive('/clubs'),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-surface/95 backdrop-blur-md border-t border-outline-variant z-50 flex justify-around items-center h-16 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.03)] pb-safe">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
            item.active
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[22px] transition-transform ${
              item.active ? 'fill scale-110' : ''
            }`}
          >
            {item.icon}
          </span>
          <span
            className={`text-[11px] font-medium leading-none ${
              item.active ? 'font-bold' : ''
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};
