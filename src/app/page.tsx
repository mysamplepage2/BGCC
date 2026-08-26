import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CaseConsiliumBanner } from '@/components/home/CaseConsiliumBanner';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ClientMarquee } from '@/components/home/ClientMarquee';
import { SocialFeed } from '@/components/home/SocialFeed';
import { LeadershipPyramid } from '@/components/home/LeadershipPyramid';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-[#e2e8f0] flex flex-col items-center overflow-x-hidden selection:bg-[#BF8440] selection:text-[#080808]">
      {/* 1. Cinematic Text Hero */}
      <Hero />

      {/* 2. Case Consilium Flagship Competition Banner */}
      <CaseConsiliumBanner />

      {/* 3. Who We Are, Legacy Metrics & National Awards */}
      <WhoWeAre />

      {/* 4. 8 Consulting Practice Capabilities Grid */}
      <ServicesGrid />

      {/* 5. Continuous Scrolling Client Logo Marquee */}
      <ClientMarquee />

      {/* 6. Live Social Media Feed (Tagembed / LinkedIn & Instagram) */}
      <SocialFeed />

      {/* 7. 1-2-2 Executive Leadership Directorate */}
      <LeadershipPyramid />
    </main>
  );
}
