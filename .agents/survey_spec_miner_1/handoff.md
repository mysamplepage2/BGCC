# Handoff Report — Survey Spec Miner 1

**Agent:** survey_spec_miner_1  
**Mission:** Thorough survey of all functional specifications, features, page-by-page requirements, interactive elements, data structures, and acceptance criteria for the BITS Goa Consulting Club (BGCC) 5-page website.  
**Date / Timestamp:** 2026-08-25T15:16:00Z  
**Type:** Hard Handoff (Task Complete)  

---

## 1. Observation

1. **Source Documents Inspected:**
   - `C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\ORIGINAL_REQUEST.md` (lines 1–48): Defines 5 pages, Dark Mode Glass-Neumorphism design, 3D book hero, tactile buttons, Formspree, maps, Tagembed social feed, placeholder rules, and acceptance criteria.
   - `C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\PRD (2).md` (lines 1–134): Defines the exact 5 nav items (`Home`, `Clients`, `Resources`, `Events`, `Partner with us`), global footer contact block, Case Consilium banner details (₹5 Lakhs cash pool, ₹30 Lakhs+ prize pool), Who We Are copy & stats (`40+ Team Members`, `90+ Projects Completed`, `60+ Happy Clients`, `400K+ Impressions`), 3 awards, 8 consulting service categories, client logo marquee requirements, Tagembed dual feed (LinkedIn + Instagram), 1-2-2 leadership formation with names and LinkedIn profiles, year-wise clients layout (2020–2026) with hover-flip cards, Resources (Case book and Primers), 5 ordered events (Case Consilium, HSBC India, Case Crackdown, Marketing Mayhem, Fix the Product), Formspree submission to `partnerships@bgccbitsgoa.com`, and footer details (address, phone numbers, email, social links).
   - `C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\Design.md` (lines 1–154): Detailed visual design specification including `#141414` background, `#BF8440` gold topic text, `#E76814` accent, Interactive 3D Book Hero mechanics (`rotateX: 15°`, `rotateY: 35°`, 1.2s cubic-bezier open transition, extruded gold border, internal spread with 3.2rem drop cap), 3D tactile button with white-to-gold hover glow and `:active` translateY(4px) depress feedback, Sprat display serif and Author/Lato body sans-serif typography, Masked Slide-Up Reveal animations, and reference to desktop image asset directory.
   - `C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\tech-stack.md` (lines 1–84): Defines Next.js App Router, Tailwind CSS, Markdown files for content/resources, Formspree for forms, Google Maps iframe embed, Mailchimp mailing list embed, `/public` folder for static images, Vercel hosting, and strict no-database / no-WordPress architecture.
   - `C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\BGCC Website — Complete Design & UI Specification.md` (lines 1–1984): Full comprehensive design tokens (`#0A0A0A`, `#141414`, `#F4F2ED`, `#A6A39D`, `#F5D34F`, `#292929`), typography scales, component breakdowns, 1-2-2 leadership rules, 2020–2026 client rules, and accessibility standards.
2. **Local Assets Discovered on Disk:**
   - Directory: `C:\Users\ragha\OneDrive\Desktop\bgcc design assets\BGCC_Website_Images-20260824T164035Z-1-001\BGCC_Website_Images`
     - 29 client logos (`1.png` to `29.png`)
     - 5 coordinator portraits (`Aryan Gupta .png`, `Gaurav Pawar.png`, `Samyak Patel.png`, `Vaibhav singhii.png`, `Yashveer Sabharwal.png`)
   - Directory: `C:\Users\ragha\OneDrive\Desktop\bgcc design assets`
     - Fonts: `sprat-main` (Sprat serif family) and `Author_Complete` (Author sans-serif family)
     - Architectural hero image: `sylwia-bartyzel-rfK2c7v9R_s-unsplash (1).jpg`
3. **Workspace State:**
   - `C:\Users\ragha\.gemini\antigravity\scratch\bgcc` contains Next.js 16.3.2 with React 19.2.8, Tailwind CSS v4, TypeScript 5.

---

## 2. Logic Chain

1. **Information Architecture (Step 1):**
   - Observations confirm exactly 5 navigation pages: `Home` (`/`), `Clients` (`/clients`), `Resources` (`/resources`), `Events` (`/events`), and `Partner with us` (`/partner-with-us`).
   - Observations confirm a unified top navigation bar and a global contact footer appearing on all 5 pages.
2. **Homepage Composition (Step 2):**
   - Top-to-bottom sequence is strictly specified:
     1. Interactive 3D Book Hero + Case Consilium Banner
     2. Who We Are (verbatim intro copy, 4 metrics, 3 national competition awards)
     3. 8 Consulting Service Categories in a 2x4 grid
     4. Infinite Client Logo Marquee with 29 client logos and manual scroll arrows
     5. Live Social Feed widget (LinkedIn + Instagram) with fallback
     6. 1-2-2 Leadership Directorate (President + 4 Directors)
3. **Subpage Functionality (Step 3):**
   - `/clients`: Year-wise sections spanning 2020 through 2026 with 3D hover-flip cards (Front: Logo/Name, Back: Strategic Scope/Impact).
   - `/resources`: Two discrete pillars (Case Book and Primers) backed by structured Markdown data models and styled placeholder empty-states.
   - `/events`: Vertical yellow timeline connecting 5 flagship events in exact sequence (Case Consilium, HSBC India, Case Crackdown, Marketing Mayhem, Fix the Product).
   - `/partner-with-us`: Formspree-connected inquiry form with client-side validation submitting to `partnerships@bgccbitsgoa.com`, alongside direct phone, email, and Google Maps embed.
4. **Interactive Component Specifications (Step 4):**
   - 3D Book Hero: Pure CSS transforms (`transform-style: preserve-3d`), click toggle opening the two-page spread, smooth cubic-bezier easing.
   - 3D Tactile Buttons: Inset lighting transition to gold (`#BF8440`) on hover, physical depression on click.
   - Responsive Reflow: Seamless graceful degradation on mobile (1-2-2 leadership becomes vertical stack; alternating timeline becomes left-aligned linear timeline; flip cards become tap-to-flip).

---

## 3. Caveats

- **External Embed Dependencies:** Formspree, Tagembed/Elfsight social widget, and Google Maps iframe rely on network connectivity; robust offline/fallback mock states must be baked directly into the frontend components so the site never shows broken containers during offline review or if third-party scripts fail.
- **Client Project Descriptions:** PRD specifies that real client descriptions and case book downloads are placeholder-ready; high-fidelity structured mockup data matching real consulting engagements (e.g. market entry, product strategy, process automation) has been designed and specified.

---

## 4. Conclusion

All functional specifications, page-by-page sections, data models, copy text, interactive behaviors, and acceptance criteria have been mined, reconciled, and documented into `spec_report.md`. The design and implementation teams now have an unambiguous, comprehensive functional blueprint to execute the project without gaps.

---

## 5. Verification Method

- **Inspect Artifacts:**
  - View `C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\survey_spec_miner_1\spec_report.md` to review the exhaustive 5-page functional breakdown, TypeScript interfaces, and discovered features table.
  - View `C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\survey_spec_miner_1\progress.md` for completed milestones.
- **Cross-Reference Authority:**
  - Verify section mapping against `PRD (2).md` (lines 18–107).
  - Verify visual interaction parameters against `Design.md` (lines 11–76).
