import { readdirSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = join(import.meta.dir, '..');
const sourceDir = join(root, 'images');
const productsOutDir = join(root, 'static', 'images', 'products');

const FULL_WIDTH = 1600;
const THUMB_WIDTH = 480;
const FULL_QUALITY = 82;
const THUMB_QUALITY = 78;

/**
 * Product photos are organized as `images/{category folder}/{product folder}/*.jpg`.
 * Map each (category folder, product folder) pair to the product's slug.
 * Add a new entry here whenever a new product photo folder is added.
 */
const productGroups = [
	{
		sourceFolder: 'Браслеты',
		items: {
			'Браслет Сверкающий ромб': 'sparkling-rhombus-bracelet',
			'Браслет Шамбала с бисером': 'shambhala-beaded-bracelet',
			'Браслет из бисера Нежность': 'tenderness-beaded-bracelet',
			'Браслет из белого и золотистого бисера Цветочек': 'white-gold-flower-beaded-bracelet',
			'Браслет из белого и серебристого бисера для принцессы':
				'white-silver-princess-beaded-bracelet'
		}
	},
	{
		sourceFolder: 'Изделия из бисера',
		items: {
			'Белая сумочка монетница из бисера': 'white-beaded-coin-purse',
			'Черная сумочка монетница из бисера': 'black-beaded-coin-purse',
			'Сумочка из бисера для торжества': 'beaded-evening-bag',
			'Яркая мини-сумочка для девочки': 'bright-mini-bag-for-girl',
			'Объемное сердце брелок из золотистого бисера': 'golden-beaded-heart-keychain',
			'Объемное сердце брелок из красного бисера': 'red-beaded-heart-keychain',
			'Объемное сердце брелок из серебристого бисера': 'silver-beaded-heart-keychain',
			'Объемное сердце брелок из черного бисера': 'black-beaded-heart-keychain',
			'Объемное сердце брелок из черного бисера с капелькой красного':
				'black-red-drop-beaded-heart-keychain',
			'Шарик брелок из красного и белого бисера': 'red-white-beaded-ball-keychain',
			'Плоское сердце из белого бисера 8 мм': 'white-beaded-flat-heart-keychain',
			'Разноцветные шарики': 'colorful-beaded-balls'
		}
	}
];

/** Single, non-product photos used elsewhere on the site (hero slide, About portrait). */
const specialAssets = [
	{
		sourcePath: ['Unique handmade products Placeholder photo', 'Мои изделия из бисера'],
		outPath: join(root, 'static', 'images', 'hero', 'slide-1.webp'),
		width: 1600,
		quality: 82
	},
	{
		sourcePath: ['Market portrait', 'Вяжу с любовью!'],
		outPath: join(root, 'static', 'images', 'about', 'portrait.webp'),
		width: 1000,
		quality: 85
	}
];

function isImageFile(name) {
	return /\.(jpe?g|png)$/i.test(name);
}

function firstImageIn(folderPath) {
	const files = readdirSync(folderPath).filter(isImageFile).sort();
	return files[0] ?? null;
}

/**
 * @param {string} categoryFolder
 * @param {string} productFolder
 * @param {string} slug
 */
async function processProductFolder(categoryFolder, productFolder, slug) {
	const folderPath = join(sourceDir, categoryFolder, productFolder);
	const files = readdirSync(folderPath).filter(isImageFile).sort();
	if (files.length === 0) return null;

	const results = [];
	mkdirSync(join(productsOutDir, slug), { recursive: true });

	for (let i = 0; i < files.length; i++) {
		const srcFile = join(folderPath, files[i]);
		const index = i + 1;

		const fullOut = join(productsOutDir, slug, `${index}.webp`);
		const thumbOut = join(productsOutDir, slug, `${index}-thumb.webp`);

		const fullMeta = await sharp(srcFile)
			.rotate()
			.resize({ width: FULL_WIDTH, withoutEnlargement: true })
			.webp({ quality: FULL_QUALITY })
			.toFile(fullOut);

		await sharp(srcFile)
			.rotate()
			.resize({ width: THUMB_WIDTH, withoutEnlargement: true })
			.webp({ quality: THUMB_QUALITY })
			.toFile(thumbOut);

		results.push({
			index,
			full: `/images/products/${slug}/${index}.webp`,
			thumb: `/images/products/${slug}/${index}-thumb.webp`,
			width: fullMeta.width,
			height: fullMeta.height
		});
	}

	return { slug, images: results };
}

async function processSpecialAsset(asset) {
	const folderPath = join(sourceDir, ...asset.sourcePath);
	if (!statSync(folderPath, { throwIfNoEntry: false })?.isDirectory()) return null;

	const file = firstImageIn(folderPath);
	if (!file) return null;

	mkdirSync(join(asset.outPath, '..'), { recursive: true });
	const meta = await sharp(join(folderPath, file))
		.rotate()
		.resize({ width: asset.width, withoutEnlargement: true })
		.webp({ quality: asset.quality })
		.toFile(asset.outPath);

	return { out: asset.outPath, width: meta.width, height: meta.height };
}

const report = [];

for (const group of productGroups) {
	const groupPath = join(sourceDir, group.sourceFolder);
	if (!statSync(groupPath, { throwIfNoEntry: false })?.isDirectory()) {
		console.warn(`⚠ Source category folder not found: "${group.sourceFolder}"`);
		continue;
	}

	for (const [productFolder, slug] of Object.entries(group.items)) {
		const result = await processProductFolder(group.sourceFolder, productFolder, slug);
		if (!result) {
			console.warn(`⚠ No images found for "${group.sourceFolder}/${productFolder}"`);
			continue;
		}
		report.push(result);
		console.log(`✔ ${slug}: ${result.images.length} image(s)`);
		for (const img of result.images) {
			console.log(`    ${img.full} (${img.width}×${img.height})`);
		}
	}
}

for (const asset of specialAssets) {
	const result = await processSpecialAsset(asset);
	if (result) {
		console.log(`✔ ${result.out} (${result.width}×${result.height})`);
	} else {
		console.warn(`⚠ Special asset source not found: ${asset.sourcePath.join('/')}`);
	}
}

console.log(`\nProcessed ${report.length} product folders.`);
console.log('\n--- JSON report (for building product data files) ---');
console.log(JSON.stringify(report, null, 2));
