const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('====================================================');
console.log(' EMPIRICAL STRESS & INTEGRITY TEST SUITE FOR M1');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function test(name, fn) {
  try {
    fn();
    console.log(' [PASS] ' + name);
    passCount++;
  } catch (err) {
    console.error(' [FAIL] ' + name + ' -> ' + err.message);
    failCount++;
  }
}

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');

// 1. Asset Files Stress Test
test('Public Assets: 29 Client Logos (1.png - 29.png) Exist on Disk and Have Non-Zero Size', () => {
  for (let i = 1; i <= 29; i++) {
    const p = path.join(publicDir, 'assets/logos', i + '.png');
    assert(fs.existsSync(p), 'Missing logo ' + i + '.png');
    const stat = fs.statSync(p);
    assert(stat.size > 100, 'Logo ' + i + '.png is empty or corrupt (' + stat.size + ' bytes)');
  }
});

test('Public Assets: 5 Coordinator Photos Exist on Disk and Have Non-Zero Size', () => {
  const photos = [
    'aryan-gupta.png',
    'samyak-patel.png',
    'gaurav-pawar.png',
    'yashveer-sabharwal.png',
    'vaibhav-singhi.png'
  ];
  photos.forEach(f => {
    const p = path.join(publicDir, 'assets/team', f);
    assert(fs.existsSync(p), 'Missing team photo ' + f);
    assert(fs.statSync(p).size > 100, 'Team photo ' + f + ' is too small');
  });
});

test('Public Assets: Hero Background Image Exists on Disk and is > 10KB', () => {
  const p = path.join(publicDir, 'assets/hero-bg.jpg');
  assert(fs.existsSync(p), 'hero-bg.jpg missing');
  assert(fs.statSync(p).size > 10000, 'hero-bg.jpg size is too small: ' + fs.statSync(p).size);
});

test('Public Fonts: Sprat & Author WOFF2 Font Files Exist on Disk', () => {
  const fonts = [
    'SpratVF.woff2',
    'Sprat-Bold.woff2',
    'Author-Variable.woff2',
    'Author-Regular.woff2'
  ];
  fonts.forEach(f => {
    const p = path.join(publicDir, 'fonts', f);
    assert(fs.existsSync(p), 'Font file ' + f + ' missing in /public/fonts');
    assert(fs.statSync(p).size > 500, 'Font file ' + f + ' is too small');
  });
});

// 2. Data Modules Content Stress Test
test('Data Module: team.ts Content Structure & 1-2-2 Directorate Hierarchy', () => {
  const content = fs.readFileSync(path.join(srcDir, 'data/team.ts'), 'utf8');
  assert(content.includes('Aryan Gupta'), 'Missing Aryan Gupta');
  assert(content.includes('Samyak Patel'), 'Missing Samyak Patel');
  assert(content.includes('Gaurav Pawar M'), 'Missing Gaurav Pawar M');
  assert(content.includes('Yashveer Sabharwal'), 'Missing Yashveer Sabharwal');
  assert(content.includes('Vaibhav Singhi'), 'Missing Vaibhav Singhi');
  
  const topMatches = content.match(/row:\s*'top'/g) || [];
  const midMatches = content.match(/row:\s*'middle'/g) || [];
  const botMatches = content.match(/row:\s*'bottom'/g) || [];
  assert.strictEqual(topMatches.length, 1, 'Expected 1 top coordinator');
  assert.strictEqual(midMatches.length, 2, 'Expected 2 middle coordinators');
  assert.strictEqual(botMatches.length, 2, 'Expected 2 bottom coordinators');
});

test('Data Module: services.ts Defines Exactly 8 Rich Service Categories', () => {
  const content = fs.readFileSync(path.join(srcDir, 'data/services.ts'), 'utf8');
  const ids = ['business-strategy', 'marketing-growth', 'operational-efficiency', 'primary-research', 'ai-consulting', 'product-strategy', 'digital-marketing', 'web-development'];
  ids.forEach(id => {
    assert(content.includes(`id: '${id}'`), 'Missing service id: ' + id);
  });
});

test('Data Module: clients.ts Contains 29 Projects Across All 7 Years (2020-2026)', () => {
  const content = fs.readFileSync(path.join(srcDir, 'data/clients.ts'), 'utf8');
  for (let y = 2020; y <= 2026; y++) {
    assert(content.includes(`year: ${y}`), 'Missing client project for year ' + y);
  }
  for (let c = 1; c <= 29; c++) {
    assert(content.includes(`id: 'client-${c}'`), 'Missing client-' + c);
    assert(content.includes(`/assets/logos/${c}.png`), 'Missing logo reference for client ' + c);
  }
});

