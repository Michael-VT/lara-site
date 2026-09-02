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
		pt: 'Uma mini-bolsa colorida em contas, tecida à mão em tamanho de menina, apresentada com uma bracelete a combinar.',
		uk: 'Невелика яскрава сумочка, сплетена вручну з бісеру, розмір — для дівчинки, показана з відповідним браслетом.',
		ru: 'Небольшая яркая сумочка, сплетённая вручную из бисера, размер — для девочки, показана с подходящим браслетом.'
	},

	price: { mode: 'fixed', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/bright-mini-bag-for-girl/1.webp',
			thumb: '/images/products/bright-mini-bag-for-girl/1-thumb.webp',
			width: 1280,
			height: 956,
			alt: {
				en: 'Bright, brightly-coloured mini beaded bag for a girl',
				pt: 'Mini-bolsa em contas de cores vivas para menina',
				uk: 'Яскрава міні-сумочка з бісеру для дівчинки',
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
				pt: 'Mini-bolsa em contas de cores vivas com bracelete em contas a combinar',
				uk: 'Яскрава міні-сумочка з бісеру з відповідним браслетом',
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
				pt: 'Mini-bolsa em contas de cores vivas com bracelete em contas a combinar, outro ângulo',
				uk: 'Яскрава міні-сумочка з бісеру з відповідним браслетом, інший ракурс',
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
				pt: 'Mini-bolsa em contas de cores vivas com duas braceletes a combinar',
				uk: 'Яскрава міні-сумочка з бісеру з двома відповідними браслетами',
				ru: 'Яркая мини-сумочка из бисера с двумя подходящими браслетами'
			}
		}
	],

	dimensions: {
		en: '5 × 6 cm, handle 12 cm',
		pt: '5 × 6 cm, alça de 12 cm',
		uk: '5 × 6 см, ручка 12 см',
		ru: '5 × 6 см, ручка 12 см'
	},

	materials: {
		en: 'Czech and Chinese seed beads',
		pt: 'Contas checas e chinesas',
		uk: 'Чеський та китайський бісер',
		ru: 'Чешский и китайский бисер'
	},

	relatedSkus: ['BAG-003', 'BAG-002']
};
