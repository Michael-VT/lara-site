/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000003',
	slug: 'beaded-evening-bag',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Beaded evening bag',
		pt: 'Bolsa de noite em contas',
		uk: 'Сумочка з бісеру для урочистих подій',
		ru: 'Сумочка из бисера для торжества'
	},
	description: {
		en: 'A hand-woven beaded bag for special occasions, shown with a matching beaded coin purse charm. Price is for the bag alone, without additional accessories.',
		pt: 'Uma bolsa de noite em contas, tecida à mão para ocasiões especiais, apresentada com um pingente-moedeiro a combinar. O preço é apenas para a bolsa, sem acessórios adicionais.',
		uk: 'Нарядна сумочка, сплетена вручну з бісеру — для урочистих подій, показана з відповідним брелоком-гаманцем. Ціна вказана без додаткових аксесуарів.',
		ru: 'Нарядная сумочка, сплетённая вручную из бисера — для торжественных случаев, показана с подходящим брелоком-монетницей. Цена указана за сумочку без дополнительных аксессуаров.'
	},

	price: { mode: 'fixed', amount: 50, currency: 'EUR' },

	images: [
		{
			src: '/images/products/beaded-evening-bag/1.webp',
			thumb: '/images/products/beaded-evening-bag/1-thumb.webp',
			width: 1254,
			height: 1254,
			alt: {
				en: 'Beaded evening bag for special occasions',
				pt: 'Bolsa de noite em contas para ocasiões especiais',
				uk: 'Нарядна сумочка з бісеру для урочистих подій',
				ru: 'Нарядная сумочка из бисера для торжества'
			}
		},
		{
			src: '/images/products/beaded-evening-bag/2.webp',
			thumb: '/images/products/beaded-evening-bag/2-thumb.webp',
			width: 1122,
			height: 1402,
			alt: {
				en: 'Beaded evening bag with matching coin purse charm, another angle',
				pt: 'Bolsa de noite em contas com pingente-moedeiro a combinar, outro ângulo',
				uk: 'Нарядна сумочка з бісеру із брелоком-гаманцем, інший ракурс',
				ru: 'Нарядная сумочка из бисера с подходящим брелоком-монетницей, другой ракурс'
			}
		},
		{
			src: '/images/products/beaded-evening-bag/3.webp',
			thumb: '/images/products/beaded-evening-bag/3-thumb.webp',
			width: 1122,
			height: 1402,
			alt: {
				en: 'Beaded evening bag with matching coin purse charm, another angle',
				pt: 'Bolsa de noite em contas com pingente-moedeiro a combinar, outro ângulo',
				uk: 'Нарядна сумочка з бісеру із брелоком-гаманцем, інший ракурс',
				ru: 'Нарядная сумочка из бисера с подходящим брелоком-монетницей, другой ракурс'
			}
		}
	],

	materials: {
		en: 'Chinese seed beads, 6mm',
		pt: 'Contas chinesas, 6mm',
		uk: 'Китайський бісер, 6мм',
		ru: 'Китайский бисер, 6мм'
	},

	relatedSkus: ['AAA000004', 'AAA000001']
};
