/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000046',
	slug: 'lace-phone-pouch',
	categories: ['bags', 'knitted'],
	status: 'available',

	title: {
		en: 'Lace phone pouch',
		pt: 'Bolsa rendada para telemóvel',
		uk: 'Ажурна сумочка для телефону',
		ru: 'Кружевная сумочка для телефона'
	},
	description: {
		en: 'A delicate heart-shaped pouch, crocheted from mercerised cotton lace. A soft felt lining keeps the phone safe inside, and a twisted cord with metal connectors makes a comfortable long strap.',
		pt: 'Uma bolsa delicada em forma de coração, feita em croché com fio de algodão mercerizado rendado. Um forro suave em feltro protege o telemóvel por dentro, e um cordão trançado com conectores metálicos serve de alça longa e confortável.',
		uk: "Ніжна ажурна сумочка у формі сердечка, зв'язана гачком з мерсеризованої бавовни. М'яка фетрова підкладка дбайливо зберігає телефон, а витий шнур з металевими з'єднувачами слугує зручною довгою ручкою.",
		ru: 'Нежная ажурная сумочка, связанная крючком из мерсеризованного хлопка, в форме сердечка. Мягкая фетровая подкладка бережно хранит телефон, а витой шнур с металлическими соединителями служит удобной длинной ручкой.'
	},

	price: { mode: 'fixed', amount: 35, currency: 'EUR' },

	images: [
		{
			src: '/images/products/lace-phone-pouch/1.webp',
			thumb: '/images/products/lace-phone-pouch/1-thumb.webp',
			width: 1536,
			height: 1478,
			alt: {
				en: 'Lace phone pouch, front view',
				pt: 'Bolsa rendada para telemóvel, vista de frente',
				uk: 'Ажурна сумочка для телефону, вигляд спереду',
				ru: 'Кружевная сумочка для телефона — вид спереди'
			}
		},
		{
			src: '/images/products/lace-phone-pouch/2.webp',
			thumb: '/images/products/lace-phone-pouch/2-thumb.webp',
			width: 1024,
			height: 1536,
			alt: {
				en: 'The lace pouch worn on a walk by the sea',
				pt: 'A bolsa rendada usada num passeio à beira-mar',
				uk: 'Ажурна сумочка на прогулянці біля моря',
				ru: 'Кружевная сумочка на прогулке у моря'
			}
		},
		{
			src: '/images/products/lace-phone-pouch/3.webp',
			thumb: '/images/products/lace-phone-pouch/3-thumb.webp',
			width: 1024,
			height: 1536,
			alt: {
				en: 'The pouch measures 21 by 21 cm, strap length 72 cm',
				pt: 'A bolsa mede 21 por 21 cm, comprimento da alça 72 cm',
				uk: 'Сумочка 21 на 21 сантиметр, довжина ручки 72 сантиметри',
				ru: 'Сумочка 21 на 21 сантиметр, длина ручки 72 сантиметра'
			}
		},
		{
			src: '/images/products/lace-phone-pouch/4.webp',
			thumb: '/images/products/lace-phone-pouch/4-thumb.webp',
			width: 1536,
			height: 1404,
			alt: {
				en: 'The cotton yarn and decorative cord',
				pt: 'O fio de algodão e o cordão decorativo',
				uk: 'Бавовняна нитка і декоративний шнур',
				ru: 'Хлопковая нить и декоративный шнур'
			}
		},
		{
			src: '/images/products/lace-phone-pouch/5.webp',
			thumb: '/images/products/lace-phone-pouch/5-thumb.webp',
			width: 1412,
			height: 1536,
			alt: {
				en: 'The Joaninha cotton yarn label: 100% mercerised cotton',
				pt: 'A etiqueta do fio de algodão Joaninha: 100% algodão mercerizado',
				uk: 'Етикетка бавовняної нитки Joaninha: 100% мерсеризована бавовна',
				ru: 'Этикетка хлопковой нити Joaninha: 100% мерсеризованный хлопок'
			}
		}
	],

	dimensions: {
		en: '21 × 21 cm, strap (cord) length 72 cm',
		pt: '21 × 21 cm, comprimento da alça (cordão) 72 cm',
		uk: '21 × 21 см, довжина ручки-шнура 72 см',
		ru: '21 × 21 см, длина ручки-шнура 72 см'
	},

	materials: {
		en: '100% mercerised cotton, Joaninha No. 6 (crochet); soft felt lining; decorative twisted cord (polypropylene); metal connectors and rose-shaped sew-on buttons',
		pt: '100% algodão mercerizado, Joaninha N.º 6 (croché); forro suave em feltro; cordão decorativo trançado (polipropileno); conectores metálicos e botões de costura em forma de rosa',
		uk: "100% мерсеризована бавовна Joaninha № 6 (гачок); м'яка фетрова підкладка; декоративний витий шнур (поліпропілен); металеві з'єднувачі та пришивні ґудзики-трояндочки",
		ru: '100% мерсеризованный хлопок Joaninha № 6 (вязание крючком); мягкая фетровая подкладка; декоративный витой шнур (полипропилен); металлические соединители и пришивные пуговицы-розочки'
	},

	featured: false,
	relatedSkus: ['AAA000045'],
	journalSlug: 'lace-phone-pouch'
};
