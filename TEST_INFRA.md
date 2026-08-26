# E2E Test Infrastructure & Verification Architecture

**Project:** BITS Goa Consulting Club (BGCC) Official Website  
**Framework:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript 5  
**Methodology:** 4-Tier Opaque-Box Requirement-Driven Testing  
**Document Version:** 1.0.0  

---

## 1. Executive Summary & Testing Philosophy

The BITS Goa Consulting Club (BGCC) website is a mission-critical, public-facing digital front door. To guarantee absolute adherence to the Product Requirements Document (`PRD (2).md`), Design System Specifications (`Design.md`), and Technical Architecture (`tech-stack.md` & `PROJECT.md`), the testing infrastructure implements an **independent, requirement-driven, opaque-box testing harness**.

### Core Tenets of the Test Harness
1. **Opaque-Box Integrity:** Tests are authored strictly against authoritative requirements and interface contracts, independent of internal implementation nuances.
2. **Progressive & Deterministic Verification:** The test runner executes synchronously in pure Node.js without requiring external headless browser services or fragile network dependencies.
3. **Four-Tier Architecture:**
   - **Tier 1 — Feature Coverage:** Exhaustive validation of all 18 features in the `PROJECT.md` Feature Inventory ($\ge 5$ test cases per feature, $\ge 90$ test cases).
   - **Tier 2 — Boundary & Corner Cases:** Rigorous stress-testing of edge conditions, empty states, input anomalies, accessibility fallbacks, and mobile constraints ($\ge 5$ test cases per feature, $\ge 90$ test cases).
   - **Tier 3 — Cross-Feature Combinations:** Verification of multi-feature data synchronization, routing handoffs, and state coherence ($\ge 18$ pairwise integration tests).
   - **Tier 4 — Real-World Application Scenarios:** Full end-to-end user journeys simulating executive clients, students, recruiters, and competitors ($\ge 9$ comprehensive scenarios).
4. **Authoritative Output Derivation:** Every assertion validates against documented specifications in `PRD (2).md`, `Design.md`, and `PROJECT.md`.

---

## 2. 4-Tier Test Architecture & Matrix

```
┌────────────────────────────────────────────────────────────────────────┐
│                     E2E Verification Matrix (207+ Tests)                │
├───────────────────┬──────────────────────────────────┬─────────────────┤
│ Tier Level        │ Focus Scope                      │ Minimum Volume  │
├───────────────────┼──────────────────────────────────┼─────────────────┤
│ Tier 1: Features  │ 18 Features x 5 Tests/Feature    │ 90 Test Cases   │
│ Tier 2: Boundary  │ 18 Features x 5 Boundary Tests   │ 90 Test Cases   │
│ Tier 3: Workflows │ Pairwise Cross-Feature Chains    │ 18 Test Cases   │
│ Tier 4: Scenarios │ Full Real-World User Journeys    │ 9 Test Cases    │
├───────────────────┼──────────────────────────────────┼─────────────────┤
│ Total Test Suite  │ Comprehensive Verification       │ 207 Test Cases  │
└───────────────────┴──────────────────────────────────┴─────────────────┘
```

### 2.1 Tier 1: Feature Coverage (90 Tests across 18 Features)
| Feature ID | Feature Name | Test Focus |
|---|---|---|
| F-01 | Asset Pipeline & Font Integration | 29 client logos, 5 director portraits, hero background, Sprat/Author fonts |
| F-02 | Design Tokens & Global CSS | `#141414`, `#BF8440`, `#E76814`, `.glass-pane`, `.neu-dark`, `.neu-dark-inset` |
| F-03 | 3D Tactile Button (`Button3D`) | Pill shape, resting `#080808`, hover gold glow, 4px active depress, focus ring |
| F-04 | Fixed Glass Navbar | Fixed positioning, 5 required routes, pill CTA, backdrop blur, mobile drawer |
| F-05 | Global Contact Footer | 4-column layout, BITS Goa address, 2 phones, email, Google Maps, Mailchimp |
| F-06 | Interactive 3D Book Hero | Isometric closed stance (15°/35°), hover scale, 1.2s cubic-bezier open spread, drop cap |
| F-07 | Case Consilium Banner | ₹5 Lakhs cash, ₹30 Lakhs+ total prize, sponsor logos, direct CTA |
| F-08 | Who We Are & Legacy Section | Verbatim copy, 4 stats (40+, 90+, 60+, 400K+), 3 national awards |
| F-09 | 8 Consulting Services Grid | Exactly 8 categories matching PRD, bullet deliverables, hover effects |
| F-10 | Infinite Client Logo Marquee | 29 logos in infinite linear loop, left/right navigation arrows, hover pause |
| F-11 | Live Social Feed Widget | Tagembed integration, LinkedIn & Instagram feeds, offline fallback cards |
| F-12 | 1-2-2 Leadership Directorate | President at top, 2 Directors middle, 2 Directors bottom, LinkedIn links |
| F-13 | Clients Page (`/clients`) | 2020-2026 year sections, 3D hover-flip cards (Front: Logo, Back: Scope) |
| F-14 | Resources Hub (`/resources`) | Case Book & Primers pillars, category filters, empty state badges |
| F-15 | Events Timeline (`/events`) | 5 flagship events in exact sequence, yellow timeline spine, luminous nodes |
| F-16 | Partner With Us Page (`/partner-with-us`) | Formspree endpoint (`partnerships@bgccbitsgoa.com`), 6 fields, map |
| F-17 | E2E Testing Infrastructure | 4-tier CLI runner, automated reporting, exit code gates, JSON output |
| F-18 | Adversarial Coverage Hardening | White-box edge verification, responsive breakpoints, a11y compliance |

