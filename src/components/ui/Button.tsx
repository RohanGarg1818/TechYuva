import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-label-sm text-label-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded',
    md: 'px-6 py-2.5 rounded',
    lg: 'px-8 py-3.5 text-sm rounded',
  };

  const variantStyles = {
    primary: 'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary shadow-sm hover:shadow-subtle',
    secondary: 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest border border-outline-variant',
    outline: 'bg-transparent text-on-surface border border-outline-variant hover:bg-surface-container-low hover:border-outline',
    ghost: 'bg-transparent text-primary hover:bg-primary-fixed/30',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="ml-2 inline-flex items-center">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </button>
  );
};
