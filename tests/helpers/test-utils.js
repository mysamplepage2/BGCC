/**
 * Test Utilities and Assertion Engine for BGCC E2E Testing Suite
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..', '..');

// Helper to resolve paths relative to project root
function resolveRoot(...segments) {
  return path.join(ROOT_DIR, ...segments);
}

// Safely read text file
function readFile(relPath) {
  const fullPath = resolveRoot(relPath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf8');
}

// Check file existence
function fileExists(relPath) {
  return fs.existsSync(resolveRoot(relPath));
}

// List files in directory
function listFiles(relDir, recursive = false) {
  const fullDir = resolveRoot(relDir);
  if (!fs.existsSync(fullDir)) return [];
  
  const entries = fs.readdirSync(fullDir, { withFileTypes: true });
  let files = [];
  
  for (const entry of entries) {
    const res = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        files = files.concat(listFiles(res, recursive));
      }
    } else {
      files.push(res);
    }
  }
  return files;
}

// Assertion Library
class AssertionError extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.name = 'AssertionError';
    this.actual = actual;
    this.expected = expected;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new AssertionError(message || 'Assertion failed', false, true);
  }
}

function assertEqual(actual, expected, message) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr !== expectedStr) {
    throw new AssertionError(
      `${message ? message + ' - ' : ''}Expected ${expectedStr} but got ${actualStr}`,
      actual,
      expected
    );
  }
}

function assertIncludes(haystack, needle, message) {
  if (typeof haystack === 'string') {
    if (!haystack.includes(needle)) {
      throw new AssertionError(
        `${message ? message + ' - ' : ''}String does not contain "${needle}"`,
        haystack.slice(0, 100) + '...',
        needle
      );
    }
  } else if (Array.isArray(haystack)) {
    if (!haystack.includes(needle)) {
      throw new AssertionError(
        `${message ? message + ' - ' : ''}Array does not contain item`,
        haystack,
        needle
      );
    }
  } else {
    throw new AssertionError(`${message ? message + ' - ' : ''}Invalid haystack type for assertIncludes`);
  }
}

function assertMatches(text, regex, message) {
  if (typeof text !== 'string' || !regex.test(text)) {
    throw new AssertionError(
      `${message ? message + ' - ' : ''}Text does not match pattern ${regex.toString()}`,
      text ? text.slice(0, 100) + '...' : text,
      regex.toString()
    );
  }
}

// Test Runner Suite Structure
class TestSuite {
  constructor(name) {
    this.name = name;
    this.tests = [];
  }

  test(id, title, fn) {
    this.tests.push({ id, title, fn });
  }

  async run(options = {}) {
    const results = {
      suite: this.name,
      total: this.tests.length,
      passed: 0,
      failed: 0,
      skipped: 0,
      tests: [],
      durationMs: 0
    };

    const startTime = Date.now();

    for (const t of this.tests) {
      if (options.feature) {
        const featNum = parseInt(options.feature, 10);
        const featPad = featNum < 10 ? `0${featNum}` : `${featNum}`;
        const matchF = t.id.startsWith(`F${featPad}`) || t.id.startsWith(`F-${featPad}`) || t.id.startsWith(`F${featNum}-`);
        const matchB = t.id.startsWith(`B${featPad}`) || t.id.startsWith(`B-${featPad}`) || t.id.startsWith(`B${featNum}-`);
        if (!matchF && !matchB) {
          results.skipped++;
          continue;
        }
      }

      const testStart = Date.now();
      const testResult = {
        id: t.id,
        title: t.title,
        status: 'passed',
        durationMs: 0,
        error: null
      };

      try {
        await t.fn();
        results.passed++;
      } catch (err) {
        testResult.status = 'failed';
        testResult.error = {
          message: err.message,
          stack: err.stack,
          actual: err.actual,
          expected: err.expected
        };
        results.failed++;
      }

      testResult.durationMs = Date.now() - testStart;
      results.tests.push(testResult);
    }

    results.durationMs = Date.now() - startTime;
    return results;
  }
}

module.exports = {
  resolveRoot,
  readFile,
  fileExists,
  listFiles,
  assert,
  assertEqual,
  assertIncludes,
  assertMatches,
  TestSuite,
  AssertionError
};
