# BGCC Website — Technical Architecture & Workspace Investigation Report

**Author**: Survey Tech Explorer 3  
**Date**: 2026-08-25  
**Project**: BITS Goa Consulting Club (BGCC) Official Website  
**Workspace**: `C:\Users\ragha\.gemini\antigravity\scratch\bgcc`

---

## 1. Executive Technical Summary

The BITS Goa Consulting Club (BGCC) web platform is a modern, high-performance, dark-mode marketing website designed to project a premier corporate consulting brand while serving as an accessible resource and recruitment hub.

The workspace is currently initialized with a clean **Next.js 16 (Turbopack)** + **React 19** + **Tailwind CSS v4** + **TypeScript** setup. The build pipeline (`next build`) and typechecker (`tsc --noEmit`) compile successfully without errors.

---

## 2. Environment & Tooling Audit

| Environment Component | Version / Specification | Notes & Constraints |
|---|---|---|
| **Node.js** | `v24.17.0` | Active LTS / Modern Node runtime |
| **NPM** | `11.13.0` | Powershell scripts disabled by policy; must execute via `cmd.exe /c npm` or `npm.cmd` |
| **Next.js** | `16.3.2` | App Router architecture, Turbopack enabled by default |
| **React** | `19.2.8` | React 19 Server & Client Components |
| **TypeScript** | `^5` (`tsconfig.json`) | Strict mode enabled, `@/*` mapped to `./src/*`, `moduleResolution: bundler` |
| **Styling Engine** | `tailwindcss ^4` + `@tailwindcss/postcss ^4` | Tailwind CSS v4 CSS-first config (`@theme` in `globals.css`) |
| **Linting** | `eslint ^9` + `eslint-config-next 16.3.2` | Flat ESLint config in `eslint.config.mjs` |

---

## 3. Styling & Design System Specification

### 3.1 Color Palette & Theme Tokens
Configured via `@theme` directives in `src/app/globals.css`:
- **Canvas / Background**: `#141414` (`--color-bgcc-bg`) — Deep Charcoal Dark Mode
- **Primary Gold Accent**: `#BF8440` (`--color-bgcc-gold`) — Headings, key numbers, glowing borders
- **Dark Gold / Muted Accent**: `#a67337` (`--color-bgcc-dark-gold`)
- **Secondary Orange Accent**: `#E76814` (`--color-bgcc-orange`)
- **Body Text**: `#e2e8f0` (`--color-bgcc-text`) — Crisp light gray for contrast and legibility
- **Tactile Button Base**: `#080808` (`--color-bgcc-dark-btn`) — Near-black surface
- **3D Book Internal Paper**: `#fdfbf7` (`--color-bgcc-paper`) — Warm off-white
- **3D Book Edge Pages**: `#ede8d8` (`--color-bgcc-ivory`)

### 3.2 Glass-Neumorphism CSS Utilities
- `.glass-pane`: `background: rgba(20, 20, 20, 0.7); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);`
- `.neu-dark`: `background: #141414; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8), -5px -5px 15px rgba(255, 255, 255, 0.05);`
- `.neu-dark-inset`: `background: #141414; box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.8), inset -5px -5px 15px rgba(255, 255, 255, 0.05);`

### 3.3 Typography Stack
- **Headings & Key Accents**: `Sprat` (Serif) or `Playfair Display` (via `next/font/google` or local fonts from `bgcc design assets/sprat-main`).
- **Body & Secondary Copy**: `Lato` (Sans-serif) or `Geist` sans fallback.
- **Micro-animations**: `.reveal-wrapper` and `.reveal-text` with `animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`.

### 3.4 Recommended UI Utility Packages
- `clsx` + `tailwind-merge` (`cn` helper utility).
- `lucide-react` (icons for navigation, services, timeline, arrows, contact details).

---

## 4. Architectural Layout & Route Mapping

The site consists of a 5-page App Router architecture with a persistent top navigation bar and global footer.

