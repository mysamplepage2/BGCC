# BITS Goa Consulting Club (BGCC) — Comprehensive Design System & UI Specification

**Document Version:** 1.0.0  
**Status:** Complete Survey & Formal Specification  
**Target Platform:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion / CSS3 3D Transforms  
**Target Audience:** Corporate Executives & Prospective Corporate Clients (Primary), Students & Aspiring Consultants (Secondary)

---

## 1. Executive Summary & Design Philosophy

The digital presence for the **BITS Goa Consulting Club (BGCC)** establishes a prestigious, corporate-grade institutional front door. The aesthetic balances **Dark Mode Glass-Neumorphism** with high-end editorial typography, delivering a tactile, authoritative experience reminiscent of top-tier consulting firms (McKinsey, BCG, Bain) and premier student consulting organizations (180DC SRCC, IIMA Consult Club).

### Core Aesthetic Pillars
1. **Dark Mode Glass-Neumorphism:** Deep charcoal `#141414` foundation elevated by semi-transparent frosted glass overlays (`rgba(20, 20, 20, 0.7)` with `15px backdrop-filter`) and dual-shadow soft UI extrusions and indents.
2. **Warm Metallic Accents:** Rich Bronze/Gold (`#BF8440`) paired with vibrant accent orange (`#E76814`) to guide visual hierarchy, highlight statistics, and accent interactive controls.
3. **High-Contrast Editorial Typography:** Authoritative serif typefaces (`Sprat` / `Playfair Display`) for hero displays, headings, and metric callouts, harmonized with refined sans-serifs (`Lato` / `Author`) for high-legibility body prose and metadata.
4. **Tactile 3D Depth & Motion:** Physical depth cues through CSS 3D transforms (`transform-style: preserve-3d`), interactive skeuomorphic elements (Interactive 3D Book Hero, 3D Tactile Depressing Buttons), and cinematic masked slide-up reveals.

---

## 2. Design Tokens Specification

### 2.1 Color Palette

| Token Name | Hex Code | RGB / HSL | Usage Description | WCAG AA on #141414 |
|---|---|---|---|---|
| `--color-bgcc-bg` | `#141414` | `rgb(20, 20, 20)` | Primary global page background, dark canvas base | Baseline |
| `--color-bgcc-surface` | `#1a1a1a` | `rgb(26, 26, 26)` | Card surfaces, container backgrounds, dropdown panels | 1.07:1 (Background) |
| `--color-bgcc-dark-btn` | `#080808` | `rgb(8, 8, 8)` | Tactile 3D button resting background, deep recessed wells | N/A |
| `--color-bgcc-gold` | `#BF8440` | `rgb(191, 132, 64)` | Primary accent, section highlights, stats, button hover glow, active borders | 6.02:1 (Passes AA/AAA Large) |
| `--color-bgcc-dark-gold` | `#a67337` | `rgb(166, 115, 55)` | Muted gold, secondary highlights, borders, book accents | 4.62:1 (Passes AA) |
| `--color-bgcc-orange` | `#E76814` | `rgb(231, 104, 20)` | Secondary vibrant accent, interactive tags, alert accents | 5.23:1 (Passes AA) |
| `--color-bgcc-text` | `#e2e8f0` | `rgb(226, 232, 240)` | Primary body text on dark backgrounds, subtitles, navigation links | 13.91:1 (Passes AAA) |
| `--color-bgcc-muted` | `#94a3b8` | `rgb(148, 163, 184)` | Secondary body text, timestamps, captions, inactive icons | 7.35:1 (Passes AAA) |
| `--color-bgcc-subtle` | `#64748b` | `rgb(100, 116, 139)` | Form helper text, placeholder text, subtle borders | 3.84:1 (Passes UI components) |
| `--color-bgcc-paper` | `#fdfbf7` | `rgb(253, 251, 247)` | 3D book open spread page background, light modal sheets | Light Background |
| `--color-bgcc-ivory` | `#ede8d8` | `rgb(237, 232, 216)` | 3D book page edges, light card accents | Light Surface |
| `--color-bgcc-book-text`| `#333333` | `rgb(51, 51, 51)` | Body prose on 3D book open pages (`#fdfbf7`) | 12.82:1 (Passes AAA on paper) |
| `--color-bgcc-book-muted`| `#a8a296` | `rgb(168, 162, 150)`| Chapter headers and tracking metadata on book pages | 2.6:1 (Subtle metadata) |

---

### 2.2 Typography System

The typography pairs an authoritative high-contrast display serif with clean, humanistic sans-serifs.

