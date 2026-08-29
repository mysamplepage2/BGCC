'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

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

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    try {
      const endpoint = 'https://formspree.io/f/newsletter_bgcc';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: email, _subject: 'New Newsletter Subscription' }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="w-full bg-black/40 backdrop-blur-md text-[#e2e8f0] relative z-10 pt-24 pb-16 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Stay in Touch Section */}
        <div className="w-full max-w-xl mb-32">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-8">
            Stay in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-sm mb-2 text-left">
                Thank you! You\'ve been subscribed to our newsletter.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-sm mb-2 text-left">
                Oops! Something went wrong. Please try again.
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              required
              disabled={status === 'submitting'}
              className="w-full bg-black/80 border border-white/10 px-6 py-4 text-base text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#BF8440] transition-colors rounded-sm disabled:opacity-50"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#BF8440] text-black font-semibold uppercase tracking-[0.2em] py-4 hover:bg-[#d49852] transition-colors rounded-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Reach Out to Us Section */}
        <div className="w-full max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-12">
            Reach Out to Us
          </h2>
          
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            
            {/* Location */}
            <div className="flex items-start gap-5 w-full">
              <MapPin className="w-7 h-7 text-[#BF8440] shrink-0 mt-1" />
              <p className="text-left text-[#e2e8f0] font-sans text-lg">
                BITS Pilani, K. K. Birla Goa Campus, NH 17B, Bypass Road, Zuarinagar, Goa 403726, INDIA
              </p>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-5 w-full">
              <Phone className="w-7 h-7 text-[#BF8440] shrink-0 mt-1" />
              <div className="flex flex-col text-left text-[#e2e8f0] font-sans text-lg space-y-2">
                <a href="tel:+919340597932" className="hover:text-[#BF8440] transition-colors">+91 93405 97932</a>
                <a href="tel:+917497880227" className="hover:text-[#BF8440] transition-colors">+91 74978 80227</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 w-full">
              <Mail className="w-7 h-7 text-[#BF8440] shrink-0" />
              <a href="mailto:partnerships@bgccbitsgoa.com" className="text-left text-[#e2e8f0] font-sans text-lg hover:text-[#BF8440] transition-colors break-all">
                partnerships@bgccbitsgoa.com
              </a>
            </div>
            
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-16">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#BF8440] flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(191,132,64,0.4)] transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/bgcc.bitsgoa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#BF8440] flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(191,132,64,0.4)] transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#BF8440] flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(191,132,64,0.4)] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Legal Bar */}
      <div className="max-w-4xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
        <div>
          © 2026 BITS Goa Consulting Club. All rights reserved.
        </div>
        <div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[#BF8440] transition-colors focus-visible:outline-none"
            aria-label="Scroll to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
