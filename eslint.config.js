import prettier from 'eslint-config-prettier';
import path from 'node:path';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import globals from 'globals';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig([
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } }
	},

	{
		files: ['**/*.svelte', '**/*.svelte.js'],
		languageOptions: { parserOptions: {} }
	},

	{
		rules: {
			// All internal navigation goes through $lib/utils/href.js (toHref/buildNavHref),
			// which already calls SvelteKit's resolve() internally. This app has no base path,
			// and our hrefs are built from dynamic locale/slug/query strings that don't fit
			// resolve()'s literal route-id form, so we rely on the shared helper instead of
			// inlining resolve() at every call site.
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
]);
