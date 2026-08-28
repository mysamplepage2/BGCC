import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TextReveal3D } from '@/components/ui/TextReveal3D';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animated?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  titleHighlightWords?: string[];
  subtitleHighlightWords?: string[];
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
  animated = false,
  titleClassName,
  subtitleClassName,
  titleHighlightWords,
  subtitleHighlightWords,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col mb-12 md:mb-16', alignClasses, className)}>


      <div className={cn('reveal-wrapper max-w-4xl', align === 'center' && 'mx-auto')}>
        <TextReveal3D
          as="h2"
          text={title}
          className={cn(
            'font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#e2e8f0]',
            titleClassName
          )}
          highlightWords={titleHighlightWords}
        />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            'mt-4 text-base sm:text-lg md:text-xl text-[#94a3b8] max-w-2xl font-light leading-relaxed',
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
