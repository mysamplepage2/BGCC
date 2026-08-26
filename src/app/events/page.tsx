'use client';

import React from 'react';
import { events } from '@/data/events';
import { EventsTimeline } from '@/components/events/EventsTimeline';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button3D } from '@/components/ui/Button3D';
import { Trophy, Users, Award, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <SectionHeader
        
        title="Where Ideas Come to Life"
        subtitle="From India's premier national case competition Case Consilium with ₹30 Lakhs+ in prizes to intensive 48-hour strategy hackathons, explore BGCC's flagship initiatives connecting top collegiate minds with MBB partners."
        align="center"
        animated={true}
      />

      {/* Metric Cards Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">₹35L+</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Annual Prize Pool
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">3,500+</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Annual Competitors
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">50+</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Participating Campuses
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">5 Events</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Flagship Calendar
          </span>
        </div>
      </div>

      {/* Events Interactive Timeline Section */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Annual Competition Calendar
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-xl mx-auto">
            Sequential milestones connecting all 5 flagship events in chronological order.
          </p>
        </div>

        <EventsTimeline events={events} />
      </div>

      {/* Corporate Sponsorship / Partner Banner */}
      <div className="glass-pane rounded-3xl p-8 sm:p-12 border border-[#BF8440]/30 text-center relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#BF8440]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-[#BF8440]/15 border border-[#BF8440]/30 flex items-center justify-center text-[#BF8440] mx-auto mb-4">
          <Zap className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
          Partner With Us to Host a Corporate Challenge
        </h3>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto mb-8">
          Engage thousands of India&apos;s most promising strategic thinkers with a custom corporate problem track, live product teardown, or campus recruitment challenge.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button3D href="/partner-with-us" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
            Sponsor an Event Track
          </Button3D>
          <Button3D href="/clients" variant="secondary">
            View Past Client Case Studies
          </Button3D>
        </div>
      </div>
    </div>
  );
}
