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
		en: 'A small, brightly-coloured hand-woven beaded bag sized for a child, shown with a matching bracelet.',
		ru: 'Небольшая яркая сумочка, сплетённая вручную из бисера, размер — для девочки, показана с подходящим браслетом.'
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
		},
		{
			src: '/images/products/bright-mini-bag-for-girl/2.webp',
			thumb: '/images/products/bright-mini-bag-for-girl/2-thumb.webp',
			width: 1280,
			height: 893,
			alt: {
				en: 'Bright mini beaded bag with matching beaded bracelet',
				ru: 'Яркая мини-сумочка из бисера с подходящим браслетом'
			}
		},
		{
			src: '/images/products/bright-mini-bag-for-girl/3.webp',
			thumb: '/images/products/bright-mini-bag-for-girl/3-thumb.webp',
			width: 1144,
			height: 1280,
			alt: {
				en: 'Bright mini beaded bag with matching beaded bracelet, another angle',
				ru: 'Яркая мини-сумочка из бисера с подходящим браслетом, другой ракурс'
			}
		},
		{
			src: '/images/products/bright-mini-bag-for-girl/4.webp',
			thumb: '/images/products/bright-mini-bag-for-girl/4-thumb.webp',
			width: 961,
			height: 1280,
			alt: {
				en: 'Bright mini beaded bag with two matching bracelets',
				ru: 'Яркая мини-сумочка из бисера с двумя подходящими браслетами'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BAG-003', 'BAG-002']
};
