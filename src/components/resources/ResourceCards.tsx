'use client';

import React, { useState } from 'react';
import { ResourceItem } from '@/types';
import { cn } from '@/lib/utils';
import { Button3D } from '@/components/ui/Button3D';
import {
  BookOpen,
  FileText,
  Download,
  Calendar,
  HardDrive,
  Tag,
  Clock,
  Sparkles,
  Search,
  Bell,
  CheckCircle2,
} from 'lucide-react';

export interface ResourceCardsProps {
  resources: ResourceItem[];
  activeType?: 'all' | 'case-book' | 'primer';
  searchQuery?: string;
  className?: string;
}

export const ResourceCards: React.FC<ResourceCardsProps> = ({
  resources,
  activeType = 'all',
  searchQuery = '',
  className,
}) => {
  const [notifiedIds, setNotifiedIds] = useState<Record<string, boolean>>({});
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleNotifyMe = (id: string, title: string) => {
    setNotifiedIds((prev) => ({ ...prev, [id]: true }));
    setDownloadNotice(`You'll be notified via club announcements when "${title}" is officially released.`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  const handleDownload = (res: ResourceItem) => {
    if (res.isPlaceholder) {
      handleNotifyMe(res.id, res.title);
      return;
    }
    // Safe download handling
    setDownloadNotice(`Initiating download for "${res.title}" (${res.fileSize || 'PDF'})...`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  const filtered = resources.filter((item) => {
    const matchType = activeType === 'all' || item.type === activeType;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.topics && item.topics.some((t) => t.toLowerCase().includes(q)));
    return matchType && matchSearch;
  });

  if (filtered.length === 0) {
    return (
      <div className="glass-card bg-[#161616]/70 rounded-2xl p-12 border border-white/10 text-center max-w-xl mx-auto my-8">
        <div className="w-14 h-14 rounded-full bg-[#BF8440]/15 border border-[#BF8440]/30 flex items-center justify-center text-[#BF8440] mx-auto mb-4">
          <Search className="w-6 h-6" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#e2e8f0] mb-2">
          No Publications Found
        </h3>
        <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
          We couldn&apos;t find any case books or industry primers matching your current filter criteria.
        </p>
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#BF8440] bg-[#BF8440]/10 px-3 py-1.5 rounded-full border border-[#BF8440]/25">
          Publication inventories update regularly
        </span>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Dynamic Toast Notice */}
      {downloadNotice && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 glass-pane bg-[#181818]/95 border border-[#BF8440]/50 text-[#e2e8f0] px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <CheckCircle2 className="w-5 h-5 text-[#BF8440] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{downloadNotice}</span>
        </div>
      )}

      {/* Grid of Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const isCaseBook = item.type === 'case-book';
          const isUpcoming = item.isPlaceholder;
          const isNotified = notifiedIds[item.id];

          return (
            <div
              key={item.id}
              className={cn(
                'glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden',
                isUpcoming
                  ? 'border-white/10 bg-[#141414]/80'
                  : 'border-white/10 hover:border-[#BF8440]/50 hover:shadow-2xl'
              )}
            >
              {/* Corner Glow Accent */}
              <div
                className={cn(
                  'absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-opacity',
                  isCaseBook ? 'bg-[#BF8440]/10' : 'bg-[#E76814]/10',
                  isUpcoming && 'opacity-40'
                )}
              />

              {/* Top Row: Type Badge & Edition / Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide',
                      isCaseBook
                        ? 'bg-[#BF8440]/15 text-[#BF8440] border border-[#BF8440]/30'
                        : 'bg-[#E76814]/15 text-[#ff8e42] border border-[#E76814]/30'
                    )}
                  >
                    {isCaseBook ? (
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                    )}
                    <span>{item.category || (isCaseBook ? 'Case Book' : 'Industry Primer')}</span>
                  </span>

                  {isUpcoming ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock className="w-3 h-3" />
                      <span>Coming Soon</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#94a3b8] font-medium px-2 py-0.5 rounded bg-white/5">
                      {item.edition || item.publishDate}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#e2e8f0] group-hover:text-white transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>

                {/* Topics Pills */}
                {item.topics && item.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] text-[#cbd5e1] bg-white/5 px-2.5 py-0.5 rounded-md"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#BF8440]" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Metadata & Action Bar */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#64748b]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#94a3b8]" />
                    <span>{item.publishDate || item.releaseDate}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-[#94a3b8]" />
                    <span>{item.fileSize || 'PDF Document'}</span>
                  </span>
                </div>

                {/* Action Trigger */}
                {isUpcoming ? (
                  <Button3D
                    onClick={() => handleNotifyMe(item.id, item.title)}
                    variant="secondary"
                    size="sm"
                    className="w-full text-xs font-semibold py-2.5 border-dashed border-white/20 hover:border-[#BF8440]/60"
                    icon={isNotified ? <CheckCircle2 className="w-3.5 h-3.5 text-[#BF8440]" /> : <Bell className="w-3.5 h-3.5" />}
                  >
                    {isNotified ? 'Notification Enabled' : 'Notify on Release (Coming Soon)'}
                  </Button3D>
                ) : (
                  <Button3D
                    onClick={() => handleDownload(item)}
                    variant="primary"
                    size="sm"
                    className="w-full text-xs font-semibold py-2.5"
                    icon={<Download className="w-3.5 h-3.5 text-[#BF8440]" />}
                  >
                    Download Resource (PDF)
                  </Button3D>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceCards;
