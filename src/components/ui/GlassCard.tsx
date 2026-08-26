import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'neu' | 'neu-inset' | 'elevated' | 'gold-rim';
  hoverEffect?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'glass',
  hoverEffect = true,
  glow = false,
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    glass: 'glass-card',
    neu: 'neu-dark',
    'neu-inset': 'neu-dark-inset',
    elevated: 'bg-[#181818] shadow-2xl border border-white/10',
    'gold-rim': 'bg-[#161616] border border-[#BF8440]/40 shadow-[0_0_25px_rgba(191,132,64,0.12)]',
  }[variant];

  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all duration-300 relative',
        variantClasses,
        hoverEffect && 'hover:-translate-y-1.5 hover:shadow-2xl transition-transform',
        glow && 'after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:shadow-[0_0_30px_rgba(191,132,64,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
