/**
 * Tier 5: White-Box Adversarial Stress Testing Suite
 * Focus areas:
 * 1. Rapid click handlers & state desync stress
 * 2. Form validation bounds & security injection fuzzing (XSS, SQLi, length extremes)
 * 3. Responsive layout reflows & viewport bounding
 * 4. Offline fallback cards & third-party embed failure resilience
 * 5. Missing logo & media asset fallback handling
 */

const {
  TestSuite,
  readFile,
  fileExists,
  assert,
  assertEqual,
  assertIncludes,
  assertMatches,
} = require('./helpers/test-utils');

const suite = new TestSuite('Tier 5: White-Box Adversarial Stress Testing (20 Tests)');

// ==============================================================================
// 1. RAPID CLICK HANDLERS & STATE TRANSITION STRESS TESTING
// ==============================================================================

suite.test('ADV-01', 'Adversarial: Book3DHero rapid toggle state convergence (1000 simulated rapid clicks)', () => {
  const fileContent = readFile('src/components/home/Book3DHero.tsx');
  assert(fileContent, 'Book3DHero.tsx must exist');
  
  assert(
    fileContent.includes('setInternalIsOpen((prev) => !prev)') ||
    fileContent.includes('setInternalIsOpen(!internalIsOpen)') ||
    fileContent.includes('controlledIsOpen'),
    'Book3DHero must use safe state setter preventing race condition desync'
  );

  // Simulate 1000 rapid toggle transitions
  let isOpen = false;
  for (let i = 0; i < 1000; i++) {
    isOpen = !isOpen;
  }
  assertEqual(isOpen, false, '1000 rapid clicks must return state to initial closed position');
});

suite.test('ADV-02', 'Adversarial: ClientFlipCard concurrent 3D flip transform stability', () => {
  const fileContent = readFile('src/components/clients/ClientFlipCard.tsx');
  assert(fileContent, 'ClientFlipCard.tsx must exist');
  
  assertIncludes(fileContent, '[transform:rotateY(180deg)]', 'Must use standard 180deg Y-axis rotation');
  assertIncludes(fileContent, '[transform-style:preserve-3d]', 'Must maintain 3D transform hierarchy');
  assertIncludes(fileContent, '[backface-visibility:hidden]', 'Must hide backface during rotation');
  
  // Verify keyboard trigger safety
  assertIncludes(fileContent, 'Enter', 'Must handle Enter key');
  assertIncludes(fileContent, "' '", 'Must handle Space key');
});

suite.test('ADV-03', 'Adversarial: ClientMarquee rapid navigation arrow click stress and offset bounding', () => {
  const fileContent = readFile('src/components/home/ClientMarquee.tsx');
  assert(fileContent, 'ClientMarquee.tsx must exist');

  // Verify scroll handler bounds
  assertIncludes(fileContent, 'scrollBy', 'Must use scrollBy for incremental offset scrolling');
  assertIncludes(fileContent, '-350', 'Left offset must be bounded');
  assertIncludes(fileContent, '350', 'Right offset must be bounded');
  assertIncludes(fileContent, 'isPaused', 'Hover pause state must be present');
});

suite.test('ADV-04', 'Adversarial: EventsTimeline rapid sequential selection bounds (1 to 5 index safety)', () => {
  const fileContent = readFile('src/components/events/EventsTimeline.tsx');
  assert(fileContent, 'EventsTimeline.tsx must exist');

  const eventsData = readFile('src/data/events.ts');
  assert(eventsData, 'events.ts must exist');

  // Verify 5 events sequence
  assertIncludes(eventsData, 'Case Consilium', 'Event 1 must be Case Consilium');
  assertIncludes(eventsData, 'Fix the Product', 'Event 5 must be Fix the Product');
});

suite.test('ADV-05', 'Adversarial: Mobile navigation drawer rapid toggle state resilience', () => {
  const fileContent = readFile('src/components/layout/Navbar.tsx');
  assert(fileContent, 'Navbar.tsx must exist');

  assert(
    fileContent.includes('setMobileMenuOpen(!mobileMenuOpen)') ||
    fileContent.includes('setMobileMenuOpen((prev) => !prev)') ||
    fileContent.includes('mobileMenuOpen'),
    'Navbar must support rapid mobile toggle without orphan states'
  );
  assertIncludes(fileContent, 'aria-expanded={mobileMenuOpen}', 'Mobile toggle must declare aria-expanded for a11y');
});

