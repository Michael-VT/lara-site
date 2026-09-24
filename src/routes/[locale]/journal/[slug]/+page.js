import { error } from '@sveltejs/kit';
import { journalPosts } from '$lib/content/journal.js';

export const prerender = true;

export function load({ params }) {
	const post = journalPosts.find((p) => p.slug === params.slug && p.body);
	if (!post) {
		error(404, 'Article not found');
	}

	return { post };
}
