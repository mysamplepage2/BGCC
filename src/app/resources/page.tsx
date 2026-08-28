'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import resourcesData from '@/data/resources.json';

export default function ResourcesPage() {
  const casebooks = resourcesData.filter(r => r.category === 'Casebooks');
  const primers = resourcesData.filter(r => r.category === 'Industry Primers');

  interface ResourceItem {
    id: string;
    title: string;
    description?: string;
    category: string;
    pdfUrl: string;
    coverUrl: string;
  }

  const ResourceGrid = ({ items, title }: { items: ResourceItem[], title: string }) => (
    <div className="mb-20">
      <h2 className="text-3xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#141414] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#BF8440]/50 hover:shadow-[0_10px_40px_rgba(191,132,64,0.15)] group"
          >
            {/* Top Half: Cover Image */}
            <div className="relative w-full aspect-video bg-[#0a0a0a] overflow-hidden border-b border-white/5">
              <Image
                src={item.coverUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Bottom Half: Text & Link */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#e2e8f0] mb-3 leading-tight group-hover:text-[#BF8440] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-[#94a3b8] leading-relaxed flex-grow mb-6">
                {item.description}
              </p>
              
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#BF8440] text-sm font-semibold hover:text-[#d19a55] transition-colors uppercase tracking-wider"
              >
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <SectionHeader
        title="Knowledge & Publications"
        subtitle="Access our exclusive casebooks and deep-dive industry primers crafted by BGCC consultants to help you crack your next strategy interview."
        align="center"
        animated={true}
      />

      <div className="mt-16">
        {casebooks.length > 0 && <ResourceGrid items={casebooks} title="Casebooks" />}
        {primers.length > 0 && <ResourceGrid items={primers} title="Industry Primers" />}
      </div>
    </div>
  );
}
