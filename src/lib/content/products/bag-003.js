/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-003',
	slug: 'beaded-evening-bag',
	category: 'bags',
	status: 'available',

	title: {
		en: 'Beaded evening bag',
		pt: 'Bolsa de noite em contas',
		uk: 'Сумочка з бісеру для урочистих подій',
		ru: 'Сумочка из бисера для торжества'
	},
	description: {
		en: 'A hand-woven beaded bag for special occasions.',
		ru: 'Нарядная сумочка, сплетённая вручную из бисера — для торжественных случаев.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/beaded-evening-bag/1.webp',
			thumb: '/images/products/beaded-evening-bag/1-thumb.webp',
			width: 1182,
			height: 1280,
			alt: {
				en: 'Beaded evening bag for special occasions',
				ru: 'Нарядная сумочка из бисера для торжества'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },

	relatedSkus: ['BAG-004', 'BAG-001']
};
