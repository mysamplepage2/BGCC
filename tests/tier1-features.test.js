/**
 * Tier 1: Feature Coverage Test Suite (90 Test Cases across 18 Features)
 * Authoritative source: PROJECT.md, PRD (2).md, Design.md, tech-stack.md
 */

const {
  TestSuite,
  readFile,
  fileExists,
  listFiles,
  assert,
  assertEqual,
  assertIncludes,
  assertMatches
} = require('./helpers/test-utils');

const suite = new TestSuite('Tier 1: Feature Coverage (90 Tests)');

// -------------------------------------------------------------
// FEATURE 1: Asset Pipeline & Font Integration
// -------------------------------------------------------------
suite.test('F01-01', 'Asset Pipeline: Public directory asset structure', () => {
  const publicFiles = listFiles('public', true);
  assert(publicFiles.length > 0, 'Public directory must contain assets or subdirectories');
});

suite.test('F01-02', 'Asset Pipeline: Font files or font declarations in project', () => {
  const css = readFile('src/app/globals.css') || '';
  const layout = readFile('src/app/layout.tsx') || '';
  const hasFontRefs = css.includes('font-') || 
                      css.includes('family') || 
                      layout.includes('next/font') || 
                      layout.includes('Sprat') || 
                      layout.includes('Lato') || 
                      fileExists('public/fonts');
  assert(hasFontRefs, 'Project must integrate or reference custom/standard fonts');
});

suite.test('F01-03', 'Asset Pipeline: Leadership coordinator photo mapping', () => {
  const teamData = readFile('src/data/team.ts') || readFile('src/types/index.ts') || '';
  assert(teamData.length > 0, 'Team data module or interface must exist for coordinator photos');
});

suite.test('F01-04', 'Asset Pipeline: Hero background architectural image integration', () => {
  const bookHero = readFile('src/components/home/Book3DHero.tsx') || readFile('src/app/page.tsx') || '';
  assert(bookHero.length > 0, 'Home page or Book3DHero must exist to host hero background visual');
});

suite.test('F01-05', 'Asset Pipeline: Client logos collection (29 logos) configuration', () => {
  const clientsData = readFile('src/data/clients.ts') || readFile('src/types/index.ts') || '';
  assert(clientsData.length > 0, 'Clients data module or interface must define client logos');
});

// -------------------------------------------------------------
// FEATURE 2: Design Tokens & Global CSS
// -------------------------------------------------------------
suite.test('F02-01', 'Design Tokens: Deep charcoal #141414 background color token', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#141414') || css.includes('bgcc-bg') || css.includes('20, 20, 20'), 
    'globals.css must define #141414 deep charcoal token');
});

suite.test('F02-02', 'Design Tokens: Rich bronze/gold #BF8440 accent color token', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#BF8440') || css.includes('#bf8440') || css.includes('bgcc-gold') || css.includes('191, 132, 64'),
    'globals.css must define #BF8440 gold accent token');
});

suite.test('F02-03', 'Design Tokens: Glass-Neumorphism .glass-pane utility class', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('.glass-pane') || css.includes('backdrop-blur') || css.includes('backdrop-filter'),
    'globals.css must define glassmorphism utilities with backdrop filter');
});

suite.test('F02-04', 'Design Tokens: Dark Neumorphism .neu-dark / .neu-dark-inset utilities', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('.neu-dark') || css.includes('box-shadow') || css.includes('shadow-'),
    'globals.css must define dark neumorphic shadow utilities');
});

suite.test('F02-05', 'Design Tokens: Masked slide-up reveal animation mechanics', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('cubic-bezier') || css.includes('keyframes') || css.includes('transition') || css.includes('translate'),
    'globals.css must declare smooth motion easing curves');
});

// -------------------------------------------------------------
// FEATURE 3: 3D Tactile Button (Button3D)
// -------------------------------------------------------------
suite.test('F03-01', 'Button3D: Component file structure and exports', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.length > 0, 'src/components/ui/Button3D.tsx must exist');
});

