/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'JWL-004',
	slug: 'white-pearl-bead-necklace',
	category: 'jewellery',
	status: 'available',

	title: {
		en: 'Necklace of white faux pearls and seed beads',
		pt: 'Colar de pérolas brancas e miçangas',
		uk: 'Намисто з білих перлинних намистин і бісеру',
		ru: 'Колье из белых жемчужных бусин и бисера'
	},
	description: {
		en: 'A necklace hand-woven from white faux pearls and seed beads. Can be made to order in a different colour combination.',
		ru: 'Колье, сплетённое вручную из белых жемчужных бусин и бисера. Можно заказать в другом сочетании цветов.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-pearl-bead-necklace/1.webp',
			thumb: '/images/products/white-pearl-bead-necklace/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Necklace of white faux pearls and seed beads',
				ru: 'Колье из белых жемчужных бусин и бисера'
			}
		}
	],

	materials: { en: 'Faux pearls, seed beads', ru: 'Жемчужные бусины, бисер' },
	colours: {
		en: 'White pearl shown; other colours available to order',
		ru: 'Показан белый жемчуг; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['JWL-001', 'JWL-002', 'JWL-003']
};
