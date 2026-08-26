# BITS Goa Consulting Club (BGCC) — Comprehensive Functional Specification & System Architecture Report

**Document Version:** 1.0.0  
**Author:** survey_spec_miner_1  
**Project:** BITS Goa Consulting Club (BGCC) Official 5-Page Website  
**Framework:** Next.js (App Router), Tailwind CSS v4, TypeScript  
**Integrity Mode:** Benchmark Compliance  

---

## Executive Summary

The BITS Goa Consulting Club (BGCC) website is a high-impact, 5-page marketing and client-acquisition platform designed to serve two primary audiences:
1. **Corporate Clients & Industry Partners:** Executive decision-makers seeking strategic consulting, data analytics, market research, AI automation, and product consulting.
2. **Students & Aspiring Consultants:** BITS Pilani students and nationwide collegiate talent accessing recruitment info, case books, primers, and national competitions.

The website synthesizes:
- **Aesthetic Direction:** Dark-mode Glass-Neumorphism (`#141414` deep charcoal background, `#0A0A0A` black surfaces, `#F4F2ED` ivory contrast, `#BF8440` / `#F5D34F` gold/yellow accents).
- **Structural Blueprint:** Inspired by 180 Degrees Consulting SRCC (Services grid, flip-card client showcases, partner enquiry flow) and IIM Ahmedabad Consult Club (interactive vertical events timeline).
- **Tactile Interactivity:** 3D Interactive Book Hero, 3D tactile buttons with color-shifting hover glow, 3D flip cards, continuous client logo marquee, and live social integration.

---

## 1. Global Navigation & Site Structure

### 1.1 Top Navigation Bar (Header)
- **Position & Sizing:** Fixed/sticky top navbar, height `44px–48px`, max-width `1200px` centered container, backdrop blur (`rgba(20, 20, 20, 0.7)` with `15px backdrop-filter`).
- **Brand Mark (Left):** Official BGCC Logo asset (`70px–90px` width) with distinct yellow vertical accent line preserved. Links to `/`.
- **Navigation Links (Right):** Exactly 5 primary destinations (Author font, 12–13px, medium weight, `#F4F2ED` ivory):
  1. `Home` (`/`)
  2. `Clients` (`/clients`)
  3. `Resources` (`/resources`)
  4. `Events` (`/events`)
  5. `Partner with us` (`/partner-with-us`) — Styled as a prominent, compact pill CTA (`#F5D34F` or `#BF8440` background, `#0A0A0A` text, hover scale).
- **Mobile Navigation (`<768px`):**
  - Compact header with BGCC Logo and a dedicated `MENU` toggle button.
  - Opens a full-screen dark overlay menu (`#0A0A0A`) with large editorial links (Sprat font, tracked uppercase), active indicators, and quick contact details.

### 1.2 Global Contact Footer (Present on Every Page)
- **Background & Styling:** `#0A0A0A` deep black with `#292929` subtle top border and generous vertical padding (100px+).
- **Editorial Callout:** *"Let's solve something meaningful."* (Sprat font, large editorial heading).
- **Information Grid (4 Columns):**
  - **Column 1 — Find Us:**  
    *Address:* BITS Goa, NH 17B, Bypass Road, Zuarinagar, Sancoale, Goa 403726  
    *Map:* Integrated Google Maps embed iframe.
  - **Column 2 — Phone Direct:**  
    `+91 93405 97932`  
    `+91 74978 80227`
  - **Column 3 — Electronic Mail:**  
    `partnerships@bgccbitsgoa.com`
  - **Column 4 — Connect & Social:**  
    - LinkedIn: `https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all`  
    - Instagram: `https://www.instagram.com/bgcc.bitsgoa/`
- **Newsletter / Stay in Touch:** Embedded Mailchimp signup field for community updates.
- **Copyright & System Info:** `© 2026 BITS Goa Consulting Club. All rights reserved.`

---

## 2. Comprehensive Page-by-Page Specifications

