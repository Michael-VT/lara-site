/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000027',
	slug: 'crochet-panama-hat',
	categories: ['knitted'],
	status: 'made_to_order',

	title: {
		en: 'Crochet panama hat',
		pt: 'Chapéu panamá em croché',
		uk: "В'язана панама гачком",
		ru: 'Панама, связанная крючком'
	},
	description: {
		en: 'A hand-crocheted panama-style hat.',
		pt: 'Um chapéu panamá em croché, trabalhado à mão.',
		uk: "Панама, пов'язана вручну гачком.",
		ru: 'Панама, связанная вручную крючком.'
	},

	price: { mode: 'from', amount: 10, currency: 'EUR' },

	images: [
		{
			src: '/images/products/crochet-panama-hat/1.webp',
			thumb: '/images/products/crochet-panama-hat/1-thumb.webp',
			width: 1280,
			height: 960,
			alt: {
				en: 'Crochet panama hat',
				pt: 'Chapéu panamá em croché',
				uk: "В'язана панама гачком",
				ru: 'Панама'
			}
		}
	],

	dimensions: {
		en: 'Head circumference 52–56 cm, slight stretch',
		pt: 'Perímetro da cabeça 52–56 cm, ligeiramente elástico',
		uk: 'Обхват голови 52–56 см, трохи тягнеться',
		ru: 'Обхват головы 52–56 см, слегка тянется'
	},

	productionTime: {
		en: 'Usually 20–25 days',
		pt: 'Normalmente 20–25 dias',
		uk: 'Зазвичай 20–25 днів',
		ru: 'Обычно 20–25 дней'
	},

	materials: {
		en: 'Portuguese cotton yarn',
		pt: 'Fio de algodão português',
		uk: 'Португальська бавовняна пряжа',
		ru: 'Португальская хлопковая пряжа'
	},
	colours: {
		en: 'Other colours available to order',
		pt: 'Outras cores disponíveis por encomenda',
		uk: 'Інші кольори доступні на замовлення',
		ru: 'Другие цвета доступны на заказ'
	},
	customisation: {
		en: 'Can be made to order in a different colour and size',
		pt: 'Pode ser encomendado noutra cor e tamanho',
		uk: 'Можна замовити в іншому кольорі та розмірі',
		ru: 'Можно заказать в другом цвете и размере'
	},

	relatedSkus: []
};
