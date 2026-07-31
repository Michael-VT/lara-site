/**
 * @typedef {object} NavItem
 * @property {string} messageKey - key of the m.* message function used as the label
 * @property {string} path - path segment appended after /{locale}/ (empty string for home)
 */

/** @type {NavItem[]} */
export const primaryNav = [
	{ messageKey: 'nav_home', path: '' },
	{ messageKey: 'nav_products', path: 'products' },
	{ messageKey: 'nav_howToOrder', path: 'how-to-order' },
	{ messageKey: 'nav_about', path: 'about' },
	{ messageKey: 'nav_contacts', path: 'contacts' }
];

/** @type {NavItem[]} */
export const footerNav = [
	{ messageKey: 'nav_products', path: 'products' },
	{ messageKey: 'nav_howToOrder', path: 'how-to-order' },
	{ messageKey: 'nav_about', path: 'about' },
	{ messageKey: 'nav_contacts', path: 'contacts' },
	{ messageKey: 'privacy_heading', path: 'privacy' }
];
