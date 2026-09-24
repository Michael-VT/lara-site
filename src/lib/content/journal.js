/**
 * @typedef {object} JournalPost
 * @property {string} slug
 * @property {string} tagKey - key of the m.* message function used as the tag chip label (journal_tag*)
 * @property {import('$lib/schemas/product.js').LocalizedText} title
 * @property {import('$lib/schemas/product.js').LocalizedText} excerpt
 * @property {string} date - ISO date (YYYY-MM-DD), formatted per-locale at render time
 * @property {number} readMinutes
 * @property {boolean} [featured] - shown as the lead banner; excluded from the grid below it
 */

/**
 * Launch content for the Journal — written in the same voice as the rest of
 * the site's copy. Replace with the owner's own posts over time; the page
 * works the same either way.
 * @type {JournalPost[]}
 */
export const journalPosts = [
	{
		slug: 'beaded-ball-keychains',
		tagKey: 'journal_tagWorkshop',
		date: '2026-09-24',
		readMinutes: 3,
		title: {
			en: 'Beaded ball keychains: a small gift, a full evening of work',
			pt: 'Porta-chaves de bola em contas: uma prenda pequena, uma noite inteira de trabalho',
			ru: 'Брелоки-шарики из бисера: маленький подарок, целый вечер работы',
			uk: 'Брелоки-кульки з бісеру: маленький подарунок, цілий вечір роботи'
		},
		excerpt: {
			en: 'Each ball is dozens of beads woven one by one around a core — why a five-euro keychain takes almost as long as a bracelet.',
			pt: 'Cada bola é feita com dezenas de contas tecidas uma a uma à volta de um núcleo — porque um porta-chaves de 5€ demora quase tanto como uma pulseira.',
			ru: 'Каждый шарик — десятки бусин, сплетённых по одной вокруг основы. Рассказываю, почему брелок за 5 евро отнимает почти столько же времени, сколько браслет.',
			uk: 'Кожна кулька — десятки намистин, сплетених по одній навколо основи. Розповідаю, чому брелок за 5 євро забирає майже стільки ж часу, скільки браслет.'
		}
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
