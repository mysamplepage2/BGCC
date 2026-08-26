import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'gold' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
}

export const Button3D: React.FC<Button3DProps> = ({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  icon,
  iconPosition = 'right',
  size = 'md',
  target,
  rel,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs min-h-[36px] gap-1.5',
    md: 'px-6 py-3 text-sm min-h-[46px] gap-2',
    lg: 'px-8 py-4 text-base min-h-[54px] gap-2.5',
  }[size];

  const variantClasses = {
    primary: 'neu-btn-tactile text-[#e2e8f0]',
    secondary: 'glass-pane text-[#e2e8f0] hover:border-[#BF8440]/60 hover:text-white',
    accent: 'bg-[#E76814] text-white shadow-lg hover:bg-[#ff7b24] active:translate-y-1',
    gold: 'btn-gold',
    ghost: 'bg-transparent text-[#e2e8f0] hover:text-[#BF8440] hover:bg-white/5',
  }[variant];

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-full tracking-wide transition-all duration-200 cursor-pointer text-center relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF8440] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]',
    sizeClasses,
    variantClasses,
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button3D;
