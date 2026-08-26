# Project: BITS Goa Consulting Club (BGCC) Website

## Architecture
- **Framework**: Next.js 16 (App Router) with React 19 and TypeScript 5
- **Styling**: Tailwind CSS v4 with custom Design System tokens (`--color-bgcc-bg: #141414`, `--color-bgcc-gold: #BF8440`, `--color-bgcc-accent: #E76814`, `--color-bgcc-dark: #080808`, `#fdfbf7`, glass-neumorphic containers, tactile 3D buttons, masked slide-up reveals)
- **Data & Content Architecture**: Static TypeScript data modules (`src/data/`) with complete structured data for Leadership (1-2-2), Services (8 categories), Clients (2020–2026 year-wise), Events (5 flagship events), and Resources (Case Book & Primers).
- **Form Handling**: Formspree integration for partnership inquiries targeting `partnerships@bgccbitsgoa.com` with client-side Zod/custom validation and fallback messaging.
- **External Embeds**: Google Maps iframe embed, Mailchimp newsletter subscription embed, Tagembed social feed (LinkedIn & Instagram) with offline fallback cards.
- **Hosting & Build**: Zero-database static/SSR build with Turbopack (`npm run build`, `npx tsc --noEmit`).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Asset Pipeline & Font Integration | Ingestion of 29 client logos, 5 coordinator photos, architectural hero image, and Sprat/Author/Lato typography into `/public` | M1 | Design.md / Assets |
| 2 | Design Tokens & Global CSS | Tailwind v4 tokens, Glass-Neumorphism CSS utilities (`.glass-pane`, `.neu-dark`, `.neu-dark-inset`), masked text reveal animation | M1 | Design.md |
| 3 | 3D Tactile Button (`Button3D`) | Gold border glow on hover, physical 4px active depress, accessible focus ring | M1 | Design.md |
| 4 | Fixed Glass Navbar | Apple-proportioned fixed navbar with 5 links (`/`, `/clients`, `/resources`, `/events`, `/partner-with-us`), pill CTA, mobile drawer | M1 | PRD / Design.md |
| 5 | Global Contact Footer | 4-column layout with BITS Goa address, phone, email, Google Maps embed, Mailchimp subscribe, social links | M1 | PRD / Design.md |
| 6 | Interactive 3D Book Hero | Isometric closed stance (`rotateX: 15deg`, `rotateY: 35deg`), hover pop, 1.2s smooth open animation revealing two-page spread with 3.2rem drop cap | M2 | Design.md / PRD |
| 7 | Case Consilium Banner | Announcement banner highlighting ₹5 Lakhs cash prize pool and ₹30 Lakhs+ total prize pool with direct CTA | M2 | PRD |
| 8 | Who We Are & Legacy Section | Verbatim mission copy, 4 metrics (40+ Team Members, 90+ Projects, 60+ Happy Clients, 400K+ Impressions), 3 National Competition awards | M2 | PRD |
| 9 | 8 Consulting Services Grid | 2x4 grid covering Market Entry, Product Strategy, Process Automation, Financial Modeling, Marketing Strategy, Operations, GTM Strategy, M&A Advisory | M2 | PRD |
| 10 | Infinite Client Logo Marquee | Seamless scrolling strip displaying 29 client logos with manual left/right navigation arrows and hover pause | M2 | PRD / Design.md |
| 11 | Live Social Feed Widget | LinkedIn & Instagram feed integration via Tagembed/embed with robust offline fallback cards | M2 | PRD / ORIGINAL_REQUEST |
| 12 | 1-2-2 Leadership Directorate | Hierarchy grid (President at top, 2 VP/Directors middle, 2 VP/Directors bottom) with photos, titles, and LinkedIn profiles | M2 | PRD / Design.md |
| 13 | Clients Page (`/clients`) | Year-wise chronological layout (2020 through 2026) with 3D hover-flip cards (Front: Logo/Name, Back: Strategic Scope/Impact) | M3 | PRD / Design.md |
| 14 | Resources Hub (`/resources`) | Two discrete pillars (Case Book & Primers), category filters, structured cards with PDF/Markdown metadata and polished empty states | M3 | PRD |
| 15 | Events Timeline (`/events`) | Interactive vertical yellow timeline connecting 5 flagship events in exact sequence (Case Consilium, HSBC India, Case Crackdown, Marketing Mayhem, Fix the Product) | M3 | PRD |
| 16 | Partner With Us Page (`/partner-with-us`) | Formspree inquiry form submitting to `partnerships@bgccbitsgoa.com` with client-side validation, direct contact details, and Google Maps | M3 | PRD |
| 17 | E2E Testing Infrastructure | 4-tier opaque-box test suite (Feature Coverage, Boundary & Corner, Cross-Feature, Real-World Scenarios) and test runner | M4 | Dual-Track Testing |
| 18 | Adversarial Coverage Hardening | White-box challenger audit, edge cases, responsive checks, a11y verification, and final gate pass | M5 | Final Milestone |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Design System & Shared UI | Assets, typography, Tailwind v4 tokens, `Button3D`, Navbar, Footer, shared containers | none | DONE |
| M2 | Homepage & Interactive 3D Hero | 3D Book Hero, Case Consilium banner, Who We Are, 8 Services, 29-logo Marquee, Social Feed, 1-2-2 Directorate | M1 | DONE |
| M3 | Subpages (Clients, Resources, Events, Partner) | `/clients` (2020-2026 flip cards), `/resources` (Case Book/Primers), `/events` (5-stage timeline), `/partner-with-us` (Formspree) | M1 | DONE |
| M4 | E2E Testing Track | Independent 4-tier requirement-driven E2E test suite publishing `TEST_READY.md` | none (runs in parallel) | DONE |
| M5 | 100% E2E Test Pass & Adversarial Hardening | Pass 100% Tiers 1-4 E2E tests, Tier 5 adversarial edge-case stress testing, production build verification | M2, M3, M4 | DONE |

