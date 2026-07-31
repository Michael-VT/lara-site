import { describe, it, expect } from 'vitest';
import { buildMailtoUrl } from '$lib/utils/mailto.js';

describe('buildMailtoUrl', () => {
	it('builds a basic mailto URL', () => {
		const url = buildMailtoUrl({ email: 'ix.lara@gmail.com', subject: '', body: '' });
		expect(url).toBe('mailto:ix.lara@gmail.com');
	});

	it('encodes subject and body', () => {
		const url = buildMailtoUrl({
			email: 'ix.lara@gmail.com',
			subject: 'Order enquiry: BAG-001',
			body: 'Hello there'
		});
		expect(url).toContain('mailto:ix.lara@gmail.com?');
		expect(url).toContain('subject=Order+enquiry%3A+BAG-001');
		expect(url).toContain('body=Hello+there');
	});

	it('is UTF-8-safe for Cyrillic and Portuguese characters', () => {
		const url = buildMailtoUrl({
			email: 'ix.lara@gmail.com',
			subject: 'Замовлення',
			body: 'Olá! Preço em €, obrigado.'
		});
		expect(url.startsWith('mailto:ix.lara@gmail.com?')).toBe(true);
		const query = url.split('?')[1];
		const params = new URLSearchParams(query);
		expect(params.get('subject')).toBe('Замовлення');
		expect(params.get('body')).toBe('Olá! Preço em €, obrigado.');
	});

	it('does not double-encode', () => {
		const url = buildMailtoUrl({ email: 'a@b.com', subject: 'A & B', body: '100% cotton' });
		const params = new URLSearchParams(url.split('?')[1]);
		expect(params.get('subject')).toBe('A & B');
		expect(params.get('body')).toBe('100% cotton');
	});
});