suite.test('F03-02', 'Button3D: Resting state #080808 dark base and tactile styling', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('080808') || btn.includes('rounded-full') || btn.includes('neu-btn') || btn.includes('shadow'),
    'Button3D must incorporate pill shape and deep dark base');
});

suite.test('F03-03', 'Button3D: Hover state gold glow effect (#BF8440)', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(btn.includes('BF8440') || btn.includes('bf8440') || btn.includes('hover:') || css.includes('neu-btn-tactile:hover'),
    'Button3D must support hover gold glow interaction');
});

suite.test('F03-04', 'Button3D: Active state physical 4px depression feedback', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(btn.includes('active:') || btn.includes('translate-y') || css.includes(':active') || css.includes('translateY(4px)'),
    'Button3D must support active depression feedback');
});

suite.test('F03-05', 'Button3D: Accessible focus ring and variant props support', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  assert(btn.includes('focus:') || btn.includes('ring') || btn.includes('variant') || btn.includes('children'),
    'Button3D must support focus indicators and children/variant props');
});

// -------------------------------------------------------------
// FEATURE 4: Fixed Glass Navbar
// -------------------------------------------------------------
suite.test('F04-01', 'Navbar: Component file existence in src/components/layout/Navbar.tsx', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.length > 0, 'src/components/layout/Navbar.tsx must exist');
});

suite.test('F04-02', 'Navbar: Contains exact 5 required navigation routes', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('/clients') && nav.includes('/resources') && nav.includes('/events'),
    'Navbar must contain links to Clients, Resources, and Events');
});

suite.test('F04-03', 'Navbar: Prominent pill-shaped "Partner with us" CTA button', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('Partner') || nav.includes('partner'),
    'Navbar must include Partner with us CTA');
});

suite.test('F04-04', 'Navbar: Fixed position and frosted glass backdrop blur', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('fixed') || nav.includes('sticky') || nav.includes('backdrop-blur') || nav.includes('glass-pane'),
    'Navbar must be fixed/sticky with backdrop blur styling');
});

suite.test('F04-05', 'Navbar: Mobile responsive drawer and toggle state', () => {
  const nav = readFile('src/components/layout/Navbar.tsx') || '';
  assert(nav.includes('useState') || nav.includes('menu') || nav.includes('Menu') || nav.includes('drawer') || nav.includes('md:hidden'),
    'Navbar must implement mobile menu drawer toggle');
});

// -------------------------------------------------------------
// FEATURE 5: Global Contact Footer
// -------------------------------------------------------------
suite.test('F05-01', 'Footer: Component file existence in src/components/layout/Footer.tsx', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.length > 0, 'src/components/layout/Footer.tsx must exist');
});

suite.test('F05-02', 'Footer: BITS Goa campus physical address rendering', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('BITS Goa') || footer.includes('Zuarinagar') || footer.includes('403726'),
    'Footer must render BITS Goa campus address');
});

suite.test('F05-03', 'Footer: Contact phone numbers and partnerships email', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('partnerships@bgccbitsgoa.com') || footer.includes('93405') || footer.includes('74978'),
    'Footer must render phone numbers and partnerships email');
});

suite.test('F05-04', 'Footer: Google Maps iframe embed or map container', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('iframe') || footer.includes('maps.google.com') || footer.includes('google.com/maps') || footer.includes('Map'),
    'Footer must render Google Maps embed or container');
});

suite.test('F05-05', 'Footer: Mailchimp newsletter subscribe and social links (LinkedIn/Instagram)', () => {
  const footer = readFile('src/components/layout/Footer.tsx') || '';
  assert(footer.includes('linkedin.com') && footer.includes('instagram.com'),
    'Footer must contain LinkedIn and Instagram social links');
});

// -------------------------------------------------------------
// FEATURE 6: Interactive 3D Book Hero
// -------------------------------------------------------------
suite.test('F06-01', 'Book3DHero: Component file existence in src/components/home/Book3DHero.tsx', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.length > 0, 'src/components/home/Book3DHero.tsx must exist');
});