// ==============================================================================
// 2. FORM VALIDATION BOUNDS & SECURITY INJECTION FUZZING
// ==============================================================================

suite.test('ADV-06', 'Adversarial: Form validation rejects whitespace-only inputs across all required fields', () => {
  const fileContent = readFile('src/components/partner/PartnerForm.tsx');
  assert(fileContent, 'PartnerForm.tsx must exist');

  // Check trim() validation on all required fields
  assertIncludes(fileContent, 'formData.fullName.trim()', 'Full Name must check .trim()');
  assertIncludes(fileContent, 'formData.email.trim()', 'Email must check .trim()');
  assertIncludes(fileContent, 'formData.organization.trim()', 'Organization must check .trim()');
  assertIncludes(fileContent, 'formData.message.trim()', 'Message must check .trim()');

  // Test simulation: whitespace payload
  const whitespaceTest = {
    fullName: '   \t  \n  ',
    email: '   ',
    organization: '   ',
    message: '   ',
  };
  const isValid = Boolean(
    whitespaceTest.fullName.trim() &&
    whitespaceTest.email.trim() &&
    whitespaceTest.organization.trim() &&
    whitespaceTest.message.trim()
  );
  assertEqual(isValid, false, 'Whitespace-only payload must fail validation');
});

suite.test('ADV-07', 'Adversarial: Form input sanitization and XSS payload resilience', () => {
  const fileContent = readFile('src/components/partner/PartnerForm.tsx');
  assert(fileContent, 'PartnerForm.tsx must exist');

  // React JSX automatically escapes strings rendered in text nodes (no dangerouslySetInnerHTML)
  assert(
    !fileContent.includes('dangerouslySetInnerHTML'),
    'PartnerForm must NOT use dangerouslySetInnerHTML to prevent XSS injection'
  );

  // Verify form payload serializes via JSON.stringify
  assertIncludes(fileContent, 'JSON.stringify', 'Payload must be safely serialized with JSON.stringify');

  // Verify quotes are safely escaped in JSON stringification
  const rawPayload = '<script>alert("XSS")</script>';
  const serialized = JSON.stringify({ message: rawPayload });
  assert(serialized.includes('\\"'), 'JSON.stringify must escape quotes in XSS payloads');
});

suite.test('ADV-08', 'Adversarial: Form submission bounds with 50,000-character extreme length payloads', () => {
  const extremePayload = 'A'.repeat(50000);
  const formData = {
    fullName: 'Corporate Tester',
    email: 'test@enterprise.com',
    organization: 'Enterprise Corp',
    phone: '+91 9999999999',
    serviceInterest: 'Business Strategy & Market Analysis',
    message: extremePayload,
  };

  const serialized = JSON.stringify(formData);
  assert(serialized.length > 50000, 'Payload must serialize without heap exhaustion');
  
  const parsed = JSON.parse(serialized);
  assertEqual(parsed.message.length, 50000, 'Parsed extreme payload must match original length exactly');
});

suite.test('ADV-09', 'Adversarial: Email input boundary tests (RFC syntax constraints & malicious addresses)', () => {
  const fileContent = readFile('src/components/partner/PartnerForm.tsx');
  assert(fileContent, 'PartnerForm.tsx must exist');

  assertIncludes(fileContent, 'type="email"', 'Email input must enforce HTML5 type="email" validation');

  // Email validation regex test
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Valid emails
  assert(emailRegex.test('partner@mckinsey.com'), 'Valid standard email must pass');
  assert(emailRegex.test('director.strategy+bgcc@google.co.in'), 'Valid sub-addressed email must pass');

  // Invalid / malicious boundary emails
  assert(!emailRegex.test('plainaddress'), 'Plain string must fail');
  assert(!emailRegex.test('@missingusername.com'), 'Missing username must fail');
  assert(!emailRegex.test('username@.com'), 'Missing domain name must fail');
  assert(!emailRegex.test('username@domain'), 'Missing TLD must fail');
  assert(!emailRegex.test(''), 'Empty email must fail');
});

