/**
 * @typedef {
 *   | { type: 'p', text: import('$lib/schemas/product.js').LocalizedText }
 *   | { type: 'h2', text: import('$lib/schemas/product.js').LocalizedText }
 *   | {
 *       type: 'img',
 *       src: string,
 *       width: number,
 *       height: number,
 *       alt: import('$lib/schemas/product.js').LocalizedText,
 *       caption?: import('$lib/schemas/product.js').LocalizedText
 *     }
 * } JournalBlock
 *
 * @typedef {object} JournalPost
 * @property {string} slug
 * @property {string} tagKey - key of the m.* message function used as the tag chip label (journal_tag*)
 * @property {import('$lib/schemas/product.js').LocalizedText} title
 * @property {import('$lib/schemas/product.js').LocalizedText} excerpt
 * @property {string} date - ISO date (YYYY-MM-DD), formatted per-locale at render time
 * @property {number} readMinutes
 * @property {boolean} [featured] - shown as the lead banner; excluded from the grid below it
 * @property {JournalBlock[]} [body] - full article content; when present the card links to /journal/[slug]/
 */

/**
 * Launch content for the Journal — written in the same voice as the rest of
 * the site's copy. Replace with the owner's own posts over time; the page
 * works the same either way.
 * @type {JournalPost[]}
 */
