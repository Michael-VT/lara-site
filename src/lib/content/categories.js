/**
 * @typedef {'bags' | 'bracelets' | 'jewellery' | 'beadwork' | 'knitted' | 'accessories' | 'other'} CategoryId
 */

/**
 * @typedef {object} CategoryDef
 * @property {CategoryId} id
 * @property {string} messageKey - key of the m.* message function used as the label
 * @property {string} skuPrefix
 */

/** @type {CategoryDef[]} */
export const categories = [
	{ id: 'bags', messageKey: 'category_bags', skuPrefix: 'BAG' },
	{ id: 'bracelets', messageKey: 'category_bracelets', skuPrefix: 'BR' },
	{ id: 'jewellery', messageKey: 'category_jewellery', skuPrefix: 'JEW' },
	{ id: 'beadwork', messageKey: 'category_beadwork', skuPrefix: 'BEAD' },
	{ id: 'knitted', messageKey: 'category_knitted', skuPrefix: 'KNIT' },
	{ id: 'accessories', messageKey: 'category_accessories', skuPrefix: 'ACC' },
	{ id: 'other', messageKey: 'category_other', skuPrefix: 'OTH' }
];

/** @type {CategoryId[]} */
export const categoryIds = categories.map((c) => c.id);

/** @param {string} id */
export function getCategory(id) {
	return categories.find((c) => c.id === id);
}
