# Original User Request

## Initial Request — 2026-08-25T15:11:33Z

Build a complete, presentable 5-page public marketing website for the BITS Goa Consulting Club (BGCC) using Next.js and Tailwind CSS. The site must serve as a professional front door for the club, matching a provided PRD and Design specification.

Working directory: C:\Users\ragha\.gemini\antigravity\scratch\bgcc
Integrity mode: benchmark

Reference material:
- PRD: C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\PRD (2).md
- Design: C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\Design.md
- Tech Stack: C:\Users\ragha\OneDrive\Documents\Obsidian Vault\BGCC\tech-stack.md

## Requirements

### R1. Implement Global Layout and 5 Pages
Build the 5 required pages (Home, Clients, Resources, Events, Partner with us) and a global layout (Navbar and Contact Footer) matching the exact structure defined in the PRD.

### R2. Apply Dark Mode Glass-Neumorphism Design
Implement the precise aesthetic outlined in the Design document, including the #141414 deep charcoal background, #BF8440 gold accents, Glass-Neumorphism utilities (backdrop filters, specific box-shadows), and the Masked Slide-Up Reveal animations.

### R3. Interactive 3D Components
Build the  Interactive 3D Book Hero (opens on click, uses 3D transforms) and the 3D Tactile Dark Buttons (hover glow color shift) as described in the Design document.

### R4. Integrations
Integrate Formspree for the Contact/Partner form, a Google Maps iframe embed, and a Tagembed script for the LinkedIn/Instagram feed as per the Tech Stack document. 

### R5. Content & Placeholders
Render actual copy where provided (e.g., Who we are stats). For all missing assets (client logos, coordinator photos, resource documents), implement visually obvious, styled placeholder boxes/lists.

## Acceptance Criteria

### Project Structure & Build
- [ ] The Next.js project runs without errors (
pm run build succeeds).
- [ ] No WordPress, custom backend databases, or non-approved third-party hosting are used.

### Layout & Functionality
- [ ] Navigation correctly routes between all 5 pages.
- [ ] The Home page contains the Hero, Case Consilium banner placeholder, Who we are, Services grid, scrolling Clients strip, Social Feed placeholder, and Team grid.
- [ ] The Clients page renders year-wise sections (2020-2026) with hover-flip cards.
- [ ] The Partner With Us form submits to a Formspree endpoint.

### Design Integrity
- [ ] The Interactive 3D Book successfully transforms and opens on click.
- [ ] The primary buttons depress on click (:active) and shift to a gold glow on hover.