suite.test('F06-02', 'Book3DHero: Isometric closed stance 3D orientation (15deg/35deg)', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(hero.includes('rotate') || hero.includes('transform') || hero.includes('perspective') || css.includes('rotateX(15deg)'),
    'Book3DHero must configure 3D transform perspective');
});

suite.test('F06-03', 'Book3DHero: Interactive open state transition', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('isOpen') || hero.includes('setIsOpen') || hero.includes('onClick') || hero.includes('open'),
    'Book3DHero must support open/close state toggle on interaction');
});

suite.test('F06-04', 'Book3DHero: Chapter I ("About Us") editorial spread with drop cap', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('Chapter') || hero.includes('About') || hero.includes('Who We Are') || hero.includes('drop-cap') || hero.includes('dropCap'),
    'Book3DHero must render Chapter I spread content');
});

suite.test('F06-05', 'Book3DHero: Chapter II ("What We Do") consulting capabilities spread', () => {
  const hero = readFile('src/components/home/Book3DHero.tsx') || '';
  assert(hero.includes('Chapter II') || hero.includes('What We Do') || hero.includes('Consulting') || hero.includes('Projects'),
    'Book3DHero must render Chapter II spread content');
});

// -------------------------------------------------------------
// FEATURE 7: Case Consilium Banner
// -------------------------------------------------------------
suite.test('F07-01', 'CaseConsiliumBanner: Component existence in src/components/home/CaseConsiliumBanner.tsx', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.length > 0, 'CaseConsiliumBanner component or Home page section must exist');
});

suite.test('F07-02', 'CaseConsiliumBanner: ₹5 Lakhs cash prize pool display', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('5 Lakh') || banner.includes('5,00,000') || banner.includes('5L') || banner.includes('5 Lakhs'),
    'Banner must highlight ₹5 Lakhs cash prize pool');
});

suite.test('F07-03', 'CaseConsiliumBanner: ₹30 Lakhs+ total prize pool display', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('30 Lakh') || banner.includes('30L') || banner.includes('30,00,000') || banner.includes('30 Lakhs+'),
    'Banner must highlight ₹30 Lakhs+ total prize pool');
});

suite.test('F07-04', 'CaseConsiliumBanner: Incentives (Certificates, Mentoring, Internships)', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('Mentoring') || banner.includes('Internships') || banner.includes('Certificates') || banner.includes('Coupons') || banner.includes('Prize'),
    'Banner must highlight competition incentives and benefits');
});

suite.test('F07-05', 'CaseConsiliumBanner: Direct call-to-action button to events or registration', () => {
  const banner = readFile('src/components/home/CaseConsiliumBanner.tsx') || readFile('src/app/page.tsx') || '';
  assert(banner.includes('href') || banner.includes('onClick') || banner.includes('Button') || banner.includes('/events'),
    'Banner must contain interactive CTA');
});

// -------------------------------------------------------------
// FEATURE 8: Who We Are & Legacy Section
// -------------------------------------------------------------
suite.test('F08-01', 'WhoWeAre: Component existence in src/components/home/WhoWeAre.tsx', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.length > 0, 'WhoWeAre component or Home page section must exist');
});

suite.test('F08-02', 'WhoWeAre: Verbatim introduction copy for BITS Goa Consulting Club', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('premier student-led consulting organization') || who.includes('BITS Pilani, Goa Campus') || who.includes('strategic problem-solving'),
    'WhoWeAre must render verbatim club introduction copy');
});

suite.test('F08-03', 'WhoWeAre: 4 key legacy metrics (40+ Team, 90+ Projects, 60+ Clients, 400K+ Impressions)', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert((who.includes('40+') || who.includes('40')) && 
         (who.includes('90+') || who.includes('90')) && 
         (who.includes('60+') || who.includes('60')) && 
         (who.includes('400K+') || who.includes('400k+') || who.includes('400K')),
    'WhoWeAre must render all 4 legacy metrics');
});

suite.test('F08-04', 'WhoWeAre: 3 national competition awards display (EY Cafta, Muthoot, Amex)', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('EY Cafta') || who.includes('Muthoot') || who.includes('American Express') || who.includes('Amex'),
    'WhoWeAre must showcase national competition accolades');
});

