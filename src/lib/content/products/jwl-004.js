/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000022',
	slug: 'white-pearl-bead-necklace',
	categories: ['jewellery', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Necklace of white faux pearls and seed beads',
		pt: 'Colar de pérolas brancas e miçangas',
		uk: 'Намисто з білих штучних перлин і бісеру',
		ru: 'Колье из белого искусственного жемчуга и бисера'
	},
	description: {
		en: 'A necklace hand-woven from white faux pearls and seed beads. Can be made to order in a different colour combination.',
		pt: 'Colar tecido à mão com pérolas artificiais brancas e miçangas. Pode ser encomendado noutra combinação de cores.',
		uk: 'Намисто, сплетене вручну з білих перлинних намистин і бісеру. Можна замовити в іншому поєднанні кольорів.',
		ru: 'Колье, сплетённое вручную из белых жемчужных бусин и бисера. Можно заказать в другом сочетании цветов.'
	},

	price: { mode: 'from', amount: 20, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-pearl-bead-necklace/1.webp',
			thumb: '/images/products/white-pearl-bead-necklace/1-thumb.webp',
			width: 1086,
			height: 1448,
			alt: {
				en: 'Necklace of white faux pearls and seed beads',
				pt: 'Colar de pérolas brancas e miçangas',
				uk: 'Намисто з білих штучних перлин і бісеру',
				ru: 'Колье из белого искусственного жемчуга и бисера'
			}
		}
	],

	materials: {
		en: 'Faux pearls, seed beads',
		pt: 'Pérolas artificiais, miçangas',
		uk: 'Штучні перлини, бісер',
		ru: 'Искусственный жемчуг, бисер'
	},
	colours: {
		en: 'White pearl shown; other colours available to order',
		pt: 'Mostrado em tons de pérola branca; outras cores disponíveis por encomenda',
		uk: 'Показані білі перлини; інші кольори доступні на замовлення',
		ru: 'Показан белый искусственный жемчуг; другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour combination',
		pt: 'Pode ser encomendado noutra combinação de cores',
		uk: 'Можна замовити в іншому поєднанні кольорів',
		ru: 'Можно заказать в другом сочетании цветов'
	},

	relatedSkus: ['AAA000039', 'AAA000040', 'AAA000041']
};
