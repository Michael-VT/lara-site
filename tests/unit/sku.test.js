import { describe, it, expect } from 'vitest';
import { normalizeSku, isValidSku } from '$lib/utils/sku.js';

describe('normalizeSku', () => {
	it('upper-cases and trims', () => {
		expect(normalizeSku('  aaa000001  ')).toBe('AAA000001');
	});

	it('handles empty/undefined input', () => {
		expect(normalizeSku('')).toBe('');
		expect(normalizeSku(undefined)).toBe('');
	});
});

describe('isValidSku', () => {
	it('accepts valid SKUs', () => {
		expect(isValidSku('AAA000001')).toBe(true);
		expect(isValidSku('aaa000001')).toBe(true);
		expect(isValidSku('ZZZ999999')).toBe(true);
	});

	it('rejects invalid SKUs', () => {
		expect(isValidSku('BAG-001')).toBe(false); // legacy pre-2026-09 format
		expect(isValidSku('AA0000001')).toBe(false); // too few letters
		expect(isValidSku('AAAA000001')).toBe(false); // too many letters
		expect(isValidSku('1AA000001')).toBe(false); // must start with a letter
		expect(isValidSku('AAA00001')).toBe(false); // too few digits
		expect(isValidSku('AAA0000001')).toBe(false); // too many digits
		expect(isValidSku('AAA00000A')).toBe(false); // digits only after the prefix
		expect(isValidSku('')).toBe(false);
	});
});
