import { m } from '$lib/paraglide/messages.js';
import { localizeText } from '$lib/services/catalog.js';

/**
 * Builds the localized prepared enquiry message body for a product, wording it
 * differently when the product is sold (asking for a similar item).
 * @param {{ product: import('$lib/schemas/product.js').Product, locale: import('$lib/config/site.js').Locale }} params
 * @returns {string}
 */
export function buildProductEnquiryMessage({ product, locale }) {
	const title = localizeText(product.title, locale);
	const params = { title, sku: product.sku };
	const body =
		product.status === 'sold'
			? m.order_messageBodySold(params, { locale })
			: m.order_messageBody(params, { locale });

	if (product.price?.mode === 'on_request') {
		return `${body} ${m.order_priceQuestion({}, { locale })}`;
	}
	return body;
}

/**
 * Builds the generic enquiry message body used when no product is selected.
 * @param {import('$lib/config/site.js').Locale} locale
 * @returns {string}
 */
export function buildGenericEnquiryMessage(locale) {
	return m.order_messageBodyGeneric({}, { locale });
}

/**
 * Builds the localized email subject line.
 * @param {{ sku?: string | null, locale: import('$lib/config/site.js').Locale }} params
 */
export function buildEmailSubject({ sku, locale }) {
	return sku ? m.order_subjectWithSku({ sku }, { locale }) : m.order_subjectGeneric({}, { locale });
}
