const currencyLocaleMap = {
	en: 'en-IE',
	pt: 'pt-PT',
	uk: 'uk-UA',
	ru: 'ru-RU'
};

/**
 * Formats a product price for display in the given locale.
 * @param {import('$lib/schemas/product.js').Price | undefined} price
 * @param {import('$lib/config/site.js').Locale} locale
 * @param {{ onRequestLabel: string, fromLabel: (amount: string) => string }} labels
 * @returns {string | null} null when there is nothing to display (no price set)
 */
export function formatPrice(price, locale, labels) {
	if (!price) return null;
	if (price.mode === 'on_request') return labels.onRequestLabel;

	const formatted = new Intl.NumberFormat(currencyLocaleMap[locale] ?? 'en-IE', {
		style: 'currency',
		currency: price.currency
	}).format(price.amount);

	return price.mode === 'from' ? labels.fromLabel(formatted) : formatted;
}
