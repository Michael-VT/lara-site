/**
 * @typedef {object} HeroSlide
 * @property {string} titleKey - key of the m.* message function used as the slide title
 * @property {string} bodyKey - key of the m.* message function used as the slide body
 * @property {string} image
 * @property {string} altKey - key of the m.* message function used as the image alt text
 */

/** @type {HeroSlide[]} */
export const heroSlides = [
	{
		titleKey: 'home_heroSlide1Title',
		bodyKey: 'home_heroSlide1Body',
		image: '/images/hero/slide-1.webp',
		altKey: 'home_heroSlide1Title'
	},
	{
		titleKey: 'home_heroSlide2Title',
		bodyKey: 'home_heroSlide2Body',
		image: '/images/hero/slide-2.webp',
		altKey: 'home_heroSlide2Title'
	},
	{
		titleKey: 'home_heroSlide3Title',
		bodyKey: 'home_heroSlide3Body',
		image: '/images/hero/slide-3.webp',
		altKey: 'home_heroSlide3Title'
	}
];