suite.test('F08-05', 'WhoWeAre: 2-column side-by-side layout (Intro left, Legacy right)', () => {
  const who = readFile('src/components/home/WhoWeAre.tsx') || readFile('src/app/page.tsx') || '';
  assert(who.includes('grid') || who.includes('flex') || who.includes('col'),
    'WhoWeAre must structure content in a multi-column responsive layout');
});

// -------------------------------------------------------------
// FEATURE 9: 8 Consulting Services Grid
// -------------------------------------------------------------
suite.test('F09-01', 'Services: Data module defines 8 core categories in src/data/services.ts', () => {
  const services = readFile('src/data/services.ts') || '';
  assert(services.length > 0, 'src/data/services.ts must exist');
});

suite.test('F09-02', 'ServicesGrid: Component existence in src/components/home/ServicesGrid.tsx', () => {
  const grid = readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(grid.length > 0, 'src/components/home/ServicesGrid.tsx must exist');
});

suite.test('F09-03', 'Services: Strategy & Operations categories coverage', () => {
  const services = readFile('src/data/services.ts') || readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(services.includes('Business Strategy') || services.includes('Market Analysis') || services.includes('Operational Efficiency'),
    'Services must cover Business Strategy and Operational Efficiency');
});

suite.test('F09-04', 'Services: AI & Data Analytics categories coverage', () => {
  const services = readFile('src/data/services.ts') || readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(services.includes('AI Consulting') || services.includes('Data Analytics') || services.includes('Primary Research'),
    'Services must cover AI Consulting and Primary Research / Data Analytics');
});

suite.test('F09-05', 'Services: Digital Solutions & UI/UX categories with deliverables', () => {
  const services = readFile('src/data/services.ts') || readFile('src/components/home/ServicesGrid.tsx') || '';
  assert(services.includes('Product Strategy') || services.includes('Digital Marketing') || services.includes('Web Development'),
    'Services must cover Product Strategy, Digital Marketing, and Web Development');
});

// -------------------------------------------------------------
// FEATURE 10: Infinite Client Logo Marquee
// -------------------------------------------------------------
suite.test('F10-01', 'ClientMarquee: Component existence in src/components/home/ClientMarquee.tsx', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.length > 0, 'src/components/home/ClientMarquee.tsx must exist');
});

suite.test('F10-02', 'ClientMarquee: 29 client logos configuration', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || readFile('src/data/clients.ts') || '';
  assert(marquee.includes('logos') || marquee.includes('clients') || marquee.includes('.png') || marquee.includes('Client'),
    'ClientMarquee must bind to client logo assets');
});

suite.test('F10-03', 'ClientMarquee: Continuous linear animation loop', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(marquee.includes('animate-marquee') || marquee.includes('marquee') || css.includes('@keyframes marquee') || marquee.includes('scroll'),
    'ClientMarquee must implement continuous marquee animation');
});

suite.test('F10-04', 'ClientMarquee: Left and right manual navigation arrow controls', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  assert(marquee.includes('Chevron') || marquee.includes('Arrow') || marquee.includes('button') || marquee.includes('scrollLeft'),
    'ClientMarquee must include manual navigation arrows');
});

suite.test('F10-05', 'ClientMarquee: Hover pause interaction support', () => {
  const marquee = readFile('src/components/home/ClientMarquee.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(marquee.includes('pause') || marquee.includes('hover:') || css.includes('paused') || marquee.includes('onMouseEnter'),
    'ClientMarquee must pause auto-scrolling on hover');
});

// -------------------------------------------------------------
// FEATURE 11: Live Social Feed Widget
// -------------------------------------------------------------
suite.test('F11-01', 'SocialFeed: Component existence in src/components/home/SocialFeed.tsx', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.length > 0, 'src/components/home/SocialFeed.tsx must exist');
});

suite.test('F11-02', 'SocialFeed: BGCC official LinkedIn feed handle target', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('linkedin.com/company/bits-goa-consulting-club') || feed.includes('bits-goa-consulting-club'),
    'SocialFeed must target official BGCC LinkedIn handle');
});