```
SITE ARCHITECTURE MAP:
/ (Home)
├── 1. Interactive 3D Book Hero & Case Consilium Banner
├── 2. Who We Are (Intro, 4 Key Stats, 3 Awards)
├── 3. Consulting Services (8-Category Grid)
├── 4. Client Logos Strip (Continuous Marquee + Manual Arrows)
├── 5. Live Social Feed (Tagembed / LinkedIn & Instagram)
└── 6. Leadership Grid (1-2-2 Formation)

/clients (Clients)
├── Year-by-Year Sections: 2020 through 2026
└── Interactive 3D Flip Cards (Front: Logo/Name | Back: Project Brief)

/resources (Resources)
├── 1. Case Book Hub (Collection & Frameworks)
└── 2. Consulting Primers Hub (Sector Guides & Decks)

/events (Events)
└── Interactive Vertical Timeline (5 Flagship Events in Order)

/partner-with-us (Partner With Us)
├── 1. Value Proposition & Direct Contact Details
└── 2. Formspree-Powered Strategic Enquiry Form
```

---

### Page 1: Home (`/`)

#### Section 1: Hero & Interactive 3D Book
- **Canvas:** Dark Mode Glass-Neumorphism on high-contrast architectural photography (`sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg`), glass pane `rgba(20, 20, 20, 0.7)` with `15px` blur.
- **Interactive 3D Book:**
  - **Closed State:** Isometric 3D orientation (`rotateX: 15deg`, `rotateY: 35deg`), `#141414` cover, gold border & central icon extruded by `15px–30px` via layered drop-shadows, `#EDE8D8` ivory page edges with micro-line texture, spine with vertical "ABOUT US" text.
  - **Hover State:** Scales up by 15%, translates `+40px` along Z-axis, flattens angle slightly, deepens drop shadow.
  - **Click/Open State:** 1.2s smooth cubic-bezier (`cubic-bezier(0.645, 0.045, 0.355, 1)`) transition. Front cover swings open (`rotateY: -180deg`), entire book shifts right `180px` to center the two-page spread.
  - **Internal Spread Content:**
    - *Page 1 (Left):* Chapter I — "About Us" with 3.2rem gold drop cap, editorial summary of BGCC's inception and student-led problem-solving culture.
    - *Page 2 (Right):* Chapter II — "What We Do" with 3.2rem gold drop cap, overview of consulting capabilities and impact across 90+ projects.
- **3D Tactile Buttons:**
  - Pill-shaped (`100px` radius), `#080808` base, inset top highlights.
  - Hover: Inset glow shifts from white to warm gold (`#BF8440`).
  - Active (`:active`): Depresses `translateY(4px)`.
- **Case Consilium Campaign Banner:**
  - Full-width editorial asset insertion:
    - ₹5 Lakhs Cash Pool
    - ₹30 Lakhs+ Prize Pool
    - Certificates, Mentorship, Internships, Partner Coupons
    - Sponsor logo strip.

#### Section 2: Who We Are (`01 / WHO WE ARE`)
- **Headline:** "We are BGCC." (Sprat font)
- **Introduction Copy (Verbatim):**
  > "BITS Goa Consulting Club (BGCC) is the premier student-led consulting organization at BITS Pilani, Goa Campus. A team of 40+ driven individuals who excel in strategic problem-solving, market research, and business innovation."
- **Legacy Metrics (2x2 or 4x1 grid, Sprat large digits, Author labels):**
  - `40+` Team Members
  - `90+` Projects Completed
  - `60+` Happy Clients
  - `400K+` Impressions on Social Media
- **National Accolades & Awards:**
  - **5× Consecutive EY Cafta Winners** — 2024
  - **Product Track Winner** — Muthoot Finclusion Challenge (2025)
  - **National Winner** — American Express Campus Challenge (2025)

