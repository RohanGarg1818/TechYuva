'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  currentPath,
}) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-surface h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline-variant">
          <div className="flex items-baseline gap-2">
            <span className="font-h2 text-h2 font-bold text-primary">TECHYUVA</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase bg-surface-container-high px-1.5 py-0.5 rounded">
              USICT
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Links */}
        <div className="flex-grow overflow-y-auto py-6 px-6 space-y-1">
          {links.map((link) => {
            const active =
              link.href === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-body-lg font-medium transition-all ${
                  active
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[20px] opacity-70">
                  chevron_right
                </span>
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-outline-variant bg-surface-container-low space-y-3">
          <Link
            href="/events"
            onClick={onClose}
            className="w-full block text-center py-3 px-4 bg-primary text-on-primary font-label-sm text-label-sm font-semibold rounded hover:bg-primary-container transition-colors shadow-sm"
          >
            Explore Events
          </Link>
          <div className="text-center text-xs text-on-surface-variant pt-2">
            Digital Campus of USICT • New Delhi
          </div>
        </div>
      </div>
    </div>
  );
};
