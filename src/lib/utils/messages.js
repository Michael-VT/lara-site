import { m } from '$lib/paraglide/messages.js';

/**
 * Looks up and calls a paraglide message function by a dynamically-computed
 * key (e.g. a category or status label key stored in content/config data).
 * A plain `m[key](...)` triggers a "implicit any" error under `checkJs`
 * because `m`'s type only has statically-known string keys.
 * @param {string} key
 * @param {...any} args
 * @returns {string}
 */
export function t(key, ...args) {
	return /** @type {any} */ (m)[key](...args);
}
