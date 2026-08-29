<script>
	import { page } from '$app/state';
	import { footerNav } from '$lib/config/navigation.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import { siteName } from '$lib/config/site.js';
	import { buildNavHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
</script>

<footer class="bg-ink">
	<!-- Seed-bead stitch: the tray's stitched edge, full width -->
	<div
		class="bead-rule h-[7px] w-full max-w-none text-accent-bright opacity-60"
		aria-hidden="true"
	></div>

	<div
		class="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-3 md:gap-8"
	>
		<div>
			<p class="font-display text-xl text-ivory">{siteName}</p>
			<div class="bead-rule mt-4 w-10 text-accent-bright" aria-hidden="true"></div>
			<p class="mt-4 text-sm text-sage">
				{m.footer_madeIn({}, { locale: page.data.locale })}
			</p>
		</div>

		<nav aria-label={m.footer_navHeading({}, { locale: page.data.locale })}>
			<h2 class="eyebrow text-accent-bright">
				{m.footer_navHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-4 flex flex-col">
				{#each footerNav as item (item.path)}
					<li>
						<a
							href={buildNavHref(page.data.locale, item.path)}
							class="footer-link focus-dark text-sm text-sage hover:text-ivory"
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<h2 class="eyebrow text-accent-bright">
				{m.footer_contactHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-4 flex flex-col text-sm text-sage">
				<li>
					<a
						class="footer-link focus-dark hover:text-ivory"
						href={siteContacts.whatsapp.url}
						rel="noopener noreferrer">WhatsApp</a
					>
				</li>
				<li>
					<a
						class="footer-link focus-dark hover:text-ivory"
						href={siteContacts.telegram.url}
						rel="noopener noreferrer">{siteContacts.telegram.username}</a
					>
				</li>
				<li>
					<a class="footer-link focus-dark hover:text-ivory" href={`mailto:${siteContacts.email}`}
						>{siteContacts.email}</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-ink-line px-4 py-5 text-center text-xs text-sage sm:px-6">
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
		background-color: var(--color-accent-bright);
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

	/* Guard the hover bead the way Tailwind guards hover: utilities —
	   no sticky dots after tap on touch devices. Focus still shows it. */
	@media (hover: none) {
		.footer-link::before {
			content: none;
		}
	}
</style>
