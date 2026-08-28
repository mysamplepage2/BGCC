'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { clients } from '@/data/clients';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Curate unique client logos (all 28)
  const clientLogos = Array.from({ length: 28 }, (_, i) => {
    const matchedClient = clients[i] || clients[i % clients.length];
    return {
      id: `logo-${i + 1}`,
      number: i + 1,
      name: matchedClient?.name || `Client Partner ${i + 1}`,
      logo: `/assets/logos/logo-${i + 1}.png`,
      industry: matchedClient?.industry || 'Enterprise Partner',
    };
  });

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollOffset = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-16 md:py-20 overflow-hidden relative" aria-label="Client Logo Showcase">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <SectionHeader
          title="Trusted by 60+ Industry Leaders"
align="left"
          titleHighlightWords={['60+', 'Industry', 'Leaders']}
        />

        {/* Manual Left/Right Navigation Arrow Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll logos left"
            className="w-10 h-10 rounded-full neu-btn-tactile flex items-center justify-center text-[#e2e8f0] hover:text-[#BF8440] transition-colors focus-visible:ring-2 focus-visible:ring-[#BF8440]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll logos right"
            className="w-10 h-10 rounded-full neu-btn-tactile flex items-center justify-center text-[#e2e8f0] hover:text-[#BF8440] transition-colors focus-visible:ring-2 focus-visible:ring-[#BF8440]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Marquee Overflow Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth py-4 relative select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Continuous Linear Animation Track (Double Loop) */}
        <div
          className={`flex w-max animate-marquee ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {/* First Pass (1 to 29) */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
              {clientLogos.map((item) => (
                <div
                  key={`first-${item.id}`}
                  className="w-[280px] sm:w-[360px] h-[160px] sm:h-[200px] shrink-0 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 group"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={360}
                    height={200}
                    className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 scale-125"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
          </div>

          {/* Second Duplicate Pass for Seamless Looping */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
              {clientLogos.map((item) => (
                <div
                  key={`second-${item.id}`}
                  className="w-[280px] sm:w-[360px] h-[160px] sm:h-[200px] shrink-0 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 group"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={360}
                    height={200}
                    className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 scale-125"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
