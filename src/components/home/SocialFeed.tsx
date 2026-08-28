'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeader
          title="Live Social Feed"
          subtitle="Stay updated with our latest case competition dispatches, industry insights, and club life."
          align="left"
          titleHighlightWords={['Social']}
        />
      </div>

      {/* Elfsight LinkedIn Widget Container */}
      <div className="w-full relative min-h-[500px]">
        {/* Loading State / Empty Box while script loads */}
        {!elfsightLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#141414] border border-white/5 rounded-2xl animate-pulse">
            <div className="text-[#BF8440]/50 font-sans tracking-wide">Loading live feed...</div>
          </div>
        )}
        
        {/* The actual Elfsight embed */}
        <div
          className="elfsight-app-3d09dbd5-c4b1-4277-a70b-42ce0f532943 w-full"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default SocialFeed;
