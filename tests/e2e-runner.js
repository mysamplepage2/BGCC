#!/usr/bin/env node
/**
 * BGCC E2E Test Suite Runner
 * 
 * Usage:
 *   node tests/e2e-runner.js                 # Run all 4 Tiers (207+ tests)
 *   node tests/e2e-runner.js --tier=1        # Run only Tier 1 (Feature Coverage)
 *   node tests/e2e-runner.js --tier=2        # Run only Tier 2 (Boundary & Corner Cases)
 *   node tests/e2e-runner.js --tier=3        # Run only Tier 3 (Cross-Feature Combinations)
 *   node tests/e2e-runner.js --tier=4        # Run only Tier 4 (Real-World Scenarios)
 *   node tests/e2e-runner.js --feature=3     # Filter by Feature Number across Tiers 1 & 2
 *   node tests/e2e-runner.js --verbose       # Show full test trace
 *   node tests/e2e-runner.js --json          # Output machine-readable JSON
 */

const path = require('path');
const tier1Suite = require('./tier1-features.test');
const tier2Suite = require('./tier2-boundary.test');
const tier3Suite = require('./tier3-combinations.test');
const tier4Suite = require('./tier4-scenarios.test');

// Parse CLI flags
const args = process.argv.slice(2);
const options = {
  tier: null,
  feature: null,
  verbose: false,
  json: false,
  help: false
};

for (const arg of args) {
  if (arg === '--help' || arg === '-h') {
    options.help = true;
  } else if (arg.startsWith('--tier=')) {
    options.tier = parseInt(arg.split('=')[1], 10);
  } else if (arg.startsWith('-t=')) {
    options.tier = parseInt(arg.split('=')[1], 10);
  } else if (arg.startsWith('--feature=')) {
    options.feature = parseInt(arg.split('=')[1], 10);
  } else if (arg.startsWith('-f=')) {
    options.feature = parseInt(arg.split('=')[1], 10);
  } else if (arg === '--verbose' || arg === '-v') {
    options.verbose = true;
  } else if (arg === '--json') {
    options.json = true;
  }
}

if (options.help) {
  console.log(`
BITS Goa Consulting Club (BGCC) — E2E Test Suite Runner

Usage:
  node tests/e2e-runner.js [options]

Options:
  --tier=N, -t=N       Execute only Tier N (1, 2, 3, or 4)
  --feature=N, -f=N    Filter tests by Feature ID (1 to 18)
  --verbose, -v        Display detailed per-test execution trace
  --json               Output execution results as structured JSON
  --help, -h           Show this help message
`);
  process.exit(0);
}

// Select test suites to run
const allSuites = [
  { tier: 1, suite: tier1Suite },
  { tier: 2, suite: tier2Suite },
  { tier: 3, suite: tier3Suite },
  { tier: 4, suite: tier4Suite }
];

const suitesToRun = options.tier
  ? allSuites.filter(s => s.tier === options.tier)
  : allSuites;

if (suitesToRun.length === 0) {
  console.error(`Error: Invalid tier specified (${options.tier}). Valid tiers are 1, 2, 3, 4.`);
  process.exit(1);
}

async function main() {
  const overallStart = Date.now();
  const summary = {
    timestamp: new Date().toISOString(),
    totalSuites: suitesToRun.length,
    totalTests: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    durationMs: 0,
    suiteResults: []
  };

  if (!options.json) {
    console.log('\n' + '='.repeat(78));
    console.log('  BITS GOA CONSULTING CLUB (BGCC) — E2E TEST VERIFICATION RUNNER');
    console.log('='.repeat(78));
    console.log(`  Executing: ${suitesToRun.map(s => `Tier ${s.tier}`).join(', ')}`);
    if (options.feature) console.log(`  Feature Filter: Feature ${options.feature}`);
    console.log('-'.repeat(78));
  }

  for (const { tier, suite } of suitesToRun) {
    const suiteRes = await suite.run({
      feature: options.feature,
      verbose: options.verbose
    });

    summary.totalTests += suiteRes.total;
    summary.passed += suiteRes.passed;
    summary.failed += suiteRes.failed;
    summary.skipped += suiteRes.skipped;
    summary.suiteResults.push(suiteRes);

    if (!options.json) {
      const statusSymbol = suiteRes.failed === 0 ? '✓' : '✗';
      const statusText = suiteRes.failed === 0 ? 'PASSED' : 'FAILED';
      console.log(`\n[${statusSymbol}] Tier ${tier}: ${suite.name}`);
      console.log(`    Status: ${statusText} | Passed: ${suiteRes.passed}/${suiteRes.total} | Failed: ${suiteRes.failed} | Time: ${suiteRes.durationMs}ms`);

      if (options.verbose || suiteRes.failed > 0) {
        for (const t of suiteRes.tests) {
          const icon = t.status === 'passed' ? '  ✓' : '  ✗';
          if (options.verbose || t.status === 'failed') {
            console.log(`    ${icon} [${t.id}] ${t.title} (${t.durationMs}ms)`);
            if (t.error) {
              console.log(`        Error: ${t.error.message}`);
            }
          }
        }
      }
    }
  }

  summary.durationMs = Date.now() - overallStart;

  if (options.json) {
    console.log(JSON.stringify(summary, null, 2));
  } else {
    console.log('\n' + '='.repeat(78));
    console.log('  TEST EXECUTION SUMMARY');
    console.log('='.repeat(78));
    console.log(`  Total Tests Executed : ${summary.passed + summary.failed}`);
    console.log(`  Passed               : ${summary.passed}`);
    console.log(`  Failed               : ${summary.failed}`);
    console.log(`  Skipped              : ${summary.skipped}`);
    console.log(`  Success Rate         : ${summary.totalTests > 0 ? ((summary.passed / (summary.passed + summary.failed)) * 100).toFixed(1) : 0}%`);
    console.log(`  Execution Time       : ${summary.durationMs}ms`);
    console.log('='.repeat(78));

    if (summary.failed > 0) {
      console.log(`\n[FAIL] Test suite completed with ${summary.failed} failure(s).\n`);
      process.exit(1);
    } else {
      console.log(`\n[PASS] All ${summary.passed} test cases passed successfully!\n`);
      process.exit(0);
    }
  }
}

main().catch(err => {
  console.error('Fatal Runner Error:', err);
  process.exit(1);
});
