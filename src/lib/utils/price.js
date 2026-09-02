const currencyLocaleMap = {
	en: 'en-IE',
	pt: 'pt-PT',
	uk: 'uk-UA',
	ru: 'ru-RU'
};

/**
 * Formats a bare amount (no "from" prefix) in the given locale.
 * Whole-euro amounts drop the decimals ("€8", not "€8.00").
 * @param {number} amount
 * @param {'EUR'} currency
 * @param {import('$lib/config/site.js').Locale} locale
 * @returns {string}
 */
export function formatAmount(amount, currency, locale) {
	const whole = Number.isInteger(amount);
	return new Intl.NumberFormat(currencyLocaleMap[locale] ?? 'en-IE', {
		style: 'currency',
		currency,
		minimumFractionDigits: whole ? 0 : 2,
		maximumFractionDigits: whole ? 0 : 2
	}).format(amount);
}

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

	const formatted = formatAmount(price.amount, price.currency, locale);

	return price.mode === 'from' ? labels.fromLabel(formatted) : formatted;
}
