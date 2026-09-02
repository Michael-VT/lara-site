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
		pt: 'Pulseira tecida à mão com pérolas brancas em forma de arroz e contas.',
		uk: 'Браслет, сплетений вручну з білих перлин рису та бісеру.',
		ru: 'Браслет, сплетённый вручную из белого рисового жемчуга и бисера.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-rice-pearl-bead-bracelet/1.webp',
			thumb: '/images/products/white-rice-pearl-bead-bracelet/1-thumb.webp',
			width: 399,
			height: 1280,
			alt: {
				en: 'White rice pearl bead bracelet',
				pt: 'Pulseira de pérolas de arroz brancas',
				uk: 'Браслет з білих перлин рису та бісеру',
				ru: 'Белый браслет из риса и бисера'
			}
		}
	],

	materials: {
		en: 'Rice pearl beads, seed beads',
		pt: 'Pérolas de arroz, contas',
		uk: 'Перлини рису, бісер',
		ru: 'Рисовый жемчуг, бисер'
	},
	colours: {
		en: 'White shown; other colours available to order',
		pt: 'Mostrada em branco; outras cores disponíveis por encomenda',
		uk: 'Показано білий колір; інші кольори доступні на замовлення',
		ru: 'Показан белый цвет; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['BR-005']
};