#### Font Families
1. **Display / Headings Primary:** `Sprat` (Serif, variable / static weights: Thin, Light, Regular, Medium, Bold, Black, Condensed, Extended)
2. **Display / Book Accent:** `Playfair Display` (Serif, weights: 400, 600, 700, Italic)
3. **Body / Interface Primary:** `Lato` (Google Font sans-serif, weights: 300, 400, 700, 900)
4. **Editorial Sans Alternative:** `Author` (Variable / static weights: Extralight, Light, Regular, Medium, Semibold, Bold)
5. **System Fallbacks:** `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

#### Typographic Scale & Hierarchy

| Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Tracking / Transform |
|---|---|---|---|---|---|---|---|
| **Display Hero** | `Sprat` / `Playfair` | `3.75rem` (60px) | `2.5rem` (40px) | Bold (700) | `1.1` | `-0.02em` | Normal / Title Case |
| **H1 Section Title** | `Sprat` / `Playfair` | `2.75rem` (44px) | `2.0rem` (32px) | Bold (700) | `1.2` | `-0.015em`| Title Case |
| **H2 Subsection** | `Sprat` | `2.0rem` (32px) | `1.625rem` (26px)| Semibold (600)| `1.25` | `-0.01em` | Title Case |
| **H3 Card Header** | `Sprat` / `Lato` | `1.5rem` (24px) | `1.25rem` (20px) | Bold (700) | `1.35` | `0` | Normal |
| **H4 Micro Header** | `Lato` / `Author` | `1.125rem` (18px)| `1.0rem` (16px) | Semibold (600)| `1.4` | `0.02em` | Normal / Sentence Case |
| **Category Overline**| `Lato` / `Author` | `0.875rem` (14px)| `0.75rem` (12px) | Bold (700) | `1.5` | `0.15em` | Uppercase |
| **Lead Paragraph** | `Lato` | `1.25rem` (20px) | `1.125rem` (18px)| Regular (400) | `1.6` | `0` | Normal |
| **Body Standard** | `Lato` | `1.0rem` (16px) | `1.0rem` (16px) | Regular (400) | `1.65` | `0` | Normal |
| **Body Small / Meta**| `Lato` | `0.875rem` (14px)| `0.875rem` (14px)| Regular (400) | `1.5` | `0.01em` | Normal |
| **Caption / Legal** | `Lato` | `0.75rem` (12px) | `0.75rem` (12px) | Regular (400) | `1.4` | `0.02em` | Normal |
| **Book Drop Cap** | `Playfair Display` | `3.2rem` (51px) | `2.5rem` (40px) | Bold (700) | `0.9` | `0` | Uppercase, Gold (`#BF8440`) |
| **Book Chapter Tag** | `Lato` | `0.8125rem` (13px)| `0.75rem` (12px) | Medium (500) | `1.4` | `0.25em` | Uppercase, Muted (`#a8a296`) |

---

### 2.3 Elevation, Shadows & Glassmorphism Tokens

```css
/* Glassmorphic Canvas */
.glass-pane {
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Glassmorphic Card (Elevated) */
.glass-card {
  background: rgba(26, 26, 26, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(191, 132, 64, 0.15);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05);
}

/* Dark Neumorphism Extruded (Raised Surfaces, Cards, Badges) */
.neu-dark {
  background: #141414;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8), -5px -5px 15px rgba(255, 255, 255, 0.05);
}

/* Dark Neumorphism Inset (Form Inputs, Toggles, Depressed Wells) */
.neu-dark-inset {
  background: #141414;
  box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.8), inset -5px -5px 15px rgba(255, 255, 255, 0.05);
}

/* 3D Tactile Button Base */
.neu-btn-tactile {
  background: #080808;
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.9),
    0 2px 4px rgba(0, 0, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -2px 4px rgba(0, 0, 0, 0.8);
}

/* 3D Tactile Button Hover Gold Glow */
.neu-btn-tactile:hover {
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.9),
    0 0 20px rgba(191, 132, 64, 0.35),
    inset 0 0 12px rgba(191, 132, 64, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.25);
}

/* 3D Tactile Button Active Pressed */
.neu-btn-tactile:active {
  transform: translateY(4px);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.9),
    inset 0 2px 6px rgba(0, 0, 0, 0.9),
    inset 0 0 10px rgba(255, 255, 255, 0.2);
}

/* 3D Book Extruded Embellishment Shadows */
.book-extrusion-gold {
  filter: 
    drop-shadow(1px 1px 0px #a67337)
    drop-shadow(2px 2px 0px #805726)
    drop-shadow(3px 3px 0px #5c3c17)
    drop-shadow(8px 12px 16px rgba(0, 0, 0, 0.8));
}
```

---

### 2.4 Spacing & Grid System

