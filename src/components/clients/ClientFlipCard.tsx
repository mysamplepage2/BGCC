'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ClientProject } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowRight, RotateCw, CheckCircle2, Building2 } from 'lucide-react';

export interface ClientFlipCardProps {
  client: ClientProject;
  isFlipped?: boolean;
  onFlip?: () => void;
  className?: string;
}

export const ClientFlipCard: React.FC<ClientFlipCardProps> = ({
  client,
  isFlipped: controlledFlipped,
  onFlip,
  className,
}) => {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isFlipped = controlledFlipped !== undefined ? controlledFlipped : internalFlipped;

  const handleToggle = () => {
    if (onFlip) {
      onFlip();
    } else {
      setInternalFlipped((prev) => !prev);
    }
  };

  const name = client.name || client.clientName || 'Strategic Client';
  const logo = client.logo || client.logoUrl || '/assets/logos/1.png';
  const industry = client.industry || client.domain || 'Strategic Advisory';
  const domain = client.domain || client.industry || 'Management Consulting';
  const brief =
    client.brief ||
    client.description ||
    'Comprehensive strategic advisory and operational enhancement engagement delivered by BGCC consultants.';
  const impact =
    client.impact ||
    'Delivered quantifiable operational enhancements, market entry validation, and high-impact executive deliverables.';
  const deliverables = client.deliverables || [
    'Strategic Assessment',
    'Market Model',
    'Executive Roadmap',
  ];

  return (
    <div
      className={cn(
        'group h-[320px] w-full [perspective:1200px] cursor-pointer select-none',
        className
      )}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-label={`${name} project case study. Click or hover to flip card.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        )}
      >
        {/* FRONT FACE */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between',
            'glass-card bg-[#161616]/90 border border-white/10 hover:border-[#BF8440]/50 shadow-xl',
            'backface-hidden [backface-visibility:hidden] overflow-hidden'
          )}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF8440]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Top meta strip */}
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#BF8440]/10 border border-[#BF8440]/25 text-[#BF8440] text-xs font-medium tracking-wide">
              <Building2 className="w-3 h-3" />
              <span>{industry}</span>
            </span>
            <span className="text-xs font-semibold text-[#94a3b8] px-2 py-0.5 rounded bg-white/5">
              {client.year}
            </span>
          </div>

          {/* Center: Logo / Monogram & Client Name */}
          {/* Center: Logo / Monogram & Client Name */}
          <div className="flex flex-col items-center justify-center my-auto text-center z-10 py-3">
            <div className="relative w-28 h-16 sm:w-32 sm:h-18 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 mb-3 shadow-inner group-hover:border-[#BF8440]/40 transition-colors">
              {!imgError ? (
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  width={110}
                  height={55}
                  className="max-h-12 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all filter grayscale group-hover:grayscale-0"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-[#BF8440]/20 border border-[#BF8440]/40 flex items-center justify-center text-[#BF8440] font-bold text-lg">
                  {name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-[#e2e8f0] group-hover:text-white transition-colors line-clamp-1">
              {name}
            </h3>
            <p className="text-xs text-[#94a3b8] mt-1 line-clamp-1">{domain}</p>
          </div>

          {/* Bottom Flip Prompt */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#64748b] group-hover:text-[#BF8440] transition-colors z-10">
            <span className="flex items-center gap-1">
              <RotateCw className="w-3 h-3 animate-spin-slow" />
              <span>Hover / Tap to view brief</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between',
            'bg-[#121212] border border-[#BF8440]/40 shadow-2xl [transform:rotateY(180deg)]',
            'backface-hidden [backface-visibility:hidden] overflow-hidden'
          )}
        >
          {/* Top header on back */}
          <div className="flex items-center justify-between border-b border-[#BF8440]/20 pb-2.5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#BF8440]">
                Engagement Scope
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-[#e2e8f0] line-clamp-1">
                {name}
              </h4>
            </div>
            <span className="text-[11px] text-[#94a3b8] font-medium bg-[#1a1a1a] px-2 py-0.5 rounded">
              {client.year}
            </span>
          </div>

          {/* Middle: Brief & Impact Container with safe overflow */}
          <div className="flex-1 py-2 overflow-y-auto space-y-2.5 text-left custom-scrollbar pr-1">
            {/* Brief */}
            <div>
              <p className="text-xs sm:text-[13px] text-[#cbd5e1] leading-relaxed line-clamp-3">
                {brief}
              </p>
            </div>

            {/* Impact Box */}
            <div className="p-2.5 rounded-lg bg-[#BF8440]/10 border border-[#BF8440]/30">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#BF8440] mb-0.5">
                Measurable Impact
              </span>
              <p className="text-xs text-[#f1f5f9] font-medium leading-snug line-clamp-2">
                {impact}
              </p>
            </div>

            {/* Deliverables tags */}
            {deliverables.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-0.5">
                {deliverables.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10px] text-[#94a3b8] bg-white/5 px-2 py-0.5 rounded-full"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#BF8440] shrink-0" />
                    <span className="truncate max-w-[150px]">{item}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Flip Indicator */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#BF8440]">
            <span className="text-[#94a3b8] truncate">{domain}</span>
            <span className="flex items-center gap-1 font-medium shrink-0">
              <span>Flip back</span>
              <RotateCw className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFlipCard;
