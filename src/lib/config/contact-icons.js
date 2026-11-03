/**
 * Shared 24x24 line-icon paths for the contact channels, used by both
 * ContactCard (how-to-order / contacts pages) and SiteFooter so the two
 * never drift into slightly different icon shapes.
 * @type {Record<'whatsapp' | 'telegram' | 'email', string>}
 */
export const contactIconPaths = {
	whatsapp:
		'M12 3a9 9 0 0 0-7.9 13.3L2.5 21.5l5.3-1.5A9 9 0 1 0 12 3Zm-3.2 5.6c-.5.5-.7 1.3-.3 2.1a7.2 7.2 0 0 0 4.8 4.8c.8.4 1.6.2 2.1-.3l.6-.6-2-1.2-.8.8a6 6 0 0 1-2.4-2.4l.8-.8-1.2-2-.6.6Z',
	telegram:
		'M21.9 4.3 2.7 11.6c-1 .4-1 1 .1 1.3l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.3 4.7 3.5c.9.5 1.4.2 1.6-.8L22 5.3c.3-1.2-.2-1.7-1.1-1Zm-3.7 3.4-8.4 7.6-.3 3.1-1.5-4.9 10-6.4c.5-.3.9-.1.5.3Z',
	email:
		'M4 4.5h16A1.5 1.5 0 0 1 21.5 6v12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18V6A1.5 1.5 0 0 1 4 4.5Zm.4 2 7.6 6.2 7.6-6.2'
};