- **Base Spacing Scale:** 4px / 8px incremental grid (`space-1` = 4px, `space-2` = 8px, `space-4` = 16px, `space-6` = 24px, `space-8` = 32px, `space-12` = 48px, `space-16` = 64px, `space-24` = 96px).
- **Container Max Width:**
  - Standard Section: `max-w-7xl` (`1280px`) with `px-4 sm:px-6 lg:px-8`
  - Compact Hero Canvas: `w-[95vw] max-w-[1400px] min-h-[85vh]`
  - Content / Prose Columns: `max-w-3xl` (`768px`)
- **Section Vertical Rhythm:**
  - Hero Section: `py-16 md:py-24 lg:py-32`
  - Standard Section: `py-16 md:py-20`
  - Compact Section (Banner / Marquee): `py-8 md:py-12`

### 2.5 Border Radii & Border Tokens

- **Pill / Button Full:** `rounded-full` (`9999px` / `100px`)
- **Large Container / Modal:** `rounded-2xl` (`16px`) / `rounded-3xl` (`24px`)
- **Standard Card:** `rounded-xl` (`12px`)
- **Small Component / Badge:** `rounded-md` (`6px`) / `rounded-lg` (`8px`)
- **Subtle Dark Border:** `border border-white/5`
- **Gold Accent Border:** `border border-[#BF8440]/30`
- **Active / Focused Border:** `border-2 border-[#BF8440]`

---

## 3. Component Specifications

### 3.1 Global Header & Navigation Bar
- **Position & Sizing:** Fixed top, `h-20` (80px), `z-50`, full width with `px-6 md:px-12`.
- **Background Styling:** Frosted dark glass `glass-pane` (`rgba(20, 20, 20, 0.7)`, `backdrop-filter: blur(15px)`), bottom hairline border `border-b border-white/5`.
- **Brand Identity:** Left-aligned BGCC logo mark + "BITS Goa Consulting Club" in `Sprat` bold / `Lato` semibold.
- **Navigation Links (5 core items confirmed):**
  1. `Home` (`/`)
  2. `Clients` (`/clients`)
  3. `Resources` (`/resources`)
  4. `Events` (`/events`)
  5. `Partner with us` (`/partner`) — Rendered as a distinct Pill-shaped Tactile Button with Gold hover glow.
- **Link States:**
  - Default: `#e2e8f0` (medium weight, tracking-wide).
  - Hover: `#BF8440` with subtle bottom underline animation.
  - Active Page: `#BF8440` with dot or bottom pill indicator.
- **Mobile Responsive Drawer:** Hamburger trigger on `<768px`, full-screen sliding dark glass sheet with staggered entrance animation for links.

---

### 3.2 3D Tactile Dark Button Component
- **Geometry:** Pill shape (`rounded-full`, min-h `48px`, px `28px`).
- **Resting State:**
  - Background: `#080808`.
  - Inset lighting: faint white top highlight (`inset 0 1px 2px rgba(255, 255, 255, 0.15)`).
  - Surface gradient: CSS pseudo-element `::before` creating a curved glossy reflection on the top 50% (`linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)`).
  - Text: `#e2e8f0`, soft fade-out mask on bottom 20%.
- **Hover State (`:hover`):**
  - Inset glow shifts dynamically from white to rich bronze/gold (`#BF8440`).
  - Outer drop shadow intensifies with amber ambient glow (`0 0 20px rgba(191, 132, 64, 0.35)`).
  - Content swap / icon animation: Arrow slides right by 4px or label swaps seamlessly.
- **Active State (`:active`):**
  - `transform: translateY(4px)`.
  - Shadows compress, inner flash of white highlight.

---

### 3.3 Hero Section & Interactive 3D Book
- **Hero Canvas:**
  - Background: High-contrast architectural photograph (`sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg`).
  - Glass Pane Overlay: Spanning 95% viewport width and height, centered with `rounded-3xl`, `glass-pane` filter.
- **Left Column — Typography & CTAs:**
  - Subtitle Tag: `overflow: hidden` with Masked Slide-Up Reveal: "PREMIER STUDENT-LED CONSULTING CLUB".
  - Main Title: `Sprat` high-contrast serif in `#BF8440` Gold and `#e2e8f0` White: "Empowering Strategy, Delivering Value."
  - Masked Slide-Up Reveal mechanics: `overflow: hidden`, `translateY(120%)` to `0`, `cubic-bezier(0.16, 1, 0.3, 1)`, duration `1.2s`, staggered delays.
  - Action Group: Primary 3D Tactile "Partner With Us" button + Secondary "Explore Projects" ghost link.
