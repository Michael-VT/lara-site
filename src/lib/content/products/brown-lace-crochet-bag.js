/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000045',
	slug: 'brown-lace-crochet-bag',
	categories: ['bags', 'knitted'],
	status: 'available',

	title: {
		en: 'Handmade brown lace crochet bag',
		pt: 'Bolsa em croché rendado castanha, feita à mão',
		uk: 'Коричнева ажурна сумочка ручної роботи',
		ru: 'Коричневая ажурная сумочка ручной работы'
	},
	description: {
		en: 'A light, small bag crocheted from 100% mercerised cotton, finished with a faux-pearl clasp. Just the right size for a phone, bank cards, cash and a few small personal items. The price is for the bag itself, without the removable chain strap with carabiners.',
		pt: 'Uma bolsa leve e pequena, feita em croché com 100% algodão mercerizado, com um fecho de pérola artificial. O tamanho certo para um telemóvel, cartões, dinheiro e alguns pequenos objetos pessoais. O preço é referente à bolsa, sem a corrente amovível com mosquetões.',
		uk: 'Легка невелика сумочка, зв’язана гачком зі 100% мерсеризованої бавовни, з застібкою зі штучною перлиною. Якраз підійде для телефону, банківських карток, купюр і кількох дрібних особистих речей. Ціна вказана за саму сумочку, без знімного ремінця-ланцюжка з карабінами.',
		ru: 'Лёгкая небольшая сумочка, связанная крючком из 100% мерсеризованного хлопка. Сумочка дополнена жемчужной застёжкой. Подойдёт для телефона, банковских карт, купюр и небольших личных вещей. Цена указана без учёта съёмного ремешка-цепочки с карабинами.'
	},

	price: { mode: 'fixed', amount: 35, currency: 'EUR' },

	images: [
		{
			src: '/images/products/brown-lace-crochet-bag/1.webp',
			thumb: '/images/products/brown-lace-crochet-bag/1-thumb.webp',
			width: 1067,
			height: 1280,
			alt: {
				en: 'Brown lace crochet bag with a faux-pearl clasp, flat view',
				pt: 'Bolsa em croché rendado castanha com fecho de pérola, vista de frente',
				uk: 'Коричнева ажурна сумочка з перлинною застібкою, вигляд спереду',
				ru: 'Коричневая ажурная сумочка с жемчужной застёжкой, вид спереди'
			}
		},
		{
			src: '/images/products/brown-lace-crochet-bag/2.webp',
			thumb: '/images/products/brown-lace-crochet-bag/2-thumb.webp',
			width: 1067,
			height: 1280,
			alt: {
				en: 'Brown lace crochet bag with a gold chain strap and heart-shaped clasps',
				pt: 'Bolsa em croché rendado castanha com corrente dourada e fechos em coração',
				uk: 'Коричнева ажурна сумочка із золотистим ланцюжком і карабінами-сердечками',
				ru: 'Коричневая ажурная сумочка с золотистой цепочкой и карабинами-сердечками'
			}
		}
	],

	dimensions: {
		en: '20 cm wide × 15 cm tall (central part of the bag)',
		pt: '20 cm de largura × 15 cm de altura (parte central da bolsa)',
		uk: '20 см завширшки × 15 см заввишки (центральна частина сумочки)',
		ru: '20 см по ширине × 15 см по высоте центральной части сумочки'
	},

	materials: {
		en: '100% mercerised cotton (crochet), faux-pearl clasp button',
		pt: '100% algodão mercerizado (croché), botão com pérola artificial no fecho',
		uk: '100% мерсеризована бавовна (гачок), застібка зі штучною перлиною',
		ru: '100% мерсеризованный хлопок (вязание крючком), застёжка с искусственной жемчужиной'
	},

	featured: false,
	relatedSkus: ['AAA000026', 'AAA000003'],
	journalSlug: 'brown-lace-crochet-bag'
};