```
src/
├── app/
│   ├── layout.tsx                # Root layout (Navbar, Footer, Font definitions, Metadata)
│   ├── globals.css               # Tailwind v4 theme, 3D animations & Neu utilities
│   ├── page.tsx                  # Home Page
│   ├── clients/
│   │   └── page.tsx              # Clients Page (2020–2026 Year-wise Flip Cards)
│   ├── resources/
│   │   └── page.tsx              # Resources Page (Case Book & Primers Hub)
│   ├── events/
│   │   └── page.tsx              # Events Page (Interactive Timeline)
│   └── partner/
│       └── page.tsx              # Partner With Us Page (Enquiry Form)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky Dark Glass Navbar with 5 nav links + CTA
│   │   ├── Footer.tsx            # Contact Details, Address, Socials, Mailchimp Newsletter
│   │   └── Container.tsx         # Responsive max-width wrapper
│   ├── home/
│   │   ├── HeroSection.tsx       # Architectural BG, Glass Canvas, Headline, 3D Book & CTA
│   │   ├── Book3D.tsx            # Pure CSS/React 3D Isometric Book (Opens on click)
│   │   ├── CaseConsiliumBanner.tsx # Visual graphic banner for flagship competition
│   │   ├── WhoWeAre.tsx          # About BGCC copy + 4 Stats + 3 Major Awards
│   │   ├── ServicesGrid.tsx      # 8 Consulting Service cards in 2-row / 4-col responsive grid
│   │   ├── ClientLogoStrip.tsx   # Continuous auto-scrolling logo carousel + manual nav arrows
│   │   ├── SocialFeed.tsx        # Tagembed/Elfsight LinkedIn + Instagram embedded feed / preview
│   │   └── TeamGrid.tsx          # 1-2-2 Coordinator formation with LinkedIn links
│   ├── clients/
│   │   ├── ClientYearSection.tsx # Accordion or segmented 2020-2026 sections
│   │   └── ClientFlipCard.tsx    # 3D Hover-Flip card with front logo & back project scope
│   ├── resources/
│   │   ├── ResourceCard.tsx      # Case book / Primer entry cards with badges & download CTA
│   │   └── ResourceListModal.tsx # Filterable / list view modal
│   ├── events/
│   │   ├── EventTimeline.tsx     # Vertical timeline with node milestones
│   │   └── EventCard.tsx         # Event details card (Case Consilium, HSBC, Case Crackdown, etc.)
│   ├── partner/
│   │   └── PartnerForm.tsx       # Formspree-connected inquiry form with interactive inputs
│   └── ui/
│       ├── Button3D.tsx          # 3D Tactile Dark Button with Hover Glow Shift & Active depression
│       ├── GlassCard.tsx         # Glassmorphism container with gold border highlights
│       └── SectionHeading.tsx    # Standardized masked reveal headings with gold subtitle
│
├── lib/
│   ├── utils.ts                  # cn() class utility
│   ├── constants.ts              # Club metadata, navigation links, contact info, social URLs
│   └── types.ts                  # TypeScript interfaces for services, team, clients, events
│
└── data/
    ├── services.ts               # Structured data for 8 consulting service verticals
    ├── team.ts                   # 5 coordinators metadata (Aryan, Samyak, Gaurav, Yashveer, Vaibhav)
    ├── clients.ts                # Year-wise clients (2020–2026) data entries
    ├── events.ts                 # 5 flagship events data
    └── resources.ts              # Case books & primers catalog
```

---

## 5. Page-by-Page Technical & Content Specifications

### 5.1 Home Page (`/`)
1. **Hero Section**:
   - Background: `sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg` with semi-transparent charcoal overlay (`rgba(20,20,20,0.7)`) and `15px backdrop-blur`.
   - Headline: Masked slide-up typography with `#BF8440` gold highlights.
   - Interactive 3D Book (`Book3D.tsx`):
     - Resting state: `rotateX(15deg) rotateY(35deg)` with 70px 3D depth and layered drop shadows.
     - Hover state: 15% scale pop, `translateZ(40px)`, shadow expansion.
     - Click state: Smooth 1.2s `cubic-bezier(0.645, 0.045, 0.355, 1)` transition, flattens to 0deg, shifts 180px right to center the two-page spread, swings front cover open (`rotateY(-180deg)`), reveals off-white paper pages with Playfair Display drop caps.
   - CTA: 3D Tactile Dark Button (`Button3D.tsx`) with hover gold glow and active depression.
2. **Case Consilium Banner**:
   - Highlighting ₹5 Lakhs cash pool, ₹30 Lakhs+ prize pool, corporate mentorship and internships.
3. **Who We Are**:
   - Two-column split layout: Left side introduction copy; Right side legacy statistics grid (40+ Team Members, 90+ Projects Completed, 60+ Happy Clients, 400K+ Impressions).
   - Below: 3 Major Awards showcase (5x EY Cafta Winners, Muthoot Finclusion Challenge Product Track Winner, American Express Campus Challenge National Winner).
