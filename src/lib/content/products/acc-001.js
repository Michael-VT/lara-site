/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'ACC-001',
	slug: 'white-beaded-cup-coaster',
	category: 'accessories',
	status: 'available',

	title: {
		en: 'White beaded cup coaster',
		pt: 'Base para chávena em contas brancas',
		uk: 'Підставка під чашку з білого бісеру',
		ru: 'Подставка под чашку из белого бисера'
	},
	description: {
		en: 'A hand-woven coaster made entirely from white seed beads, sized to fit under a cup or mug.',
		ru: 'Подставка под чашку, полностью сплетённая вручную из белого бисера.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/white-beaded-cup-coaster/1.webp',
			thumb: '/images/products/white-beaded-cup-coaster/1-thumb.webp',
			width: 627,
			height: 592,
			alt: {
				en: 'White beaded cup coaster',
				ru: 'Подставка под чашку из белого бисера'
			}
		}
	],

	materials: { en: 'Seed beads', ru: 'Бисер' },
	colours: {
		en: 'White shown; other colours available to order',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['ACC-002', 'ACC-003', 'ACC-004']
};
