'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal3D } from '@/components/ui/TextReveal3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90dvh] flex flex-col justify-center overflow-hidden" aria-label="Hero Section">


      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 mt-16 md:mt-24 text-center flex flex-col items-center">
        
        {/* Cinematic Masked Slide-Up Reveal */}
        <motion.div 
          className="mb-6 flex flex-col items-center justify-center w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* Main Title (Sprat) */}
          <div className="overflow-hidden py-2">
            <TextReveal3D 
              as="h1"
              text="BITS Goa"
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight text-[#e2e8f0]"
            />
          </div>
          <div className="overflow-hidden py-2 -mt-2 md:-mt-6">
            <TextReveal3D 
              as="h1"
              text="Consulting Club"
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-tight text-[#e2e8f0]"
            />
          </div>
          
          {/* Subtitle (Libre Baskerville, Gold) */}
          <div className="overflow-hidden mt-6 md:mt-10">
            <TextReveal3D 
              as="p"
              text="Insight. Impact. Excellence."
              className="text-lg sm:text-xl md:text-3xl font-sans text-[#BF8440] italic tracking-wider justify-center"
              wordClassName="text-[#BF8440]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