export const journalPosts = [
	{
		slug: 'brown-lace-crochet-bag',
		tagKey: 'journal_tagWorkshop',
		date: '2026-09-24',
		readMinutes: 4,
		title: {
			en: 'A small bag: a new idea, a new experience',
			pt: 'Uma bolsa pequena: uma ideia nova, uma experiência nova',
			ru: 'Маленькая сумочка — новая идея и новый опыт',
			uk: 'Маленька сумочка: нова ідея, новий досвід'
		},
		excerpt: {
			en: 'Yarn, a lace pattern, a lining, and a gold chain with heart-shaped clasps — how one idea became a new little bag.',
			pt: 'Fio, um padrão rendado, forro e uma corrente dourada com fechos em coração — como uma ideia se tornou numa nova bolsa pequena.',
			ru: 'Нитки, ажурный узор, подкладка и золотистая цепочка с карабинами-сердечками — как из одной идеи получилась новая маленькая сумочка.',
			uk: 'Нитки, ажурний візерунок, підкладка і золотистий ланцюжок із карабінами-сердечками — як з однієї ідеї вийшла нова маленька сумочка.'
		},
		body: [
			{
				type: 'p',
				text: {
					en: "I've already crocheted several bags, and each one turned out completely different — in style, colour and size.",
					pt: 'Já fiz várias bolsas em croché, e cada uma ficou completamente diferente — no estilo, na cor e no tamanho.',
					ru: 'Я уже связала несколько сумочек крючком, и каждая из них получилась совершенно особенной — разной по стилю, цвету и размеру.',
					uk: "Я вже пов'язала кілька сумочок гачком, і кожна з них вийшла зовсім особливою — різною за стилем, кольором і розміром."
				}
			},
			{
				type: 'p',
				text: {
					en: "But I wanted to try something new again — something I hadn't made before. This time the idea was a **small, light bag that doesn't weigh you down**, just big enough for a phone, a few notes or cards.",
					pt: 'Mas voltei a querer experimentar algo novo — algo que ainda não tinha feito. Desta vez surgiu a ideia de fazer uma **bolsa pequena e leve, que não pesa**, com espaço suficiente para um telemóvel, umas notas ou cartões.',
					ru: 'Но мне снова захотелось попробовать что-нибудь новое — такое, чего я раньше ещё не делала. На этот раз появилась идея связать **маленькую, лёгкую и негромоздкую сумочку**, в которую можно положить телефон, несколько купюр или карточек.',
					uk: "Але мені знову захотілося спробувати щось нове — те, чого я раніше ще не робила. Цього разу з'явилася ідея зв'язати **маленьку, легку і негучну сумочку**, в яку можна покласти телефон, кілька купюр або карток."
				}
			},
			{
				type: 'p',
				text: {
					en: 'I found an interesting pattern — and decided to give it a try.',
					pt: 'Encontrei um padrão interessante — e decidi experimentar.',
					ru: 'Нашла интересную схему — и решила попробовать.',
					uk: 'Знайшла цікаву схему — і вирішила спробувати.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'Choosing the yarn',
					pt: 'A escolha do fio',
					ru: 'Выбор ниток',
					uk: 'Вибір ниток'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For this bag I chose **Puppets Eldorado — 100% mercerised cotton** in a beautiful dark brown shade.',
					pt: 'Para esta bolsa escolhi **Puppets Eldorado — 100% algodão mercerizado**, num bonito tom castanho-escuro.',
					ru: 'Для сумочки я выбрала **Puppets Eldorado — 100% мерсеризованный хлопок** красивого тёмно-коричневого оттенка.',
					uk: 'Для сумочки я обрала **Puppets Eldorado — 100% мерсеризовану бавовну** гарного темно-коричневого відтінку.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I crocheted with a **1.5 mm hook**, and the whole bag took about **50 g of yarn**.',
					pt: 'Trabalhei com uma agulha **n.º 1,5**, e a bolsa toda levou cerca de **50 g de fio**.',
					ru: 'Вязала крючком **№ 1,5**, а на всю сумочку ушло примерно **50 г ниток**.',
					uk: "В'язала гачком **№ 1,5**, а на всю сумочку пішло приблизно **50 г ниток**."
				}
			},
			{
				type: 'p',
				text: {
					en: 'The thread is thin and pleasant to work with, and the lace pattern comes out neat and expressive.',
					pt: 'O fio é fino e agradável de trabalhar, e o padrão rendado fica bem definido e expressivo.',
					ru: 'Нить тонкая и приятная в работе, а ажурный узор из неё получается аккуратным и выразительным.',
					uk: 'Нитка тонка і приємна в роботі, а ажурний візерунок із неї виходить акуратним і виразним.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/01-yarn-front.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Puppets Eldorado yarn',
					pt: 'Fio Puppets Eldorado',
					ru: 'Нитки Puppets Eldorado',
					uk: 'Нитки Puppets Eldorado'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/02-yarn-details.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Yarn label details',
					pt: 'Detalhes da etiqueta do fio',
					ru: 'Информация на этикетке ниток',
					uk: 'Інформація на етикетці ниток'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The crochet process',
					pt: 'O processo de croché',
					ru: 'Процесс вязания',
					uk: "Процес в'язання"
				}
			},
			{
				type: 'p',
				text: {
					en: "The bag came together quite easily and quickly. Though the pattern itself needs attention — get distracted for a moment and it's easy to miss a stitch.",
					pt: 'A bolsa foi feita com relativa facilidade e rapidez. Mas o padrão exige atenção: basta distrair-se um pouco para saltar um ponto.',
					ru: 'Вязалась сумочка довольно легко и быстро. Правда, сам узор требует внимательности: стоит немного отвлечься — и можно пропустить нужную петлю.',
					uk: "В'язалася сумочка досить легко і швидко. Правда, сам візерунок вимагає уважності: варто трохи відволіктися — і можна пропустити потрібну петлю."
				}
			},
			{
				type: 'p',
				text: {
					en: 'But watching a pattern, and then the shape of the future bag, slowly appear out of plain thread was fascinating.',
					pt: 'Mas foi fascinante ver o padrão, e depois a forma da futura bolsa, a surgir aos poucos a partir do fio simples.',
					ru: 'Но наблюдать, как из обычной нити постепенно появляется узор, а затем и сама форма будущей сумочки, было очень интересно.',
					uk: "Але спостерігати, як зі звичайної нитки поступово з'являється візерунок, а потім і сама форма майбутньої сумочки, було дуже цікаво."
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/03-crochet-process.webp',
				width: 1536,
				height: 1489,
				alt: {
					en: 'The bag mid-crochet',
					pt: 'A bolsa a meio do croché',
					ru: 'Сумочка в процессе вязания',
					uk: "Сумочка в процесі в'язання"
				},
				caption: {
					en: 'The bag mid-work — the lace pattern is gradually taking shape.',
					pt: 'A bolsa a meio do trabalho — o padrão rendado vai ganhando forma pouco a pouco.',
					ru: 'Сумочка в процессе работы — постепенно ажурный узор начинает приобретать форму.',
					uk: 'Сумочка в процесі роботи — поступово ажурний візерунок починає набувати форми.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The lining',
					pt: 'O forro',
					ru: 'Подкладка',
					uk: 'Підкладка'
				}
			},
			{
				type: 'p',
				text: {
					en: 'Since the pattern turned out quite open, with fairly large holes, I decided the inside definitely needed a **thin lining**.',
					pt: 'Como o padrão ficou bastante aberto, com furos relativamente grandes, decidi que precisava mesmo de um **forro fino** por dentro.',
					ru: 'Поскольку узор получился ажурным, с довольно большими отверстиями, я решила обязательно сделать внутри **тонкую подкладку**.',
					uk: "Оскільки візерунок вийшов ажурним, з доволі великими отворами, я вирішила обов'язково зробити всередині **тонку підкладку**."
				}
			},
			{
				type: 'p',
				text: {
					en: 'At first I thought of using a dark fabric, brown for example. But it turned out that on a dark background, the pretty crochet pattern almost disappears.',
					pt: 'No início pensei em usar um tecido escuro, castanho por exemplo. Mas percebi que, sobre um fundo escuro, o bonito desenho do croché quase desaparece.',
					ru: 'Сначала думала использовать тёмную ткань, например коричневую. Но оказалось, что на тёмном фоне красивый рисунок вязания практически теряется.',
					uk: 'Спочатку думала використати темну тканину, наприклад коричневу. Але виявилося, що на темному тлі гарний малюнок в’язання практично губиться.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'So I chose a **light-coloured fabric** instead. And that turned out to be the right call — against it, the lace pattern became much more visible.',
					pt: 'Por isso escolhi um **tecido claro**. E foi a decisão certa: contra ele, o padrão rendado ficou muito mais visível.',
					ru: 'Поэтому я выбрала **светлую ткань**. И это оказалось правильным решением: на её фоне ажурный рисунок стал намного заметнее.',
					uk: 'Тому я обрала **світлу тканину**. І це виявилося правильним рішенням: на її тлі ажурний малюнок став набагато помітнішим.'
				}
			},
			{
				type: 'h2',
				text: {
					en: 'The chain and the unusual clasps',
					pt: 'A corrente e os fechos pouco comuns',
					ru: 'Цепочка и необычные карабины',
					uk: 'Ланцюжок і незвичайні карабіни'
				}
			},
			{
				type: 'p',
				text: {
					en: 'For the strap I wanted to use a **gold-toned chain**. It goes well with the dark brown of the bag and makes it a little more dressed-up.',
					pt: 'Para a alça quis usar uma **corrente dourada**. Combina bem com o castanho-escuro da bolsa e dá-lhe um toque mais elegante.',
					ru: 'Для ремешка мне захотелось использовать **золотистую цепочку**. Она хорошо сочетается с тёмно-коричневым цветом сумочки и делает её немного наряднее.',
					uk: 'Для ремінця мені захотілося використати **золотистий ланцюжок**. Він добре поєднується з темно-коричневим кольором сумочки і робить її трохи наряднішою.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I especially liked the heart-shaped clasps. They turned out to be not only pretty, but also very practical.',
					pt: 'Gostei especialmente dos fechos em forma de coração. Além de bonitos, revelaram-se muito práticos.',
					ru: 'Особенно мне понравились карабины в форме сердечек. Они оказались не только красивыми, но и очень удобными.',
					uk: 'Особливо мені сподобалися карабіни у формі сердечок. Вони виявилися не тільки гарними, а й дуже зручними.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The chain sometimes twists, and a clasp like this spins freely and helps it untwist. Thanks to that, the strap sits neatly and evenly on the shoulder.',
					pt: 'A corrente às vezes torce-se, e um fecho assim roda livremente e ajuda-a a desenrolar. Graças a isso, a alça assenta bem e direita no ombro.',
					ru: 'Цепочка иногда перекручивается, а такой карабин свободно вращается и помогает ей расправляться. Благодаря этому ремешок красиво и ровно ложится на плечо.',
					uk: 'Ланцюжок іноді перекручується, а такий карабін вільно обертається і допомагає йому розправитися. Завдяки цьому ремінець гарно і рівно лягає на плече.'
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/04-chain-and-clasps.webp',
				width: 1280,
				height: 1229,
				alt: {
					en: 'Gold chain and heart-shaped clasps',
					pt: 'Corrente dourada e fechos em forma de coração',
					ru: 'Золотистая цепочка и карабины-сердечки',
					uk: 'Золотистий ланцюжок і карабіни-сердечка'
				}
			},
			{
				type: 'h2',
				text: {
					en: "And here's what came out of it!",
					pt: 'E foi assim que ficou!',
					ru: 'И вот что получилось!',
					uk: 'І ось що вийшло!'
				}
			},
			{
				type: 'p',
				text: {
					en: "Once I'd put all the pieces together — added the lining, the clasp with its little pearl bead, and the chain — the bag finally had its finished look.",
					pt: 'Depois de juntar todas as peças — o forro, o fecho com a pequena pérola e a corrente — a bolsa ganhou finalmente o seu aspeto acabado.',
					ru: 'Когда я соединила все детали, добавила подкладку, застёжку с жемчужной бусинкой и цепочку, сумочка наконец приобрела законченный вид.',
					uk: "Коли я з'єднала всі деталі, додала підкладку, застібку з перлинкою і ланцюжок, сумочка нарешті набула завершеного вигляду."
				}
			},
			{
				type: 'img',
				src: '/images/journal/brown-lace-crochet-bag/05-finished-bag.webp',
				width: 1145,
				height: 1374,
				alt: {
					en: 'The finished brown bag',
					pt: 'A bolsa castanha terminada',
					ru: 'Готовая коричневая сумочка',
					uk: 'Готова коричнева сумочка'
				}
			},
			{
				type: 'p',
				text: {
					en: "I'm really happy with how it turned out.",
					pt: 'Gostei mesmo do resultado.',
					ru: 'Мне очень понравился результат.',
					uk: 'Мені дуже сподобався результат.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'The bag came out **light, small and easy to carry** — exactly what I wanted. Enough room for a phone, a few cards or a little cash, just the essentials.',
					pt: 'A bolsa ficou **leve, pequena e prática** — exatamente como eu queria. Cabe um telemóvel, uns cartões ou algum dinheiro, só o essencial.',
					ru: 'Сумочка получилась **лёгкой, небольшой и удобной** — именно такой, какую я и хотела. В неё можно положить телефон, карточки или немного наличных и взять с собой самое необходимое.',
					uk: 'Сумочка вийшла **легкою, невеликою і зручною** — саме такою, якою я й хотіла. У неї можна покласти телефон, картки або трохи готівки і взяти з собою найнеобхідніше.'
				}
			},
			{
				type: 'p',
				text: {
					en: 'I especially love the combination of dark brown cotton, the light lining, the gold chain and the tiny pearl detail.',
					pt: 'E adoro especialmente a combinação do algodão castanho-escuro, do forro claro, da corrente dourada e do pequeno detalhe em pérola.',
					ru: 'А ещё мне особенно нравится сочетание тёмно-коричневого хлопка, светлой подкладки, золотистой цепочки и маленькой жемчужной детали.',
					uk: 'А ще мені особливо подобається поєднання темно-коричневої бавовни, світлої підкладки, золотистого ланцюжка і маленької перлинової деталі.'
				}
			},
			{
				type: 'p',
				text: {
					en: "And the best part — I tried making something I'd never made before, once again.",
					pt: 'E o melhor de tudo — voltei a experimentar fazer algo que nunca tinha feito.',
					ru: 'И самое приятное — я снова попробовала сделать то, чего раньше никогда не делала.',
					uk: 'І найприємніше — я знову спробувала зробити те, чого раніше ніколи не робила.'
				}
			},
			{
				type: 'p',
				text: {
					en: "I think that's exactly why I love handmade work: **one new idea turns into a thing that didn't exist just yesterday.**",
					pt: 'Acho que é exatamente por isso que adoro o trabalho manual: **uma ideia nova transforma-se numa peça que ontem ainda não existia.**',
					ru: 'Наверное, именно за это я и люблю рукоделие: **одна новая идея превращается в вещь, которой ещё вчера не существовало.**',
					uk: 'Мабуть, саме за це я й люблю рукоділля: **одна нова ідея перетворюється на річ, якої ще вчора не існувало.**'
				}
			}
		]
	},
	{
		slug: 'czech-vs-japanese-beads',
		tagKey: 'journal_tagMaterials',
		date: '2026-05-12',
		readMinutes: 5,
		featured: true,
		title: {
			en: 'Czech beads vs. Japanese beads: what I choose and why',
			pt: 'Contas checas vs. japonesas: o que escolho e porquê',
			ru: 'Чешский бисер против японского: что я выбираю и почему',
			uk: 'Чеський бісер проти японського: що я обираю і чому'
		},
		excerpt: {
			en: 'Calibration, shine, price and wear — compared side by side on a bracelet I made twice, once in each material.',
			pt: 'Calibragem, brilho, preço e durabilidade — comparados numa pulseira que fiz duas vezes, uma em cada material.',
			ru: 'Калибровка, блеск, цена и износ — сравниваю на примере браслета, который плела дважды из разных материалов.',
			uk: 'Калібрування, блиск, ціна та зношування — порівнюю на прикладі браслета, який плела двічі з різних матеріалів.'
		}
	},
	{
		slug: 'caring-for-beadwork',
		tagKey: 'journal_tagCare',
		date: '2026-04-28',
		readMinutes: 4,
		title: {
			en: 'How to care for beadwork jewellery',
			pt: 'Como cuidar de joias em contas',
			ru: 'Как ухаживать за изделиями из бисера',
			uk: 'Як доглядати за виробами з бісеру'
		},
		excerpt: {
			en: 'Storage, cleaning, and what not to do so the thread lasts for years.',
			pt: 'Armazenamento, limpeza e o que evitar para o fio durar anos.',
			ru: 'Хранение, чистка и что точно не стоит делать, чтобы нить прослужила годы.',
			uk: 'Зберігання, чищення і чого точно не варто робити, щоб нитка прослужила роки.'
		}
	},
	{
		slug: 'a-day-in-the-workshop',
		tagKey: 'journal_tagWorkshop',
		date: '2026-04-09',
		readMinutes: 6,
		title: {
			en: 'A day in the workshop: from sketch to the final knot',
			pt: 'Um dia no ateliê: do esboço ao nó final',
			ru: 'Один день в мастерской: от эскиза до узелка',
			uk: 'Один день у майстерні: від ескізу до вузлика'
		},
		excerpt: {
			en: 'How many hours a heart keychain takes — and why I never make two the same.',
			pt: 'Quantas horas leva um porta-chaves coração — e porque nunca faço dois iguais.',
			ru: 'Сколько часов уходит на брелок-сердце и почему я не делаю два одинаковых.',
			uk: 'Скільки годин іде на брелок-сердечко і чому я не роблю два однакових.'
		}
	},
	{
		slug: 'portuguese-cotton',
		tagKey: 'journal_tagWorkshop',
		date: '2026-03-21',
		readMinutes: 7,
		title: {
			en: "Portuguese cotton: why it's the only yarn I knit with",
			pt: 'Algodão português: porque é o único fio que uso',
			ru: 'Португальский хлопок: почему я вяжу только им',
			uk: 'Португальська бавовна: чому в’яжу тільки нею'
		},
		excerpt: {
			en: "The yarn that keeps a top's shape and doesn't fade in the sun.",
			pt: 'O fio que mantém a forma de um top e não desbota ao sol.',
			ru: 'Нить, которая держит форму топа и не выцветает на солнце.',
			uk: 'Нитка, яка тримає форму топа і не вицвітає на сонці.'
		}
	},
	{
		slug: 'five-handmade-gift-ideas',
		tagKey: 'journal_tagIdeas',
		date: '2026-03-03',
		readMinutes: 3,
		title: {
			en: 'Gift ideas: five handmade picks',
			pt: 'Ideias de prendas: cinco sugestões artesanais',
			ru: 'Что подарить: пять идей ручной работы',
			uk: 'Що подарувати: п’ять ідей ручної роботи'
		},
		excerpt: {
			en: 'A quick cheat sheet for birthdays, weddings, and "just because".',
			pt: 'Uma lista rápida para aniversários, casamentos e "sem motivo".',
			ru: 'Небольшая шпаргалка на день рождения, свадьбу и «просто так».',
			uk: 'Невеличка шпаргалка на день народження, весілля і «просто так».'
		}
	},
	{
		slug: 'measuring-for-a-knitted-top',
		tagKey: 'journal_tagCare',
		date: '2026-02-14',
		readMinutes: 4,
		title: {
			en: 'How to take measurements for a knitted top',
			pt: 'Como tirar medidas para um top de tricô',
			ru: 'Как снять мерки для вязаного топа',
			uk: 'Як зняти мірки для в’язаного топа'
		},
		excerpt: {
			en: 'Three measurements, a tape measure, and ten minutes — for a perfect fit.',
			pt: 'Três medidas, uma fita métrica e dez minutos — para um caimento perfeito.',
			ru: 'Три замера, сантиметровая лента и десять минут — и вещь сядет идеально.',
			uk: 'Три заміри, сантиметрова стрічка і десять хвилин — і річ сяде ідеально.'
		}
	}
];

export const journalTagKeys = [
	'journal_tagMaterials',
	'journal_tagWorkshop',
	'journal_tagCare',
	'journal_tagIdeas'
];
