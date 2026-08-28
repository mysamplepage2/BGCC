'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button3D } from '@/components/ui/Button3D';
import { cn } from '@/lib/utils';

interface NavLinkItem {
  name: string;
  href: string;
  isCta?: boolean;
}

const navLinks: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Clients', href: '/clients' },
  { name: 'Resources', href: '/resources' },
  { name: 'Events', href: '/events' },
  { name: 'Partner with us', href: '/partner-with-us', isCta: true },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    const timer = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/partner-with-us') {
      return pathname === '/partner-with-us' || pathname === '/partner';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none',
          isScrolled ? 'py-4' : 'py-6 md:py-8'
        )}
      >
        <div className="w-full px-6 md:px-12 mx-auto">
          <nav className="relative flex items-center justify-between w-full pointer-events-auto">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group focus-visible:outline-none flex items-center"
                aria-label="BGCC Home"
              >
                <img 
                  src="/logo-light.png" 
                  alt="BGCC Logo" 
                  className={cn(
                    "w-auto object-contain transition-all duration-500 origin-left scale-[2.5] md:scale-[3] group-hover:scale-[2.6] md:group-hover:scale-[3.1]",
                    isScrolled ? "h-14" : "h-16 md:h-20"
                  )}
                />
              </Link>
            </div>
            
            {/* Right: Navigation Links & CTA */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-auto">
              {/* Partner CTA comes first as per design */}
              <div className="mr-4">
                <Button3D
                  href="/partner-with-us"
                  size="sm"
                  variant="gold"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  className="text-[10px] uppercase tracking-widest px-6 py-2.5 font-bold shadow-[0_0_20px_rgba(191,132,64,0.3)]"
                >
                  Partner with us
                </Button3D>
              </div>

              {navLinks
                .filter((item) => !item.isCta)
                .map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        'px-4 py-2 rounded-full text-[11px] lg:text-xs font-semibold tracking-widest uppercase transition-all relative duration-200',
                        active
                          ? 'text-[#BF8440] bg-[#141414]/90 border border-[#BF8440]/30 shadow-lg'
                          : 'text-[#e2e8f0] hover:text-[#BF8440] hover:bg-[#141414]/50 border border-transparent hover:border-white/10'
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center ml-auto">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-[#141414]/80 backdrop-blur-md border border-white/10 text-[#e2e8f0] hover:text-[#BF8440] hover:border-[#BF8440]/50 focus-visible:ring-2 focus-visible:ring-[#BF8440] transition-all shadow-lg"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#94a3b8] mb-2 px-3">
              Navigation
            </div>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors',
                    link.isCta
                      ? 'btn-gold text-[#080808] font-semibold mt-4 shadow-lg'
                      : active
                      ? 'bg-[#BF8440]/15 text-[#BF8440] border border-[#BF8440]/30'
                      : 'text-[#e2e8f0] hover:bg-white/5 hover:text-[#BF8440]'
                  )}
                >
                  <span>{link.name}</span>
                  {link.isCta ? (
                    <ArrowUpRight className="w-5 h-5" />
                  ) : (
                    active && <span className="w-2 h-2 rounded-full bg-[#BF8440]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-[#94a3b8] space-y-2">
            <p className="text-[#e2e8f0] font-medium">BITS Goa Consulting Club</p>
            <p>NH 17B, Zuarinagar, Goa 403726</p>
            <p className="text-[#BF8440]">partnerships@bgccbitsgoa.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
