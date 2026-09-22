/**
 * One-off migration (2026-09): legacy `ABC-123` SKUs -> universal `AAA000001`
 * numbering, single `category` -> multi `categories`, and `relatedSkus`
 * remapped through the same table. Emits `src/lib/content/sku-aliases.js`
 * so old `?sku=BAG-001` links/QRs keep resolving.
 *
 * Numbering: group products by primary category (categories[0]), groups in
 * `categories.js` order, within a group sort by legacy numeric suffix (ties:
 * legacy SKU lexicographic). Continuous from 000001.
 *
 * Usage:
 *   node scripts/migrate-skus-categories.js          # dry-run, prints table
 *   node scripts/migrate-skus-categories.js --write  # apply (refuses on dirty tree)
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIR = new URL('../src/lib/content/products/', import.meta.url).pathname;
const ALIASES_PATH = new URL('../src/lib/content/sku-aliases.js', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');

/** Category display order (must match src/lib/content/categories.js). */
const CATEGORY_ORDER = [
	'bags',
	'bracelets',
	'jewellery',
	'beadwork',
	'knitted',
	'accessories',
	'other'
];

/**
 * Owner-approved migration table (2026-09-14). slug is permanent; legacySku
 * is asserted against the file's actual sku. categories[0] is primary and
 * drives numbering.
 * @type {{ slug: string, legacySku: string, categories: string[] }[]}
 */
