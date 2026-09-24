/**
 * Escapes HTML then converts `**bold**` markers to `<strong>` — the only
 * inline markup journal article body text uses. Content is site-owner
 * authored copy, not user input, so the result is safe to render with
 * `{@html}`.
 * @param {string} text
 */
export function renderInline(text) {
	const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
