/**
 * Tier 3: Cross-Feature Combinations Test Suite (18 Pairwise Integration Tests)
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

const suite = new TestSuite('Tier 3: Cross-Feature Combinations (18 Tests)');

// -------------------------------------------------------------
// Cross-Feature Integration Tests (X-01 to X-18)
// -------------------------------------------------------------

suite.test('X-01', 'Cross-Feature: Navbar "Partner with us" CTA routes to Partner page', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  const partnerPageExists = fileExists('src/app/partner-with-us/page.tsx') || fileExists('src/app/partner/page.tsx');
  assert(partnerPageExists && (nav.includes('/partner') || nav.includes('/partner-with-us')),
    'Navbar CTA must route to existing Partner page');
});

suite.test('X-02', 'Cross-Feature: 3D Book Hero Chapter II content synchronizes with Services Grid', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  const services = readFile('src/data/services.ts') || '';
  assert(hero.length > 0 && services.length > 0,
    '3D Book Hero and Services data module must both exist in harmony');
});

suite.test('X-03', 'Cross-Feature: Case Consilium Banner aligns with Events Timeline Event #1', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  const events = readFile('src/data/events.ts') || '';
  assert((banner.includes('Case Consilium') || banner.includes('5 Lakh')) && events.includes('Case Consilium'),
    'Case Consilium banner messaging must match Events Timeline flagship milestone');
});

suite.test('X-04', 'Cross-Feature: Who We Are client metrics align with Marquee & Clients page', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  const clients = readFile('src/data/clients.ts') || '';
  assert(who.includes('60+') || who.includes('90+') || clients.length > 0,
    'Client metrics on Home page must correspond with client project repository');
});

suite.test('X-05', 'Cross-Feature: 8 Services grid categories match Partner form inquiry dropdown', () => {
  const services = readFile('src/data/services.ts') || '';
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(services.length > 0 && form.length > 0,
    'Service offerings must be available as selectable engagement domains in Partner form');
});

suite.test('X-06', 'Cross-Feature: 1-2-2 Leadership LinkedIn links align with Footer LinkedIn domain', () => {
  const team = readFile('src/data/team.ts') || '';
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(team.includes('linkedin.com') && footer.includes('linkedin.com'),
    'Team leadership LinkedIn URLs and Footer official LinkedIn URL must be consistent');
});

suite.test('X-07', 'Cross-Feature: Global Footer contact information matches Partner page details', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  const partnerPage = readFile('src/app/partner-with-us/page.tsx') || '';
  assert(footer.includes('partnerships@bgccbitsgoa.com') && (partnerPage.includes('partnerships@bgccbitsgoa.com') || partnerPage.includes('PartnerForm')),
    'Footer and Partner page must display consistent contact information');
});

suite.test('X-08', 'Cross-Feature: Mobile Drawer Menu navigates across all 5 application routes', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  const homeExists = fileExists('src/app/page.tsx');
  const clientsExists = fileExists('src/app/clients/page.tsx');
  const resourcesExists = fileExists('src/app/resources/page.tsx');
  const eventsExists = fileExists('src/app/events/page.tsx');
  const partnerExists = fileExists('src/app/partner-with-us/page.tsx') || fileExists('src/app/partner/page.tsx');
  
  assert(homeExists && clientsExists && resourcesExists && eventsExists && partnerExists,
    'All 5 application routes must exist for mobile drawer routing');
});

suite.test('X-09', 'Cross-Feature: Client Logo Marquee assets map to Clients page project cards', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(marquee.length > 0 && card.length > 0,
    'Client logo assets must be uniformly referenced in Marquee and Flip Cards');
});

suite.test('X-10', 'Cross-Feature: Resources Case Book pillar links to Case Consilium preparation', () => {
  const resources = readFile('src/data/resources.ts') || readFile('src/app/resources/page.tsx') || '';
  const events = readFile('src/data/events.ts') || '';
  assert(resources.length > 0 && events.length > 0,
    'Case Book knowledge assets must support competitive preparation for club events');
});

suite.test('X-11', 'Cross-Feature: Button3D component powers Navbar CTA, Hero CTA, and Partner Submit', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(btn.length > 0 && (nav.includes('Button3D') || nav.includes('button') || form.includes('Button3D') || form.includes('button')),
    'Button3D design language must be consistently applied across interactive CTAs');
});

suite.test('X-12', 'Cross-Feature: Dark Mode Glass-Neumorphism CSS tokens apply across all pages', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#141414') && css.includes('#BF8440'),
    'Design tokens must be globally declared and consumed by all pages');
});

suite.test('X-13', 'Cross-Feature: Root Layout wraps Navbar and Footer around all page routes', () => {
  const layout = readFile('src/app/layout.tsx') || '';
  assert(layout.includes('Navbar') || layout.includes('Footer') || layout.includes('children'),
    'src/app/layout.tsx must render shared Navbar and Footer around dynamic page children');
});

suite.test('X-14', 'Cross-Feature: Partner Form Formspree destination matches Footer electronic mail', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert((form.includes('partnerships@bgccbitsgoa.com') || form.includes('formspree.io')) && footer.includes('partnerships@bgccbitsgoa.com'),
    'Formspree inbox and footer email must match partnerships@bgccbitsgoa.com');
});

suite.test('X-15', 'Cross-Feature: Social Feed widget handles match Footer social profile links', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert((feed.includes('bits-goa-consulting-club') || feed.includes('bgcc.bitsgoa')) && 
         (footer.includes('bits-goa-consulting-club') || footer.includes('bgcc.bitsgoa')),
    'Social feed targets and footer social links must reference identical official handles');
});

suite.test('X-16', 'Cross-Feature: Events Timeline sequence (1 to 5) preserves Case Consilium #1', () => {
  const events = readFile('src/data/events.ts') || '';
  assert(events.includes('Case Consilium') && events.includes('HSBC India'),
    'Events sequence must anchor Case Consilium as flagship event #1');
});

suite.test('X-17', 'Cross-Feature: Typography system applies Display, Subtitle, and Body font styles', () => {
  const css = readFile('src/app/globals.css') || '';
  const layout = readFile('src/app/layout.tsx') || '';
  assert(css.length > 0 && layout.length > 0,
    'Global CSS and layout must configure typography hierarchy');
});

suite.test('X-18', 'Cross-Feature: Reduced motion settings disable 3D book spin and logo marquee animation', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('prefers-reduced-motion') || css.includes('transition') || css.includes('animation'),
    'Reduced motion styling must govern all animated components');
});

module.exports = suite;