#### Section 3: Consulting Capabilities (`02 / WHAT WE DO`)
- **Headline:** "Our capabilities." (2 rows × 4 columns grid on desktop, responsive stack on mobile).
- **8 Core Categories & Scope:**
  1. **Business Strategy & Market Analysis:** Industry & competitive landscape analysis, market research & trend forecasting, business model evaluation, go-to-market strategy, feasibility studies.
  2. **Marketing & Growth Strategy:** Product-market fit, target audience segmentation, brand positioning & messaging, pricing & revenue modelling, digital marketing & social strategy.
  3. **Operational Efficiency & Process Improvement:** Workflow mapping & optimisation, process automation, supply chain & logistics analysis, cost reduction & efficiency plans.
  4. **Primary Research & Data Analytics:** Surveys, interviews, focus groups, qualitative & quantitative research, consumer behaviour analysis, product/service testing, data insights & reports.
  5. **AI Consulting & Intelligent Automation:** AI readiness assessment, AI agent & chatbot development, workflow automation, intelligent document/knowledge systems, AI adoption roadmaps.
  6. **Product Strategy & UI/UX:** PRDs, user research & journey mapping, UI/UX audits & wireframing, MVP/feature prioritisation, product KPI frameworks.
  7. **Digital Marketing & SEO:** SEO strategy, Google Ads & performance marketing, social media growth, conversion funnel optimisation, marketing analytics & ROI reporting.
  8. **Web Development & Digital Solutions:** Business/corporate website development, landing pages & web apps, CMS & dashboard development, API/third-party integrations, website maintenance.

#### Section 4: Client Logo Showcase (`03 / OUR CLIENTS`)
- **Format:** Infinite horizontal marquee scrolling slowly from right to left, with left and right chevron buttons for manual dragging/stepping.
- **Assets:** 29 curated client logos (`1.png` through `29.png` in `/public/images/clients/`) presented with refined monochrome/grayscale styling.

#### Section 5: Social Media Feed
- **Platform:** Tagembed widget script (free plan supports dual LinkedIn + Instagram feed).
- **Target Handles:**
  - LinkedIn: `https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all`
  - Instagram: `https://www.instagram.com/bgcc.bitsgoa/`
- **Fallback State:** High-fidelity static cards with recent post snippets and direct profile links if client-side script is blocked.

#### Section 6: Leadership Directorate (`04 / LEADERSHIP`)
- **Headline:** "The people behind BGCC."
- **Formation (Desktop 1-2-2 / Mobile Stacked):**
  - **Tier 1 (President):**  
    - *Aryan Gupta* — President  
    - Photo: `Aryan Gupta .png` | LinkedIn: `https://linkedin.com/in/aryan-gupta-262590319`
  - **Tier 2 (2 Directors):**  
    - *Samyak Patel* — Consulting Director  
      Photo: `Samyak Patel.png` | LinkedIn: `https://linkedin.com/in/samyak-patel-0aa282317`  
    - *Gaurav Pawar M* — Marketing & Operations Director  
      Photo: `Gaurav Pawar.png` | LinkedIn: `https://linkedin.com/in/gaurav-pawar-m-703872289`
  - **Tier 3 (2 Directors):**  
    - *Yashveer Sabharwal* — Partnerships Director  
      Photo: `Yashveer Sabharwal.png` | LinkedIn: `https://linkedin.com/in/yashveer-sabharwal-034846250`  
    - *Vaibhav Singhi* — Product & Analytics Director  
      Photo: `Vaibhav singhii.png` | LinkedIn: `https://linkedin.com/in/vaibhavsinghi`

---

### Page 2: Clients Showcase (`/clients`)
- **Page Title:** "Our work."
- **Subtitle:** "Over 90+ engagements delivered across high-growth startups, conglomerates, and venture-backed enterprises."
- **Year-wise Breakdown (2020 to 2026):**
  - Chronological section bands: `2026`, `2025`, `2024`, `2023`, `2022`, `2021`, `2020`.
  - Every year section renders visibly.
- **Card Specification — 3D Flip Card:**
  - **Front Face:** Light ivory `#F4F2ED` background, client logo/monogram, client title, industry category tag.
  - **Back Face:** Deep charcoal `#141414` background, project title, strategic description (problem statement, methodology, delivered impact), service pill tags, gold accent bar.
  - **Interaction:** Smooth 3D flip (`transform: rotateY(180deg)`) on hover (desktop) or tap (mobile).

