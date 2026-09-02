/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'BAG-008',
	slug: 'irish-motif-knitted-bag',
	category: 'knitted',
	status: 'available',

	title: {
		en: 'Bag crocheted with Irish motifs',
		pt: 'Bolsa em croché com motivos irlandeses',
		uk: "Сумка, пов'язана гачком за ірландськими мотивами",
		ru: 'Сумка, связанная крючком по ирландским мотивам'
	},
	shortDescription: {
		en: 'A small handmade Irish-lace crochet bag in Portuguese mercerised cotton Limol №12. One of a kind.',
		pt: 'Uma pequena bolsa artesanal em renda irlandesa, em algodão mercerizado português Limol nº 12. Peça única.',
		uk: 'Невелика сумочка ручної роботи в техніці ірландського мережива, португальська мерсеризована бавовна Limol №12. Єдиний екземпляр.',
		ru: 'Небольшая сумочка ручной работы в технике ирландского кружева, португальский мерсеризованный хлопок Limol №12. Единственный экземпляр.'
	},
	description: {
		en: 'A small handmade bag crocheted in the Irish lace technique. It is assembled from separate airy motifs — flowers, leaves and decorative elements — that form a voluminous botanical pattern; handwork makes the design lively and truly one of a kind. The bag is crocheted from Portuguese mercerised cotton Limol №12 — a smooth yarn with a gentle natural sheen. Its compact 21 × 21 cm size and 8 cm depth hold a phone, a small wallet, keys and everyday essentials. The handles measure 67 cm (38 cm shoulder drop), and the bag closes with a convenient magnetic clasp. The natural light-beige shade pairs easily with summer outfits, linen dresses and calm everyday looks. This is a one-of-a-kind piece, made entirely by hand in Portugal.',
		pt: 'Uma pequena bolsa artesanal em croché, executada na técnica de renda irlandesa. É composta por motivos rendados separados — flores, folhas e elementos decorativos — que formam um padrão botânico volumoso; o trabalho manual torna o desenho vivo e verdadeiramente único. A bolsa é feita em algodão mercerizado português Limol nº 12 — um fio liso com um brilho natural suave. O tamanho compacto de 21 × 21 cm e a profundidade de 8 cm acomodam um telemóvel, uma carteira pequena, chaves e o essencial do dia a dia. As alças medem 67 cm (caimento de 38 cm no ombro) e a bolsa fecha com um prático fecho magnético. O tom bege claro natural combina facilmente com looks de verão, vestidos de linho e imagens quotidianas tranquilas. É uma peça única, feita inteiramente à mão em Portugal.',
		uk: 'Невелика в’язана сумочка ручної роботи, виконана гачком у техніці ірландського мережива. Вона складається з окремих ажурних мотивів — квітів, листків та декоративних елементів, — що утворюють об’ємний рослинний візерунок; завдяки ручній роботі малюнок виходить живим і неповторним. Сумочка зв’язана з португальської мерсеризованої бавовни Limol №12 — пряжі з гладкою фактурою та м’яким природним блиском. Компактний розмір 21 × 21 см і глибина 8 см вміщують телефон, невеликий гаманець, ключі та потрібні дрібниці. Довжина ручок — 67 см (посадка на плечі — 38 см), застібається на зручну магнітну кнопку. Натуральний світло-бежевий відтінок легко поєднується з літнім одягом, лляними сукнями та спокійними повсякденними образами. Це єдиний екземпляр, повністю виконаний вручну в Португалії.',
		ru: 'Небольшая вязаная сумочка ручной работы, выполненная крючком в технике ирландского кружева. Она собрана из отдельных ажурных мотивов — цветов, листьев и декоративных элементов, — которые образуют объёмный растительный узор. Благодаря ручной работе рисунок получается живым и неповторимым. Сумочка связана из португальского мерсеризованного хлопка Limol №12 — нити с гладкой фактурой и мягким естественным блеском. Компактный размер 21 × 21 см и глубина 8 см вмещают телефон, небольшой кошелёк, ключи и необходимые мелочи. Длина ручек — 67 см (посадка на плече — 38 см), застёгивается на удобную магнитную кнопку. Натуральный светло-бежевый оттенок легко сочетается с летней одеждой, льняными платьями и спокойными повседневными образами. Это единственный экземпляр, полностью выполненный вручную в Португалии.'
	},

	price: { mode: 'from', amount: 35, typicalMax: 50, currency: 'EUR' },

	images: [
		{
			src: '/images/products/irish-motif-knitted-bag/1.webp',
			thumb: '/images/products/irish-motif-knitted-bag/1-thumb.webp',
			width: 1175,
			height: 1339,
			alt: {
				en: 'Hand-crocheted bag made of Irish motifs',
				pt: 'Bolsa feita à mão em croché com motivos irlandeses',
				uk: "Сумка, пов'язана вручну гачком з ірландських мотивів",
				ru: 'Сумка, связанная вручную крючком по ирландским мотивам'
			}
		},
		{
			src: '/images/products/irish-motif-knitted-bag/2.webp',
			thumb: '/images/products/irish-motif-knitted-bag/2-thumb.webp',
			width: 960,
			height: 1280,
			alt: {
				en: 'Irish-motif bag, additional view',
				pt: 'Bolsa com motivos irlandeses, vista adicional',
				uk: 'Сумочка за ірландськими мотивами, додатковий вид',
				ru: 'Сумочка по ирландским мотивам, дополнительный вид'
			}
		},
		{
			src: '/images/products/irish-motif-knitted-bag/3.webp',
			thumb: '/images/products/irish-motif-knitted-bag/3-thumb.webp',
			width: 1254,
			height: 1254,
			alt: {
				en: 'Limol yarn label: 100% mercerised cotton',
				pt: 'Etiqueta do fio Limol: 100% algodão mercerizado',
				uk: 'Бірка пряжі Limol: 100% мерсеризована бавовна',
				ru: 'Бирка пряжи Limol: 100% мерсеризованный хлопок'
			}
		}
	],

	dimensions: {
		en: '21 × 21 × 8 cm; handles 67 cm (38 cm drop); magnetic clasp',
		pt: '21 × 21 × 8 cm; alças 67 cm (caimento 38 cm); fecho magnético',
		uk: '21 × 21 × 8 см; ручки 67 см (посадка 38 см); магнітна застібка',
		ru: '21 × 21 × 8 см; ручки 67 см (посадка 38 см); магнитная застёжка'
	},

	materials: {
		en: 'Portuguese mercerised cotton Limol №12',
		pt: 'Algodão mercerizado português Limol nº 12',
		uk: 'Португальська мерсеризована бавовна Limol №12',
		ru: 'Португальский мерсеризованный хлопок Limol №12'
	},

	relatedSkus: ['KNIT-002', 'KNIT-005']
};
