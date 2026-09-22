// Universal article format: 3-letter prefix + 6 digits, e.g. AAA000001.
// Pre-2026-09 `ABC-123` SKUs are invalid for new content but still resolve
// via src/lib/content/sku-aliases.js.
const SKU_PATTERN = /^[A-Z]{3}[0-9]{6}$/;

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
 * Validates a SKU against the required pattern, e.g. AAA000045.
 * Accepts raw (non-normalized) input and normalizes before testing.
 * @param {string | undefined} sku
 * @returns {boolean}
 */
export function isValidSku(sku) {
	return SKU_PATTERN.test(normalizeSku(sku));
}

export { SKU_PATTERN };
