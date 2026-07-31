/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-004',
	slug: 'bright-mini-bag-for-girl',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Bright mini bag for a girl',
		pt: 'Mini-bolsa colorida para menina',
		uk: 'Яскрава міні-сумочка для дівчинки',
		ru: 'Яркая мини-сумочка для девочки'
	},
	description: {
		en: 'A small, brightly-coloured hand-woven beaded bag sized for a child.',
		ru: 'Небольшая яркая сумочка, сплетённая вручную из бисера, размер — для девочки.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/bright-mini-bag-for-girl/1.webp',
			thumb: '/images/products/bright-mini-bag-for-girl/1-thumb.webp',
			width: 1280,
			height: 956,
			alt: {
				en: 'Bright, brightly-coloured mini beaded bag for a girl',
				ru: 'Яркая мини-сумочка из бисера для девочки'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BAG-003', 'BAG-002']
};
