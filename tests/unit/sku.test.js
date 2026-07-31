import { describe, it, expect } from 'vitest';
import { normalizeSku, isValidSku } from '$lib/utils/sku.js';

describe('normalizeSku', () => {
	it('upper-cases and trims', () => {
		expect(normalizeSku('  bag-001  ')).toBe('BAG-001');
	});

	it('handles empty/undefined input', () => {
		expect(normalizeSku('')).toBe('');
		expect(normalizeSku(undefined)).toBe('');
	});
});

describe('isValidSku', () => {
	it('accepts valid SKUs', () => {
		expect(isValidSku('BAG-001')).toBe(true);
		expect(isValidSku('bag-001')).toBe(true);
		expect(isValidSku('OTH-123456')).toBe(true);
	});

	it('rejects invalid SKUs', () => {
		expect(isValidSku('BAG001')).toBe(false); // missing hyphen
		expect(isValidSku('1AG-001')).toBe(false); // must start with a letter
		expect(isValidSku('BAG-01')).toBe(false); // too few digits
		expect(isValidSku('BAG-0000001')).toBe(false); // too many digits
		expect(isValidSku('')).toBe(false);
		expect(isValidSku('BAG-ABC')).toBe(false);
	});
});
