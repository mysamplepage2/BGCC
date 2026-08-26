## 2026-08-25T15:16:43Z
Tasks:
1. Ingest/copy all required assets from C:\Users\ragha\OneDrive\Desktop\bgcc design assets\ into public/assets/ (29 client logos 1.png to 29.png, 5 coordinator portraits, architectural hero background image, custom fonts).
2. Implement central TypeScript interfaces in src/types/index.ts.
3. Implement complete structured datasets in src/data/ (team.ts with 5 coordinators in 1-2-2 structure, services.ts with 8 consulting categories, clients.ts with 29 client projects across 2020-2026, events.ts with 5 flagship events in exact sequence, resources.ts with case book and primer categories).
4. Configure design tokens, glass-neumorphism CSS utilities (.glass-pane, .neu-dark, .neu-dark-inset), 3D button tactile classes, and keyframe animations in src/app/globals.css.
5. Implement reusable UI components:
   - Button3D.tsx (tactile 3D button with gold border glow on hover, physical 4px active depress, accessibility focus ring)
   - SectionHeader.tsx (masked text reveal styling, subtitles)
   - GlassCard.tsx (neumorphic container)
6. Implement Navbar.tsx (Apple-proportioned fixed glass navbar with 5 links: /, /clients, /resources, /events, /partner-with-us, active route indicator, pill CTA, mobile drawer) and Footer.tsx (4-column layout with BITS Goa address, direct contact info, Google Maps iframe embed, Mailchimp subscribe embed, social links).
7. Wire up src/app/layout.tsx wrapping children with Navbar, Footer, and fonts.
8. Verify your work by running:
   cmd.exe /c npm run build
   cmd.exe /c npx tsc --noEmit
   Ensure build and typecheck succeed with 0 errors.
9. Write a comprehensive handoff.md in your working directory and notify the parent orchestrator via send_message.
