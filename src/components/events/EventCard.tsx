'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventProps {
  event: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    upcoming?: boolean;
  };
}

export const EventCard: React.FC<EventProps> = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[4/5] [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* FRONT: Poster + Overlay */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden neu-dark border border-white/5">
          {event.upcoming && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#BF8440] to-[#E5B869] text-[#141414] font-bold px-4 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full z-20 shadow-[0_4px_15px_rgba(191,132,64,0.4)]">
              Upcoming Event
            </div>
          )}
          <Image
            src={event.image || '/assets/hero-bg.jpg'}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
            <span className="text-[#BF8440] font-mono text-sm md:text-base font-bold mb-2 tracking-widest">{event.date}</span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white line-clamp-2 leading-tight">{event.title}</h3>
          </div>
        </div>

        {/* BACK: Old Paper Description */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center"
          style={{
            backgroundColor: '#F4EBD0', 
            boxShadow: 'inset 0 0 50px rgba(139, 69, 19, 0.3)', 
          }}
        >
          {/* Noise texture overlay for paper feel */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
          />
          
          <div className="relative z-10 w-full h-full overflow-y-auto text-[#4a3b2c] pr-2 scrollbar-thin scrollbar-thumb-[#8b4513]/30 scrollbar-track-transparent">
            <h3 className="text-xl font-display font-bold mb-4 border-b border-[#4a3b2c]/20 pb-2">{event.title}</h3>
            <p className="font-serif leading-relaxed text-sm whitespace-pre-wrap">{event.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
