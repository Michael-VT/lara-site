/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BR-013',
	slug: 'white-pearl-large-small-bracelet',
	category: 'bracelets',
	status: 'sold',

	title: {
		en: 'Bracelet of large and small white pearls',
		pt: 'Pulseira de pérolas brancas grandes e pequenas',
		uk: 'Браслет із крупного та дрібного білого перлів',
		ru: 'Браслет из крупного и мелкого белого жемчуга'
	},
	description: {
		en: 'A bracelet strung with alternating large and small white pearls — a classic, softly glowing piece.',
		pt: 'Pulseira com pérolas brancas grandes e pequenas alternadas — uma peça clássica de brilho suave.',
		uk: 'Браслет із чергуванням крупного та дрібного білого перлів — класична, м’яко сяюча прикраса.',
		ru: 'Браслет с чередованием крупных и мелких белых жемчужин — классическое, мягко сияющее украшение.'
	},

	price: { mode: 'from', amount: 8, typicalMax: 15, currency: 'EUR' },

	images: [
		{
			src: '/images/products/white-pearl-large-small-bracelet/1.webp',
			thumb: '/images/products/white-pearl-large-small-bracelet/1-thumb.webp',
			width: 577,
			height: 1280,
			alt: {
				en: 'Bracelet of alternating large and small white pearls',
				pt: 'Pulseira de pérolas brancas grandes e pequenas alternadas',
				uk: 'Браслет із чергуванням крупного та дрібного білого перлів',
				ru: 'Браслет с чередованием крупных и мелких белых жемчужин'
			}
		}
	],

	dimensions: {
		en: 'Length: 16 cm, clasp fastening',
		pt: 'Comprimento: 16 cm, fecho',
		uk: 'Довжина: 16 см, застібка-замок',
		ru: 'Длина: 16 см, застёжка-замок'
	},

	materials: {
		en: 'Pearls',
		pt: 'Pérolas',
		uk: 'Перли',
		ru: 'Жемчуг'
	},
	colours: {
		en: 'White pearls shown',
		pt: 'Mostrada com pérolas brancas',
		uk: 'Показані білі перли',
		ru: 'Показан белый жемчуг'
	},
	customisation: {
		en: 'A similar one can be made to order',
		pt: 'Um semelhante pode ser encomendado',
		uk: 'Схожий можна замовити',
		ru: 'Похожий можно заказать'
	},

	relatedSkus: ['BR-009', 'JWL-004']
};
