'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { slugify } = require('./index');

test('basic', () => assert.strictEqual(slugify('Hello, World!'), 'hello-world'));
test('accents', () => assert.strictEqual(slugify('Crème Brûlée'), 'creme-brulee'));
test('trims separators', () => assert.strictEqual(slugify('  --n8n workflow--  '), 'n8n-workflow'));
test('custom separator', () => assert.strictEqual(slugify('a b c', { separator: '_' }), 'a_b_c'));
test('keep case', () => assert.strictEqual(slugify('Upwork Job', { lowercase: false }), 'Upwork-Job'));
test('rejects non-strings', () => assert.throws(() => slugify(42), TypeError));
