'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

// Register ScrollTrigger once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextReveal3DProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  wordClassName?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextReveal3D: React.FC<TextReveal3DProps> = ({
  text,
  as: Component = 'h2',
  className,
  wordClassName,
  highlightWords,
  highlightClassName,
}) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>('.reveal-word', container.current);

      gsap.fromTo(
        words,
        {
          opacity: 0,
          rotationX: -90,
          y: 40,
          transformOrigin: '50% 50% -50px',
        },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: container }
  );

  const words = text.split(' ');

  const isHighlight = (word: string) => {
    if (!highlightWords || highlightWords.length === 0) return false;
    const cleanWord = word.replace(/[^\w\s-]/gi, '').toLowerCase();
    return highlightWords.some((phrase) => {
      const parts = phrase.toLowerCase().split(' ');
      return parts.includes(cleanWord);
    });
  };

  return (
    <Component
      ref={container}
      className={cn(
        'flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]',
        className
      )}
      style={{ perspective: '1200px' }}
    >
      {words.map((word, index) => {
        const highlighted = isHighlight(word);
        return (
          <span
            key={index}
            className={cn(
              'reveal-word inline-block will-change-transform',
              wordClassName,
              highlighted && (highlightClassName || 'text-[#BF8440] font-bold')
            )}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
};
