<script>
	import { page } from '$app/state';
	import { footerNav } from '$lib/config/navigation.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import { siteName } from '$lib/config/site.js';
	import { buildNavHref } from '$lib/utils/href.js';
	import { m } from '$lib/paraglide/messages.js';
	import { t } from '$lib/utils/messages.js';
</script>

<footer class="mt-16 border-t border-border bg-surface">
	<div class="mx-auto grid max-w-content gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
		<div>
			<p class="font-display text-lg font-semibold">{siteName}</p>
			<p class="mt-2 text-sm text-muted-foreground">
				{m.footer_madeIn({}, { locale: page.data.locale })}
			</p>
		</div>

		<nav aria-label={m.footer_navHeading({}, { locale: page.data.locale })}>
			<h2 class="text-sm font-semibold text-foreground">
				{m.footer_navHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-3 flex flex-col gap-2">
				{#each footerNav as item (item.path)}
					<li>
						<a
							href={buildNavHref(page.data.locale, item.path)}
							class="text-sm text-muted-foreground hover:text-foreground"
						>
							{t(item.messageKey, {}, { locale: page.data.locale })}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<h2 class="text-sm font-semibold text-foreground">
				{m.footer_contactHeading({}, { locale: page.data.locale })}
			</h2>
			<ul class="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
				<li>
					<a
						class="hover:text-foreground"
						href={siteContacts.whatsapp.url}
						rel="noopener noreferrer">WhatsApp</a
					>
				</li>
				<li>
					<a
						class="hover:text-foreground"
						href={siteContacts.telegram.url}
						rel="noopener noreferrer">{siteContacts.telegram.username}</a
					>
				</li>
				<li>
					<a class="hover:text-foreground" href={`mailto:${siteContacts.email}`}
						>{siteContacts.email}</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
		&copy; {new Date().getFullYear()}
		{siteName}. {m.footer_rights({}, { locale: page.data.locale })}
	</div>
</footer>
