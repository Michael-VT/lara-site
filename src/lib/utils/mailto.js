/**
 * Builds a well-formed, UTF-8-safe `mailto:` URL.
 * @param {{ email: string, subject: string, body: string }} params
 * @returns {string}
 */
export function buildMailtoUrl({ email, subject, body }) {
	const params = new URLSearchParams();
	if (subject) params.set('subject', subject);
	if (body) params.set('body', body);
	const query = params.toString();
	return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}