---

### Page 3: Resources Hub (`/resources`)
- **Page Title:** "Knowledge & Resources."
- **Two Primary Pillars:**
  1. **Case Book Pillar:**
     - Title: "Case Book"
     - Description: "Comprehensive frameworks, market sizing models, and real interview case transcripts developed by BGCC consultants."
     - Action: Opens structured Case Book repository.
  2. **Primers Pillar:**
     - Title: "Consulting Primers"
     - Description: "Deep-dive industry primers covering FinTech, Healthcare, Quick Commerce, SaaS, and Cross-Border Supply Chains."
     - Action: Opens structured Primers list.
- **Content Backing:** Structured Markdown files in `/content/resources/` with downloadable asset metadata.
- **Empty State Design:** High-polish "Publication in Progress — 2026 Edition Releasing Soon" notification cards with email notification trigger.

---

### Page 4: Events Timeline (`/events`)
- **Page Title:** "Where ideas come to life." (`05 / EVENTS`)
- **Layout:** Centered vertical timeline with `#F5D34F` yellow spine, luminous node markers, alternating left/right cards on desktop, left-anchored on mobile.
- **Exact Events Sequence:**
  1. **Case Consilium:** Flagship national case competition with ₹5 Lakhs cash pool and ₹30 Lakhs+ total prizes.
  2. **HSBC India Business Case Programme 2024/25:** Prestigious corporate partnership solving multi-market financial strategy cases.
  3. **Case Crackdown:** Rapid-fire 48-hour live business problem-solving sprint.
  4. **Marketing Mayhem:** Brand positioning, viral marketing, and GTM strategy simulation.
  5. **Fix the Product:** Product management teardown, UI/UX audit, and user retention challenge.

---

### Page 5: Partner With Us (`/partner-with-us`)
- **Page Title:** "Let's work together."
- **Subtitle:** "Engage BGCC for high-caliber strategic problem-solving or sponsor our national initiatives."
- **Two-Column Split Layout:**
  - **Left Column:** Value proposition summary (40+ consultants, 90+ engagements, faculty advisory at BITS Pilani), direct phone lines, physical campus address, Google Maps interactive embed.
  - **Right Column (Interactive Enquiry Form):**
    - **Endpoint:** Formspree (`https://formspree.io/f/...` routing to `partnerships@bgccbitsgoa.com`).
    - **Fields & Validations:**
      1. `name` (Full Name) — Text, required, min 2 characters.
      2. `email` (Work Email) — Email, required, valid RFC email format.
      3. `organization` (Company / Organization) — Text, required.
      4. `phone` (Contact Number) — Tel, optional, 10-digit / international format.
      5. `service` (Area of Interest) — Dropdown selection matching 8 service capabilities.
      6. `message` (Project Scope & Objectives) — Textarea, required, min 20 characters.
    - **Form States:**
      - *Default:* Clean inputs with gold focus indicators.
      - *Submitting:* Loading indicator ("Transmitting Brief...").
      - *Success:* Green/Gold confirmation banner with follow-up SLA (< 24 hours).
      - *Error:* Direct fallback email mailto link.

---

## 3. Data Structures & TypeScript Interfaces

