import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { rawProducts } from '$lib/content/products/index.js';
import { journalPosts } from '$lib/content/journal.js';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// Every character here has a plain, keyboard-typeable ASCII replacement and
// should never appear in site copy: an em/en dash reads as "an AI wrote
// this" to a human skimmer, and none of them are reachable from a standard
// keyboard without OS-level shortcuts. Use "-", "'", '"', "..." instead.
/** @type {Record<string, string>} */
const BANNED_CHARS = {
	'—': 'em dash (—) → use "-"',
	'–': 'en dash (–) → use "-"',
	'‘': 'curly single quote (‘) → use "\'"',
	'’': 'curly single quote (’) → use "\'"',
	'“': 'curly double quote (“) → use \'"\'',
	'”': 'curly double quote (”) → use \'"\'',
	'…': 'ellipsis character (…) → use "..."'
};
const BANNED_RE = new RegExp(`[${Object.keys(BANNED_CHARS).join('')}]`, 'g');

/** @param {unknown} value @param {string} path @param {string[]} out */
function collectViolations(value, path, out) {
	if (typeof value === 'string') {
		const matches = value.match(BANNED_RE);
		if (matches) {
			const unique = [...new Set(matches)];
			out.push(`${path}: ${unique.map((c) => BANNED_CHARS[c]).join(', ')}`);
		}
		return;
	}
	if (Array.isArray(value)) {
		value.forEach((item, i) => collectViolations(item, `${path}[${i}]`, out));
		return;
	}
	if (value && typeof value === 'object') {
		for (const [key, val] of Object.entries(value)) {
			collectViolations(val, path ? `${path}.${key}` : key, out);
		}
	}
}

describe('typography: no AI-tell / non-typeable characters', () => {
	it('product content uses only plain keyboard-typeable punctuation', () => {
		/** @type {string[]} */
		const violations = [];
		for (const product of rawProducts) {
			collectViolations(product, product.slug ?? product.sku ?? '(unknown product)', violations);
		}
		expect(violations).toEqual([]);
	});

	it('journal content uses only plain keyboard-typeable punctuation', () => {
		/** @type {string[]} */
		const violations = [];
		for (const post of journalPosts) {
			collectViolations(post, post.slug ?? '(unknown post)', violations);
		}
		expect(violations).toEqual([]);
	});

	it('messages/*.json use only plain keyboard-typeable punctuation', () => {
		const messagesDir = join(repoRoot, 'messages');
		/** @type {string[]} */
		const violations = [];
		for (const file of readdirSync(messagesDir).filter((f) => f.endsWith('.json'))) {
			const data = JSON.parse(readFileSync(join(messagesDir, file), 'utf-8'));
			collectViolations(data, file, violations);
		}
		expect(violations).toEqual([]);
	});
});
