import React from 'react';
import { NoticePriority } from '@/types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'urgent' | 'important' | 'normal' | 'outline';
  priority?: NoticePriority;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  priority,
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-[11px]',
  };

  // If priority is specified, override variant
  let resolvedVariant = variant || 'secondary';
  if (priority === 'very-important') resolvedVariant = 'urgent';
  else if (priority === 'important') resolvedVariant = 'important';
  else if (priority === 'normal') resolvedVariant = 'normal';

  const variantStyles = {
    primary: 'bg-primary/90 text-on-primary',
    secondary: 'bg-surface-container-highest text-on-surface-variant',
    urgent: 'bg-error text-on-error',
    important: 'bg-tertiary-container text-on-tertiary-container',
    normal: 'bg-surface-container-high text-on-surface border border-outline-variant',
    outline: 'bg-transparent border border-outline-variant text-on-surface-variant',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-label-sm font-bold uppercase tracking-wider rounded-sm ${sizeStyles[size]} ${variantStyles[resolvedVariant]} ${className}`}
    >
      {children}
    </span>
  );
};
