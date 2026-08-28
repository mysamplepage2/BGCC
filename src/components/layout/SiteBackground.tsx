'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SiteBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const [maxScroll, setMaxScroll] = useState(3000);

  // Update max scroll on mount and resize
  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };
    
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  // Map scroll position to scale (1 to 1.15)
  // We use maxScroll to ensure it hits 1.15 exactly at the bottom of the page
  const scale = useTransform(scrollY, [0, maxScroll > 0 ? maxScroll : 3000], [1, 1.15]);

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-[#080808]">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity origin-center"
        style={{ 
          backgroundImage: "url('/assets/hero-bg.jpg')",
          scale 
        }}
      />
      {/* Heavy dark tint overlay for readability */}
      <div className="absolute inset-0 bg-[#141414]/70" />
      {/* Radial vignette to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#080808_100%)] opacity-80" />
      
      {/* Ambient color blobs */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-[#cfdee5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#BF8440]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Premium Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default SiteBackground;
