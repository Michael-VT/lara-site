import { siteContacts } from '../config/contacts.js';
import { buildMailtoUrl } from '../utils/mailto.js';

/**
 * Canonical list of QR codes generated at build time, and the exact payload
 * (the value actually encoded) for each. Both the build script and any
 * runtime code referencing a QR file should use these ids/payloads.
 * @returns {{ id: string, payload: string, file: string }[]}
 */
export function getQrDefinitions() {
	return [
		{ id: 'whatsapp', payload: siteContacts.whatsapp.url, file: '/qr/whatsapp.svg' },
		{ id: 'telegram', payload: siteContacts.telegram.url, file: '/qr/telegram.svg' },
		{
			id: 'email',
			payload: buildMailtoUrl({ email: siteContacts.email, subject: '', body: '' }),
			file: '/qr/email.svg'
		}
	];
}
