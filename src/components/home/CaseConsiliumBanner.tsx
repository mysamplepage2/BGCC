'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button3D } from '@/components/ui/Button3D';
import { TextReveal3D } from '@/components/ui/TextReveal3D';

export const CaseConsiliumBanner: React.FC = () => {
  return (
    <section className="w-full my-20 md:my-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Case Consilium Announcement">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text and CTA */}
        <div className="flex-1 text-left">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-[#e2e8f0] tracking-tight leading-tight mb-6">
            Case Consilium <br />
            <span className="text-[#BF8440] italic">2025–26</span>
          </h2>

          <TextReveal3D 
            as="p"
            text="India’s premier nationwide collegiate consulting challenge. Tackle high-stakes strategic dilemmas crafted by seasoned management consultants, present to industry judges, and win game-changing career rewards from our ₹30 Lakhs prize pool."
            className="text-base sm:text-lg text-[#94a3b8] max-w-xl leading-relaxed mb-10 font-sans block"
          />

          <Button3D
            href="https://unstop.com/competitions/case-consilium-bits-goa-consulting-club-bgcc-1734140"
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto text-base px-10 py-4 font-bold shadow-[0_0_25px_rgba(191,132,64,0.3)]"
          >
            Register Now
          </Button3D>
        </div>

        {/* Right Side: The Poster Banner */}
        <div className="w-full lg:w-1/2 shrink-0">
          <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img 
              src="/images/case-consilium-banner.png" 
              alt="Case Consilium 2026 - Major Consulting Competition" 
              className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CaseConsiliumBanner;