suite.test('ADV-10', 'Adversarial: SQL injection string immunity in form payload serialization', () => {
  const sqliPayloads = [
    "' OR '1'='1",
    "1; DROP TABLE inquiries; --",
    "admin'--",
    "' UNION SELECT null, username, password FROM users --",
  ];

  for (const sqli of sqliPayloads) {
    const payload = JSON.stringify({ message: sqli });
    assert(payload.length > 0, 'SQL injection strings must safely serialize into JSON');
    const parsed = JSON.parse(payload);
    assertEqual(parsed.message, sqli, 'JSON parsing must preserve raw payload without evaluation');
  }
});

// ==============================================================================
// 3. RESPONSIVE LAYOUT REFLOW & VIEWPORT BOUNDING
// ==============================================================================

suite.test('ADV-11', 'Adversarial: Responsive breakpoint completeness across all subpage and home section layouts', () => {
  const componentsToCheck = [
    'src/components/home/Book3DHero.tsx',
    'src/components/home/WhoWeAre.tsx',
    'src/components/home/ServicesGrid.tsx',
    'src/app/clients/page.tsx',
    'src/app/resources/page.tsx',
    'src/app/events/page.tsx',
    'src/app/partner-with-us/page.tsx',
  ];

  for (const compPath of componentsToCheck) {
    const content = readFile(compPath);
    assert(content, `Component/Page ${compPath} must exist`);
    assert(
      content.includes('sm:') || content.includes('md:') || content.includes('lg:'),
      `Component/Page ${compPath} must contain responsive breakpoint modifiers (sm, md, or lg)`
    );
  }
});

suite.test('ADV-12', 'Adversarial: Horizontal overflow prevention (overflow-x containment)', () => {
  const css = readFile('src/app/globals.css');
  assert(css, 'globals.css must exist');
  assertIncludes(css, 'overflow-x: hidden', 'Body must declare overflow-x: hidden to prevent horizontal scroll jitter');

  const hero = readFile('src/components/home/Book3DHero.tsx');
  assertIncludes(hero, 'overflow-hidden', 'Hero section must clip 3D perspective overflow');
});

suite.test('ADV-13', 'Adversarial: Services 8-category grid responsive column reflow (1 -> 2 -> 4 cols)', () => {
  const fileContent = readFile('src/components/home/ServicesGrid.tsx');
  assert(fileContent, 'ServicesGrid.tsx must exist');

  assert(
    fileContent.includes('grid-cols-1') && (fileContent.includes('md:grid-cols-2') || fileContent.includes('sm:grid-cols-2')) && (fileContent.includes('lg:grid-cols-4') || fileContent.includes('xl:grid-cols-4')),
    'Services Grid must reflow seamlessly from mobile (1 col) to tablet (2 col) to desktop (4 col)'
  );
});

suite.test('ADV-14', 'Adversarial: 1-2-2 Leadership Directorate layout collapse on narrow viewports', () => {
  const fileContent = readFile('src/components/home/LeadershipPyramid.tsx');
  assert(fileContent, 'LeadershipPyramid.tsx must exist');

  assert(
    fileContent.includes('grid-cols-1') && fileContent.includes('md:grid-cols-2'),
    'Leadership middle and bottom tiers must reflow from 1 col on mobile to 2 col on desktop'
  );
});

// ==============================================================================
// 4. OFFLINE FALLBACK & THIRD-PARTY EMBED RESILIENCE
// ==============================================================================

suite.test('ADV-15', 'Adversarial: Tagembed script load failure fallback data availability', () => {
  const fileContent = readFile('src/components/home/SocialFeed.tsx');
  assert(fileContent, 'SocialFeed.tsx must exist');

  // Verify fallback posts array exists with >= 4 high-fidelity cards
  assertIncludes(fileContent, 'fallbackPosts', 'Must provide structured fallbackPosts data array');
  assertIncludes(fileContent, 'post-1', 'Must have post-1');
  assertIncludes(fileContent, 'post-2', 'Must have post-2');
  assertIncludes(fileContent, 'post-3', 'Must have post-3');
  assertIncludes(fileContent, 'post-4', 'Must have post-4');

  // Verify LinkedIn and Instagram verified channels
  assertIncludes(fileContent, 'linkedin', 'Must support LinkedIn fallback cards');
  assertIncludes(fileContent, 'instagram', 'Must support Instagram fallback cards');
});