- **Right Column — Interactive 3D Book:**
  - **3D Engine:** CSS 3D Transforms with `perspective: 1200px` on wrapper, `transform-style: preserve-3d` on book container.
  - **Dimensions:** Width `260px`, Height `360px`, Depth `70px` (bridged using 6 solid rectangular faces).
  - **Closed Resting Stance:**
    - Angles: `rotateX(15deg) rotateY(35deg) rotateZ(0deg)`.
    - Cover: Deep charcoal `#141414` with diagonal specular lighting gradient.
    - Extruded Embellishments: Gold border and BGCC emblem popping off cover by `20px` via layered drop-shadows.
    - Spine: Raised horizontal ridges with vertical serif text "ABOUT US".
    - Pages Edge: Solid ivory `#ede8d8` inset 4px from cover, 1px horizontal striations.
  - **Hover Micro-Interaction:**
    - Scales up by 15% (`scale3d(1.15, 1.15, 1.15)`), translates `40px` forward on Z-axis (`translateZ(40px)`), tilts flatter (`rotateY(25deg)`). Shadow expands dynamically.
  - **Click / Open Transformation:**
    - Toggle `.open` on click.
    - Transition: `1.2s cubic-bezier(0.645, 0.045, 0.355, 1)`.
    - Whole container flattens (`rotateX(0deg) rotateY(0deg)`) and translates `180px` to the right to maintain perfect visual center.
    - Front cover rotates on left hinge (`rotateY(-180deg)`).
  - **Internal Open Spread (Two Pages):**
    - Material: `#fdfbf7` warm off-white paper with radial spotlight vignette and dark center gutter shadow.
    - Left Page: Chapter I ("Who We Are") — Uppercase tracked header `#a8a296`, 3.2rem gold drop cap `B` in `Playfair Display`, justified `Lato` body prose (`#333333`), italicized page number `01`.
    - Right Page: Chapter II ("What We Do") — Chapter II header, 3.2rem gold drop cap `W`, justified body prose on consulting capabilities, italicized page number `02`.

---

### 3.4 Case Consilium Banner (Hero / Post-Hero Slot)
- **Visual Presentation:** Premium graphical asset display banner.
- **Content Highlights:**
  - Cash pool: ₹5 Lakhs.
  - Total prize pool: ₹30 Lakhs+.
  - Incentives: Certificates, Mentoring, Internships, Coupons.
  - Bottom strip: Corporate sponsor & partner logo strip.
- **Styling:** Neumorphic elevated container with subtle gold perimeter glow (`box-shadow: 0 0 30px rgba(191, 132, 64, 0.15)`), responsive image scaling.

---

### 3.5 "Who We Are" & "Our Legacy" Side-by-Side Section
- **Layout:** 2-column grid on desktop (`grid-cols-1 lg:grid-cols-2`), gap `12`.
- **Left Column — Introduction:**
  - Header: `Sprat` Serif in `#BF8440` ("About BGCC").
  - Verbatim Copy:
    > "BITS Goa Consulting Club (BGCC) is the premier student-led consulting organization at BITS Pilani, Goa Campus. A team of 40+ driven individuals who excel in strategic problem-solving, market research, and business innovation."
- **Right Column — Legacy Stats Cards (2x2 Grid):**
  - Extruded dark neumorphic cards (`neu-dark`, `p-6`, `rounded-2xl`).
  - Stat 1: `40+` (Team Members)
  - Stat 2: `90+` (Projects Completed)
  - Stat 3: `60+` (Happy Clients)
  - Stat 4: `400k+` (Impressions on Social Media)
  - Numeric Typography: `Sprat` Bold in `#BF8440`, `text-4xl md:text-5xl`.
  - Label Typography: `Lato` Regular in `#e2e8f0`, `text-sm uppercase tracking-wider`.
- **Awards & Competitions Highlight Strip (Below Grid):**
  - Extruded horizontal pill or card strip:
    1. *5x Consecutive EY Cafta Winners (2024)*
    2. *Product Track Winner, Muthoot Finclusion Challenge (2025)*
    3. *National Winner, American Express Campus Challenge (2025)*
  - Accented with bronze badge icons and gold borders.

---

### 3.6 Services Grid (8 Core Practices)
- **Layout:** 2-row grid (4 columns x 2 rows on desktop `lg:grid-cols-4`, 2x4 on tablet `md:grid-cols-2`, 1x8 on mobile).
- **Aesthetic:** Styled after 180DC SRCC's service cards with BGCC dark neumorphism.
- **Card Specifications:**
  - Surface: `glass-card` / `neu-dark` with hover scale `translateY(-6px)` and gold border accentuation (`border-[#BF8440]/40`).
  - Top Bar: Lucide React icon inside circular inset well (`neu-dark-inset`, icon color `#BF8440`).
  - Category Title: `Sprat` / `Lato` Semibold `#e2e8f0`, `text-lg`.
  - Bullet Points / Capabilities: Unordered list in `Lato` `#94a3b8`, `text-sm leading-relaxed`, gold chevron bullet markers.
