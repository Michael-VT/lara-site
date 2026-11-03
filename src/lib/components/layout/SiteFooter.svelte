<script>
	import { page } from '$app/state';
	import { footerNav } from '$lib/config/navigation.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import { siteName } from '$lib/config/site.js';
	import { buildNavHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
	import { contactIconPaths } from '$lib/config/contact-icons.js';

	/** Small 16x16 line-icon paths for the technical/resource links row. */
	const resourceIconPaths = {
		sitemap:
			'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6ZM10 7h4M7 10v4M17 10v4M10 17h4',
		feed: 'M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9M4 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z',
		robots:
			'M12 3v3M7 10h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm1.5 4.5v1m6-1v1M9 17.5h6',
		doc: 'M6 3.5h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Zm8 0v4h4M8.5 13h7M8.5 16.5h7'
	};
</script>

<footer class="bg-accent-wash">
	<!-- Seed-bead stitch: the tray's stitched edge, full width -->
	<div class="bead-rule h-[7px] w-full max-w-none text-accent opacity-60" aria-hidden="true"></div>

	<div
		class="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-3 md:gap-8"
	>
		<div>
			<p class="font-display text-xl text-foreground">{siteName}</p>
			<div class="bead-rule mt-4 w-10 text-accent" aria-hidden="true"></div>
			<p class="mt-4 text-sm text-muted-foreground">
				{m.footer_madeIn({}, { locale: page.data.locale })}
			</p>
		</div>

		<nav aria-label={m.footer_navHeading({}, { locale: page.data.locale })}>
			<h2 class="eyebrow text-accent">
				{m.footer_navHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-4 flex flex-col">
				{#each footerNav as item (item.path)}
					<li>
						<a
							href={buildNavHref(page.data.locale, item.path)}
							class="footer-link text-sm text-muted-foreground hover:text-foreground"
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<h2 class="eyebrow text-accent">
				{m.footer_contactHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-4 flex flex-col text-sm text-muted-foreground">
				<li>
					<a
						class="footer-link gap-2 hover:text-foreground"
						href={siteContacts.whatsapp.url}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
							class="shrink-0"><path d={contactIconPaths.whatsapp} /></svg
						>
						WhatsApp
					</a>
				</li>
				<li>
					<a
						class="footer-link gap-2 hover:text-foreground"
						href={siteContacts.telegram.url}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
							class="shrink-0"><path d={contactIconPaths.telegram} /></svg
						>
						{siteContacts.telegram.username}
					</a>
				</li>
				<li>
					<a class="footer-link gap-2 hover:text-foreground" href={`mailto:${siteContacts.email}`}>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
							class="shrink-0"><path d={contactIconPaths.email} /></svg
						>
						{siteContacts.email}
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-border px-4 py-5 sm:px-6">
		<nav
			aria-label={m.footer_resourcesHeading({}, { locale: page.data.locale })}
			class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
		>
			{#each [{ href: '/sitemap.xml', icon: resourceIconPaths.sitemap, label: m.footer_sitemap({}, { locale: page.data.locale }) }, { href: '/rss.xml', icon: resourceIconPaths.feed, label: m.footer_rssFeed({}, { locale: page.data.locale }) }, { href: '/robots.txt', icon: resourceIconPaths.robots, label: m.footer_robotsTxt({}, { locale: page.data.locale }) }, { href: '/llms.txt', icon: resourceIconPaths.doc, label: m.footer_llmsTxt({}, { locale: page.data.locale }) }] as resource (resource.href)}
				<a
					href={resource.href}
					rel="external"
					class="footer-link gap-1.5 text-xs text-muted-foreground hover:text-foreground"
				>
					<svg
						viewBox="0 0 24 24"
						width="14"
						height="14"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
						class="shrink-0"><path d={resource.icon} /></svg
					>
					{resource.label}
				</a>
			{/each}
		</nav>
	</div>

	<div class="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
		&copy; {new Date().getFullYear()}
		{siteName}. {m.footer_rights({}, { locale: page.data.locale })}
	</div>
</footer>

<style>
	/* Footer links: 44px targets, sage → ivory, with a tiny gold bead
	   stitching in before the label on hover. Space for the bead is
	   reserved so nothing shifts. */
	.footer-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding-left: 0.9375rem;
		transition: color 200ms ease;
	}

	.footer-link::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		width: 5px;
		height: 5px;
		margin-top: -2.5px;
		border-radius: 9999px;
		background-color: var(--color-accent);
		opacity: 0;
		transform: translateX(-3px);
		transition:
			opacity 200ms ease,
			transform 200ms ease;
	}

	.footer-link:hover::before,
	.footer-link:focus-visible::before {
		opacity: 1;
		transform: translateX(0);
	}

	/* Guard the hover bead the way Tailwind guards hover: utilities -
	   no sticky dots after tap on touch devices. Focus still shows it. */
	@media (hover: none) {
		.footer-link::before {
			content: none;
		}
	}
</style>
