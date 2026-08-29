// Scaffold a new product file: `bun scripts/new-product.js <category> <slug> [--title "..."]`
//
// Example:
//   bun scripts/new-product.js bags "red-beaded-evening-bag" --title "Red beaded evening bag"
//
// Creates src/lib/content/products/{prefix}-{next-number}.js with a four-locale
// skeleton (status: 'hidden' — the product stays invisible until you finish it
// and flip the status) and registers it in products/index.js.

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { categories } from '../src/lib/content/categories.js';
import { rawProducts } from '../src/lib/content/products/index.js';

const root = join(import.meta.dir, '..');
const args = process.argv.slice(2);

const titleFlag = args.indexOf('--title');
const title = titleFlag !== -1 ? args.splice(titleFlag, 2)[1] : '';
const [categoryId, slug] = args;

const usage = 'Usage: bun scripts/new-product.js <category> <slug> [--title "English title"]';

const category = categories.find((c) => c.id === categoryId);
if (!category) {
	console.error(
		`${usage}\nUnknown category "${categoryId}". Valid: ${categories.map((c) => c.id).join(', ')}`
	);
	process.exit(1);
}
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
	console.error(
		`${usage}\nSlug must be lowercase, hyphen-separated, e.g. "red-beaded-evening-bag" (got "${slug}")`
	);
	process.exit(1);
}
if (rawProducts.some((p) => p.slug === slug)) {
	console.error(`A product with slug "${slug}" already exists.`);
	process.exit(1);
}

const prefix = category.skuPrefix;
const numbers = rawProducts
	.filter((p) => p.sku.startsWith(`${prefix}-`))
	.map((p) => Number.parseInt(p.sku.split('-')[1], 10));
const next = (numbers.length ? Math.max(...numbers) : 0) + 1;
const sku = `${prefix}-${String(next).padStart(3, '0')}`;
const fileName = `${prefix.toLowerCase()}-${String(next).padStart(3, '0')}.js`;
const filePath = join(root, 'src', 'lib', 'content', 'products', fileName);
if (existsSync(filePath)) {
	console.error(`${filePath} already exists — refusing to overwrite.`);
	process.exit(1);
}

const t = title || `TODO: English title for ${slug}`;
const content = `/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: '${sku}',
	slug: '${slug}',
	category: '${category.id}',
	status: 'hidden', // flip to 'available' (or 'made_to_order'/'sold') when ready to publish

	title: {
		en: '${t}',
		pt: 'TODO pt title', // glossary: docs/ADD-PRODUCT.md
		uk: 'TODO uk title',
		ru: 'TODO ru title'
	},
	description: {
		en: 'TODO: 1–2 warm sentences, first person of the maker',
		pt: 'TODO pt',
		uk: 'TODO uk',
		ru: 'TODO ru'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/${slug}/1.webp',
			thumb: '/images/products/${slug}/1-thumb.webp',
			width: 1600, // TODO: set the real intrinsic size of 1.webp (optimizer report prints it)
			height: 1600,
			alt: {
				en: 'TODO: describe THIS photo (angle/detail) — varies per image',
				pt: 'TODO pt',
				uk: 'TODO uk',
				ru: 'TODO ru'
			}
		}
	],

	materials: { en: 'TODO', pt: 'TODO', uk: 'TODO', ru: 'TODO' }, // e.g. en 'Seed beads' — see glossary

	featured: false,
	relatedSkus: [] // optional: SKUs of similar pieces, e.g. ['${prefix}-001']
};
`;

writeFileSync(filePath, content);

// Placeholder image so the draft validates and prerenders before real photos
// exist; `bun run optimize:images` overwrites it later.
const imageDir = join(root, 'static', 'images', 'products', slug);
mkdirSync(imageDir, { recursive: true });
const placeholder = join(imageDir, '1.webp');
if (!existsSync(placeholder)) {
	await sharp({
		create: { width: 1600, height: 1600, channels: 3, background: '#f0e9d8' }
	})
		.webp({ quality: 80 })
		.toFile(placeholder);
}

// Register in index.js: append the import and the array entry.
const indexPath = join(root, 'src', 'lib', 'content', 'products', 'index.js');
let index = readFileSync(indexPath, 'utf-8');
const varName = `${prefix.toLowerCase()}${String(next).padStart(3, '0')}`;
index = index.replace(/(\w)(\s*\];\s*)$/, `$1,\n\t${varName}$2`);
index = index.replace(
	/(import[\s\S]*?from '\.\/[a-z0-9-]+\.js';\n)(?!\n?import)/,
	`$1import { product as ${varName} } from './${fileName}';\n`
);
if (!index.includes(`'./${fileName}'`)) {
	// Fallback: insert after the last import line.
	index = index.replace(
		/(^import[^\n]*\n)(?!import)/m,
		`$1import { product as ${varName} } from './${fileName}';\n`
	);
}
writeFileSync(indexPath, index);

console.log(`Created ${filePath}  (${sku})
Registered "${varName}" in src/lib/content/products/index.js

Next steps (see docs/ADD-PRODUCT.md):
  1. Drop source photos into images/<folder>/ and map the folder to "${slug}" in scripts/optimize-images.js (productGroups)
  2. bun run optimize:images  →  writes static/images/products/${slug}/{N,N-thumb}.webp
  3. Fill title/description/alts/materials in all four locales + image width/height
  4. status: 'hidden' → 'available'
  5. bun run validate:content && bun run check && bun run test && bun run build
`);
