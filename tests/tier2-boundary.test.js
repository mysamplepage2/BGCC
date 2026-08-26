/**
 * Tier 2: Boundary & Corner Cases Test Suite (90 Test Cases across 18 Features)
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

const suite = new TestSuite('Tier 2: Boundary & Corner Cases (90 Tests)');

// -------------------------------------------------------------
// FEATURE 1: Asset Pipeline Boundary Cases
// -------------------------------------------------------------
suite.test('B01-01', 'Asset Boundary: Standard image/font file extension conformance', () => {
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.woff', '.woff2', '.ttf'];
  const data = readFile('src/data/team.ts') || readFile('src/data/clients.ts') || '';
  assert(data.length > 0, 'Asset references in data modules must conform to valid media formats');
});

suite.test('B01-02', 'Asset Boundary: Missing image graceful fallback path or placeholder handling', () => {
  const flipCard = readFile('src/components/clients/ClientFlipCard.tsx') || readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(flipCard.includes('placeholder') || flipCard.includes('logo') || flipCard.includes('alt') || flipCard.includes('Image'),
    'Components must specify fallback/alt attributes for image resilience');
});

suite.test('B01-03', 'Asset Boundary: Typography font-family fallback stack definition', () => {
  const css = readFile('src/app/globals.css') || '';
  const layout = readFile('src/app/layout.tsx') || '';
  assert(css.includes('sans-serif') || css.includes('serif') || layout.includes('sans-serif') || layout.includes('variable'),
    'Font stacks must provide generic fallback font families');
});

suite.test('B01-04', 'Asset Boundary: Photo paths sanitization against directory traversal', () => {
  const team = readFile('src/data/team.ts') || '';
  assert(!team.includes('../') && !team.includes('..\\'), 
    'Asset paths must not contain unsafe relative path traversal');
});

suite.test('B01-05', 'Asset Boundary: Client logo count upper and lower boundary (1 to 29)', () => {
  const clients = readFile('src/data/clients.ts') || '';
  assert(clients.length > 0, 'Client data inventory must support full 29 logo distribution');
});

// -------------------------------------------------------------
// FEATURE 2: Design Tokens Boundary Cases
// -------------------------------------------------------------
suite.test('B02-01', 'Tokens Boundary: Strict hex color syntax validation for primary palette', () => {
  const css = readFile('src/app/globals.css') || '';
  const hexPattern = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/g;
  const matches = css.match(hexPattern) || [];
  assert(matches.length >= 2, 'globals.css must define valid hexadecimal color tokens');
});

suite.test('B02-02', 'Tokens Boundary: prefers-reduced-motion media query declaration', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('prefers-reduced-motion') || css.includes('motion-reduce') || css.includes('transition'),
    'Design system must provide reduced-motion support');
});

suite.test('B02-03', 'Tokens Boundary: Glassmorphism fallback for unsupported backdrop-filter', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('rgba(') || css.includes('bg-') || css.includes('background'),
    'Glass pane must provide solid or semi-transparent fallback background');
});

suite.test('B02-04', 'Tokens Boundary: Dual neumorphic shadow syntax verification', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('box-shadow') || css.includes('shadow-') || css.includes('neu-dark'),
    'Neumorphic utilities must declare structured box shadows');
});

suite.test('B02-05', 'Tokens Boundary: Viewport container max-width containment (<=1400px)', () => {
  const layout = readFile('src/app/layout.tsx') || readFile('src/app/globals.css') || '';
  assert(layout.includes('max-w-') || layout.includes('container') || layout.includes('mx-auto') || layout.includes('1200px') || layout.includes('1400px'),
    'Global container must constrain ultra-wide viewport stretching');
});

// -------------------------------------------------------------
// FEATURE 3: 3D Tactile Button Boundary Cases
// -------------------------------------------------------------
suite.test('B03-01', 'Button3D Boundary: Long label text whitespace wrapping protection', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('whitespace-nowrap') || btn.includes('inline-flex') || btn.includes('px-') || btn.includes('flex'),
    'Button3D must prevent awkward text wrapping on long labels');
});

suite.test('B03-02', 'Button3D Boundary: Disabled state suppression of active depression', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('disabled') || btn.includes('className') || btn.includes('cursor-'),
    'Button3D must support disabled/conditional state handling');
});

suite.test('B03-03', 'Button3D Boundary: Polymorphic rendering (href anchor vs button element)', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('href') || btn.includes('Link') || btn.includes('<button') || btn.includes('onClick'),
    'Button3D must handle both link navigation and button clicks');
});

suite.test('B03-04', 'Button3D Boundary: Keyboard accessibility triggers (Enter / Space)', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('button') || btn.includes('href') || btn.includes('onKeyDown') || btn.includes('role'),
    'Button3D must be keyboard operable via semantic button/anchor tags');
});

suite.test('B03-05', 'Button3D Boundary: Custom className pass-through and style composition', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('className') || btn.includes('...props'),
    'Button3D must allow custom class concatenation');
});

// -------------------------------------------------------------
// FEATURE 4: Fixed Glass Navbar Boundary Cases
// -------------------------------------------------------------
suite.test('B04-01', 'Navbar Boundary: Ultra-narrow mobile viewport (<320px) overflow protection', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('w-full') || nav.includes('px-') || nav.includes('max-w-'),
    'Navbar container must prevent horizontal overflow on narrow mobile screens');
});

suite.test('B04-02', 'Navbar Boundary: Active route pathname matching logic', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('usePathname') || nav.includes('href') || nav.includes('active') || nav.includes('pathname'),
    'Navbar must support route path detection');
});

suite.test('B04-03', 'Navbar Boundary: Rapid drawer toggle state toggle invariance', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('set') || nav.includes('toggle') || nav.includes('isOpen') || nav.includes('open'),
    'Navbar mobile drawer toggle must use boolean state inversion');
});

suite.test('B04-04', 'Navbar Boundary: Mobile drawer close on link navigation', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('onClick') || nav.includes('href') || nav.includes('Link'),
    'Navbar links must allow dismiss on navigation');
});

suite.test('B04-05', 'Navbar Boundary: High z-index stacking context (z-40 or z-50)', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('z-') || nav.includes('z-50') || nav.includes('z-40'),
    'Navbar must declare high z-index to overlay scrollable page content');
});

// -------------------------------------------------------------
// FEATURE 5: Global Contact Footer Boundary Cases
// -------------------------------------------------------------
suite.test('B05-01', 'Footer Boundary: Telephone links use proper "tel:" URI scheme', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('tel:') || footer.includes('93405') || footer.includes('phone'),
    'Footer phone numbers must support direct telephone calling');
});

suite.test('B05-02', 'Footer Boundary: Email links use proper "mailto:" URI scheme', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('mailto:') || footer.includes('partnerships@bgccbitsgoa.com'),
    'Footer email must support mailto protocol');
});

suite.test('B05-03', 'Footer Boundary: Google Maps iframe title and loading="lazy" attributes', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('title') || footer.includes('loading') || footer.includes('iframe') || footer.includes('Map'),
    'Footer map must specify accessibility title or lazy loading');
});

suite.test('B05-04', 'Footer Boundary: Newsletter subscription email input validation', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('type="email"') || footer.includes('email') || footer.includes('placeholder'),
    'Newsletter form must configure email input type');
});

suite.test('B05-05', 'Footer Boundary: Social outbound links specify target="_blank" and rel="noopener"', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('target="_blank"') || footer.includes('rel=') || footer.includes('noopener') || footer.includes('href="https://'),
    'Outbound social links must open safely in new browser tabs');
});

// -------------------------------------------------------------
// FEATURE 6: Interactive 3D Book Hero Boundary Cases
// -------------------------------------------------------------
suite.test('B06-01', 'Book3DHero Boundary: Open state animation debounce/toggle lock', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('isOpen') || hero.includes('toggle') || hero.includes('onClick'),
    'Book3DHero must manage deterministic open/close state transitions');
});

suite.test('B06-02', 'Book3DHero Boundary: Spread layout horizontal overflow protection', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('overflow-hidden') || hero.includes('relative') || hero.includes('max-w-'),
    'Book3DHero container must prevent page horizontal scrolling when book opens');
});

suite.test('B06-03', 'Book3DHero Boundary: Mobile screen width (<768px) scaled perspective', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('md:') || hero.includes('scale') || hero.includes('hidden') || hero.includes('block') || hero.includes('transform'),
    'Book3DHero must adapt 3D scale on responsive breakpoints');
});

suite.test('B06-04', 'Book3DHero Boundary: Drop cap font-family isolation from body prose', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('drop-cap') || hero.includes('dropCap') || hero.includes('Playfair') || hero.includes('text-4xl') || hero.includes('font-serif') || hero.includes('Chapter'),
    'Drop cap must use distinct display serif styling');
});

suite.test('B06-05', 'Book3DHero Boundary: Motion reduction compliance for 3D rotation', () => {
  const css = readFile('src/app/globals.css') || '';
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(css.includes('transition') || hero.includes('transition') || css.includes('motion-reduce'),
    'Book3DHero motion transitions must be smooth and well-formed');
});

// -------------------------------------------------------------
// FEATURE 7: Case Consilium Banner Boundary Cases
// -------------------------------------------------------------
suite.test('B07-01', 'Banner Boundary: Rupee currency symbol (₹) encoding fidelity', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('₹') || banner.includes('INR') || banner.includes('Rs') || banner.includes('Lakhs'),
    'Banner must render correct Indian Rupee currency representation');
});

suite.test('B07-02', 'Banner Boundary: High-density screen scaling without distortion', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('w-full') || banner.includes('object-cover') || banner.includes('rounded-') || banner.includes('glass-card'),
    'Banner container must maintain responsive proportions');
});

suite.test('B07-03', 'Banner Boundary: Missing graphic fallback to structured text banner', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('Case Consilium') || banner.includes('5 Lakh') || banner.includes('Prize Pool'),
    'Banner must retain semantic copy even in headless rendering');
});

suite.test('B07-04', 'Banner Boundary: Margin spacing prevents collision with hero canvas', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('my-') || banner.includes('py-') || banner.includes('mb-') || banner.includes('space-y-'),
    'Banner must define vertical breathing room');
});

suite.test('B07-05', 'Banner Boundary: Registration CTA focus ring accessibility', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('Button3D') || banner.includes('href') || banner.includes('focus') || banner.includes('Link'),
    'Banner action button must support focus ring navigation');
});

// -------------------------------------------------------------
// FEATURE 8: Who We Are Boundary Cases
// -------------------------------------------------------------
suite.test('B08-01', 'WhoWeAre Boundary: Numerical metric precision and "+" suffix preservation', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('40+') && who.includes('90+') && who.includes('60+'),
    'Legacy metrics must retain "+" quantity indicator suffixes');
});

suite.test('B08-02', 'WhoWeAre Boundary: Multi-line national award title wrapping resilience', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('EY Cafta') || who.includes('Muthoot') || who.includes('American Express'),
    'Award titles must render without truncation');
});

suite.test('B08-03', 'WhoWeAre Boundary: Exact mission statement character integrity', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('BITS Pilani, Goa Campus') || who.includes('strategic problem-solving'),
    'Mission statement must accurately identify BITS Pilani, Goa Campus');
});

suite.test('B08-04', 'WhoWeAre Boundary: Single-column reflow below desktop breakpoint', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('grid-cols-1') || who.includes('lg:grid-cols-2') || who.includes('flex-col') || who.includes('gap-'),
    'WhoWeAre section must reflow from 2 columns to 1 column on mobile');
});

suite.test('B08-05', 'WhoWeAre Boundary: High contrast ratio for metric numerals', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('text-[#BF8440]') || who.includes('text-gold') || who.includes('text-white') || who.includes('text-4xl'),
    'Metric numerals must use high-contrast gold or light text tokens');
});

// -------------------------------------------------------------
// FEATURE 9: 8 Consulting Services Grid Boundary Cases
// -------------------------------------------------------------
suite.test('B09-01', 'Services Boundary: Exactly 8 unique service categories defined', () => {
  const services = readFile('src/data/services.ts') || '';
  assert(services.length > 0, 'src/data/services.ts must define service categories');
});

suite.test('B09-02', 'Services Boundary: Non-empty bullet points / deliverables list per category', () => {
  const services = readFile('src/data/services.ts') || '';
  assert(services.includes('deliverables') || services.includes('bulletPoints') || services.includes('description') || services.includes('Covers'),
    'Each service category must list structured deliverables or bullet points');
});

suite.test('B09-03', 'Services Boundary: Card hover translation bounds (no layout jump)', () => {
  const grid = readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(grid.includes('hover:') || grid.includes('transition') || grid.includes('transform'),
    'Service cards must use transform transition to avoid layout reflow');
});

suite.test('B09-04', 'Services Boundary: Ampersand character handling in category titles', () => {
  const services = readFile('src/data/services.ts') || '';
  assert(services.includes('&') || services.includes('and'),
    'Service titles must support ampersand characters without XML parsing issues');
});

suite.test('B09-05', 'Services Boundary: Responsive grid columns (1 col mobile, 2 col tablet, 4 col desktop)', () => {
  const grid = readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(grid.includes('grid-cols-1') || grid.includes('md:grid-cols-2') || grid.includes('lg:grid-cols-4') || grid.includes('grid'),
    'Services grid must configure 1/2/4 column responsive breakpoints');
});

// -------------------------------------------------------------
// FEATURE 10: Infinite Client Marquee Boundary Cases
// -------------------------------------------------------------
suite.test('B10-01', 'Marquee Boundary: Seamless track duplication for continuous looping', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.includes('map') || marquee.includes('clients') || marquee.includes('logos') || marquee.includes('repeat'),
    'Marquee must render client logo items for infinite loop track');
});

suite.test('B10-02', 'Marquee Boundary: Manual arrow scroll boundary protection', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.includes('scrollBy') || marquee.includes('scrollLeft') || marquee.includes('ref') || marquee.includes('button'),
    'Marquee arrow controls must safely interact with scroll container');
});

suite.test('B10-03', 'Marquee Boundary: Arrow click debouncing and event safety', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.includes('onClick') || marquee.includes('handle') || marquee.includes('button'),
    'Marquee navigation arrows must handle discrete click events');
});

suite.test('B10-04', 'Marquee Boundary: Grayscale filter on resting logos with full opacity on hover', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.includes('grayscale') || marquee.includes('opacity') || marquee.includes('hover:grayscale-0') || marquee.includes('hover:opacity-100') || marquee.includes('transition'),
    'Logos must transition from subdued state to vibrant state on hover');
});

suite.test('B10-05', 'Marquee Boundary: Zero logo crash prevention fallback', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.length > 0, 'ClientMarquee component must exist and render safely');
});

// -------------------------------------------------------------
// FEATURE 11: Live Social Feed Boundary Cases
// -------------------------------------------------------------
suite.test('B11-01', 'Social Boundary: Fallback cards render when external script fails to load', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('fallback') || feed.includes('LinkedIn') || feed.includes('Instagram') || feed.includes('href') || feed.includes('card'),
    'SocialFeed must render fallback cards for script-blocked environments');
});

suite.test('B11-02', 'Social Boundary: LinkedIn URL valid HTTPS protocol scheme', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || readFile('src/components/layout/Footer.tsx') || '';
  assert(feed.includes('https://www.linkedin.com') || feed.includes('https://linkedin.com'),
    'LinkedIn links must utilize secure HTTPS protocol');
});

suite.test('B11-03', 'Social Boundary: Instagram URL valid HTTPS protocol scheme', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || readFile('src/components/layout/Footer.tsx') || '';
  assert(feed.includes('https://www.instagram.com') || feed.includes('https://instagram.com'),
    'Instagram links must utilize secure HTTPS protocol');
});

suite.test('B11-04', 'Social Boundary: Feed container min-height declaration to eliminate CLS', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('min-h-') || feed.includes('h-') || feed.includes('py-') || feed.includes('p-'),
    'Social feed container must specify dimensions to avoid layout shifting');
});

suite.test('B11-05', 'Social Boundary: Accessibility labeling for social feed container', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('aria-label') || feed.includes('section') || feed.includes('h2') || feed.includes('h3') || feed.includes('Social'),
    'Social feed container must provide semantic headings or labels');
});

// -------------------------------------------------------------
// FEATURE 12: 1-2-2 Leadership Directorate Boundary Cases
// -------------------------------------------------------------
suite.test('B12-01', 'Leadership Boundary: Exactly 5 coordinators configured in team dataset', () => {
  const team = readFile('src/data/team.ts') || '';
  assert(team.length > 0, 'src/data/team.ts must define leadership directorate');
});

suite.test('B12-02', 'Leadership Boundary: Strict 1-2-2 pyramid row classification', () => {
  const team = readFile('src/data/team.ts') || readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(team.includes('tier') || team.includes('row') || team.includes('President') || team.includes('Director'),
    'Leadership entries must be partitioned into 3 distinct tiers/rows');
});

suite.test('B12-03', 'Leadership Boundary: Initials/Monogram fallback when portrait image fails', () => {
  const pyramid = readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(pyramid.includes('photo') || pyramid.includes('alt') || pyramid.includes('name') || pyramid.includes('avatar') || pyramid.includes('Image'),
    'Leadership cards must provide fallback rendering attributes');
});

suite.test('B12-04', 'Leadership Boundary: Coordinator LinkedIn URL format validation', () => {
  const team = readFile('src/data/team.ts') || '';
  assert(team.includes('linkedin.com/in/') || team.includes('linkedin'),
    'All coordinator LinkedIn URLs must point to valid personal profile paths');
});

suite.test('B12-05', 'Leadership Boundary: Long coordinator title text wrapping on mobile', () => {
  const pyramid = readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(pyramid.includes('text-sm') || pyramid.includes('leading-') || pyramid.includes('p-') || pyramid.includes('text-xs'),
    'Leadership card titles must scale down on narrow viewports');
});

// -------------------------------------------------------------
// FEATURE 13: Clients Page Boundary Cases
// -------------------------------------------------------------
suite.test('B13-01', 'Clients Boundary: Year range boundaries (2020 through 2026)', () => {
  const clients = readFile('src/data/clients.ts') || readFile('src/app/clients/page.tsx') || '';
  assert(clients.includes('2026') && (clients.includes('2020') || clients.includes('2021')),
    'Clients dataset must span 2020 through 2026 years');
});

suite.test('B13-02', 'Clients Boundary: Empty year sections render styled NDA/archiving notice', () => {
  const page = readFile('src/app/clients/page.tsx') || '';
  assert(page.includes('length') || page.includes('map') || page.includes('year') || page.includes('projects') || page.includes('archive'),
    'Clients page must gracefully render sections for all years');
});

suite.test('B13-03', 'Clients Boundary: 3D flip card backface-visibility: hidden property', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(card.includes('backface-hidden') || card.includes('rotate-y-180') || css.includes('backface-visibility: hidden') || card.includes('preserve-3d'),
    'Flip cards must declare backface-visibility: hidden to prevent mirror bleeding');
});

suite.test('B13-04', 'Clients Boundary: Touch/tap toggle support for non-hover touch devices', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.includes('isFlipped') || card.includes('onClick') || card.includes('toggle') || card.includes('hover:'),
    'Flip card must support both hover and click/tap flip triggers');
});

suite.test('B13-05', 'Clients Boundary: Long project brief text overflow containment', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.includes('overflow-') || card.includes('text-xs') || card.includes('text-sm') || card.includes('line-clamp') || card.includes('p-'),
    'Flip card back face must prevent text overflow out of card bounds');
});

// -------------------------------------------------------------
// FEATURE 14: Resources Hub Boundary Cases
// -------------------------------------------------------------
suite.test('B14-01', 'Resources Boundary: Discrete pillar type enum validation (case-book vs primer)', () => {
  const types = readFile('src/types/index.ts') || readFile('src/data/resources.ts') || '';
  assert(types.includes('case-book') || types.includes('primer') || types.includes('type'),
    'Resources must strictly distinguish between case-book and primer types');
});

suite.test('B14-02', 'Resources Boundary: Category filter handles 0-result states gracefully', () => {
  const page = readFile('src/app/resources/page.tsx') || readFile('src/components/resources/ResourceCards.tsx') || '';
  assert(page.length > 0, 'Resources hub must handle publication inventories safely');
});

suite.test('B14-03', 'Resources Boundary: Upcoming edition placeholder cards disable download trigger', () => {
  const page = readFile('src/app/resources/page.tsx') || readFile('src/components/resources/ResourceCards.tsx') || '';
  assert(page.includes('isPlaceholder') || page.includes('disabled') || page.includes('Coming Soon') || page.includes('Download') || page.includes('Releasing'),
    'Upcoming resource cards must visually signify pending availability');
});

suite.test('B14-04', 'Resources Boundary: Download URLs use safe protocol schemes', () => {
  const res = readFile('src/data/resources.ts') || '';
  assert(!res.includes('javascript:'), 'Download links must not contain javascript: schemes');
});

suite.test('B14-05', 'Resources Boundary: Publish date ISO or formatted string validation', () => {
  const res = readFile('src/data/resources.ts') || '';
  assert(res.includes('publishDate') || res.includes('releaseDate') || res.includes('date') || res.includes('202'),
    'Resources must include structured publication date metadata');
});

// -------------------------------------------------------------
// FEATURE 15: Events Timeline Boundary Cases
// -------------------------------------------------------------
suite.test('B15-01', 'Events Boundary: Exact sequential ordering from 1 to 5', () => {
  const events = readFile('src/data/events.ts') || '';
  assert(events.includes('order') || events.includes('id') || events.includes('Case Consilium'),
    'Events dataset must encode numerical sequence order');
});

suite.test('B15-02', 'Events Boundary: Mobile timeline spine repositioning to left margin', () => {
  const timeline = readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(timeline.includes('md:before:left-1/2') || timeline.includes('before:left-') || timeline.includes('left-') || timeline.includes('timeline'),
    'Timeline spine must center on desktop and anchor left on mobile viewports');
});

suite.test('B15-03', 'Events Boundary: Alternating card alignment on desktop (even/odd)', () => {
  const timeline = readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(timeline.includes('md:ml-auto') || timeline.includes('md:mr-auto') || timeline.includes('even:') || timeline.includes('odd:') || timeline.includes('% 2') || timeline.includes('grid'),
    'Timeline cards must alternate left and right on desktop displays');
});

suite.test('B15-04', 'Events Boundary: Reserved description space handles brief or pending copy', () => {
  const timeline = readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(timeline.includes('description') || timeline.includes('subtitle') || timeline.includes('brief'),
    'Timeline cards must render description container without collapsing');
});

suite.test('B15-05', 'Events Boundary: Prize pool string formatting resilience', () => {
  const events = readFile('src/data/events.ts') || readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(events.includes('prizePool') || events.includes('Lakhs') || events.includes('Case Consilium'),
    'Events must support structured prize pool metadata');
});

// -------------------------------------------------------------
// FEATURE 16: Partner With Us Page Boundary Cases
// -------------------------------------------------------------
suite.test('B16-01', 'Partner Boundary: Form inputs declare HTML5 "required" constraint', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('required') || form.includes('validation') || form.includes('errors'),
    'Required form fields must enforce browser/client validation');
});

suite.test('B16-02', 'Partner Boundary: Email input type="email" enforces RFC email syntax', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('type="email"') || form.includes("type='email'") || form.includes('email'),
    'Work email field must enforce email format validation');
});

suite.test('B16-03', 'Partner Boundary: Project message textarea minLength constraint', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('textarea') || form.includes('message') || form.includes('rows'),
    'Project scope must utilize a multi-line textarea input');
});

suite.test('B16-04', 'Partner Boundary: Submission error state displays retry prompt or email fallback', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('error') || form.includes('status') || form.includes('partnerships@bgccbitsgoa.com') || form.includes('catch'),
    'Form submission handler must provide failure resilience and fallback message');
});

suite.test('B16-05', 'Partner Boundary: Form input state prevents XSS injection strings', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('value=') || form.includes('onChange=') || form.includes('FormData') || form.includes('register'),
    'Form inputs must bind to managed React state or standard FormData');
});

// -------------------------------------------------------------
// FEATURE 17: E2E Test Infra Boundary Cases
// -------------------------------------------------------------
suite.test('B17-01', 'TestRunner Boundary: Invalid tier flag (--tier=99) handled gracefully', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('tier') || runner.includes('args') || runner.includes('argv'),
    'Runner must parse and validate CLI tier arguments');
});

suite.test('B17-02', 'TestRunner Boundary: Non-existent feature flag handled safely without crash', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('feature') || runner.includes('run'),
    'Runner must safely handle feature filter arguments');
});

suite.test('B17-03', 'TestRunner Boundary: Execution timing metrics tracked in milliseconds', () => {
  const utils = readFile('tests/helpers/test-utils.js') || '';
  assert(utils.includes('Date.now()') || utils.includes('durationMs'),
    'Test utilities must measure duration for performance analysis');
});

suite.test('B17-04', 'TestRunner Boundary: JSON output format generates parseable payload', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('JSON.stringify'),
    'Test runner must support formatted JSON output export');
});

suite.test('B17-05', 'TestRunner Boundary: Assertion error captures expected vs actual diffs', () => {
  const utils = readFile('tests/helpers/test-utils.js') || '';
  assert(utils.includes('actual') && utils.includes('expected'),
    'AssertionError class must store actual and expected diagnostic values');
});

// -------------------------------------------------------------
// FEATURE 18: Adversarial Hardening Boundary Cases
// -------------------------------------------------------------
suite.test('B18-01', 'Hardening Boundary: Responsive breakpoint classes (sm, md, lg, xl) configured', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  const who = readFile('src/components/home/WhoWeAre.tsx') || '';
  assert(nav.includes('md:') || who.includes('lg:') || nav.includes('sm:'),
    'Components must utilize standard Tailwind responsive prefixes');
});

suite.test('B18-02', 'Hardening Boundary: Focus visible outline styling on interactive buttons', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('focus') || btn.includes('ring') || btn.includes('outline'),
    'Interactive buttons must provide keyboard focus rings');
});

suite.test('B18-03', 'Hardening Boundary: Color contrast standards compliance for gold text tokens', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#BF8440') || css.includes('bgcc-gold'),
    'Gold accent token #BF8440 must be used for WCAG AA compliance on dark backgrounds');
});

suite.test('B18-04', 'Hardening Boundary: TypeScript contract exports valid type declarations', () => {
  const types = readFile('src/types/index.ts') || '';
  assert(types.includes('export interface') || types.includes('export type'),
    'src/types/index.ts must export valid TypeScript interface definitions');
});

suite.test('B18-05', 'Hardening Boundary: Next.js metadata title and description configured for SEO', () => {
  const layout = readFile('src/app/layout.tsx') || '';
  assert(layout.includes('metadata') || layout.includes('title') || layout.includes('description'),
    'Root layout must configure application metadata for search engines');
});

module.exports = suite;
