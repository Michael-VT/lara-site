import { test, expect } from '@playwright/test';

test.describe('catalog', () => {
	test('displays products and supports category filtering', async ({ page }) => {
		await page.goto('/en/products/');
		await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
		const cardsBefore = await page.locator('article').count();
		expect(cardsBefore).toBeGreaterThan(0);

		await page.getByLabel('Category').selectOption('bags');
		await expect(page).toHaveURL(/category=bags/);
		const cardsAfter = await page.locator('article').count();
		expect(cardsAfter).toBeLessThanOrEqual(cardsBefore);
	});
});

test.describe('product page', () => {
	test('shows the SKU and Order links to the ordering page with that SKU', async ({ page }) => {
		await page.goto('/en/products/white-beaded-coin-purse/');
		await expect(
			page.getByRole('heading', { level: 1, name: 'White beaded coin purse' })
		).toBeVisible();
		await expect(page.getByText('BAG-001')).toBeVisible();

		await page.getByRole('main').getByRole('link', { name: 'Order', exact: true }).first().click();
		await expect(page).toHaveURL(/how-to-order\/\?sku=BAG-001/);
	});
});

test.describe('how-to-order', () => {
	test('resolves a valid SKU and shows the product summary', async ({ page }) => {
		await page.goto('/en/how-to-order/?sku=BAG-001');
		await expect(page.getByText('White beaded coin purse', { exact: true })).toBeVisible();
		await expect(page.getByText('SKU: BAG-001')).toBeVisible();
	});

	test('falls back safely for an unknown SKU', async ({ page }) => {
		await page.goto('/en/how-to-order/?sku=ZZZ-999');
		await expect(page.getByText("couldn't find that product", { exact: false })).toBeVisible();
		await expect(page.getByRole('heading', { level: 1, name: 'How to order' })).toBeVisible();
	});

	test('WhatsApp and Telegram links use the exact configured URLs', async ({ page }) => {
		await page.goto('/en/how-to-order/');
		const main = page.getByRole('main');
		await expect(main.getByRole('link', { name: 'WhatsApp', exact: true })).toHaveAttribute(
			'href',
			'https://wa.me/qr/SCHEPP5QIVBQL1'
		);
		await expect(main.getByRole('link', { name: '@ix_lara' })).toHaveAttribute(
			'href',
			'https://t.me/ix_lara'
		);
	});

	test('QR codes are generated and reachable', async ({ page, request }) => {
		await page.goto('/en/how-to-order/');
		for (const id of ['whatsapp', 'telegram', 'email']) {
			const response = await request.get(`/qr/${id}.svg`);
			expect(response.ok()).toBe(true);
		}
	});
});

test.describe('language switching', () => {
	test('preserves the current product when switching language', async ({ page }) => {
		await page.goto('/en/products/white-beaded-coin-purse/');
		await page.getByRole('button', { name: 'Language' }).click();
		await page.getByRole('link', { name: 'Português' }).click();
		await expect(page).toHaveURL('/pt/products/white-beaded-coin-purse/');
	});
});

test.describe('locales', () => {
	for (const locale of ['en', 'pt', 'uk', 'ru']) {
		test(`${locale} home page renders without console errors`, async ({ page }) => {
			/** @type {string[]} */
			const errors = [];
			page.on('console', (msg) => {
				if (msg.type() === 'error') errors.push(msg.text());
			});
			await page.goto(`/${locale}/`);
			await expect(page.locator('h1')).toBeVisible();
			expect(errors).toEqual([]);
		});
	}
});

test.describe('404 handling', () => {
	test('unknown route shows a safe fallback', async ({ page }) => {
		await page.goto('/en/this-page-does-not-exist/');
		await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	});
});
