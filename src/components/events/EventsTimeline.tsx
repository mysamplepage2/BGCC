'use client';

import React, { useState } from 'react';
import { EventItem } from '@/types';
import { cn } from '@/lib/utils';
import { Button3D } from '@/components/ui/Button3D';
import {
  Trophy,
  Calendar,
  Users,
  Building2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export interface EventsTimelineProps {
  events: EventItem[];
  className?: string;
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ events, className }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Ensure exact ordering from 1 to 5
  const sortedEvents = [...events].sort((a, b) => (a.order || 0) - (b.order || 0));

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('relative py-8 timeline-container', className)}>
      {/* Central Vertical Yellow/Gold Spine */}
      <div
        className={cn(
          'absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BF8440]/20 via-[#BF8440] to-[#BF8440]/20',
          'left-6 md:left-1/2 md:-translate-x-1/2',
          'shadow-[0_0_12px_rgba(191,132,64,0.4)]'
        )}
      />

      {/* Timeline items list */}
      <div className="space-y-12 md:space-y-16">
        {sortedEvents.map((event, index) => {
          const isEven = index % 2 === 1; // 0 is odd (left), 1 is even (right)
          const isExpanded = expandedId === event.id;
          const orderNum = String(event.order || index + 1).padStart(2, '0');

          return (
            <div
              key={event.id}
              className={cn(
                'relative flex flex-col md:flex-row items-start md:items-center',
                isEven ? 'md:flex-row-reverse' : ''
              )}
            >
              {/* Luminous Node Marker on Spine */}
              <div
                className={cn(
                  'absolute z-20 flex items-center justify-center',
                  'left-6 md:left-1/2 -translate-x-1/2',
                  'w-10 h-10 rounded-full bg-[#141414] border-2 border-[#BF8440]',
                  'shadow-[0_0_16px_rgba(191,132,64,0.6)] group-hover:scale-110 transition-transform'
                )}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#BF8440] animate-pulse" />
              </div>

              {/* Event Card Content Container */}
              <div
                className={cn(
                  'w-full pl-14 md:pl-0',
                  isEven
                    ? 'md:ml-auto md:w-[calc(50%-2.5rem)] md:text-left'
                    : 'md:mr-auto md:w-[calc(50%-2.5rem)] md:text-left'
                )}
              >
                <div
                  className={cn(
                    'glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 relative group overflow-hidden',
                    'border border-white/10 hover:border-[#BF8440]/60 hover:shadow-[0_10px_30px_rgba(191,132,64,0.15)]'
                  )}
                >
                  {/* Subtle Background Radial Glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#BF8440]/10 rounded-full blur-3xl group-hover:bg-[#BF8440]/20 transition-all pointer-events-none" />

                  {/* Header Strip: Order badge & Category */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-2xl font-bold text-[#BF8440] tracking-wider">
                        {orderNum}
                      </span>
                      <span className="h-4 w-px bg-[#BF8440]/30" />
                      <span className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold">
                        {event.category || 'Flagship Event'}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#e2e8f0]">
                      <Calendar className="w-3.5 h-3.5 text-[#BF8440]" />
                      <span>{event.date || event.seasonOrDate}</span>
                    </span>
                  </div>

                  {/* Event Title & Subtitle */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#BF8440] transition-colors leading-tight mb-2">
                    {event.title || event.name}
                  </h3>

                  {event.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-[#BF8440] mb-4 tracking-wide">
                      {event.subtitle}
                    </p>
                  )}

                  {/* Prize Pool Highlight Box */}
                  {event.prizePool && (
                    <div className="p-3 rounded-xl bg-[#BF8440]/10 border border-[#BF8440]/30 flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-[#BF8440]/20 flex items-center justify-center text-[#BF8440] shrink-0">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#BF8440]">
                          Prize Pool & Incentives
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white">
                          {event.prizePool}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Reserved Description Space with Rich Brief */}
                  <div className="description-container">
                    <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Corporate Partners & Judges Strip */}
                  {event.partners && event.partners.length > 0 && (
                    <div className="pt-4 border-t border-white/5">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                        Judges, Sponsors & Participating Partners
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.partners.map((partner, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#e2e8f0] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                          >
                            <Building2 className="w-3 h-3 text-[#BF8440]" />
                            <span>{partner}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable Accordion for Format & Rules */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleExpand(event.id)}
                      className="text-xs font-semibold text-[#BF8440] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Competition Format' : 'View Competition Format & Rules'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <Button3D href="/partner-with-us" variant="ghost" size="sm" className="text-xs text-[#94a3b8] hover:text-[#BF8440]">
                      Sponsor Track
                    </Button3D>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 p-4 rounded-xl bg-[#101010] border border-[#BF8440]/20 space-y-2 text-xs text-[#94a3b8] animate-in fade-in duration-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BF8440] shrink-0 mt-0.5" />
                        <span>Round 1: Preliminary Executive Case Deck Submission & Screening.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BF8440] shrink-0 mt-0.5" />
                        <span>Round 2: Semi-Finals Live Presentation before Senior Consulting Directors.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BF8440] shrink-0 mt-0.5" />
                        <span>National Grand Finale: 20-minute boardroom defense judged by Tier-1 MBB Partners.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsTimeline;
