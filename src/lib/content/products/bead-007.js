/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000038',
	slug: 'white-beaded-flat-heart-keychain',
	categories: ['accessories', 'beadwork'],
	status: 'available',

	title: {
		en: 'Flat white beaded heart keychain',
		pt: 'Porta-chaves coração plano em contas brancas',
		uk: 'Плаский брелок-серце з білого бісеру',
		ru: 'Плоский брелок-сердце из белого бисера'
	},
	description: {
		en: 'A flat heart-shaped keychain hand-woven from 8 mm white seed beads.',
		pt: 'Um porta-chaves plano em forma de coração, tecido à mão com contas brancas de 8 mm.',
		uk: 'Плаский брелок-серце, сплетений вручну з білого бісеру 8 мм.',
		ru: 'Плоский брелок-сердце, сплетённый вручную из белого бисера 8 мм.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-beaded-flat-heart-keychain/1.webp',
			thumb: '/images/products/white-beaded-flat-heart-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Flat white beaded heart-shaped keychain',
				pt: 'Porta-chaves plano em forma de coração em contas brancas',
				uk: 'Плаский брелок у вигляді серця з білого бісеру',
				ru: 'Плоский брелок в виде сердца из белого бисера'
			}
		},
		{
			src: '/images/products/white-beaded-flat-heart-keychain/2.webp',
			thumb: '/images/products/white-beaded-flat-heart-keychain/2-thumb.webp',
			width: 1280,
			height: 1170,
			alt: {
				en: 'White beaded heart keychain hanging on a black bag',
				pt: 'Porta-chaves coração em contas brancas pendurado numa bolsa preta',
				uk: 'Брелок-серце з білого бісеру на чорній сумці',
				ru: 'Брелок-сердце из белого бисера на чёрной сумке'
			}
		}
	],

	dimensions: {
		en: 'Size: 5 cm',
		pt: 'Tamanho: 5 cm',
		uk: 'Розмір: 5 см',
		ru: 'Размер: 5 см'
	},

	materials: { en: '8 mm seed beads', pt: 'Contas de 8 mm', uk: 'Бісер 8 мм', ru: 'Бисер 8 мм' },

	relatedSkus: ['AAA000037', 'AAA000034']
};