4. **Consulting Services (8 Verticals)**:
   - 2-row grid featuring:
     1. Business Strategy & Market Analysis
     2. Marketing & Growth Strategy
     3. Operational Efficiency & Process Improvement
     4. Primary Research & Data Analytics
     5. AI Consulting & Intelligent Automation
     6. Product Strategy & UI/UX
     7. Digital Marketing & SEO
     8. Web Development & Digital Solutions
5. **Clients Scrolling Logo Strip**:
   - Infinite continuous marquee scrolling left-to-right at gentle speed with pause on hover and left/right manual step buttons.
   - Logos linked to `public/images/clients/1.png` through `29.png`.
6. **Social Feed Integration**:
   - Tagembed / Elfsight embedded social feed script container for BGCC LinkedIn and Instagram with high-fidelity styled dark card fallbacks.
7. **Coordinators Team Grid (1-2-2 Formation)**:
   - Row 1: Aryan Gupta (President)
   - Row 2: Samyak Patel (Consulting Director), Gaurav Pawar M (Marketing & Operations Director)
   - Row 3: Yashveer Sabharwal (Partnerships Director), Vaibhav Singhi (Product & Analytics Director)
   - Includes real photo assets from Desktop design assets directory and LinkedIn profile links.

### 5.2 Clients Page (`/clients`)
- Year-by-year chronological sections spanning **2020 through 2026**.
- Interactive 3D flip cards: Front displays client badge/logo and industry sector; back reveals consulting engagement scope and deliverables on hover.

### 5.3 Resources Hub (`/resources`)
- Two core categories: **Case Books** and **Primers**.
- Clean list and modal preview interfaces with download/view links and placeholder states.

### 5.4 Events Timeline (`/events`)
- Vertical interactive timeline featuring 5 milestone events:
  1. Case Consilium (Flagship Case Competition)
  2. HSBC India Business Case Programme 2024/25
  3. Case Crackdown
  4. Marketing Mayhem
  5. Fix the Product

### 5.5 Partner With Us (`/partner`) & Global Contact Footer
- Dedicated corporate inquiry form submitting to `partnerships@bgccbitsgoa.com` via Formspree.
- Global footer on every page containing:
  - Address: BITS Goa, NH 17B, Bypass Road, Zuarinagar, Sancoale, Goa 403726
  - Phone numbers: `+91 93405 97932` · `+91 74978 80227`
  - Email: `partnerships@bgccbitsgoa.com`
  - Social Links: LinkedIn & Instagram
  - Google Maps iframe embed
  - Mailchimp newsletter subscription input

---

## 6. Form Handling & Backend Strategy

- **Zero-Backend Architecture**: Adheres strictly to the specification (no custom SQL database or server maintenance required).
- **Form Submission**:
  - Direct asynchronous POST request to Formspree endpoint (`https://formspree.io/f/{FORM_ID}` or fallback configured in `NEXT_PUBLIC_FORMSPREE_ID`).
  - Graceful fallback: If Formspree ID is unconfigured, client transitions to simulated submission mode with mock delay (800ms) and success feedback state to prevent breaking test flows.
  - Validation: Controlled React state or React Hook Form with validation for required fields, email formatting, and minimum message length.

---

## 7. Asset Catalog & Inventory

Located at `C:\Users\ragha\OneDrive\Desktop\bgcc design assets\`:
- **Architectural Background**: `sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg` (2.64 MB)
- **Coordinator Photos**:
  - `Aryan Gupta .png` (4.24 MB)
  - `Samyak Patel.png` (4.70 MB)
  - `Gaurav Pawar.png` (3.92 MB)
  - `Yashveer Sabharwal.png` (4.17 MB)
  - `Vaibhav singhii.png` (4.74 MB)
- **Client Logos**: `1.png` through `29.png`
- **Fonts**: `sprat-main` (`Sprat-Bold`, `Sprat-Medium`, `SpratVF`, etc.) and `Author_Complete` font families.

---

## 8. Build, Lint & Verification Commands

| Action | Executable Command | Status / Expected Output |
|---|---|---|
| **Production Build** | `cmd.exe /c "npm run build"` | Compiles with Turbopack, generates static routes, exits code 0 |
| **TypeScript Validation** | `cmd.exe /c "npx tsc --noEmit"` | Strict type check pass, exits code 0 |
| **Linting** | `cmd.exe /c "npm run lint"` | Validates Next.js ESLint rules |
| **Dev Server** | `cmd.exe /c "npm run dev"` | Runs local dev server on `http://localhost:3000` |