- **The 8 Categories:**
  1. *Business Strategy & Market Analysis*
  2. *Marketing & Growth Strategy*
  3. *Operational Efficiency & Process Improvement*
  4. *Primary Research & Data Analytics*
  5. *AI Consulting & Intelligent Automation*
  6. *Product Strategy & UI/UX*
  7. *Digital Marketing & SEO*
  8. *Web Development & Digital Solutions*

---

### 3.7 Continuous Scrolling Client Logo Marquee
- **Layout:** Full-width container with overflow hidden.
- **Marquee Track:** Dual duplicate rows of client logos (from `1.png` to `29.png`) moving in an infinite linear loop (`animation: marquee 35s linear infinite`).
- **Interactive Controls:**
  - Left & Right circular dark tactile arrow buttons positioned on flanks for manual browsing/scrolling.
  - Hover Pause: Pauses animation on pointer hover (`animation-play-state: paused`).
- **Logo Card Styling:**
  - Height `80px`, Width `160px`, `rounded-xl`, `neu-dark-inset` or subtle dark surface.
  - Image: Filtered grayscale with `opacity-70` transitioning to full color and `opacity-100` on hover with gold glow.

---

### 3.8 Coordinators / Leadership Grid (1-2-2 Formation)
- **Structure:**
  - **Row 1 (Center Single):** President — *Aryan Gupta*
  - **Row 2 (2 Columns):** Consulting Director — *Samyak Patel* | Marketing & Operations Director — *Gaurav Pawar M*
  - **Row 3 (2 Columns):** Partnerships Director — *Yashveer Sabharwal* | Product & Analytics Director — *Vaibhav Singhi*
- **Card Styling:**
  - Vertical card (`rounded-2xl`, `neu-dark`, `p-6`).
  - Photo Container: Aspect ratio `1:1` or `4:5`, `rounded-xl`, grayscale/duotone filter with gold rim on hover.
  - Name: `Sprat` Bold `#e2e8f0`, `text-xl`.
  - Role: `Lato` Medium in `#BF8440`, `text-sm uppercase tracking-wider`.
  - Social Action: LinkedIn icon button with direct URL link to coordinator's profile.

---

### 3.9 Year-Wise Clients Showcase Page (`/clients`)
- **Structure:** Chronological descending sections from **2026 down to 2020** (7 sections total).
- **Year Header:** Large `Sprat` numeral in `#BF8440` with horizontal gold divider line.
- **Interactive 3D Hover-Flip Cards:**
  - Card Dimensions: Aspect ratio `4:3` or `16:10` (approx `320px x 220px`).
  - Mechanics: CSS `transform-style: preserve-3d`, `transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`.
  - **Front Face (`backface-visibility: hidden`):**
    - Dark neumorphic surface `#141414`, centered client logo (`1.png` - `29.png` or styled placeholder), client name, category badge.
    - Subtle "Hover to read case summary" prompt.
  - **Back Face (`transform: rotateY(180deg)`, `backface-visibility: hidden`):**
    - Gold-accented dark surface `#1a1a1a`, project title, structured deliverables summary, industry tag, metrics achieved.
- **Empty Year Handling:** Clean, styled placeholder cards with "Projects under archiving / NDA" ensuring no layout gaps.

---

### 3.10 Resources Hub Page (`/resources`)
- **Structure:** Two primary interactive hub cards / tabs:
  1. **Case Book**
  2. **Primers**
- **Card Aesthetics:** Large tactile cards with book/document icons, gold badge count, and "Access Library" CTA.
- **List View Drawer / Modal:**
  - Clicking either opens a clean list view.
  - Initial State: Visually styled placeholder list entries (e.g. "BGCC Case Book 2025/26 - Volume I [Coming Soon]", "Consulting Frameworks Primer [Under Review]").

---

### 3.11 Events Timeline Page (`/events`)
- **Reference Inspiration:** IIMA Consult Club Events Timeline.
- **Layout:** Vertical alternating central spine on desktop (`md:before:left-1/2`), single left-aligned spine on mobile.
- **Timeline Spine:** Vertical line in `#BF8440`/30 with glowing gold nodes at each event milestone.
- **The 5 Mandated Events:**
  1. *Case Consilium* (Flagship Case Competition)
  2. *HSBC India Business Case Programme 2024/25*
  3. *Case Crackdown*
  4. *Marketing Mayhem*
  5. *Fix the Product*
- **Event Card Structure:**
  - Event Order Badge (e.g. "01", "02").
  - Event Name in `Sprat` Serif.
  - Reserved description space with styled placeholder briefing & timeline tags.

---