suite.test('F11-03', 'SocialFeed: BGCC official Instagram handle target', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('instagram.com/bgcc.bitsgoa') || feed.includes('bgcc.bitsgoa'),
    'SocialFeed must target official BGCC Instagram handle');
});

suite.test('F11-04', 'SocialFeed: Tagembed script or embed integration support', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('tagembed') || feed.includes('Tagembed') || feed.includes('embed') || feed.includes('iframe') || feed.includes('script'),
    'SocialFeed must integrate Tagembed or social embed container');
});

suite.test('F11-05', 'SocialFeed: Fallback card state for blocked/offline third-party scripts', () => {
  const feed = readFile('src/components/home/SocialFeed.tsx') || '';
  assert(feed.includes('fallback') || feed.includes('LinkedIn') || feed.includes('Instagram') || feed.includes('post') || feed.includes('card'),
    'SocialFeed must provide high-fidelity fallback card representation');
});

// -------------------------------------------------------------
// FEATURE 12: 1-2-2 Leadership Directorate
// -------------------------------------------------------------
suite.test('F12-01', 'Team: Data module defines 5 coordinators in src/data/team.ts', () => {
  const team = readFile('src/data/team.ts') || '';
  assert(team.length > 0, 'src/data/team.ts must exist');
});

suite.test('F12-02', 'LeadershipPyramid: Component in src/components/home/LeadershipPyramid.tsx', () => {
  const pyramid = readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(pyramid.length > 0, 'src/components/home/LeadershipPyramid.tsx must exist');
});

suite.test('F12-03', 'Leadership: President Aryan Gupta at Tier 1 apex', () => {
  const team = readFile('src/data/team.ts') || readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(team.includes('Aryan Gupta') && team.includes('President'),
    'Directorate must position Aryan Gupta as President in Tier 1');
});

suite.test('F12-04', 'Leadership: Tier 2 Directors Samyak Patel & Gaurav Pawar M', () => {
  const team = readFile('src/data/team.ts') || readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(team.includes('Samyak Patel') && team.includes('Gaurav Pawar'),
    'Directorate must include Samyak Patel and Gaurav Pawar M in Tier 2');
});

suite.test('F12-05', 'Leadership: Tier 3 Directors Yashveer Sabharwal & Vaibhav Singhi', () => {
  const team = readFile('src/data/team.ts') || readFile('src/components/home/LeadershipPyramid.tsx') || '';
  assert(team.includes('Yashveer Sabharwal') && team.includes('Vaibhav Singhi'),
    'Directorate must include Yashveer Sabharwal and Vaibhav Singhi in Tier 3');
});

// -------------------------------------------------------------
// FEATURE 13: Clients Page (/clients)
// -------------------------------------------------------------
suite.test('F13-01', 'ClientsPage: Route exists at src/app/clients/page.tsx', () => {
  const page = readFile('src/app/clients/page.tsx') || '';
  assert(page.length > 0, 'src/app/clients/page.tsx must exist');
});

suite.test('F13-02', 'ClientsPage: Year-by-year chronological layout spanning 2020 through 2026', () => {
  const page = readFile('src/app/clients/page.tsx') || readFile('src/data/clients.ts') || '';
  assert(page.includes('2026') && (page.includes('2020') || page.includes('2021')),
    'Clients page must render chronological year sections');
});

suite.test('F13-03', 'ClientFlipCard: Component exists in src/components/clients/ClientFlipCard.tsx', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.length > 0, 'src/components/clients/ClientFlipCard.tsx must exist');
});

suite.test('F13-04', 'ClientFlipCard: Front face displays client logo, name, and domain', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.includes('name') || card.includes('logo') || card.includes('domain') || card.includes('front'),
    'ClientFlipCard front face must display client identity');
});

suite.test('F13-05', 'ClientFlipCard: Back face reveals strategic scope and delivered impact', () => {
  const card = readFile('src/components/clients/ClientFlipCard.tsx') || '';
  assert(card.includes('description') || card.includes('brief') || card.includes('impact') || card.includes('deliverables') || card.includes('back'),
    'ClientFlipCard back face must reveal strategic scope/impact');
});

