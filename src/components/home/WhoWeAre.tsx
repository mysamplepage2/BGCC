'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal3D } from '@/components/ui/TextReveal3D';

export const WhoWeAre: React.FC = () => {
  return (
    <section 
      className="relative w-full py-24 md:py-32 px-4 sm:px-10 lg:px-14 max-w-[1600px] mx-auto" 
      aria-label="Who We Are Section"
      id="who-we-are"
    >
      <div className="flex flex-col gap-16 relative">
        
        {/* Top Header & Text */}
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display text-[#e2e8f0] mb-8 leading-tight text-center">
              We are <br />
              <span className="text-[#BF8440] italic">BGCC.</span>
            </h3>
            <TextReveal3D 
              as="p"
              text="BITS Goa Consulting Club is the premier student-led consulting organization at BITS Pilani, Goa Campus. We empower collegiate problem solvers to deliver corporate-grade strategic consulting, bridging the gap between academic brilliance and industry realities."
              className="text-lg md:text-xl font-sans text-[#94a3b8] leading-relaxed max-w-2xl inline-flex text-center justify-center"
            />
          </motion.div>
        </div>

        {/* Bottom Horizontal Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full pt-8 border-t border-white/5">
          
          <motion.div
            className="pl-6 border-l-2 border-[#BF8440]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-5xl md:text-7xl font-display text-[#BF8440] tracking-tighter mb-4">40+</div>
            <div className="text-sm md:text-base font-bold text-[#e2e8f0] uppercase tracking-wider mb-2">Team Members</div>
            <p className="text-sm text-[#94a3b8] font-sans">Hand-picked consultants across engineering & economics disciplines.</p>
          </motion.div>

          <motion.div
            className="pl-6 border-l-2 border-[#BF8440]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-5xl md:text-7xl font-display text-[#BF8440] tracking-tighter mb-4">90+</div>
            <div className="text-sm md:text-base font-bold text-[#e2e8f0] uppercase tracking-wider mb-2">Projects Completed</div>
            <p className="text-sm text-[#94a3b8] font-sans">End-to-end strategic engagements delivered since 2020 inception.</p>
          </motion.div>

          <motion.div
            className="pl-6 border-l-2 border-[#BF8440]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-5xl md:text-7xl font-display text-[#BF8440] tracking-tighter mb-4">60+</div>
            <div className="text-sm md:text-base font-bold text-[#e2e8f0] uppercase tracking-wider mb-2">Happy Clients</div>
            <p className="text-sm text-[#94a3b8] font-sans">High-growth startups, enterprise conglomerates, & venture funds.</p>
          </motion.div>

          <motion.div
            className="pl-6 border-l-2 border-[#BF8440]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-5xl md:text-7xl font-display text-[#BF8440] tracking-tighter mb-4">400K+</div>
            <div className="text-sm md:text-base font-bold text-[#e2e8f0] uppercase tracking-wider mb-2">Impressions</div>
            <p className="text-sm text-[#94a3b8] font-sans">Cumulative reach across LinkedIn, case primers, and national summits.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