### 3.12 Partner With Us Page (`/partner`) & Form Controls
- **Reference Inspiration:** 180DC SRCC Contact / Partner Page.
- **Layout:** 2-column layout (Left: Partnership benefits, engagement process, direct contact details; Right: Interactive enquiry form).
- **Form Controls & Inputs:**
  - Input styling: `neu-dark-inset` with `bg-[#141414]`, `text-[#e2e8f0]`, `rounded-xl`, `p-4`.
  - Focus state: `outline-none ring-2 ring-[#BF8440] border-transparent`.
  - Fields required:
    - Organization / Company Name
    - Contact Person Name
    - Corporate Email Address (`type="email"`)
    - Phone Number (`type="tel"`)
    - Engagement Domain (Dropdown / Multi-select matching the 8 consulting services)
    - Project Brief / Scope of Work (`textarea`, 4-6 rows)
  - Submit Action: Full-width 3D Tactile Button submitting directly to Formspree endpoint (`partnerships@bgccbitsgoa.com`).
  - Validation Feedback: Accessible inline error messages with `role="alert"` and polite screen reader announcements.

---

### 3.13 Social Feed Integration (LinkedIn & Instagram)
- **Tool Decision:** `Tagembed` widget integration (supports both LinkedIn & Instagram feeds without credit card requirements on free tier; `Elfsight` as fallback).
- **LinkedIn Target:** `https://www.linkedin.com/company/bits-goa-consulting-club/posts/?feedView=all`
- **Instagram Target:** `https://www.instagram.com/bgcc.bitsgoa/`
- **Container Styling:** Glassmorphic card frame with header tabs switching between "LinkedIn Updates" and "Instagram Feed", fallback placeholder cards if third-party script is blocked or offline.

---

### 3.14 Global Contact Footer
- **Layout:** 4-column desktop grid + bottom legal bar.
- **Column 1 — Brand:** BGCC Crest + Mission Statement + Social icon pills (LinkedIn, Instagram).
- **Column 2 — Fast Links:** Navigation links to all 5 pages.
- **Column 3 — Contact Information:**
  - Location: BITS Goa, NH 17B, Bypass Road, Zuarinagar, Sancoale, Goa 403726
  - Phone: +91 93405 97932 · +91 74978 80227
  - Email: `partnerships@bgccbitsgoa.com`
- **Column 4 — Interactive Map & Newsletter:**
  - Google Maps iframe embed (`w-full h-36 rounded-xl border border-white/10`).
  - Mailchimp / Newsletter "Stay in Touch" inline email input and subscribe button.
- **Bottom Bar:** Copyright notice, BITS Pilani Goa Campus affiliation disclaimer, back-to-top button.

---

## 4. Animation & Motion Choreography

### 4.1 Motion Timing & Easing Curves

