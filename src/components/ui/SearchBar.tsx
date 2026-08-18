'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  initialValue?: string;
  onSearch?: (query: string) => void;
  variant?: 'nav' | 'page';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  className = '',
  initialValue = '',
  onSearch,
  variant = 'nav',
}) => {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearch) {
      onSearch(query.trim());
    } else {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (variant === 'nav') {
    return (
      <form onSubmit={handleSubmit} className={`relative flex items-center ${className}`}>
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
          search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-md font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all w-48 lg:w-64 placeholder:text-on-surface-variant text-on-surface"
        />
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center w-full ${className}`}>
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[24px] pointer-events-none">
        search
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-28 py-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md font-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 shadow-sm transition-all placeholder:text-on-surface-variant text-on-surface"
      />
      <button
        type="submit"
        className="absolute right-2 px-5 py-2 bg-primary text-on-primary font-label-sm text-label-sm font-semibold rounded hover:bg-primary-container transition-colors"
      >
        Search
      </button>
    </form>
  );
};
