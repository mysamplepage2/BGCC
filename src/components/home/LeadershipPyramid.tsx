'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { coordinators } from '@/data/team';
import { Coordinator } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { User, ExternalLink } from 'lucide-react';

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

export const LeadershipPyramid: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const president = coordinators.find((c) => c.tier === 1 || c.row === 'top');
  const middleTier = coordinators.filter((c) => c.tier === 2 || c.row === 'middle');
  const bottomTier = coordinators.filter((c) => c.tier === 3 || c.row === 'bottom');

  const renderLeaderCard = (leader: Coordinator, isApex = false) => {
    const hasError = imageErrors[leader.id];
    const initials = leader.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2);

    return (
      <div
        key={leader.id}
        className={`glass-card rounded-2xl p-6 sm:p-7 hover:border-[#BF8440]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden ${
          isApex ? 'max-w-md mx-auto w-full' : 'w-full'
        }`}
      >
        {/* Subtle Ambient Gold Hue */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF8440]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#BF8440]/10 transition-colors" />

        <div>
          {/* Portrait Container */}
          <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden mb-5 neu-dark-inset border border-white/10 group-hover:border-[#BF8440]/40 transition-colors">
            {!hasError ? (
              <Image
                src={leader.photo || leader.photoUrl || ''}
                alt={`${leader.name} portrait`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                onError={() => handleImageError(leader.id)}
              />
            ) : (
              /* Fallback Initials Avatar Monogram */
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#181818] text-[#BF8440]">
                <User className="w-12 h-12 mb-2 opacity-60" />
                <span className="text-xl font-bold font-serif">{initials}</span>
              </div>
            )}

            {/* Subtle Gradient Rim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60 pointer-events-none" />
            

          </div>

          {/* Name & Title */}
          <h3 className="text-xl font-bold font-serif text-[#e2e8f0] group-hover:text-white transition-colors leading-snug mb-1">
            {leader.name}
          </h3>

          <div className="text-xs font-semibold uppercase tracking-wider text-[#BF8440] font-sans mb-3">
            {leader.role}
          </div>

          {/* Bio Snippet */}
          {leader.bio && (
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans line-clamp-3 mb-4">
              {leader.bio}
            </p>
          )}
        </div>

        {/* LinkedIn Outbound Action */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#94a3b8]">Leadership</span>
          <a
            href={leader.linkedin || leader.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 hover:border-[#0077B5] text-xs font-medium text-[#e2e8f0] hover:text-[#0077B5] transition-all"
            aria-label={`${leader.name} LinkedIn profile`}
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>Connect</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Leadership Directorate">
      {/* Section Header */}
      <SectionHeader
        title="The people behind BGCC."
        subtitle="Executive directors leading strategy, operations, partnerships, and technical innovation."
        align="center"
        className="mb-14"
        titleHighlightWords={['people', 'BGCC']}
      />

      {/* 1-2-2 Pyramid Directorate Layout */}
      <div className="space-y-10 sm:space-y-12">
        {/* Tier 1: Apex (President) */}
        {president && (
          <div className="flex justify-center">
            {renderLeaderCard(president, true)}
          </div>
        )}

        {/* Tier 2: Senior Directors (2 Columns) */}
        {middleTier.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {middleTier.map((leader) => renderLeaderCard(leader))}
          </div>
        )}

        {/* Tier 3: Functional Directors (2 Columns) */}
        {bottomTier.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {bottomTier.map((leader) => renderLeaderCard(leader))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipPyramid;
