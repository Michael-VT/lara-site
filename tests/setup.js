import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';

afterEach(() => {
	cleanup();
});

vi.mock('$app/state', () => ({
	page: {
		data: { locale: 'en' },
		url: new URL('http://localhost/en/products/')
	}
}));

vi.mock('$app/paths', () => ({
	resolve: (/** @type {string} */ path) => path,
	asset: (/** @type {string} */ path) => path
}));

vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));
