/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-002',
	slug: 'black-beaded-coin-purse',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Black beaded coin purse',
		pt: 'Bolsa moedeiro preta em contas',
		uk: 'Чорна сумочка-гаманець з бісеру',
		ru: 'Черная сумочка монетница из бисера'
	},
	description: {
		en: 'A small coin purse hand-woven entirely from black seed beads.',
		pt: 'Uma pequena bolsa moedeiro, tecida à mão inteiramente em contas pretas.',
		uk: 'Невелика сумочка-гаманець, повністю сплетена вручну з чорного бісеру.',
		ru: 'Небольшая сумочка-монетница, полностью сплетённая вручную из чёрного бисера.'
	},

	price: { mode: 'from', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/black-beaded-coin-purse/1.webp',
			thumb: '/images/products/black-beaded-coin-purse/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Black coin purse hand-woven from seed beads',
				pt: 'Bolsa moedeiro preta, tecida à mão em contas',
				uk: 'Чорна сумочка-гаманець, сплетена вручну з бісеру',
				ru: 'Чёрная сумочка-монетница, сплетённая из бисера'
			}
		},
		{
			src: '/images/products/black-beaded-coin-purse/2.webp',
			thumb: '/images/products/black-beaded-coin-purse/2-thumb.webp',
			width: 1268,
			height: 1280,
			alt: {
				en: 'Black coin purse with beaded chain strap',
				pt: 'Bolsa moedeiro preta com corrente de contas',
				uk: 'Чорна сумочка-гаманець з бісерним ланцюжком',
				ru: 'Чёрная сумочка-монетница с бисерной цепочкой'
			}
		}
	],

	materials: { en: 'Seed beads', pt: 'Contas', uk: 'Бісер', ru: 'Бисер' },

	relatedSkus: ['BAG-001', 'BEAD-004']
};
