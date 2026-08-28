'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73a1.73 1.73 0 0 0 1.72 1.73c.95 0 1.73-.78 1.73-1.73 0-.95-.78-1.73-1.73-1.73Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

export const SocialFeed: React.FC = () => {
  const [elfsightLoaded, setElfsightLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => setElfsightLoaded(true);
    script.onerror = () => setElfsightLoaded(false);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[500px]" aria-label="Social Media Feed and Updates">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeader
          title="Live Social Feed"
align="left"
          titleHighlightWords={['Social']}
        />
      </div>

      {/* Widgets Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full relative min-h-[500px]">
        {/* Loading State / Empty Box while script loads */}
        {!elfsightLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#141414] border border-white/5 rounded-2xl animate-pulse z-10">
            <div className="text-[#BF8440]/50 font-sans tracking-wide">Loading live feeds...</div>
          </div>
        )}
        
        {/* LinkedIn Column */}
        <div className="flex flex-col w-full relative">
          <div className="flex items-center gap-2 mb-4">
            <LinkedInIcon className="w-5 h-5 text-[#0077b5]" />
            <h3 className="text-xl font-display text-[#e2e8f0] tracking-wide">LinkedIn</h3>
          </div>
          <div className="w-full bg-[#141414]/50 rounded-2xl overflow-hidden border border-white/5 p-2">
            <div
              className="elfsight-app-3d09dbd5-c4b1-4277-a70b-42ce0f532943 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        {/* Instagram Column */}
        <div className="flex flex-col w-full relative">
          <div className="flex items-center gap-2 mb-4">
            <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
            <h3 className="text-xl font-display text-[#e2e8f0] tracking-wide">Instagram</h3>
          </div>
          <div className="w-full bg-[#141414]/50 rounded-2xl overflow-hidden border border-white/5 p-2">
            <div
              className="elfsight-app-269235b1-b1ca-4109-b538-5719edbc8a51 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialFeed;
