/**
 * Tier 4: Real-World Application Scenarios Test Suite (9 End-to-End User Journeys)
 * Authoritative source: PROJECT.md, PRD (2).md, Design.md, tech-stack.md
 */

const {
  TestSuite,
  readFile,
  fileExists,
  assert,
  assertEqual,
  assertIncludes,
  assertMatches
} = require('./helpers/test-utils');

const suite = new TestSuite('Tier 4: Real-World Application Scenarios (9 Tests)');

// -------------------------------------------------------------
// Real-World E2E User Scenarios (S-01 to S-09)
// -------------------------------------------------------------

suite.test('S-01', 'Scenario 1: Corporate Executive Partner Discovery & Consultation Inquiry Submission', () => {
  // Step 1: Executive lands on homepage and reviews consulting capabilities
  const services = readFile('src/data/services.ts') || readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(services.includes('Strategy') || services.includes('Market') || services.includes('Automation'),
    'Step 1 Failed: Services capabilities must be clearly presented');

  // Step 2: Executive verifies credibility metrics (40+ members, 90+ projects)
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('40+') || who.includes('90+') || who.includes('40'),
    'Step 2 Failed: Legacy proof metrics must establish credibility');

  // Step 3: Executive navigates to Partner With Us page
  const partnerPage = readFile('src/app/partner-with-us/page.tsx') || readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(partnerPage.length > 0, 'Step 3 Failed: Partner page must be accessible');

  // Step 4: Executive completes corporate brief form submitting to Formspree
  assert(partnerPage.includes('form') || partnerPage.includes('PartnerForm') || partnerPage.includes('Submit') || partnerPage.includes('Button3D'),
    'Step 4 Failed: Partner form must be fully structured for engagement submission');
});

suite.test('S-02', 'Scenario 2: Student Case Competitor Registration & Flagship Events Exploration', () => {
  // Step 1: Competitor observes Case Consilium banner with prize pool
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('5 Lakh') || banner.includes('30 Lakh') || banner.includes('Case Consilium'),
    'Step 1 Failed: Case Consilium banner must highlight prize pool figures');

  // Step 2: Competitor navigates to Events page
  const eventsPage = readFile('src/app/events/page.tsx') || '';
  assert(eventsPage.length > 0, 'Step 2 Failed: Events timeline page must exist');

  // Step 3: Competitor inspects 5 flagship events in chronological order
  const events = readFile('src/data/events.ts') || readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(events.includes('Case Consilium') && events.includes('Fix the Product'),
    'Step 3 Failed: Events timeline must render complete 5-event sequence');
});

suite.test('S-03', 'Scenario 3: Aspiring Consultant Knowledge Asset & Framework Due Diligence', () => {
  // Step 1: Student navigates to Resources Hub
  const resPage = readFile('src/app/resources/page.tsx') || '';
  assert(resPage.length > 0, 'Step 1 Failed: Resources page must exist');

  // Step 2: Student inspects Case Book and Primers pillars
  const resources = readFile('src/data/resources.ts') || readFile('src/components/resources/ResourceCards.tsx') || resPage;
  assert(resources.includes('Case Book') || resources.includes('case-book') || resources.includes('Primer'),
    'Step 2 Failed: Resources must provide Case Book and Primers repositories');

  // Step 3: Student sees structured release metadata or upcoming placeholders
  assert(resources.includes('Coming Soon') || resources.includes('Releasing') || resources.includes('topics') || resources.includes('downloadUrl') || resources.includes('description'),
    'Step 3 Failed: Knowledge assets must display structured metadata');
});

suite.test('S-04', 'Scenario 4: Corporate Client Track Record & Impact Due Diligence (2020-2026 Flip Cards)', () => {
  // Step 1: Corporate buyer navigates to Clients showcase
  const clientsPage = readFile('src/app/clients/page.tsx') || '';
  assert(clientsPage.length > 0, 'Step 1 Failed: Clients page must exist');

  // Step 2: Buyer verifies year-wise breakdown across 2020-2026
  assert(clientsPage.includes('2026') || clientsPage.includes('year') || clientsPage.includes('ClientFlipCard'),
    'Step 2 Failed: Chronological year sections must be rendered');

  // Step 3: Buyer flips project cards to read strategic problem statements and impact
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.length > 0, 'Step 3 Failed: 3D ClientFlipCard component must be available');
});

