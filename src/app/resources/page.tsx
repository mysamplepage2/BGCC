'use client';

import React, { useState } from 'react';
import { resources } from '@/data/resources';
import { ResourceCards } from '@/components/resources/ResourceCards';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button3D } from '@/components/ui/Button3D';
import {
  BookOpen,
  FileText,
  Search,
  ArrowRight,
  Mail,
  CheckCircle2,
  Download,
  Clock,
} from 'lucide-react';

export default function ResourcesPage() {
  const [activeType, setActiveType] = useState<'all' | 'case-book' | 'primer'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const caseBooks = resources.filter((r) => r.type === 'case-book');
  const primers = resources.filter((r) => r.type === 'primer');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <SectionHeader
        
        title="Consulting Case Books & Industry Primers"
        subtitle="Authoritative frameworks, interview transcripts, market sizing handbooks, and sectoral primers engineered by BITS Goa Consulting Club consultants for aspiring strategists and industry leaders. Download available editions or register for upcoming releases."
        align="center"
        animated={true}
      />

      {/* 2 Discrete Pillars (Case Book & Primers) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Pillar 1: Case Book */}
        <div
          onClick={() => setActiveType('case-book')}
          className={`glass-card rounded-3xl p-8 border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
            activeType === 'case-book'
              ? 'border-[#BF8440] shadow-[0_0_30px_rgba(191,132,64,0.2)]'
              : 'border-white/10 hover:border-[#BF8440]/50'
          }`}
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#BF8440]/10 rounded-full blur-3xl group-hover:bg-[#BF8440]/20 transition-all pointer-events-none" />

          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#BF8440]/15 border border-[#BF8440]/30 flex items-center justify-center text-[#BF8440] shadow-inner">
              <BookOpen className="w-7 h-7" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#BF8440] bg-[#BF8440]/10 border border-[#BF8440]/20 px-3 py-1 rounded-full">
              {caseBooks.length} Publications
            </span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#BF8440] mb-1 block">
            Pillar 01 · Framework Repository
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#BF8440] transition-colors">
            Case Book & Frameworks
          </h2>
          <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
            Comprehensive frameworks, market sizing models, profitability trees, and authentic candidate case transcripts compiled from Tier-1 management consulting interviews across MBB. Direct PDF download available for released volumes.
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                Profitability
              </span>
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                Market Entry
              </span>
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                Guesstimates
              </span>
            </div>
            <span className="text-xs font-semibold text-[#BF8440] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore Case Books</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Pillar 2: Primers */}
        <div
          onClick={() => setActiveType('primer')}
          className={`glass-card rounded-3xl p-8 border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
            activeType === 'primer'
              ? 'border-[#E76814] shadow-[0_0_30px_rgba(231,104,20,0.2)]'
              : 'border-white/10 hover:border-[#E76814]/50'
          }`}
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#E76814]/10 rounded-full blur-3xl group-hover:bg-[#E76814]/20 transition-all pointer-events-none" />

          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#E76814]/15 border border-[#E76814]/30 flex items-center justify-center text-[#E76814] shadow-inner">
              <FileText className="w-7 h-7" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E76814] bg-[#E76814]/10 border border-[#E76814]/20 px-3 py-1 rounded-full">
              {primers.length} Publications
            </span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#E76814] mb-1 block">
            Pillar 02 · Sector Intelligence
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#E76814] transition-colors">
            Consulting Primers
          </h2>
          <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
            Deep-dive industry primers examining unit economics, regulatory landscape, and disruptive business models across FinTech, Quick Commerce, Healthcare, SaaS, and Clean Energy.
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                FinTech
              </span>
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                Dark Stores
              </span>
              <span className="text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded">
                GenAI SaaS
              </span>
            </div>
            <span className="text-xs font-semibold text-[#E76814] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore Primers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Navigation Bar */}
      <div className="glass-pane rounded-2xl p-4 sm:p-5 mb-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Type Tabs */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start w-full md:w-auto">
          <button
            type="button"
            onClick={() => setActiveType('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeType === 'all'
                ? 'bg-[#BF8440] text-[#080808] font-bold shadow-md'
                : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
            }`}
          >
            All Publications ({resources.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveType('case-book')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeType === 'case-book'
                ? 'bg-[#BF8440] text-[#080808] font-bold shadow-md'
                : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Books ({caseBooks.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveType('primer')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeType === 'primer'
                ? 'bg-[#BF8440] text-[#080808] font-bold shadow-md'
                : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Primers ({primers.length})</span>
          </button>
        </div>

        {/* Search Filter Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, models, keywords..."
            className="neu-dark-inset bg-[#141414] text-xs text-[#e2e8f0] pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-[#BF8440] outline-none w-full placeholder:text-[#64748b]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94a3b8] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Resource Cards Grid Component handling items with isPlaceholder, disabled download state, and Coming Soon / Releasing tags */}
      <ResourceCards
        resources={resources}
        activeType={activeType}
        searchQuery={searchQuery}
      />

      {/* Newsletter Notification Box */}
      <div className="mt-20 glass-pane rounded-3xl p-8 sm:p-12 border border-[#BF8440]/30 text-center relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#BF8440]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-[#BF8440]/15 border border-[#BF8440]/30 flex items-center justify-center text-[#BF8440] mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
          Get Notified When 2026 Editions Release (Coming Soon)
        </h3>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto mb-8">
          Join 2,500+ students and aspiring consultants receiving new BGCC case frameworks, interview transcripts, and market primers directly in their inbox. Releasing upcoming volumes periodically.
        </p>

        {emailSubscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>You are subscribed! We&apos;ll notify you when 2026 editions go live.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your university or work email..."
              className="neu-dark-inset bg-[#121212] text-xs sm:text-sm text-[#e2e8f0] px-4 py-3 rounded-full border border-white/10 focus:border-[#BF8440] outline-none w-full placeholder:text-[#64748b]"
            />
            <Button3D type="submit" variant="gold" size="sm" className="whitespace-nowrap w-full sm:w-auto">
              Subscribe Free
            </Button3D>
          </form>
        )}
      </div>
    </div>
  );
}