| Animation Intent | Duration | Easing Function (Cubic Bezier / Preset) | Description |
|---|---|---|---|
| **Masked Slide-Up Reveal** | `1.2s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Cinematic hero heading entrance from masked overflow box |
| **3D Book Open/Close** | `1.2s` | `cubic-bezier(0.645, 0.045, 0.355, 1)` | Smooth, heavy mechanical book swing and translation |
| **3D Book Hover Reach** | `0.4s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` (Spring-like) | Book lifts forward 40px on Z-axis and scales up 15% |
| **Tactile Button Press** | `0.1s` | `cubic-bezier(0.4, 0, 0.2, 1)` | Rapid 4px downward depression on `:active` |
| **Button Glow Transition** | `0.35s` | `ease-out` | Smooth color shift from white to gold glow |
| **Card 3D Flip** | `0.6s` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth 180-degree Y-axis rotation on hover |
| **Continuous Marquee** | `35s` | `linear` | Endless horizontal logo marquee strip |
| **Scroll Reveal Fade** | `0.6s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Section content sliding up 20px and fading in |
| **Modal / Drawer Slide**| `0.4s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Mobile menu and resource modal entry |

### 4.2 Framer Motion & CSS Implementation Notes
- **Reduced Motion Support:** All transitions wrapped in `@media (prefers-reduced-motion: reduce)` disabling 3D rotations, continuous marquees, and large translations, replacing them with simple opacity crossfades.
- **Hardware Acceleration:** All 3D transforms (`translate3d`, `rotate3d`, `scale3d`) utilize GPU acceleration with `will-change: transform` declared only during active interaction to avoid memory overhead.

---

## 5. Asset & Media Inventory

### 5.1 Local Workspace & Desktop Asset Catalog

| Asset Name / File Path | Media Type | Purpose & Placement | Status |
|---|---|---|---|
| `sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg` | Image (JPG, 2.64MB) | Hero section full-bleed architectural background under glass pane | Present in desktop assets |
| `BGCC_Website_Images/1.png` - `29.png` | Images (PNG, 29 files) | Client logo marquee & year-wise client showcase cards | Present in desktop assets |
| `BGCC_Website_Images/Aryan Gupta .png` | Image (PNG, 4.24MB) | President leadership card photo | Present in desktop assets |
| `BGCC_Website_Images/Samyak Patel.png` | Image (PNG, 4.69MB) | Consulting Director leadership card photo | Present in desktop assets |
| `BGCC_Website_Images/Gaurav Pawar.png` | Image (PNG, 3.91MB) | Marketing & Operations Director leadership card photo | Present in desktop assets |
| `BGCC_Website_Images/Yashveer Sabharwal.png` | Image (PNG, 4.17MB) | Partnerships Director leadership card photo | Present in desktop assets |
| `BGCC_Website_Images/Vaibhav singhii.png` | Image (PNG, 4.73MB) | Product & Analytics Director leadership card photo | Present in desktop assets |
| `sprat-main/fonts/` (WOFF2/OTF) | Font (Sprat Serif) | Headings, hero display, numeric statistics | Present in desktop assets |
| `Author_Complete/Fonts/WEB/` (WOFF2) | Font (Author Sans) | Secondary display and editorial body text | Present in desktop assets |
| `Case Consilium Graphic Banner` | Graphic / Image | Post-hero competition feature banner | Placeholder with ₹5L/₹30L prize pool copy |
| `Lucide React / Phosphor Icons` | SVG Icon Library | Service icons, social logos, arrows, status symbols | React component imports |

---

## 6. Responsive Breakpoints & Device Adaptations

```
Breakpoint Scale (Tailwind CSS):
- sm:  640px   (Large phones, landscape)
- md:  768px   (Tablets, iPad portrait)
- lg:  1024px  (Small laptops, iPad Pro)
- xl:  1280px  (Standard Desktop screens)
- 2xl: 1536px  (Large monitors / HiDPI displays)
```

### Responsive Layout Matrix

| Component | Mobile (<640px) | Tablet (640px - 1024px) | Desktop (>1024px) |
|---|---|---|---|
| **Header / Nav** | Hamburger icon + full-screen slide glass drawer | Compact links or drawer | 5 horizontal links + Pill CTA button |
| **Hero Section** | Stacked vertically; book scaled to 75% or 2D card | 2 columns with scaled 3D book | Side-by-side full 3D interactive book |
| **Who We Are** | Single column stack (Intro then Legacy cards) | 2 columns (Intro left, 2x2 Legacy right) | 2 columns with generous padding |
| **Services Grid** | 1 column (vertical stack) | 2 columns x 4 rows | 4 columns x 2 rows |
| **Coordinators** | 1 column vertical stack (1-1-1-1-1) | 2 columns grid | 1-2-2 pyramid formation |
| **Client Marquee** | Slow auto-scroll with touch swipe support | Auto-scroll + arrow buttons | Auto-scroll + arrow buttons + hover pause |
| **Client Flip Cards** | Tap to flip / Accordion fallback | Hover flip (2 columns) | Hover flip (3-4 columns per year) |
| **Footer** | 1 column stacked accordions | 2 columns grid | 4 columns comprehensive grid |

---

## 7. Accessibility (a11y) & WCAG 2.2 AA Compliance

1. **Color Contrast:**
   - Normal text (`#e2e8f0` on `#141414`): **13.91:1** (Exceeds WCAG AAA requirement of 7:1).
   - Gold accent text (`#BF8440` on `#141414`): **6.02:1** (Exceeds WCAG AA requirement of 4.5:1).
   - Book page text (`#333333` on `#fdfbf7`): **12.82:1** (Exceeds WCAG AAA requirement).
2. **Focus Visibility:**
   - Interactive elements feature a `2px` solid `#BF8440` focus ring with a `2px` offset (`ring-2 ring-[#BF8440] ring-offset-2 ring-offset-[#141414]`).
   - Keyboard users can navigate every link, form input, and 3D book control with `Tab` / `Shift+Tab`.
3. **Interactive Touch Targets:**
   - All mobile buttons, links, and drawer triggers have minimum dimensions of `44px x 44px` with at least `8px` spacing gap.
4. **Semantic HTML & ARIA:**
   - Proper heading hierarchy (`h1` -> `h2` -> `h3` with zero skipped levels).
   - Form inputs paired with `<label>` tags and `aria-describedby` for helper/error text.
   - Screen reader announcements for form submission via `aria-live="polite"` or `role="alert"`.
   - Skip to main content link (`<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`).

---

## 8. Specification Discovery & Features Matrix

### Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|---|---|---|---|---|---|---|
| 1 | Navigation | Sticky Glassmorphic Navbar | Fixed header with frosted glass, 5 primary routes, pill CTA button | Click / Tap / Route Change | Instant client navigation, active link state | Fallback to standard sticky header | PRD.md §Site structure, Design.md |
| 2 | Hero | Interactive 3D Book Hero | Skeuomorphic 3D book that rotates on hover and opens on click to reveal 2-page spread | Click, Hover, Keyboard Enter | 3D transform open, translateX(180px), text reveal | Fallback to open 2D card if 3D unsupported | Design.md §Component 1 |
| 3 | Components | 3D Tactile Dark Button | Pill button with inset shadows, glossy reflection, hover gold glow, and 4px depress on click | Hover, MouseDown, Tap | Inset color shift white->gold, translateY(4px) | Graceful degradation to flat styled button | Design.md §Component 2 |
| 4 | Motion | Masked Slide-Up Reveal | Cinematic hero typography reveal using overflow hidden and cubic-bezier transition | Page Mount / Viewport Intersection | Text slides up from translateY(120%) to 0 in 1.2s | Direct display if prefers-reduced-motion | Design.md §Motion & Animation |
| 5 | Showcase | Year-Wise Client Flip Cards | Descending 2020-2026 client cards with 3D Y-axis flip on hover revealing project details | Hover, Pointer Enter | Card rotates 180deg to back summary face | Tap-to-flip fallback on touch devices | PRD.md §Page 2: Clients |
| 6 | Services | 8-Category Consulting Grid | 2-row grid presenting BGCC's core consulting practices with icons and bullet points | Viewport scroll | Neumorphic cards with hover lift and gold border | Responsive wrap down to 1-2 columns | PRD.md §Page 1: Services |
| 7 | Showcase | Continuous Scrolling Logo Strip | Infinite horizontal client logo marquee with left/right manual navigation arrows | Auto-scroll / Arrow Click | Smooth horizontal marquee, manual translation | Continuous seamless wrap without clipping | Design.md:146, PRD.md §Page 1 |
| 8 | Leadership | 1-2-2 Coordinators Formation | Pyramid team layout (President top, 2 Directors middle, 2 Directors bottom) with LinkedIn links | Click LinkedIn icon | Outbound LinkedIn navigation | Styled placeholder if photo unavailable | PRD.md §Coordinators, Design.md |
| 9 | Content | Resources Hub (Case Book / Primers) | Dedicated portal for case books and primers with modal/list views | Click Hub Card | Interactive list view of available volumes | Styled "Under Archiving" empty state | PRD.md §Page 3: Resources |
| 10| Events | Events Milestone Timeline | Vertical alternating timeline displaying 5 key competitions and initiatives | Scroll / Viewport enter | Sequential node illumination, event briefs | Placeholder badge if details pending | PRD.md §Page 4: Events |
| 11| Forms | Partner With Us Formspree Form | Multi-field corporate enquiry form submitting to partnerships@bgccbitsgoa.com | Form submit with corporate fields | Formspree submission, success banner | Inline validation error highlighting | PRD.md §Page 5, tech-stack.md |
| 12| Social | Tagembed Live Social Feed | Live embedded feed for BGCC LinkedIn and Instagram posts | Script load | Responsive post grid from official handles | Fallback placeholder cards if blocked | PRD.md §LinkedIn/Instagram Feed |
| 13| Global | Contact Footer with Map & Mailchimp | 4-column footer with address, contact numbers, Google Maps embed, Mailchimp box | User interaction | Embedded map viewing, newsletter submission | Iframe fallback placeholder | PRD.md §Global, tech-stack.md |

---

### Edge Cases & Observed Behavior

| # | Feature | Input / Condition | Observed / Required Behavior |
|---|---|---|---|
| 1 | 3D Book Hero | Screen width < 768px (Mobile) | 3D perspective and translation adjust to fit mobile viewport without horizontal scroll; fallback to touch tap-to-open or pre-spread view. |
| 2 | 3D Book Hero | Rapid repeated clicking during 1.2s animation | Transition utilizes state lock / boolean toggle to prevent animation desynchronization or stuck half-open states. |
| 3 | Logo Marquee | Window resize or orientation change | CSS `calc()` / flex marquee recalculates width seamlessly; no seam or logo stutter. |
| 4 | Client Flip Cards | Touch screen device without mouse hover | Pointer event detection activates touch-to-toggle or tap interaction, allowing mobile users to flip cards easily. |
| 5 | Empty Client Years (e.g. 2020) | Year with no active client entries | Section header renders with styled placeholder cards stating "Archived client records under review / NDA". |
| 6 | Formspree Submission | Network failure or endpoint rate limit | Form captures error gracefully, maintains user-entered values in inputs, and displays an inline retry notification. |
| 7 | Social Feed Widget | Ad-blocker or script block on Tagembed | Container catches script error / iframe block and displays styled fallback static cards linking to BGCC's LinkedIn & Instagram. |
| 8 | prefers-reduced-motion | User OS has reduced motion enabled | Masked slide-ups and 3D rotations are disabled; elements render in their final state with simple opacity transitions. |
