import type { Metadata } from 'next';
import { Cardo, Playfair_Display, Libre_Baskerville, Lato } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BITS Goa Consulting Club (BGCC) | Strategic Advisory & Innovation',
  description:
    'The premier student-led management consulting organization at BITS Pilani, Goa Campus. Delivering data-backed strategy, market entry, product consulting, and AI automation across 90+ client engagements.',
  keywords: [
    'BITS Goa Consulting Club',
    'BGCC',
    'BITS Pilani Consulting',
    'Student Consulting',
    'Management Consulting India',
    'Case Consilium',
  ],
  authors: [{ name: 'BITS Goa Consulting Club' }],
  metadataBase: new URL('https://bgccbitsgoa.com'),
  openGraph: {
    title: 'BITS Goa Consulting Club (BGCC)',
    description:
      'Premier student-led management consulting organization at BITS Pilani, Goa Campus.',
    url: 'https://bgccbitsgoa.com',
    siteName: 'BGCC',
    locale: 'en_US',
    type: 'website',
  },
};

import { SiteBackground } from '@/components/layout/SiteBackground';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cardo.variable} ${playfair.variable} ${baskerville.variable} ${lato.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-transparent text-[#e2e8f0] selection:bg-[#BF8440] selection:text-black">
        <SiteBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#BF8440] text-black font-semibold rounded-full shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
