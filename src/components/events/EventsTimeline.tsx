'use client';

import React from 'react';
import eventsData from '@/data/events.json';
import { EventCard } from './EventCard';
import { motion } from 'framer-motion';

export const EventsTimeline: React.FC = () => {
  // Sort events chronologically (or reverse chronological)
  // The data currently seems ascending (2022 -> 2026). Let's keep it as is.
  // We filter out events with no images just in case, though all 33 should have images.
  const validEvents = eventsData;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Our <span className="text-[#BF8440]">Legacy</span>
        </h2>
        <p className="text-[#94a3b8] font-sans max-w-2xl mx-auto text-lg">
          Click on any poster to turn back the pages of time and explore our history of premier competitions and workshops.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto py-10">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#BF8440]/30 transform md:-translate-x-1/2" />
        
        {validEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={event.id} className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 w-full">
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-5 h-5 rounded-full bg-[#141414] border-[3px] border-[#BF8440] shadow-[0_0_15px_rgba(191,132,64,0.6)] transform -translate-x-1/2 md:-translate-y-1/2 z-10" />
              
              {/* Left Side (Content for Even on Desktop) */}
              <div className={`hidden md:block w-5/12 ${isEven ? '' : 'invisible'}`}>
                {isEven && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                )}
              </div>

              {/* Right Side (Content for Odd on Desktop, Content for ALL on Mobile) */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0`}>
                <motion.div
                  className={`w-full ${isEven ? 'md:hidden' : ''}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <EventCard event={event} />
                </motion.div>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};
