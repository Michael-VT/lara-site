<script>
	import { siteName } from '$lib/config/site.js';
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center"
>
	<h1 class="font-display text-3xl text-foreground">Page not found</h1>
	<p class="text-muted-foreground">
		The page you are looking for does not exist or may have moved.
	</p>
	<a
		href="/en/"
		class="mt-2 inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-medium text-accent-contrast"
	>
		Go to {siteName}
	</a>
</main>
