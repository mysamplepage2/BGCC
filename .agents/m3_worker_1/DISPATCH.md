## 2026-08-25T15:25:18Z

You are M3 Worker. Your working directory is C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\m3_worker_1.

Files to read first:
- C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\ORIGINAL_REQUEST.md
- C:\Users\ragha\.gemini\antigravity\scratch\bgcc\PROJECT.md
- C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\survey_design_miner_2\design_report.md
- C:\Users\ragha\.gemini\antigravity\scratch\bgcc\.agents\survey_spec_miner_1\spec_report.md
- src/types/index.ts and src/data/

Exclusive Write Boundaries:
- src/components/clients/ClientFlipCard.tsx
- src/components/resources/ResourceCards.tsx
- src/components/events/EventsTimeline.tsx
- src/components/partner/PartnerForm.tsx
- src/app/clients/page.tsx
- src/app/resources/page.tsx
- src/app/events/page.tsx
- src/app/partner-with-us/page.tsx
- src/app/partner/page.tsx

Tasks:
1. /clients page (src/app/clients/page.tsx + ClientFlipCard.tsx): Chronological year-wise layout (2020 through 2026) featuring 3D hover-flip cards (Front: Logo & Company Name, Back: Project brief, consulting domain, and measurable impact).
2. /resources page (src/app/resources/page.tsx + ResourceCards.tsx): 2 discrete pillars (Case Book & Primers), filter tabs, document cards with PDF/Markdown metadata, download actions, and polished empty-state fallbacks.
3. /events page (src/app/events/page.tsx + EventsTimeline.tsx): Interactive vertical yellow timeline connecting 5 flagship events in exact sequence (Case Consilium, HSBC India, Case Crackdown, Marketing Mayhem, Fix the Product) with date, prize pool, format, and recap.
4. /partner-with-us page (src/app/partner-with-us/page.tsx + PartnerForm.tsx) and route alias /partner (src/app/partner/page.tsx): Formspree inquiry form submitting to partnerships@bgccbitsgoa.com with client-side validation, direct contact details (phone, email, campus address), and Google Maps interactive embed.
5. Verification:
   - cmd.exe /c npm run build
   - cmd.exe /c npx tsc --noEmit
   - cmd.exe /c node tests/e2e-runner.js --feature 13,14,15,16
6. Write handoff.md in your working directory and notify parent orchestrator via send_message.