test('Data Module: events.ts Contains 5 Flagship Events with Order 1 to 5', () => {
  const content = fs.readFileSync(path.join(srcDir, 'data/events.ts'), 'utf8');
  const expectedEvents = ['Case Consilium', 'HSBC India', 'Case Crackdown', 'Marketing Mayhem', 'Fix the Product'];
  expectedEvents.forEach(ev => {
    assert(content.includes(ev), 'Missing event: ' + ev);
  });
  for (let o = 1; o <= 5; o++) {
    assert(content.includes(`order: ${o}`), 'Missing event order ' + o);
  }
});

test('Data Module: resources.ts Segregates Case Books and Primers', () => {
  const content = fs.readFileSync(path.join(srcDir, 'data/resources.ts'), 'utf8');
  assert(content.includes(`type: 'case-book'`), 'Missing case-book entries');
  assert(content.includes(`type: 'primer'`), 'Missing primer entries');
});

// 3. UI Component Integrity Stress Test
test('UI Component: Button3D.tsx Implements Polymorphic Links, Tactile Classes & Accessibility', () => {
  const content = fs.readFileSync(path.join(srcDir, 'components/ui/Button3D.tsx'), 'utf8');
  assert(content.includes('neu-btn-tactile'), 'Missing tactile styling class');
  assert(content.includes('btn-gold'), 'Missing gold button variant');
  assert(content.includes('glass-pane'), 'Missing glass-pane button variant');
  assert(content.includes('focus-visible:ring-2'), 'Missing focus-visible ring for accessibility');
  assert(content.includes('<Link href={href}'), 'Missing polymorphic Link rendering');
  assert(content.includes('<button'), 'Missing polymorphic button rendering');
  assert(content.includes('disabled &&'), 'Missing disabled state handling');
});

test('Layout Component: Navbar.tsx Implements Fixed Glass Styling, Routing, and Mobile Drawer', () => {
  const content = fs.readFileSync(path.join(srcDir, 'components/layout/Navbar.tsx'), 'utf8');
  const routes = ['/', '/clients', '/resources', '/events', '/partner-with-us'];
  routes.forEach(r => {
    assert(content.includes(`href: '${r}'`) || content.includes(`href="${r}"`), 'Missing route ' + r);
  });
  assert(content.includes('glass-pane'), 'Missing glass-pane styling on navbar container');
  assert(content.includes('backdrop-blur'), 'Missing backdrop-blur');
  assert(content.includes('mobileMenuOpen'), 'Missing mobile menu state');
  assert(content.includes('role="dialog"'), 'Missing mobile drawer a11y dialog role');
  assert(content.includes('aria-modal="true"'), 'Missing mobile drawer aria-modal');
});

test('Layout Component: Footer.tsx Implements 4-Column Layout, Contacts, Maps, and Social Profiles', () => {
  const content = fs.readFileSync(path.join(srcDir, 'components/layout/Footer.tsx'), 'utf8');
  assert(content.includes('partnerships@bgccbitsgoa.com'), 'Missing partnerships email');
  assert(content.includes('+91 93405 97932'), 'Missing primary phone number');
  assert(content.includes('+91 74978 80227'), 'Missing secondary phone number');
  assert(content.includes('Zuarinagar, Sancoale, Goa 403726'), 'Missing BITS Goa address');
  assert(content.includes('https://www.google.com/maps/embed'), 'Missing Google Maps embed');
  assert(content.includes('https://www.linkedin.com/company/bits-goa-consulting-club'), 'Missing LinkedIn profile link');
  assert(content.includes('https://www.instagram.com/bgcc.bitsgoa/'), 'Missing Instagram profile link');
  assert(content.includes('target="_blank"'), 'Missing target _blank on social links');
  assert(content.includes('rel="noopener noreferrer"'), 'Missing rel noopener on social links');
});

test('Global Styles: globals.css Declares Colors, Neumorphic Shadows, Tactile Button Depress, Reduced Motion', () => {
  const content = fs.readFileSync(path.join(srcDir, 'app/globals.css'), 'utf8');
  assert(content.includes('#141414'), 'Missing #141414 charcoal token');
  assert(content.includes('#BF8440'), 'Missing #BF8440 gold token');
  assert(content.includes('#080808'), 'Missing #080808 dark button token');
  assert(content.includes('.neu-btn-tactile:active'), 'Missing active button state');
  assert(content.includes('transform: translateY(4px)'), 'Missing 4px active depression feedback');
  assert(content.includes('.neu-btn-tactile:hover'), 'Missing hover state');
  assert(content.includes('rgba(191, 132, 64'), 'Missing gold hover glow shadow');
  assert(content.includes('@media (prefers-reduced-motion: reduce)'), 'Missing prefers-reduced-motion override');
});

console.log('\n----------------------------------------------------');
console.log(` RESULTS: Passed ${passCount}, Failed ${failCount}`);
console.log('----------------------------------------------------');
if (failCount > 0) process.exit(1);
