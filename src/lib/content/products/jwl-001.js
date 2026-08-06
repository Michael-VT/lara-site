/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'JWL-001',
	slug: 'gold-accented-beaded-ball-keychain',
	category: 'jewellery',
	status: 'available',

	title: {
		en: 'Beaded ball keychain with pearl and gold accents',
		pt: 'Porta-chaves bola em contas com pérolas e detalhes dourados',
		uk: 'Брелок-кулька з перлинами та золотистими вставками',
		ru: 'Брелок подвеска с золотистым бисером'
	},
	description: {
		en: 'A round ball keychain charm hand-woven from faux pearls, seed beads and gold accent beads, finished with a chain and lobster clasp. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		ru: 'Круглый брелок-подвеска, сплетённый вручную из жемчужных бусин, бисера и золотистых бусин-акцентов, с цепочкой и карабином. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/gold-accented-beaded-ball-keychain/1.webp',
			thumb: '/images/products/gold-accented-beaded-ball-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Beaded ball keychain with pearl and gold accents',
				ru: 'Брелок подвеска с золотистым бисером'
			}
		},
		{
			src: '/images/products/gold-accented-beaded-ball-keychain/2.webp',
			thumb: '/images/products/gold-accented-beaded-ball-keychain/2-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Three beaded ball keychains shown together',
				ru: 'Три брелока-подвески вместе'
			}
		}
	],

	materials: { en: 'Faux pearls, seed beads, metal chain and clasp', ru: 'Жемчужные бусины, бисер, металлическая цепочка и карабин' },
	colours: {
		en: 'White pearl, red and gold shown; other colours available to order',
		ru: 'Показаны белый жемчуг, красный и золотистый цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['JWL-002', 'JWL-003']
};
