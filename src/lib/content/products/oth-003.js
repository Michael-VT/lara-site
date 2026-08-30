/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'OTH-003',
	slug: 'red-gold-earring-ball',
	category: 'other',
	status: 'available',

	title: {
		en: 'Earring ball of red and golden beads',
		pt: 'Bola para brincos de contas vermelhas e douradas',
		uk: 'Шарик для сережок із червоних та золотистих намистин',
		ru: 'Шарик для серёжек из красных и золотистых бусин'
	},
	description: {
		en: 'A round ball hand-woven from red and golden beads — a ready component for earrings, also suited to a keychain or pendant.',
		pt: 'Bola redonda tecida à mão com contas vermelhas e douradas — base pronta para brincos, também serve para chaveiro ou pingente.',
		uk: 'Круглий шарик, сплетений вручну із червоних та золотистих намистин, — готова основа для сережок; підійде й для брелока або підвіски.',
		ru: 'Круглый шарик, сплетённый вручную из красных и золотистых бусин, — готовая основа для серёжек; подойдёт и для брелока или подвески.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/red-gold-earring-ball/1.webp',
			thumb: '/images/products/red-gold-earring-ball/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Round ball for earrings woven from red and golden beads',
				pt: 'Bola redonda para brincos tecida com contas vermelhas e douradas',
				uk: 'Круглий шарик для сережок, сплетений із червоних та золотистих намистин',
				ru: 'Круглый шарик для серёжек, сплетённый из красных и золотистых бусин'
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
		en: 'Red and gold shown; other colours available to order',
		pt: 'Mostrada em vermelho e dourado; outras cores disponíveis por encomenda',
		uk: 'Показано червоний із золотистим; інші кольори доступні на замовлення',
		ru: 'Показаны красный с золотистым; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour',
		pt: 'Pode ser encomendada noutra cor',
		uk: 'Можна замовити в іншому кольорі',
		ru: 'Можно заказать в другом цвете'
	},

	relatedSkus: ['OTH-002']
};