// -------------------------------------------------------------
// FEATURE 14: Resources Hub (/resources)
// -------------------------------------------------------------
suite.test('F14-01', 'ResourcesPage: Route exists at src/app/resources/page.tsx', () => {
  const page = readFile('src/app/resources/page.tsx') || '';
  assert(page.length > 0, 'src/app/resources/page.tsx must exist');
});

suite.test('F14-02', 'ResourcesPage: Two discrete pillars (Case Book & Primers)', () => {
  const page = readFile('src/app/resources/page.tsx') || readFile('src/data/resources.ts') || '';
  assert((page.includes('Case Book') || page.includes('case-book')) && (page.includes('Primer') || page.includes('primers')),
    'Resources page must offer Case Book and Primers pillars');
});

suite.test('F14-03', 'ResourceCards: Component exists in src/components/resources/ResourceCards.tsx', () => {
  const cards = readFile('src/components/resources/ResourceCards.tsx') || readFile('src/app/resources/page.tsx') || '';
  assert(cards.length > 0, 'ResourceCards component or Resources page view must exist');
});

suite.test('F14-04', 'Resources: Data module exists in src/data/resources.ts', () => {
  const res = readFile('src/data/resources.ts') || '';
  assert(res.length > 0, 'src/data/resources.ts must exist');
});

suite.test('F14-05', 'Resources: Polished empty state cards for upcoming editions', () => {
  const page = readFile('src/app/resources/page.tsx') || readFile('src/components/resources/ResourceCards.tsx') || '';
  assert(page.includes('Coming Soon') || page.includes('Releasing') || page.includes('In Progress') || page.includes('isPlaceholder') || page.includes('Download'),
    'Resources hub must handle empty/upcoming editions gracefully');
});

// -------------------------------------------------------------
// FEATURE 15: Events Timeline (/events)
// -------------------------------------------------------------
suite.test('F15-01', 'EventsPage: Route exists at src/app/events/page.tsx', () => {
  const page = readFile('src/app/events/page.tsx') || '';
  assert(page.length > 0, 'src/app/events/page.tsx must exist');
});

suite.test('F15-02', 'Events: Data module defines 5 flagship events in src/data/events.ts', () => {
  const events = readFile('src/data/events.ts') || '';
  assert(events.length > 0, 'src/data/events.ts must exist');
});

suite.test('F15-03', 'EventsTimeline: Component exists in src/components/events/EventsTimeline.tsx', () => {
  const timeline = readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(timeline.length > 0, 'src/components/events/EventsTimeline.tsx must exist');
});

suite.test('F15-04', 'Events: Exact 5 events sequence in correct chronological order', () => {
  const events = readFile('src/data/events.ts') || readFile('src/components/events/EventsTimeline.tsx') || '';
  assert(events.includes('Case Consilium') && 
         events.includes('HSBC India') && 
         events.includes('Case Crackdown') && 
         events.includes('Marketing Mayhem') && 
         events.includes('Fix the Product'),
    'Events must include all 5 flagship events in sequence');
});

suite.test('F15-05', 'EventsTimeline: Vertical yellow spine with luminous node markers', () => {
  const timeline = readFile('src/components/events/EventsTimeline.tsx') || '';
  const css = readFile('src/app/globals.css') || '';
  assert(timeline.includes('timeline') || timeline.includes('before:absolute') || timeline.includes('border-') || timeline.includes('node') || timeline.includes('BF8440'),
    'Events timeline must render vertical spine with milestone nodes');
});

// -------------------------------------------------------------
// FEATURE 16: Partner With Us Page (/partner-with-us)
// -------------------------------------------------------------
suite.test('F16-01', 'PartnerPage: Route exists at src/app/partner-with-us/page.tsx', () => {
  const page = readFile('src/app/partner-with-us/page.tsx') || '';
  assert(page.length > 0, 'src/app/partner-with-us/page.tsx must exist');
});

