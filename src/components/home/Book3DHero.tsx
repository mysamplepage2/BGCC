'use client';

import React, { useState, useEffect } from 'react';
import { Button3D } from '@/components/ui/Button3D';
import { BookOpen, Sparkles, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface Book3DHeroProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Book3DHero: React.FC<Book3DHeroProps> = ({
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  // Fluid 3D Mouse Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const dynamicRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['25deg', '-5deg']);
  const dynamicRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['10deg', '50deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-center pt-16 md:pt-20" aria-label="Hero Section">
      {/* Background Architectural Overlay with Dark Radial Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,9,13,0.2)_0%,_#08090d_80%)]" />
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#cfdee5]/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#E76814]/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Hero Minimal Canvas (mesh3d aesthetic) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Massive Typography & Interactive CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 relative">
            
            {/* Massive Display Title with mix-blend-difference */}
            <motion.div 
              className="mb-8 mix-blend-difference w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  }
                }
              }}
            >
              {[
                { text: 'Empowering', ml: 'ml-0' },
                { text: 'Strategy,', ml: 'ml-[5%] sm:ml-[10%] lg:ml-[15%]' },
                { text: 'Delivering', ml: 'ml-[10%] sm:ml-[20%] lg:ml-[30%]' },
                { text: 'Value.', ml: 'ml-[15%] sm:ml-[30%] lg:ml-[45%]' }
              ].map((line, i) => (
                <div key={i} className={`overflow-hidden ${line.ml}`}>
                  <motion.h1 
                    variants={{
                      hidden: { y: '120%', rotateZ: 3, opacity: 0 },
                      visible: { y: '0%', rotateZ: 0, opacity: 1 }
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 1 }}
                    className="text-[15vw] sm:text-[12vw] lg:text-[7rem] xl:text-[8rem] font-sans font-black uppercase leading-[0.85] tracking-tight text-[#cfdee5] whitespace-nowrap"
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </motion.div>

            {/* Subtitle / Lead Prose (Also using difference blend to match) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-base sm:text-lg text-[#cfdee5]/70 mix-blend-difference leading-relaxed max-w-lg mb-8 font-sans font-medium uppercase tracking-wider"
            >
              BITS Goa Consulting Club delivers strategic, data-driven solutions to high-growth startups, conglomerates, and venture-backed enterprises.
            </motion.p>

            {/* Action Group: Minimal Tactile Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button3D
                href="/partner-with-us"
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                className="w-full sm:w-auto font-semibold uppercase tracking-widest text-xs"
              >
                Partner With Us
              </Button3D>

            </motion.div>

            {/* Quick Proof Metrics Strip (Minimalized) */}
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 0.8, filter: 'blur(0px)' }}
              transition={{ delay: 1.2, duration: 1 }}
              className="w-full pt-8 mt-12 grid grid-cols-3 gap-4 sm:gap-6 mix-blend-difference text-[#cfdee5]"
            >
              <div className="flex flex-col border-t-2 border-[#cfdee5]/30 pt-4">
                <span className="text-3xl sm:text-4xl font-sans font-bold tracking-tighter">40+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold">Consultants</span>
              </div>
              <div className="flex flex-col border-t-2 border-[#cfdee5]/30 pt-4">
                <span className="text-3xl sm:text-4xl font-sans font-bold tracking-tighter">90+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold">Engagements</span>
              </div>
              <div className="flex flex-col border-t-2 border-[#cfdee5]/30 pt-4">
                <span className="text-3xl sm:text-4xl font-sans font-bold tracking-tighter">60+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold">Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Book */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full py-4 z-30 perspective-1200">
            <motion.div
              className="w-full flex flex-col items-center justify-center cursor-pointer select-none group focus:outline-none"
              onClick={handleToggle}
              onKeyDown={handleKeyDown}
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              aria-label={isOpen ? 'Close BGCC 3D Overview Book' : 'Open BGCC 3D Overview Book'}
              aria-expanded={isOpen}
            >
              {/* 3D Book Stance Container */}
              <motion.div
                className="preserve-3d relative"
                animate={{
                  scale: isOpen ? 1 : isHovered ? 1.15 : 1,
                  translateZ: isOpen ? 0 : isHovered ? 120 : 0,
                  rotateX: isOpen ? '0deg' : undefined,
                  rotateY: isOpen ? '0deg' : undefined,
                  rotateZ: isOpen ? '0deg' : undefined,
                }}
                style={{
                  rotateX: isOpen ? '0deg' : (isMounted ? dynamicRotateX : '15deg'),
                  rotateY: isOpen ? '0deg' : (isMounted ? dynamicRotateY : '35deg'),
                  rotateZ: '0deg',
                }}
                transition={{
                  scale: { type: 'spring', stiffness: 200, damping: 20 },
                  translateZ: { type: 'spring', stiffness: 200, damping: 20 },
                  default: { duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }
                }}
              >
                {/* 3D BOOK STRUCTURE */}
                <motion.div 
                  className="relative w-[270px] h-[370px] preserve-3d"
                  animate={{ translateX: isOpen ? 135 : 0 }}
                  transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
                >
                  {/* Right Page (Fixed inside the book wrapper) */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#fdfbf7] via-[#faf6ec] to-[#f4eee0] border border-[#ede8d8] rounded-r-2xl shadow-[0_35px_80px_rgba(0,0,0,0.95)] z-0 flex flex-col justify-between p-5 sm:p-7 text-[#333333]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#a8a296] uppercase">
                          CHAPTER II · WHAT WE DO
                        </span>
                        <span className="text-[10px] font-mono text-[#a8a296]">CAPABILITIES</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-[#141414] mb-2">
                        Strategic Consulting
                      </h4>
                      <div className="text-xs sm:text-[13px] leading-relaxed text-[#333333] font-sans text-justify">
                        <span className="float-left text-[#BF8440] font-serif font-bold text-[3.2rem] leading-[0.85] mr-2.5 mt-0.5 select-none drop-cap">
                          W
                        </span>
                        e deliver end-to-end consulting engagements across 8 core practices: from Market Entry and Growth to AI Automation, Product Strategy, and Financial Modeling. With over 90+ projects delivered, we transform ambiguity into measurable strategic impact.
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-serif italic text-[#a8a296] border-t border-[#e5dfce] pt-2 mt-2">
                      <span>Consulting Directorate</span>
                      <span>02</span>
                    </div>
                  </div>
                  
                  {/* Left Cover (Flips open) */}
                  <motion.div 
                    className="absolute inset-0 preserve-3d origin-left z-10"
                    animate={{ rotateY: isOpen ? -180 : 0 }}
                    transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
                  >
                    {/* Front Cover (Outside) */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0d0d0d] border-2 border-[#BF8440]/50 rounded-r-xl rounded-l-sm shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(191,132,64,0.25)] flex flex-col justify-between p-6 overflow-hidden">
                      {/* Dynamic Glare on Hover */}
                      <motion.div 
                        className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                        animate={{ x: isHovered && !isOpen ? '100%' : '-100%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                      />
                      <div className="flex justify-between items-start z-10">
                        <span className="text-[10px] font-mono tracking-[0.25em] text-[#BF8440] uppercase">EST. 2020</span>
                        <Sparkles className="w-4 h-4 text-[#BF8440] opacity-80" />
                      </div>
                      <div className="flex flex-col items-center text-center my-auto z-10">
                        <div className="w-16 h-16 rounded-full bg-[#0d0d0d] border-2 border-[#BF8440] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(191,132,64,0.4)] book-extrusion-gold">
                          <BookOpen className="w-8 h-8 text-[#BF8440]" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-[#e2e8f0] tracking-wide book-extrusion-gold">
                          BGCC
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#BF8440] mt-1 font-semibold">
                          Case Compendium
                        </p>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#BF8440] to-transparent my-2" />
                        <p className="text-[9px] uppercase tracking-widest text-[#94a3b8]">
                          Strategy · Analytics · Impact
                        </p>
                      </div>
                      <div className="flex justify-between items-end text-[9px] font-mono tracking-wider text-[#94a3b8]/70 border-t border-white/10 pt-3 z-10">
                        <span>BITS PILANI</span>
                        <span>VOL. I</span>
                      </div>
                      
                      {/* Book Spine Overlay on Cover */}
                      <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
                    </div>
                     
                    {/* Inside Cover (Left Page) */}
                    <div 
                      className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#fdfbf7] via-[#faf6ec] to-[#f4eee0] border border-[#ede8d8] rounded-l-2xl shadow-inner flex flex-col justify-between p-5 sm:p-7 text-[#333333]"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#a8a296] uppercase">
                            CHAPTER I · ABOUT US
                          </span>
                          <span className="text-[10px] font-mono text-[#a8a296]">BGCC/26</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-[#141414] mb-2">
                          Who We Are
                        </h4>
                        <div className="text-xs sm:text-[13px] leading-relaxed text-[#333333] font-sans text-justify">
                          <span className="float-left text-[#BF8440] font-serif font-bold text-[3.2rem] leading-[0.85] mr-2.5 mt-0.5 select-none drop-cap">
                            B
                          </span>
                          ITS Goa Consulting Club (BGCC) is the premier student-led consulting organization at BITS Pilani, Goa Campus. A team of 40+ driven individuals who excel in strategic problem-solving, market research, and business innovation.
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-serif italic text-[#a8a296] border-t border-[#e5dfce] pt-2 mt-2">
                        <span>BITS Pilani Goa</span>
                        <span>01</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Book3DHero;