```typescript
// Core Data Models for BGCC Website

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  tier: 1 | 2 | 3; // 1 = President, 2 = Senior Directors, 3 = Directors
  photoUrl: string;
  linkedinUrl: string;
  bio?: string;
}

export interface ServiceCategory {
  id: string;
  categoryName: string;
  tagline: string;
  bulletPoints: string[];
  iconName?: string;
}

export interface ClientProject {
  id: string;
  year: number; // 2020 to 2026
  clientName: string;
  logoUrl: string;
  domain: string;
  description: string;
  deliverables?: string[];
  flipsOnHover: boolean;
}

export interface EventItem {
  id: string;
  name: string;
  order: number; // 1 to 5
  subtitle?: string;
  category: "National Competition" | "Corporate Partnership" | "Hackathon" | "Product Sprint";
  seasonOrDate: string;
  prizePool?: string;
  description: string;
  status: "Upcoming" | "Active" | "Completed" | "Annual";
  bannerUrl?: string;
}

export interface ResourceItem {
  id: string;
  type: "case-book" | "primer";
  title: string;
  edition: string;
  releaseDate: string;
  description: string;
  topics: string[];
  fileSize?: string;
  downloadUrl?: string;
  isPlaceholder: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  organization: string;
  phone?: string;
  serviceInterest: string;
  message: string;
}
```

---

## 4. Features Discovered Table

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Navigation | Sticky Apple-Inspired Navbar | Global navbar with logo, 5 page links, and prominent pill CTA button | Scroll position, viewport width | Fixed bar, active route highlight | Fallback to solid background if blur unsupported | PRD & Design Spec |
| 2 | Navigation | Fullscreen Mobile Menu | Overlay drawer menu with Sprat editorial typography and active indicator | Hamburger click / tap | Animated fullscreen overlay | Auto-closes on route change | PRD & Design Spec |
| 3 | Hero | 3D Interactive Book | Centerpiece skeuomorphic book that opens on click to reveal About Us & Services | Click / Tap / Hover | 3D rotation, page flip, centered spread | Graceful 2D flat card on reduced-motion | Design.md |
| 4 | Hero | 3D Tactile Buttons | Pill button with inset depth, hover gold color shift, and click depression | Mouse hover / click | `#BF8440` glow shift, `translateY(4px)` | Standard button styling fallback | Design.md |
| 5 | Banner | Case Consilium Graphic | High-impact campaign visual for flagship national case competition | Asset image load | Scaled banner with cash pool & prize details | Styled placeholder box if image missing | PRD & Design Spec |
| 6 | About | Who We Are & Metrics | Club introduction copy, 4 key stats (40+, 90+, 60+, 400K+), and 3 awards | Static / MD content | 2-column editorial layout with Sprat numbers | N/A | PRD & Design.md |
| 7 | Services | 8-Category Capabilities Grid | 2x4 grid of strategic consulting domains with hover highlight and yellow motif | User hover | Expanded yellow line, dark card contrast | Responsive single-column stack on mobile | PRD (2).md |
| 8 | Clients | Continuous Marquee Carousel | Seamlessly looping horizontal strip of 29 client logos with manual arrow controls | Auto-timer, manual arrow clicks | Continuous slow translation, pause on hover | Accessible static grid on reduced motion | PRD & Design.md |
| 9 | Social | Dual Social Feed Widget | Aggregates live posts from BGCC LinkedIn and Instagram accounts | Tagembed embed script | Live rendered cards | Graceful fallback cards with direct URLs | PRD & tech-stack.md |
| 10 | Team | 1-2-2 Leadership Directorate | Hierarchical dark cards for President and 4 Directors with LinkedIn links | Coordinator data & photo assets | Centered pyramid grid on desktop, stack on mobile | Initial monogram if photo missing | PRD & Design.md |
| 11 | Clients | Year-Wise Sections (2020-2026) | Seven distinct chronological sections rendering all project cards | Filter by year | Year-labeled rows with project grid | Renders "Archive updating" for empty years | PRD (2).md |
| 12 | Clients | 3D Flip Project Cards | Card flips 180° on hover to reveal problem statement, method, and impact | Hover (desktop) / Tap (mobile) | Front: Logo & Name / Back: Brief & Scope | Tap toggle state for touchscreens | PRD & Design Spec |
| 13 | Resources | Case Book & Primers Hub | 2 large editorial tiles opening respective publication repositories | User click | Filtered repository list / download modal | Intentional empty state placeholder | PRD & Design Spec |
| 14 | Events | Interactive Vertical Timeline | Ordered chronological timeline of 5 flagship events with yellow spine and nodes | Scroll / hover | Alternating left/right cards with metadata | Linear left-aligned stack on mobile | PRD (2).md |
| 15 | Partner | Formspree Contact Form | Strategic partnership inquiry form with field validation and submission handling | User input (Name, Email, Org, Phone, Service, Scope) | Transmitted email to `partnerships@bgccbitsgoa.com` | Inline error banners, retry trigger | PRD & tech-stack.md |
| 16 | Global | Contact Footer & Map | Comprehensive footer with location, phones, email, social links, and Google Map | Page scroll to bottom | Multi-column dark footer with iframe map | External map link fallback | PRD & tech-stack.md |

