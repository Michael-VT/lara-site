/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'OTH-001',
	slug: 'craft-blanks-for-jewellery-and-decor',
	category: 'other',
	status: 'made_to_order',

	title: {
		en: 'Craft blanks for earrings, keychains and decor',
		pt: 'Peças-base para brincos, chaveiros e decoração',
		uk: 'Заготовки для сережок, брелоків та декору',
		ru: 'Заготовки для серёжек, брелоков и декора'
	},
	description: {
		en: 'Blanks in assorted shapes and colours, which can be used for making earrings and keychains, as buttons, or for other decor.',
		pt: 'Peças-base em várias formas e cores, que podem ser usadas na confecção de brincos e chaveiros, como botões ou para outro tipo de decoração.',
		uk: 'Заготовки різних форм та кольорів, які можна використовувати для виготовлення сережок і брелоків, як ґудзики або для іншого декору.',
		ru: 'Заготовки различных форм и расцветок, которые можно использовать при изготовлении серёжек и брелоков, как пуговицы или для другого декора.'
	},

	price: { mode: 'on_request' },

	images: [
		{
			src: '/images/products/craft-blanks-for-jewellery-and-decor/1.webp',
			thumb: '/images/products/craft-blanks-for-jewellery-and-decor/1-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Assorted craft blanks for earrings, keychains and decor',
				pt: 'Peças-base variadas para brincos, chaveiros e decoração',
				uk: 'Різні заготовки для сережок, брелоків та декору',
				ru: 'Различные заготовки для серёжек, брелоков и декора'
			}
		}
	],

	colours: {
		en: 'Assorted shapes and colours shown; other variants available to order',
		pt: 'Mostradas várias formas e cores; outras variantes disponíveis por encomenda',
		uk: 'Показано різні форми та кольори; інші варіанти доступні на замовлення',
		ru: 'Показаны разные формы и расцветки; другие варианты доступны на заказ'
	},
	customisation: {
		en: 'Order the shapes, colours and quantity you need',
		pt: 'Encomende as formas, cores e quantidades de que precisa',
		uk: 'Можна замовити потрібні форми, кольори та кількість',
		ru: 'Можно заказать нужные формы, цвета и количество'
	},

	productionTime: {
		en: 'Usually 1–2 days',
		pt: 'Normalmente 1–2 dias',
		uk: 'Зазвичай 1–2 дні',
		ru: 'Обычно 1–2 дня'
	}
};