### 2.2 Tier 2: Boundary & Corner Cases (90 Tests across 18 Features)
- **F-01 Boundary:** Missing asset fallbacks, corrupted font formats, oversized images, zero-byte file handling, special characters in image paths.
- **F-02 Boundary:** CSS custom property inheritance under dark mode overrides, contrast ratio boundary ($\ge 4.5:1$ on gold, $\ge 7:1$ on body text), unsupported `backdrop-filter` fallback.
- **F-03 Boundary:** Keyboard event triggers (`Enter`/`Space`), rapid repeated clicks, disabled state styling, long label truncation, anchor vs button semantics.
- **F-04 Boundary:** Ultra-narrow mobile viewports (<320px), rapid drawer toggling, scroll threshold detection, route change auto-close, touch outside dismiss.
- **F-05 Boundary:** Invalid email input in Mailchimp subscribe, iframe load failures, missing telephone links (`tel:` prefix), international phone formatting.
- **F-06 Boundary:** `prefers-reduced-motion` 2D fallback, double-click animation race conditions, mobile portrait orientation fit, extreme zoom scaling (200%).
- **F-07 Boundary:** Currency formatting edge cases (₹ symbols, commas), missing banner image placeholder container, high-density screen scaling.
- **F-08 Boundary:** Metric counter precision, long award title wrapping, screen reader text alternatives, RTL layout resilience.
- **F-09 Boundary:** Uneven bullet list lengths, service grid column collapse on tablet, keyboard focus traversal through 8 cards.
- **F-10 Boundary:** Rapid arrow clicking, track width recalculation on viewport resize, touch swipe gesture handling on mobile, zero-image fallback.
- **F-11 Boundary:** Script blocking / ad-blocker simulation, CSP restrictions, offline network state fallback rendering, invalid feed response.
- **F-12 Boundary:** Missing coordinator portrait fallback to monogram, long director title wrapping, LinkedIn URL sanitization (`https:` protocol).
- **F-13 Boundary:** 0-project years (e.g. future 2026 / archived 2020) rendering placeholder notice, touch-tap card flip on mobile, card content overflow.
- **F-14 Boundary:** Empty resources directory, search/filter with 0 matches, missing download URL handling, oversized file size metadata.
- **F-15 Boundary:** Reverse ordering protection, single-event display resilience, mobile single-column spine reflow, missing event date handling.
- **F-16 Boundary:** Empty required fields, malformed email strings, SQL/script injection payloads in message field, network timeout retry notification.
- **F-17 Boundary:** Runner CLI flag variations (`--tier`, `--feature`, `--json`, `--verbose`), invalid tier parameter error handling, non-zero exit on assertion failures.
- **F-18 Boundary:** Viewport extreme boundaries (320px to 3840px 4K), WCAG 2.2 focus ring visibility, color blindness contrast compatibility.

