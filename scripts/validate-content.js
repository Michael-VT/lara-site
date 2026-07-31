import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { allProducts } from '../src/lib/services/catalog.js';
import { siteContacts } from '../src/lib/config/contacts.js';

const staticDir = join(import.meta.dir, '..', 'static');
let ok = true;

function fail(message) {
	console.error(`✖ ${message}`);
	ok = false;
}

for (const product of allProducts) {
	for (const image of product.images) {
		const filePath = join(staticDir, image.src.replace(/^\//, ''));
		if (!existsSync(filePath)) {
			fail(`Product ${product.sku} references a missing image file: ${image.src}`);
		}
	}
}

if (!/^https:\/\/wa\.me\//.test(siteContacts.whatsapp.url)) {
	fail(`Unsafe or unexpected WhatsApp URL in site configuration: ${siteContacts.whatsapp.url}`);
}
if (!/^https:\/\/t\.me\//.test(siteContacts.telegram.url)) {
	fail(`Unsafe or unexpected Telegram URL in site configuration: ${siteContacts.telegram.url}`);
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteContacts.email)) {
	fail(`Invalid email address in site configuration: ${siteContacts.email}`);
}

const demoProducts = allProducts.filter((p) => p.isDemo);
if (process.env.PUBLIC_PRODUCTION === 'true' && demoProducts.length > 0) {
	fail(
		`PUBLIC_PRODUCTION=true but ${demoProducts.length} demo product(s) are still present: ${demoProducts.map((p) => p.sku).join(', ')}`
	);
}

if (!ok) {
	console.error('\nContent validation failed.');
	process.exit(1);
}

console.log(
	`✔ Content validation passed: ${allProducts.length} products, ${demoProducts.length} marked as demo.`
);
