import { z } from 'zod';
import { categoryIds } from '../content/categories.js';
import { isValidSku } from '../utils/sku.js';

/**
 * Plain JSDoc typedefs mirroring the Zod schemas below. Kept separate from
 * `z.infer<...>` because cross-file `import('module').schema._output` type
 * lookups are unreliable under `checkJs` for Zod's generic-heavy types.
 * @typedef {{ en: string, pt?: string, uk?: string, ru?: string }} LocalizedText
 * @typedef {'available' | 'made_to_order' | 'sold' | 'hidden'} ProductStatus
 * @typedef {
 *   | { mode: 'fixed', amount: number, currency: 'EUR' }
 *   | { mode: 'from', amount: number, typicalMax?: number, currency: 'EUR' }
 *   | { mode: 'on_request' }
 * } Price
 * @typedef {{ src: string, thumb?: string, width: number, height: number, alt: LocalizedText }} ProductImage
 * @typedef {{
 *   sku: string,
 *   slug: string,
 *   category: string,
 *   status: ProductStatus,
 *   title: LocalizedText,
 *   shortDescription?: LocalizedText,
 *   description: LocalizedText,
 *   price?: Price,
 *   images: ProductImage[],
 *   materials?: LocalizedText,
 *   dimensions?: LocalizedText,
 *   colours?: LocalizedText,
 *   care?: LocalizedText,
 *   customisation?: LocalizedText,
 *   productionTime?: LocalizedText,
 *   featured?: boolean,
 *   featuredOrder?: number,
 *   relatedSkus?: string[],
 *   isDemo?: boolean,
 *   createdAt?: string,
 *   updatedAt?: string
 * }} Product
 */

export const localizedTextSchema = z.object({
	en: z.string().min(1),
	pt: z.string().min(1).optional(),
	uk: z.string().min(1).optional(),
	ru: z.string().min(1).optional()
});

export const productStatusSchema = z.enum(['available', 'made_to_order', 'sold', 'hidden']);

export const priceSchema = z.discriminatedUnion('mode', [
	z.object({ mode: z.literal('fixed'), amount: z.number().positive(), currency: z.literal('EUR') }),
	z.object({
		mode: z.literal('from'),
		amount: z.number().positive(),
		typicalMax: z.number().positive().optional(),
		currency: z.literal('EUR')
	}),
	z.object({ mode: z.literal('on_request') })
]);

export const productImageSchema = z.object({
	src: z.string().min(1),
	thumb: z.string().min(1).optional(),
	width: z.number().int().positive(),
	height: z.number().int().positive(),
	alt: localizedTextSchema
});

export const productSchema = z.object({
	sku: z.string().refine(isValidSku, { message: 'Invalid SKU format' }),
	slug: z
		.string()
		.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase, hyphen-separated ASCII'),
	category: z.enum(/** @type {[string, ...string[]]} */ (categoryIds)),
	status: productStatusSchema,

	title: localizedTextSchema,
	shortDescription: localizedTextSchema.optional(),
	description: localizedTextSchema,

	price: priceSchema.optional(),

	images: z.array(productImageSchema).min(1),

	materials: localizedTextSchema.optional(),
	dimensions: localizedTextSchema.optional(),
	colours: localizedTextSchema.optional(),
	care: localizedTextSchema.optional(),
	customisation: localizedTextSchema.optional(),
	productionTime: localizedTextSchema.optional(),

	featured: z.boolean().optional(),
	featuredOrder: z.number().int().optional(),
	relatedSkus: z.array(z.string()).optional(),

	isDemo: z.boolean().optional(),

	createdAt: z.string().optional(),
	updatedAt: z.string().optional()
});