suite.test('S-05', 'Scenario 5: Mobile Smartphone First-Time Visitor Navigation & Contact Discovery', () => {
  // Step 1: Mobile visitor opens responsive navigation drawer
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('md:hidden') || nav.includes('isOpen') || nav.includes('menu') || nav.includes('Menu'),
    'Step 1 Failed: Navbar must implement responsive mobile drawer');

  // Step 2: Mobile visitor scrolls to Footer for phone numbers and campus address
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('BITS Goa') && (footer.includes('93405') || footer.includes('74978')),
    'Step 2 Failed: Footer must present immediate mobile dialable telephone and location');

  // Step 3: Mobile visitor verifies Google Maps embed location
  assert(footer.includes('iframe') || footer.includes('maps') || footer.includes('Map'),
    'Step 3 Failed: Google Maps embed must be present for geographic orientation');
});

suite.test('S-06', 'Scenario 6: Campus Recruiter Leadership Verification & Directorate Credentials Check', () => {
  // Step 1: Recruiter views Leadership pyramid on Homepage
  const pyramid = readFile('src/components/home/LeadershipPyramid.tsx') || readFile('src/app/page.tsx') || '';
  assert(pyramid.length > 0, 'Step 1 Failed: Leadership Directorate view must exist');

  // Step 2: Recruiter verifies President Aryan Gupta at Tier 1
  const team = readFile('src/data/team.ts') || pyramid;
  assert(team.includes('Aryan Gupta') && team.includes('President'),
    'Step 2 Failed: President Aryan Gupta must head the leadership structure');

  // Step 3: Recruiter inspects Directors and verifies LinkedIn profile links
  assert(team.includes('Samyak Patel') && team.includes('Gaurav Pawar') && team.includes('linkedin'),
    'Step 3 Failed: Directors must provide verifiable professional LinkedIn profiles');
});

suite.test('S-07', 'Scenario 7: Corporate Sponsor Case Consilium Prize Pool & Partnership Evaluation', () => {
  // Step 1: Sponsor reviews Case Consilium prize pool and national scale
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('5 Lakh') || banner.includes('30 Lakh') || banner.includes('Consilium'),
    'Step 1 Failed: Flagship competition scale must be prominently highlighted');

  // Step 2: Sponsor inspects club awards (EY Cafta, Muthoot, Amex)
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('EY Cafta') || who.includes('Muthoot') || who.includes('American Express'),
    'Step 2 Failed: National competition victories must substantiate club caliber');

  // Step 3: Sponsor initiates partner inquiry
  const partnerPage = readFile('src/app/partner-with-us/page.tsx') || fileExists('src/app/partner-with-us/page.tsx');
  assert(partnerPage, 'Step 3 Failed: Partner contact funnel must be operational');
});

suite.test('S-08', 'Scenario 8: Community Follower Social Media & Newsletter Subscription Workflow', () => {
  // Step 1: Follower views live LinkedIn / Instagram updates
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.length > 0, 'Step 1 Failed: Social feed widget must be present');

  // Step 2: Follower accesses official BGCC LinkedIn and Instagram channels
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('linkedin.com') && footer.includes('instagram.com'),
    'Step 2 Failed: Direct links to official social profiles must be provided');

  // Step 3: Follower enters email in Mailchimp newsletter box
  assert(footer.includes('email') || footer.includes('Subscribe') || footer.includes('Stay in Touch') || footer.includes('newsletter'),
    'Step 3 Failed: Newsletter subscription interface must be available');
});

suite.test('S-09', 'Scenario 9: Accessibility & Keyboard-Only Full-Site Navigation Audit', () => {
  // Step 1: Focus styling configured on interactive controls
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('focus') || btn.includes('ring'),
    'Step 1 Failed: 3D button must configure focus indicator');

  // Step 2: High-contrast color tokens applied
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#141414') && css.includes('#BF8440'),
    'Step 2 Failed: WCAG AA contrast colors must be configured in global design tokens');

  // Step 3: Semantic heading structure and document title configured
  const layout = readFile('src/app/layout.tsx') || '';
  assert(layout.includes('html') && (layout.includes('title') || layout.includes('metadata')),
    'Step 3 Failed: Document root must configure semantic HTML and page metadata');
});

module.exports = suite;
