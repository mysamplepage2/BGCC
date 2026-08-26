'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { services } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HighlightText } from '@/components/ui/HighlightText';
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Cpu,
  Layout,
  Search,
  Globe,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Target: <Target className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Zap: <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  BarChart3: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Cpu: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Layout: <Layout className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Search: <Search className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
  Globe: <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-10 lg:px-14 max-w-[1600px] mx-auto flex flex-col gap-16" aria-label="Our Services Section">
      
      {/* Top Section Header */}
      <SectionHeader 
        title="OUR SERVICES"
        subtitle="We offer a plethora of services, including but not limited to:"
        align="center"
        titleClassName="uppercase font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-widest text-[#e2e8f0]"
        subtitleClassName="text-[#94a3b8] max-w-none text-base sm:text-lg"
        titleHighlightWords={['SERVICES']}
      />

      {/* Grid Content */}
      <div className="w-full">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const iconElement = iconMap[service.icon] || <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#BF8440]" />;

            return (
              <motion.div
                key={service.id || index}
                variants={cardVariants}
                className="flex flex-col items-center justify-start group"
              >
                {/* Outlined Icon Box */}
                <div className="w-20 h-20 md:w-24 md:h-24 border-[2.5px] border-[#BF8440] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#BF8440]/10 transition-colors duration-300">
                  {iconElement}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-sans text-[#e2e8f0] text-center mb-4 leading-tight px-2 group-hover:text-[#BF8440] transition-colors duration-300">
                  {service.title || service.categoryName}
                </h3>

                {/* Description */}
                <HighlightText
                  text={service.description}
                  className="text-sm md:text-base text-[#94a3b8] text-center leading-relaxed font-sans px-2"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
