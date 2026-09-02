/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'OTH-002',
	slug: 'blue-gold-earring-ball',
	category: 'other',
	status: 'available',

	title: {
		en: 'Earring ball of blue and golden beads',
		pt: 'Bola para brincos de contas azuis e douradas',
		uk: 'Шарик для сережок із синіх та золотистих намистин',
		ru: 'Шарик для серёжек из синих и золотистых бусин'
	},
	description: {
		en: 'A round ball hand-woven from blue and golden beads — a ready component for earrings, also suited to a keychain or pendant.',
		pt: 'Bola redonda tecida à mão com contas azuis e douradas — base pronta para brincos, também serve para chaveiro ou pingente.',
		uk: 'Круглий шарик, сплетений вручну із синіх та золотистих намистин, — готова основа для сережок; підійде й для брелока або підвіски.',
		ru: 'Круглый шарик, сплетённый вручную из синих и золотистых бусин, — готовая основа для серёжек; подойдёт и для брелока или подвески.'
	},

	price: { mode: 'from', amount: 5, currency: 'EUR' },

	images: [
		{
			src: '/images/products/blue-gold-earring-ball/1.webp',
			thumb: '/images/products/blue-gold-earring-ball/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Round ball for earrings woven from blue and golden beads',
				pt: 'Bola redonda para brincos tecida com contas azuis e douradas',
				uk: 'Круглий шарик для сережок, сплетений із синіх та золотистих намистин',
				ru: 'Круглый шарик для серёжек, сплетённый из синих и золотистых бусин'
			}
		},
		{
			src: '/images/products/blue-gold-earring-ball/2.webp',
			thumb: '/images/products/blue-gold-earring-ball/2-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Round ball for earrings woven from blue and golden beads, another view',
				pt: 'Bola redonda para brincos tecida com contas azuis e douradas, outra vista',
				uk: 'Круглий шарик для сережок із синіх та золотистих намистин, інший ракурс',
				ru: 'Круглый шарик для серёжек из синих и золотистых бусин, другой ракурс'
			}
		}
	],

	materials: {
		en: 'Beads',
		pt: 'Contas',
		uk: 'Намистини',
		ru: 'Бусины'
	},
	colours: {
		en: 'Blue and gold shown; other colours available to order',
		pt: 'Mostrada em azul e dourado; outras cores disponíveis por encomenda',
		uk: 'Показано синій із золотистим; інші кольори доступні на замовлення',
		ru: 'Показаны синий с золотистым; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['OTH-003', 'BEAD-006']
};
