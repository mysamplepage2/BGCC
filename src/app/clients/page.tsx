'use client';

import React, { useState, useMemo } from 'react';
import { clients } from '@/data/clients';
import { ClientFlipCard } from '@/components/clients/ClientFlipCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button3D } from '@/components/ui/Button3D';
import { ShieldAlert, Filter, ArrowRight } from 'lucide-react';

const ALL_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

export default function ClientsPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = useMemo(() => {
    const list = Array.from(new Set(clients.map((c) => c.industry || c.domain || 'Other')));
    return ['all', ...list];
  }, []);

  const filteredClients = useMemo(() => {
    return clients.filter((c) => {
      const matchYear = selectedYear === 'all' || c.year === selectedYear;
      const matchIndustry =
        selectedIndustry === 'all' ||
        c.industry === selectedIndustry ||
        c.domain === selectedIndustry;
      return matchYear && matchIndustry;
    });
  }, [selectedYear, selectedIndustry]);

  // Group clients by year for chronological display
  const clientsByYear = useMemo(() => {
    const map: Record<number, typeof clients> = {};
    ALL_YEARS.forEach((yr) => {
      map[yr] = filteredClients.filter((c) => c.year === yr);
    });
    return map;
  }, [filteredClients]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <SectionHeader
        
        title="Over 90+ Engagements Delivered"
        subtitle="Chronological track record of high-impact strategic advisory, market entry blueprints, operational transformations, and AI automation delivered across top startups, conglomerates, and venture portfolios from 2020 through 2026."
        align="center"
        animated={true}
      />

      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">90+</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Projects Completed
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">60+</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Happy Corporate Clients
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">7 Years</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Legacy (2020 – 2026)
          </span>
        </div>
        <div className="p-5 rounded-2xl neu-dark border border-white/5 text-center">
          <span className="font-display text-3xl sm:text-4xl font-bold text-[#BF8440]">100%</span>
          <span className="block text-xs uppercase tracking-widest text-[#94a3b8] mt-1">
            Client Recommendation
          </span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-pane rounded-2xl p-4 sm:p-5 mb-14 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Year Pills */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start w-full md:w-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#BF8440]" />
            <span>Year:</span>
          </span>
          <button
            type="button"
            onClick={() => setSelectedYear('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedYear === 'all'
                ? 'bg-[#BF8440] text-[#080808] font-bold shadow-md'
                : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
            }`}
          >
            All Years (2020–2026)
          </button>
          {ALL_YEARS.map((yr) => (
            <button
              key={yr}
              type="button"
              onClick={() => setSelectedYear(yr)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedYear === yr
                  ? 'bg-[#BF8440] text-[#080808] font-bold shadow-md'
                  : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Industry Filter Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <label htmlFor="industry-filter" className="text-xs text-[#94a3b8] whitespace-nowrap">
            Domain:
          </label>
          <select
            id="industry-filter"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="neu-dark-inset bg-[#141414] text-xs text-[#e2e8f0] px-3 py-2 rounded-xl border border-white/10 focus:border-[#BF8440] outline-none"
          >
            <option value="all">All Domains & Sectors</option>
            {industries.filter((i) => i !== 'all').map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Year-by-Year Chronological Layout Sections (2020 through 2026) */}
      <div className="space-y-16">
        {ALL_YEARS.filter((yr) => selectedYear === 'all' || selectedYear === yr).map((year) => {
          const yearProjects = clientsByYear[year] || [];
          const hasProjects = yearProjects.length > 0;

          return (
            <section key={year} id={`year-${year}`} className="relative">
              {/* Year Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#BF8440] tracking-tight">
                    {year}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold">
                    {year === 2026 ? 'Current Engagements' : `Cohort Year ${year}`}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#BF8440]/40 via-white/10 to-transparent" />
                <span className="text-xs text-[#64748b] font-medium hidden sm:inline-block">
                  {hasProjects ? `${yearProjects.length} Client Engagements` : 'Archived Engagements'}
                </span>
              </div>

              {/* Projects Grid or Styled NDA / Archiving Notice */}
              {hasProjects ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {yearProjects.map((client) => (
                    <ClientFlipCard key={client.id} client={client} />
                  ))}
                </div>
              ) : (
                /* Styled Empty / NDA Placeholder Box */
                <div className="glass-card bg-[#161616]/60 rounded-2xl p-8 sm:p-10 border border-white/5 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#BF8440]/10 border border-[#BF8440]/30 flex items-center justify-center text-[#BF8440] mb-4">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#e2e8f0] mb-2">
                    Archived Client Engagements Under NDA / Review
                  </h3>
                  <p className="text-sm text-[#94a3b8] max-w-md leading-relaxed">
                    Additional projects from the {year} cohort are currently subject to corporate non-disclosure agreements (NDAs) or under editorial archiving. Engagements in progress — Archive updating.
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Global Bottom CTA */}
      <div className="mt-20 glass-pane rounded-3xl p-8 sm:p-12 border border-[#BF8440]/30 text-center relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#BF8440]/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Deliver Measurable Impact for Your Business?
        </h3>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto mb-8">
          Engage a dedicated team of BITS Goa student consultants for market sizing, pricing strategy, AI workflow automation, or product growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button3D href="/partner-with-us" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
            Partner With Us
          </Button3D>
          <Button3D href="/resources" variant="secondary">
            Explore Case Books & Primers
          </Button3D>
        </div>
      </div>
    </div>
  );
}