---

## 5. Edge Cases & Handling Strategies

| # | Feature | Input / Condition | Observed / Required Behavior |
|---|---------|-------------------|-----------------------------|
| 1 | 3D Interactive Book | Touchscreen / Mobile device (<768px) | Book responds to single tap to open; spread is scaled to fit viewport without horizontal overflow. |
| 2 | 3D Interactive Book | User enables `prefers-reduced-motion` | Replaces complex 3D transforms with clean instant modal or flat tabs. |
| 3 | Client Flip Cards | Mobile touch interaction without hover | Tapping card toggles flipped state; second tap returns to front or opens details. |
| 4 | Client Logos | Missing or corrupted logo image file | Renders stylish dark/ivory monogram box with client name and yellow accent. |
| 5 | Clients Page | Years with 0 recorded projects (e.g. 2026 future) | Year section renders with intentional "Engagements in progress — Archive updating" notice. |
| 6 | Social Media Feed | Adblocker blocks Tagembed / Elfsight script | Fallback container renders with branded post snapshots and direct outbound links. |
| 7 | Partner Form | Network offline or Formspree error | Displays clear error banner with one-click `mailto:partnerships@bgccbitsgoa.com` button. |
| 8 | Partner Form | Invalid email format or empty required fields | Real-time input boundary highlights in red/yellow with descriptive validation messages. |
| 9 | Logo Carousel | Rapid arrow clicking | Smoothly scrolls by card width without glitching marquee animation loop. |
| 10 | Viewport Scaling | Ultrawide screens (>1920px) | Content container is strictly capped at `1200px` with centered auto-margins. |

---

## 6. User Stories & Acceptance Criteria

### US-1: Corporate Executive Partner Inquiry
- **User Story:** As a corporate executive or startup founder, I want to review BGCC's capabilities, past client work, and team credentials, and easily submit an inquiry so that we can engage BGCC for a consulting project.
- **Acceptance Criteria:**
  - Navigating to `/` displays the 8 consulting service categories and client showcase.
  - Navigating to `/clients` displays past client flip-cards categorized from 2020 to 2026.
  - Clicking "Partner with us" opens `/partner-with-us`.
  - Form validation ensures Name, Email, Organization, Service, and Message are filled.
  - Submitting form transmits payload to Formspree (`partnerships@bgccbitsgoa.com`) and displays a success confirmation.

### US-2: Prospective Member / Student Case Preparation
- **User Story:** As a BITS student or national case competitor, I want to view BGCC's flagship events, awards, and resource publications so that I can participate in competitions and prepare for consulting recruitment.
- **Acceptance Criteria:**
  - Case Consilium banner prominently showcases the ₹5 Lakhs cash / ₹30 Lakhs+ total prize pool.
  - Navigating to `/events` renders the 5 flagship events in exact required order along the yellow timeline.
  - Navigating to `/resources` provides access to Case Book and Primers hubs with polished empty states.

### US-3: Mobile Device Visitor Experience
- **User Story:** As a mobile visitor on a smartphone, I want a seamless, fast-loading responsive experience with accessible touch controls.
- **Acceptance Criteria:**
  - Header collapses to compact bar with working full-screen menu overlay.
  - 1-2-2 leadership formation reflows cleanly into a stacked vertical list.
  - Timeline reflows from alternating two-column to clean left-aligned single column.
  - Flip cards respond intuitively to touch taps.