### 2.3 Tier 3: Cross-Feature Combinations (18 Tests)
- **X-01:** Navbar "Partner with us" CTA $\rightarrow$ `/partner-with-us` page routing $\rightarrow$ Form autofocus.
- **X-02:** 3D Book Hero Chapter II text $\rightarrow$ Homepage Services Grid category parity.
- **X-03:** Case Consilium Banner CTA $\rightarrow$ `/events` timeline #1 milestone metadata alignment.
- **X-04:** Who We Are metric "60+ Happy Clients" $\rightarrow$ Marquee 29 logos $\rightarrow$ `/clients` 2020–2026 showcase consistency.
- **X-05:** 8 Services in ServicesGrid $\rightarrow$ PartnerForm service dropdown options $\rightarrow$ Client flip card service tags.
- **X-06:** Leadership Directorate LinkedIn URLs $\rightarrow$ Footer Social LinkedIn URL domain parity.
- **X-07:** Global Footer Contact Details & Map $\rightarrow$ Partner Page Contact Details & Map coordinate parity.
- **X-08:** Mobile Drawer Navigation $\rightarrow$ Active route indicator update across all 5 pages.
- **X-09:** Client Logo Marquee asset references $\rightarrow$ `/clients` flip card logo asset mapping.
- **X-10:** Resources Hub Case Book pillar $\rightarrow$ Case Consilium competition preparation context.
- **X-11:** 3D Tactile Button styling $\rightarrow$ Navbar CTA, Hero CTA, and Partner Form submit button design parity.
- **X-12:** Global CSS variables (`--color-bgcc-*`) $\rightarrow$ Uniform consumption across all components.
- **X-13:** Root Layout wrapper $\rightarrow$ Persistent Navbar and Footer presence on all routes.
- **X-14:** Partner Form Formspree submission destination $\rightarrow$ Footer email address parity (`partnerships@bgccbitsgoa.com`).
- **X-15:** Social Feed widget handles $\rightarrow$ Footer social links (LinkedIn & Instagram) exact handle matching.
- **X-16:** Events Timeline sequential numbering (1 to 5) $\rightarrow$ Event detail mapping.
- **X-17:** Typography tokens (Sprat, Author, Lato) $\rightarrow$ Strict font-family hierarchy across Headings, Subtitles, and Body.
- **X-18:** `prefers-reduced-motion` setting $\rightarrow$ Unified motion suppression across 3D Book, Marquee, and Slide-up reveals.

### 2.4 Tier 4: Real-World Application Scenarios (9 Tests)
- **S-01:** Corporate Executive Partner Discovery & Consultation Inquiry Submission.
- **S-02:** Student Case Competitor Registration & Flagship Events Exploration.
- **S-03:** Aspiring Consultant Knowledge Asset & Framework Due Diligence.
- **S-04:** Prospective Client Project Portfolio & Impact Due Diligence (2020–2026 Flip Cards).
- **S-05:** Mobile Smartphone First-Time Visitor Navigation & Contact Discovery.
- **S-06:** Campus Recruiter Leadership Verification & Directorate Credentials Check.
- **S-07:** Corporate Sponsor Case Consilium Prize Pool & Partnership Evaluation.
- **S-08:** Community Follower Social Media & Newsletter Subscription Workflow.
- **S-09:** Accessibility & Keyboard-Only Full-Site Navigation Audit.

---

## 3. Test Runner CLI & Execution Specification

### 3.1 Invocation Commands
```bash
# Execute entire test suite (Tiers 1-4)
node tests/e2e-runner.js

# Execute specific tier
node tests/e2e-runner.js --tier=1
node tests/e2e-runner.js --tier=2
node tests/e2e-runner.js --tier=3
node tests/e2e-runner.js --tier=4

# Execute specific feature across Tiers 1 & 2
node tests/e2e-runner.js --feature=3

# Output detailed assertion traces
node tests/e2e-runner.js --verbose

# Generate structured JSON report
node tests/e2e-runner.js --json
```

### 3.2 Exit Code Standards
- `0`: All executed test assertions passed with 100% success rate.
- `1`: One or more assertions failed, or execution aborted due to unhandled exceptions.

---

## 4. File Layout & Test Directory Structure

```
tests/
├── e2e-runner.js              # Central CLI runner orchestrating all test suites
├── helpers/
│   └── test-utils.js          # AST, DOM simulation, token inspection, and assertion library
├── tier1-features.test.js     # Tier 1: Feature Coverage Suite (90 test cases)
├── tier2-boundary.test.js     # Tier 2: Boundary & Corner Cases Suite (90 test cases)
├── tier3-combinations.test.js # Tier 3: Cross-Feature Interactions Suite (18 test cases)
└── tier4-scenarios.test.js    # Tier 4: Real-World End-to-End Journeys (9 test cases)
```

---

## 5. Pass/Fail Gates and Quality Metrics

| Metric | Target Standard | Hard Gate |
|---|---|---|
| Total Test Count | $\ge 207$ tests | Yes ($\ge 207$) |
| Tier 1 Feature Pass Rate | 100% (90/90) | Yes |
| Tier 2 Boundary Pass Rate | 100% (90/90) | Yes |
| Tier 3 Combinations Pass Rate | 100% (18/18) | Yes |
| Tier 4 Scenarios Pass Rate | 100% (9/9) | Yes |
| Zero Flake Guarantee | 100% Deterministic | Yes |
| Maximum Run Time | $< 5.0$ seconds | Yes |
