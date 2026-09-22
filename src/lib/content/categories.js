/**
 * @typedef {'bags' | 'bracelets' | 'jewellery' | 'beadwork' | 'knitted' | 'accessories' | 'other'} CategoryId
 */

/**
 * @typedef {object} CategoryDef
 * @property {CategoryId} id
 * @property {string} messageKey - key of the m.* message function used as the label
 */

/** @type {CategoryDef[]} */
export const categories = [
	{ id: 'bags', messageKey: 'category_bags' },
	{ id: 'bracelets', messageKey: 'category_bracelets' },
	{ id: 'jewellery', messageKey: 'category_jewellery' },
	{ id: 'beadwork', messageKey: 'category_beadwork' },
	{ id: 'knitted', messageKey: 'category_knitted' },
	{ id: 'accessories', messageKey: 'category_accessories' },
	{ id: 'other', messageKey: 'category_other' }
];

/** @type {CategoryId[]} */
export const categoryIds = categories.map((c) => c.id);

/** @param {string} id */
export function getCategory(id) {
	return categories.find((c) => c.id === id);
}
