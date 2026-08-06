/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'JWL-003',
	slug: 'silver-gunmetal-beaded-ball-keychain',
	category: 'jewellery',
	status: 'available',

	title: {
		en: 'Beaded ball keychain with pearl, silver and gunmetal accents',
		pt: 'Porta-chaves bola em contas com pérolas, detalhes prateados e cinza-chumbo',
		uk: 'Брелок-кулька з перлинами, сріблястими та сталевими вставками',
		ru: 'Брелок подвеска с серебристым и сталистым бисером'
	},
	description: {
		en: 'A round ball keychain charm hand-woven from faux pearls, seed beads and silver and gunmetal-grey accent beads, finished with a chain and lobster clasp. Balls can be made from beads of different colours and sizes. Any quantity can be ordered.',
		ru: 'Круглый брелок-подвеска, сплетённый вручную из жемчужных бусин, бисера и серебристых и серо-стальных бусин-акцентов, с цепочкой и карабином. Шарики могут быть сделаны из разного бисера по цвету и разного размера. Заказать можно любое количество.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/silver-gunmetal-beaded-ball-keychain/1.webp',
			thumb: '/images/products/silver-gunmetal-beaded-ball-keychain/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Beaded ball keychain with pearl, silver and gunmetal accents',
				ru: 'Брелок подвеска с серебристым и сталистым бисером'
			}
		}
	],

	materials: { en: 'Faux pearls, seed beads, metal chain and clasp', ru: 'Жемчужные бусины, бисер, металлическая цепочка и карабин' },
	colours: {
		en: 'White pearl, red, silver and gunmetal grey shown; other colours available to order',
		ru: 'Показаны белый жемчуг, красный, серебристый и серо-стальной цвета; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['JWL-001', 'JWL-002']
};
