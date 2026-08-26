'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExternalLink, MessageSquare, Heart } from 'lucide-react';

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

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

interface FallbackPost {
  id: string;
  platform: 'linkedin' | 'instagram';
  date: string;
  title: string;
  content: string;
  metrics: { likes: number; comments: number };
  url: string;
  tag: string;
}

const fallbackPosts: FallbackPost[] = [
  {
    id: 'post-1',
    platform: 'linkedin',
    date: '2 Days Ago',
    title: 'Case Consilium 2025–26 Announced!',
    content: 'We are thrilled to launch India’s premier national consulting competition with a ₹5 Lakhs cash pool and ₹30 Lakhs+ total prize pool! Registrations are now officially live.',
    metrics: { likes: 342, comments: 28 },
    url: 'https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all',
    tag: '#CaseConsilium #BGCC #Consulting',
  },
  {
    id: 'post-2',
    platform: 'linkedin',
    date: '1 Week Ago',
    title: 'EY Cafta 2024 Winners: 5× In a Row',
    content: 'Huge congratulations to our junior and senior cohorts for winning the prestigious EY Cafta challenge for the 5th consecutive time. Rigor, discipline, and execution excellence.',
    metrics: { likes: 489, comments: 54 },
    url: 'https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all',
    tag: '#EYCafta #Excellence #BITSPilani',
  },
  {
    id: 'post-3',
    platform: 'instagram',
    date: '3 Days Ago',
    title: 'Life at BGCC: Problem Solving in Action',
    content: 'Behind the scenes: Case cracking sessions, mock client pitches, and late-night consulting deck iterations in Goa. Swipe to see the team in action!',
    metrics: { likes: 612, comments: 41 },
    url: 'https://www.instagram.com/bgcc.bitsgoa/',
    tag: '#BITSGoa #ConsultingCulture',
  },
  {
    id: 'post-4',
    platform: 'instagram',
    date: '2 Weeks Ago',
    title: 'Consulting Primer: FinTech in Tier-2 India',
    content: 'Our latest industry primer exploring regulatory shifts, unit economics, and neo-banking adoption across non-metro regions is now out.',
    metrics: { likes: 520, comments: 33 },
    url: 'https://www.instagram.com/bgcc.bitsgoa/',
    tag: '#FinTech #IndustryPrimer #Research',
  },
];

export const SocialFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'linkedin' | 'instagram'>('all');
  const [elfsightLoaded, setElfsightLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => setElfsightLoaded(true);
    script.onerror = () => setElfsightLoaded(false);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const filteredPosts = activeTab === 'all'
    ? fallbackPosts
    : fallbackPosts.filter((p) => p.platform === activeTab);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[500px]" aria-label="Social Media Feed and Updates">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeader
          
          title="Live Social Feed"
          subtitle="Stay updated with our latest case competition dispatches, industry insights, and club life."
          align="left"
          titleHighlightWords={['Social']}
        />

        {/* Platform Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#181818] border border-white/10 shrink-0 self-start md:self-end">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'all'
                ? 'bg-[#BF8440] text-[#080808] shadow-md'
                : 'text-[#94a3b8] hover:text-[#e2e8f0]'
            }`}
          >
            All Updates
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('linkedin')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
              activeTab === 'linkedin'
                ? 'bg-[#0077B5] text-white shadow-md'
                : 'text-[#94a3b8] hover:text-[#e2e8f0]'
            }`}
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('instagram')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
              activeTab === 'instagram'
                ? 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-md'
                : 'text-[#94a3b8] hover:text-[#e2e8f0]'
            }`}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </button>
        </div>
      </div>

      {/* Tagembed Widget Container / High-Fidelity Fallback Grid */}
      <div className="w-full">
        {/* Elfsight Widget Container */}
        {/* INSTRUCTIONS: Replace 'YOUR-WIDGET-ID-HERE' with your actual Elfsight widget ID to activate it. */}
        <div
          className="elfsight-app-YOUR-WIDGET-ID-HERE w-full min-h-[50px] mb-8"
          data-elfsight-app-lazy
        ></div>

        {/* High-Fidelity Responsive Fallback Post Cards (Delete this block once Elfsight is configured) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card p-6 rounded-2xl hover:border-[#BF8440]/40 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    {post.platform === 'linkedin' ? (
                      <div className="w-7 h-7 rounded-full bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5]">
                        <LinkedInIcon className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C]">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#e2e8f0] capitalize">
                        {post.platform === 'linkedin' ? 'LinkedIn' : 'Instagram'}
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{post.date}</span>
                    </div>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#BF8440] transition-colors p-1"
                    aria-label={`View post on ${post.platform}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Post Title */}
                <h3 className="text-sm font-bold font-serif text-[#e2e8f0] group-hover:text-[#BF8440] transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                {/* Post Content */}
                <p className="text-xs text-[#94a3b8] leading-relaxed font-sans mb-4">
                  {post.content}
                </p>

                {/* Hashtag */}
                <span className="text-[10px] font-mono text-[#BF8440] block mb-4">
                  {post.tag}
                </span>
              </div>

              {/* Footer Engagement Metrics & Outbound CTA */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#94a3b8]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#E76814]" />
                    <span>{post.metrics.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#BF8440]" />
                    <span>{post.metrics.comments}</span>
                  </span>
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#BF8440] hover:underline flex items-center gap-1"
                >
                  <span>Read Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channels Quick Link Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e2e8f0] hover:text-[#0077B5] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>bits-goa-consulting-club</span>
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.instagram.com/bgcc.bitsgoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e2e8f0] hover:text-[#E1306C] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@bgcc.bitsgoa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
