/** @type {import('$lib/schemas/product.js').Product} */
export const product = {
	sku: 'AAA000003',
	slug: 'beaded-evening-bag',
	categories: ['bags', 'beadwork', 'accessories'],
	status: 'available',

	title: {
		en: 'Pearl Tenderness',
		pt: 'Ternura de Pérolas',
		uk: 'Перлинна ніжність',
		ru: 'Жемчужная нежность'
	},
	description: {
		en: 'An elegant, delicate bag made for special moments! I designed and made this bag myself by hand, with love and attention to every detail. Pearl-effect beads give it a soft, graceful shimmer, while a delicate satin bow adds a romantic touch. It makes a charming accessory for a wedding, a celebration, a special occasion — or simply for moments when you want to feel special.',
		pt: 'Uma bolsa elegante e delicada, criada para momentos especiais! Fui eu que idealizei e fiz esta bolsa à mão, com amor e atenção a cada detalhe. As contas com efeito pérola dão-lhe um brilho suave e nobre, e o laço de cetim delicado acrescenta um toque romântico. Esta bolsa é um acessório encantador para um casamento, uma festa, uma ocasião especial — ou simplesmente para os momentos em que se quer sentir especial.',
		uk: "Елегантна й ніжна сумочка, створена для особливих миттєвостей! Я сама придумала і виготовила цю сумочку вручну, з любов'ю та увагою до кожної деталі. Намистини з перламутровим ефектом надають їй м'якого, шляхетного сяйва, а ніжний атласний бант додає нотку романтики. Така сумочка стане чарівним аксесуаром для весілля, свята, урочистості — або просто для миттєвостей, коли хочеться відчути себе особливою.",
		ru: 'Элегантная и нежная сумочка, созданная для особенных моментов! Я сама придумала и изготовила эту сумочку вручную, с любовью и вниманием к каждой детали. Бусины с жемчужным эффектом придают ей мягкое, благородное сияние, а нежный атласный бант добавляет нотку романтики. Такая сумочка станет очаровательным аксессуаром для свадьбы, праздника, торжества или просто для тех моментов, когда хочется почувствовать себя особенной.'
	},

	price: { mode: 'fixed', amount: 50, currency: 'EUR' },

	images: [
		{
			src: '/images/products/beaded-evening-bag/1.webp',
			thumb: '/images/products/beaded-evening-bag/1-thumb.webp',
			width: 1086,
			height: 1448,
			alt: {
				en: 'Pearl Tenderness beaded bag with pearls and satin ribbon',
				pt: 'Bolsa Ternura de Pérolas com pérolas e fita de cetim',
				uk: 'Сумочка «Перлинна ніжність» з перлин та атласної стрічки',
				ru: 'Сумочка «Жемчужная нежность» из жемчуга с атласной лентой'
			}
		},
		{
			src: '/images/products/beaded-evening-bag/2.webp',
			thumb: '/images/products/beaded-evening-bag/2-thumb.webp',
			width: 1312,
			height: 1199,
			alt: {
				en: 'Pearl Tenderness bag, bottom view showing the beadwork pattern',
				pt: 'Bolsa Ternura de Pérolas, vista do fundo com o padrão de pérolas',
				uk: 'Сумочка «Перлинна ніжність», вигляд знизу з візерунком плетіння',
				ru: 'Сумочка «Жемчужная нежность», вид снизу с узором плетения'
			}
		}
	],

	materials: {
		en: 'Chinese seed beads, 6mm',
		pt: 'Contas chinesas, 6mm',
		uk: 'Китайський бісер, 6мм',
		ru: 'Китайский бисер, 6мм'
	},

	relatedSkus: ['AAA000004', 'AAA000001']
};