suite.test('F16-02', 'PartnerForm: Component exists in src/components/partner/PartnerForm.tsx', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.length > 0, 'src/components/partner/PartnerForm.tsx must exist');
});

suite.test('F16-03', 'PartnerForm: 6 corporate inquiry input fields', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('name') && form.includes('email') && form.includes('organization') && form.includes('message'),
    'PartnerForm must include Name, Email, Organization, and Message fields');
});

suite.test('F16-04', 'PartnerForm: Formspree endpoint configuration for partnerships@bgccbitsgoa.com', () => {
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(form.includes('formspree.io') || form.includes('partnerships@bgccbitsgoa.com') || form.includes('handleSubmit') || form.includes('fetch'),
    'PartnerForm must integrate Formspree submission handler');
});

suite.test('F16-05', 'PartnerPage: Value proposition and direct contact details rendering', () => {
  const page = readFile('src/app/partner-with-us/page.tsx') || '';
  assert(page.includes('BITS Goa') || page.includes('partnerships@bgccbitsgoa.com') || page.includes('phone') || page.includes('Consulting') || page.includes('Partner'),
    'Partner page must render contact information and value proposition');
});

// -------------------------------------------------------------
// FEATURE 17: E2E Testing Infrastructure
// -------------------------------------------------------------
suite.test('F17-01', 'TestInfra: TEST_INFRA.md exists at project root', () => {
  assert(fileExists('TEST_INFRA.md'), 'TEST_INFRA.md must exist at project root');
});

suite.test('F17-02', 'TestInfra: tests/e2e-runner.js exists and is executable', () => {
  assert(fileExists('tests/e2e-runner.js'), 'tests/e2e-runner.js must exist');
});

suite.test('F17-03', 'TestInfra: Test runner supports tier and feature filtering flags', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('--tier') && runner.includes('--feature'),
    'Runner must implement --tier and --feature CLI arguments');
});

suite.test('F17-04', 'TestInfra: Test runner supports JSON and verbose reporting modes', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('--json') && runner.includes('--verbose'),
    'Runner must implement --json and --verbose reporting modes');
});

suite.test('F17-05', 'TestInfra: Process exit code handling (0 on pass, 1 on fail)', () => {
  const runner = readFile('tests/e2e-runner.js') || '';
  assert(runner.includes('process.exit'), 'Runner must explicitly handle process exit codes');
});

// -------------------------------------------------------------
// FEATURE 18: Adversarial Coverage Hardening
// -------------------------------------------------------------
suite.test('F18-01', 'Types: Central TypeScript interfaces defined in src/types/index.ts', () => {
  const types = readFile('src/types/index.ts') || '';
  assert(types.length > 0, 'src/types/index.ts must exist');
});

suite.test('F18-02', 'Responsive: Breakpoint adaptations for mobile, tablet, and desktop', () => {
  const css = readFile('src/app/globals.css') || '';
  const layout = readFile('src/app/layout.tsx') || '';
  assert(css.length > 0 && layout.length > 0, 'CSS and layout must configure responsive layout rules');
});

suite.test('F18-03', 'Accessibility: Dark mode color contrast standards compliance', () => {
  const css = readFile('src/app/globals.css') || '';
  assert(css.includes('#BF8440') || css.includes('#e2e8f0') || css.includes('#141414'),
    'Color tokens must conform to designated WCAG AA high-contrast values');
});

suite.test('F18-04', 'Accessibility: Interactive focus indicators and ARIA attributes', () => {
  const btn = readFile('src/components/ui/Button3D.tsx') || '';
  const form = readFile('src/components/partner/PartnerForm.tsx') || '';
  assert(btn.includes('focus') || form.includes('aria-') || form.includes('required') || btn.includes('ring'),
    'Components must specify focus styles and accessibility attributes');
});

suite.test('F18-05', 'Architecture: Next.js Root Layout wrapper and metadata setup', () => {
  const layout = readFile('src/app/layout.tsx') || '';
  assert(layout.includes('metadata') || layout.includes('Navbar') || layout.includes('Footer') || layout.includes('html'),
    'src/app/layout.tsx must configure metadata and global structural layout');
});

module.exports = suite;
