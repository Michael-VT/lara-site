/**
 * @typedef {object} HeroSlide
 * @property {string} titleKey - key of the m.* message function used as the slide title
 * @property {string} bodyKey - key of the m.* message function used as the slide body
 * @property {string} image
 * @property {number} width - intrinsic image width (px)
 * @property {number} height - intrinsic image height (px)
 * @property {string} altKey - key of the m.* message function used as the image alt text
 */

/** @type {HeroSlide[]} */
export const heroSlides = [
	{
		titleKey: 'home_heroSlide1Title',
		bodyKey: 'home_heroSlide1Body',
		image: '/images/hero/slide-1.webp',
		width: 1280,
		height: 960,
		altKey: 'home_heroSlide1Title'
	},
	{
		titleKey: 'home_heroSlide2Title',
		bodyKey: 'home_heroSlide2Body',
		image: '/images/hero/slide-2.webp',
		width: 1280,
		height: 1071,
		altKey: 'home_heroSlide2Title'
	},
	{
		titleKey: 'home_heroSlide3Title',
		bodyKey: 'home_heroSlide3Body',
		image: '/images/hero/slide-3.webp',
		width: 582,
		height: 1280,
		altKey: 'home_heroSlide3Title'
	}
];
