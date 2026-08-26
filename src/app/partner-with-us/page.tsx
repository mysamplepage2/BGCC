'use client';

import React from 'react';
import { PartnerForm } from '@/components/partner/PartnerForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Top Page Title */}
      <div className="mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Contact Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Reach Us */}
        <div className="space-y-12">
          
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Reach Us
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Want to get in touch? We&apos;d love to hear from you! Here&apos;s how you can reach us!
            </p>
          </div>

          <div className="space-y-8">
            {/* Find Us */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MapPin className="w-5 h-5 text-[#BF8440]" />
                <span className="text-base">Find Us</span>
              </div>
              <p className="text-sm text-[#94a3b8] pl-7">
                BITS Pilani K.K. Birla Goa Campus,<br />
                NH 17B, Bypass Road, Zuarinagar,<br />
                Sancoale, Goa 403726
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-5 h-5 text-[#BF8440]" />
                <span className="text-base">Phone</span>
              </div>
              <div className="flex flex-col gap-2 text-sm text-[#94a3b8] pl-7">
                <span>+91 93405 97932 – Aryan Gupta (President)</span>
                <span>+91 74978 80227 – Yashveer Sabharwal (Partnerships)</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Mail className="w-5 h-5 text-[#BF8440]" />
                <span className="text-base">Email</span>
              </div>
              <a href="mailto:partnerships@bgccbitsgoa.com" className="text-sm text-[#94a3b8] pl-7 hover:text-[#BF8440] transition-colors">
                partnerships@bgccbitsgoa.com
              </a>
            </div>

            {/* Connect with us */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="text-white font-semibold">
                <span className="text-base">Connect with us</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e2e8f0] hover:text-[#BF8440] hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e2e8f0] hover:text-[#BF8440] hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="mailto:partnerships@bgccbitsgoa.com" aria-label="Email" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e2e8f0] hover:text-[#BF8440] hover:bg-white/10 transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Form */}
        <div>
          <PartnerForm />
        </div>

      </div>
    </div>
  );
}
