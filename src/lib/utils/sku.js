const SKU_PATTERN = /^[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}$/;

/**
 * Normalizes a SKU for comparison/storage: trims whitespace and upper-cases it.
 * @param {string | undefined} sku
 * @returns {string}
 */
export function normalizeSku(sku) {
	return String(sku ?? '')
		.trim()
		.toUpperCase();
}

/**
 * Validates a SKU against the required pattern, e.g. BAG-001.
 * Accepts raw (non-normalized) input and normalizes before testing.
 * @param {string | undefined} sku
 * @returns {boolean}
 */
export function isValidSku(sku) {
	return SKU_PATTERN.test(normalizeSku(sku));
}

export { SKU_PATTERN };
