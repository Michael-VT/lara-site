/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-009',
	slug: 'white-rice-pearl-bead-bracelet',
	category: 'bracelets',
	status: 'available',

	title: {
		en: 'White rice pearl bead bracelet',
		pt: 'Pulseira de pérolas de arroz brancas',
		uk: 'Браслет з білих перлин рису та бісеру',
		ru: 'Белый браслет из риса и бисера'
	},
	description: {
		en: 'A hand-woven bracelet made from white rice-shaped pearl beads and seed beads.',
		ru: 'Браслет, сплетённый вручную из белого рисового жемчуга и бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-rice-pearl-bead-bracelet/1.webp',
			thumb: '/images/products/white-rice-pearl-bead-bracelet/1-thumb.webp',
			width: 399,
			height: 1280,
			alt: {
				en: 'White rice pearl bead bracelet',
				ru: 'Белый браслет из риса и бисера'
			}
		}
	],

	materials: { en: 'Rice pearl beads, seed beads', ru: 'Рисовый жемчуг, бисер' },
	colours: {
		en: 'White shown; other colours available to order',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-005']
};