const MIGRATIONS = [
	{
		slug: 'white-beaded-coin-purse',
		legacySku: 'BAG-001',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'black-beaded-coin-purse',
		legacySku: 'BAG-002',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'beaded-evening-bag',
		legacySku: 'BAG-003',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'bright-mini-bag-for-girl',
		legacySku: 'BAG-004',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'red-beaded-mini-coin-purse',
		legacySku: 'BAG-005',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'silver-beaded-mini-coin-purse',
		legacySku: 'BAG-006',
		categories: ['bags', 'beadwork', 'accessories']
	},
	{
		slug: 'colorful-beaded-bag-and-bracelet-set',
		legacySku: 'BAG-007',
		categories: ['bags', 'bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'sparkling-rhombus-bracelet',
		legacySku: 'BR-001',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'tenderness-beaded-bracelet',
		legacySku: 'BR-003',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-gold-flower-beaded-bracelet',
		legacySku: 'BR-004',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-silver-princess-beaded-bracelet',
		legacySku: 'BR-005',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'large-small-bead-pearl-bracelet',
		legacySku: 'BR-006',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'red-clear-shambhala-bracelet',
		legacySku: 'BR-007',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-bead-blue-bicone-ring-bracelet',
		legacySku: 'BR-008',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-rice-pearl-bead-bracelet',
		legacySku: 'BR-009',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'blue-white-patterned-bracelet-duo',
		legacySku: 'BR-010',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'shambhala-beaded-bracelet',
		legacySku: 'BR-011',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'silver-white-large-bead-bracelet',
		legacySku: 'BR-012',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-pearl-large-small-bracelet',
		legacySku: 'BR-013',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-gold-rice-squares-bracelet',
		legacySku: 'BR-014',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-rhombus-bracelet',
		legacySku: 'BR-015',
		categories: ['bracelets', 'beadwork', 'accessories']
	},
	{
		slug: 'white-pearl-bead-necklace',
		legacySku: 'JWL-004',
		categories: ['jewellery', 'beadwork', 'accessories']
	},
	{
		slug: 'white-beaded-cup-coaster',
		legacySku: 'ACC-001',
		categories: ['beadwork', 'accessories']
	},
	{ slug: 'colorful-beaded-balls', legacySku: 'BEAD-008', categories: ['beadwork', 'other'] },
	{ slug: 'beaded-toy-balls', legacySku: 'BEAD-009', categories: ['beadwork', 'other'] },
	{ slug: 'irish-motif-knitted-bag', legacySku: 'BAG-008', categories: ['knitted', 'bags'] },
	{ slug: 'crochet-panama-hat', legacySku: 'KNIT-001', categories: ['knitted', 'accessories'] },
	{ slug: 'white-crochet-bag', legacySku: 'KNIT-002', categories: ['knitted', 'bags'] },
	{ slug: 'lilac-top-down-crochet-top', legacySku: 'KNIT-003', categories: ['knitted'] },
	{ slug: 'white-cotton-motif-crochet-top', legacySku: 'KNIT-004', categories: ['knitted'] },
	{
		slug: 'crochet-cotton-skirt-and-bag-set',
		legacySku: 'KNIT-005',
		categories: ['knitted', 'bags']
	},
	{
		slug: 'golden-beaded-heart-keychain',
		legacySku: 'BEAD-001',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'red-beaded-heart-keychain',
		legacySku: 'BEAD-002',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'silver-beaded-heart-keychain',
		legacySku: 'BEAD-003',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'black-beaded-heart-keychain',
		legacySku: 'BEAD-004',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'black-red-drop-beaded-heart-keychain',
		legacySku: 'BEAD-005',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'red-white-beaded-ball-keychain',
		legacySku: 'BEAD-006',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'white-beaded-flat-heart-keychain',
		legacySku: 'BEAD-007',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'gold-accented-beaded-ball-keychain',
		legacySku: 'JWL-001',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'silver-accented-beaded-ball-keychain',
		legacySku: 'JWL-002',
		categories: ['accessories', 'beadwork']
	},
	{
		slug: 'silver-gunmetal-beaded-ball-keychain',
		legacySku: 'JWL-003',
		categories: ['accessories', 'beadwork']
	},
	{ slug: 'craft-blanks-for-jewellery-and-decor', legacySku: 'OTH-001', categories: ['other'] },
	{ slug: 'blue-gold-earring-ball', legacySku: 'OTH-002', categories: ['other', 'beadwork'] },
	{ slug: 'red-gold-earring-ball', legacySku: 'OTH-003', categories: ['other', 'beadwork'] }
];

const files = readdirSync(CONTENT_DIR).filter(
	(f) => f.endsWith('.js') && f !== 'index.js' && !f.endsWith('.example.js')
);

/** @type {Map<string, { file: string, slug: string, legacySku: string, currentCategory: string }>} */
const products = new Map();
const errors = [];
for (const file of files) {
	const src = readFileSync(join(CONTENT_DIR, file), 'utf8');
	const slug = /^\tslug: '([a-z0-9-]+)',$/m.exec(src)?.[1];
	const sku = /^\tsku: '([A-Z][A-Z0-9]{1,9}-[0-9]{3,6})',$/m.exec(src)?.[1];
	const category = /^\tcategory: '([a-z]+)',$/m.exec(src)?.[1];
	if (!slug || !sku || !category) {
		errors.push(`${file}: could not parse slug/sku/category lines`);
		continue;
	}
	products.set(slug, { file, slug, legacySku: sku, currentCategory: category });
}

// Cross-check table vs files, both directions.
const migrationBySlug = new Map(MIGRATIONS.map((r) => [r.slug, r]));
for (const row of MIGRATIONS) {
	const p = products.get(row.slug);
	if (!p) errors.push(`table: no content file for slug ${row.slug}`);
	else if (p.legacySku !== row.legacySku)
		errors.push(`${row.slug}: table says ${row.legacySku}, file has ${p.legacySku}`);
	for (const c of row.categories)
		if (!CATEGORY_ORDER.includes(c)) errors.push(`${row.slug}: unknown category ${c}`);
}
for (const [slug, p] of products)
	if (!migrationBySlug.has(slug)) errors.push(`table: missing row for ${slug} (${p.file})`);

// Deterministic numbering: group by primary category (categories.js order);
// within a group keep MIGRATIONS order, which mirrors the owner-approved
// table (stable sort).
const ordered = MIGRATIONS.slice().sort(
	(a, b) => CATEGORY_ORDER.indexOf(a.categories[0]) - CATEGORY_ORDER.indexOf(b.categories[0])
);
const newSku = new Map();
const legacyToNew = new Map();
ordered.forEach((row, i) => {
	const sku = `AAA${String(i + 1).padStart(6, '0')}`;
	newSku.set(row.slug, sku);
	legacyToNew.set(row.legacySku, sku);
});

console.log(`slug | legacy | new | categories`);
for (const row of ordered)
	console.log(
		`${row.slug} | ${row.legacySku} | ${newSku.get(row.slug)} | ${row.categories.join(', ')}`
	);

if (errors.length) {
	console.error(`\nABORTED — ${errors.length} problem(s):`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

// Sanity: continuous 1..N, unique.
if (new Set(legacyToNew.values()).size !== legacyToNew.size) {
	console.error('ABORTED: duplicate new SKUs');
	process.exit(1);
}

if (!WRITE) {
	console.log('\nDry run only. Re-run with --write to apply.');
	process.exit(0);
}

// Refuse to write on a dirty tree (git is the backup).
const { execSync } = await import('node:child_process');
const dirty = execSync('git status --porcelain -- src/lib/content', {
	cwd: new URL('..', import.meta.url).pathname,
	encoding: 'utf8'
}).trim();
if (dirty) {
	console.error('ABORTED: git tree is dirty under src/lib/content — commit or stash first.');
	process.exit(1);
}

for (const row of MIGRATIONS) {
	const p = products.get(row.slug);
	const path = join(CONTENT_DIR, p.file);
	let src = readFileSync(path, 'utf8');
	const next = newSku.get(row.slug);

	src = src.replace(/^\tsku: '[A-Z][A-Z0-9]{1,9}-[0-9]{3,6}',$/m, `\tsku: '${next}',`);
	src = src.replace(
		/^\tcategory: '[a-z]+',$/m,
		`\tcategories: [${row.categories.map((c) => `'${c}'`).join(', ')}],`
	);
	// Remap relatedSkus entries that reference legacy SKUs (leave unknowns —
	// validation downstream will catch anything unmappable).
	src = src.replace(/^(\trelatedSkus: \[)(.*)(\],?)$/m, (_, head, body, tail) => {
		const items = body
			.split(',')
			.map((tok) => tok.trim())
			.filter(Boolean)
			.map((tok) => {
				const m = /^'([A-Z][A-Z0-9]{1,9}-[0-9]{3,6})'$/.exec(tok);
				return m && legacyToNew.has(m[1]) ? `'${legacyToNew.get(m[1])}'` : tok;
			});
		return `${head}${items.join(', ')}${tail}`;
	});
	writeFileSync(path, src);
}

const aliasEntries = [...legacyToNew.entries()].sort(([a], [b]) => a.localeCompare(b));
writeFileSync(
	ALIASES_PATH,
	`/**
 * Legacy SKUs (pre-2026-09 \`ABC-123\` format) -> current SKUs. Old links and
 * QR codes (\`?sku=BAG-001\`) must keep resolving; consulted by
 * \`getProductBySku\` only — never referenced by product content.
 * Generated by scripts/migrate-skus-categories.js; edit by hand only to add
 * future aliases.
 * @type {Record<string, string>}
 */
export const skuAliases = {
${aliasEntries.map(([from, to]) => `\t'${from}': '${to}'`).join(',\n')}
};
`
);

console.log(`\nWrote ${MIGRATIONS.length} product files + ${ALIASES_PATH}`);