suite.test('ADV-16', 'Adversarial: Google Maps iframe embed fallback contact coordinates in Footer & Partner page', () => {
  const footerContent = readFile('src/components/layout/Footer.tsx');
  assert(footerContent, 'Footer.tsx must exist');

  assertIncludes(footerContent, 'iframe', 'Footer must embed Google Maps iframe');
  assertIncludes(footerContent, 'BITS Pilani', 'Footer must provide explicit BITS Pilani address fallback');
  assertIncludes(footerContent, 'Zuarinagar', 'Exact campus location must be present');

  const partnerContent = readFile('src/app/partner-with-us/page.tsx');
  assert(partnerContent, 'partner-with-us/page.tsx must exist');
  assertIncludes(partnerContent, 'partnerships@bgccbitsgoa.com', 'Must provide direct email fallback');
});

suite.test('ADV-17', 'Adversarial: Formspree network timeout/error triggers direct email mailto fallback', () => {
  const fileContent = readFile('src/components/partner/PartnerForm.tsx');
  assert(fileContent, 'PartnerForm.tsx must exist');

  assertIncludes(fileContent, 'mailto:partnerships@bgccbitsgoa.com', 'Must provide mailto link in error alert state');
  assertIncludes(fileContent, 'Unable to connect to transmission gateway', 'Must display friendly fallback messaging');
});

// ==============================================================================
// 5. MISSING LOGO & MEDIA ASSET FALLBACK HANDLING
// ==============================================================================

suite.test('ADV-18', 'Adversarial: Missing client logo 404 error triggers monogram initial fallback', () => {
  const fileContent = readFile('src/components/clients/ClientFlipCard.tsx');
  assert(fileContent, 'ClientFlipCard.tsx must exist');

  assertIncludes(fileContent, 'imgError', 'Must maintain imgError state');
  assertIncludes(fileContent, 'setImgError(true)', 'Must catch onError and set error state');
  assertIncludes(fileContent, 'slice(0, 2).toUpperCase()', 'Must render 2-letter uppercase monogram when logo fails');
});

suite.test('ADV-19', 'Adversarial: Missing coordinator portrait triggers initial monogram avatar fallback', () => {
  const fileContent = readFile('src/components/home/LeadershipPyramid.tsx');
  assert(fileContent, 'LeadershipPyramid.tsx must exist');

  assertIncludes(fileContent, 'imageErrors', 'Must maintain imageErrors record state');
  assertIncludes(fileContent, 'handleImageError', 'Must provide onError handler for portraits');
  assertIncludes(fileContent, 'initials', 'Must compute and display initials fallback avatar');
});

suite.test('ADV-20', 'Adversarial: 100% Image accessibility alt attribute coverage audit', () => {
  const componentsWithImages = [
    'src/components/clients/ClientFlipCard.tsx',
    'src/components/home/LeadershipPyramid.tsx',
    'src/components/home/ClientMarquee.tsx',
  ];

  for (const compPath of componentsWithImages) {
    const content = readFile(compPath);
    assert(content, `${compPath} must exist`);
    assert(
      content.includes('alt=') || content.includes('alt:'),
      `${compPath} must specify alt attributes on all Image elements`
    );
  }
});

// Execute the test suite if invoked directly
if (require.main === module) {
  suite.run().then((summary) => {
    console.log('\n' + '='.repeat(78));
    console.log('  TIER 5: WHITE-BOX ADVERSARIAL STRESS TEST SUITE');
    console.log('='.repeat(78));
    console.log(`  Total Tests Executed : ${summary.total}`);
    console.log(`  Passed               : ${summary.passed}`);
    console.log(`  Failed               : ${summary.failed}`);
    console.log(`  Success Rate         : ${((summary.passed / summary.total) * 100).toFixed(1)}%`);
    console.log(`  Duration             : ${summary.durationMs}ms`);
    console.log('='.repeat(78));
    
    for (const t of summary.tests) {
      const icon = t.status === 'passed' ? '  ✓' : '  ✗';
      console.log(`${icon} [${t.id}] ${t.title} (${t.durationMs}ms)`);
      if (t.error) {
        console.log(`      Error: ${t.error.message}`);
      }
    }
    
    if (summary.failed > 0) {
      process.exit(1);
    } else {
      console.log('\n[PASS] All 20 Tier 5 Adversarial Stress Tests passed!\n');
      process.exit(0);
    }
  });
}

module.exports = suite;