## Interface Contracts
### `src/types/index.ts`
- `Coordinator`: `{ id: string; name: string; role: string; photo: string; linkedin: string; row: 'top' | 'middle' | 'bottom'; }`
- `ServiceCategory`: `{ id: string; title: string; description: string; icon: string; deliverables: string[]; }`
- `ClientProject`: `{ id: string; name: string; year: number; logo: string; industry: string; brief: string; impact: string; }`
- `EventItem`: `{ id: string; title: string; date: string; description: string; prizePool?: string; partners?: string[]; order: number; }`
- `ResourceItem`: `{ id: string; type: 'case-book' | 'primer'; title: string; category: string; description: string; downloadUrl?: string; publishDate: string; }`
- `PartnerInquiry`: `{ fullName: string; organization: string; email: string; phone: string; serviceInterest: string; message: string; }`

### Component Contracts
- `Navbar`: Fixed layout, backdrop blur, active route indicators, mobile drawer state toggle
- `Footer`: 4 columns, contact numbers, email, campus address, Google Maps iframe embed, Mailchimp subscribe form
- `Button3D`: Props `{ variant?: 'primary' | 'secondary' | 'accent'; href?: string; onClick?: () => void; children: ReactNode; className?: string; }`
- `Book3DHero`: Props `{ isOpen?: boolean; onToggle?: () => void; }` with CSS 3D transform matrices and spread content
- `ClientFlipCard`: Props `{ client: ClientProject; isFlipped?: boolean; onFlip?: () => void; }` with 3D Y-axis rotation

## Code Layout
```
C:\Users\ragha\.gemini\antigravity\scratch\bgcc\
├── public/
│   ├── assets/
│   │   ├── logos/           # 29 client logos (1.png to 29.png)
│   │   ├── team/            # 5 coordinator portraits
│   │   └── hero-bg.jpg      # Architectural hero background
│   └── fonts/               # Custom fonts (Sprat, Author)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Global root layout (Navbar, Footer, Providers, Metadata)
│   │   ├── page.tsx         # Homepage (Hero, Who We Are, Services, Marquee, Social Feed, Directorate)
│   │   ├── globals.css      # Design tokens, typography, glassmorphism, animations
│   │   ├── clients/
│   │   │   └── page.tsx     # Clients page (2020-2026 year-wise flip cards)
│   │   ├── resources/
│   │   │   └── page.tsx     # Resources page (Case Book & Primers tabs)
│   │   ├── events/
│   │   │   └── page.tsx     # Events page (5 flagship events timeline)
│   │   ├── partner-with-us/
│   │   │   └── page.tsx     # Partner With Us page (Formspree form, Contact Info, Map)
│   │   └── partner/
│   │       └── page.tsx     # Route alias / redirect to /partner-with-us
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button3D.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── GlassCard.tsx
│   │   ├── home/
│   │   │   ├── Book3DHero.tsx
│   │   │   ├── CaseConsiliumBanner.tsx
│   │   │   ├── WhoWeAre.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ClientMarquee.tsx
│   │   │   ├── SocialFeed.tsx
│   │   └── LeadershipPyramid.tsx
│   ├── clients/
│   │   └── ClientFlipCard.tsx
│   ├── events/
│   │   └── EventsTimeline.tsx
│   ├── resources/
│   │   └── ResourceCards.tsx
│   └── partner/
│       └── PartnerForm.tsx
├── src/data/
│   ├── team.ts              # 5 coordinators data
│   ├── services.ts          # 8 consulting service categories
│   ├── clients.ts           # 29 client projects (2020-2026)
│   ├── events.ts            # 5 flagship events in sequence
│   └── resources.ts         # Case Book & Primer data
└── tests/
    ├── e2e/                 # E2E test suites (Tiers 1-4)
    ├── tier5-adversarial.test.js # Tier 5 white-box stress suite
    └── e2e-runner.js        # Automated E2E verification runner
```
