<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import { buildMailtoUrl } from '$lib/utils/mailto.js';
	import { toHref } from '$lib/utils/href.js';
	import { getPublicProducts } from '$lib/services/catalog.js';
	import { t, pluralCountKey } from '$lib/utils/messages.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import ContactCard from '$lib/components/contacts/ContactCard.svelte';

	let locale = $derived(page.data.locale);
	let productCount = $derived(getPublicProducts().length);
	// Composed from the existing catalog_count* plurals ("44 товара") plus a
	// static tail, rather than a bespoke string — sidesteps re-implementing
	// ru/uk plural rules for a single sentence.
	let productCountPhrase = $derived(
		t(pluralCountKey(locale, productCount), { count: productCount }, { locale })
	);
	let mailtoUrl = $derived(
		buildMailtoUrl({
			email: siteContacts.email,
			subject: m.order_subjectGeneric({}, { locale }),
			body: m.order_messageBodyGeneric({}, { locale })
		})
	);
</script>

<SeoHead
	title={m.contacts_heading({}, { locale })}
	description={m.contacts_intro({}, { locale })}
/>

<div class="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
	<header class="rise-in max-w-2xl">
		<p class="flex items-center gap-3 text-accent">
			<span class="bead-rule w-10" aria-hidden="true"></span>
			<span class="eyebrow">{m.siteTagline({}, { locale })}</span>
		</p>
		<h1 class="mt-5 font-display text-3xl text-foreground sm:text-4xl">
			{m.contacts_heading({}, { locale })}
		</h1>
		<p class="mt-5 leading-relaxed text-muted-foreground">{m.contacts_intro({}, { locale })}</p>
		<p class="mt-4 text-sm text-muted-foreground">
			<span class="font-medium text-foreground">{m.contacts_locationLabel({}, { locale })}:</span>
			{m.contacts_location({}, { locale })}
		</p>
	</header>
	<section aria-labelledby="channels-heading" class="rise-in rise-delay-1 mt-12 sm:mt-14">
		<h2 id="channels-heading" class="font-display text-2xl text-foreground">
			{m.order_channelsHeading({}, { locale })}
		</h2>
		<div class="mt-6 grid gap-4 lg:grid-cols-2">
			<ContactCard
				channel="whatsapp"
				label={m.order_whatsappLabel({}, { locale })}
				description={m.order_whatsappDesc({}, { locale })}
				href={siteContacts.whatsapp.url}
				displayValue={m.order_whatsappLabel({}, { locale })}
			/>
			<ContactCard
				channel="telegram"
				label={m.order_telegramLabel({}, { locale })}
				description={m.order_telegramDesc({}, { locale })}
				href={siteContacts.telegram.url}
				displayValue={siteContacts.telegram.username}
			/>
			<div class="lg:col-span-2">
				<ContactCard
					channel="email"
					label={m.order_emailLabel({}, { locale })}
					description={m.order_emailDesc({}, { locale })}
					href={mailtoUrl}
					displayValue={siteContacts.email}
					external={false}
				/>
			</div>
		</div>
	</section>

	<div class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
		<a
			href={toHref(`/${locale}/how-to-order/`)}
			class="group flex flex-col gap-2 rounded-card bg-accent-wash p-7 transition-colors duration-300 hover:bg-ink hover:text-ivory"
		>
			<span class="font-display text-2xl text-foreground group-hover:text-ivory">
				{m.contacts_quickLinksOrderTitle({}, { locale })}
			</span>
			<span class="text-sm leading-relaxed text-muted-foreground group-hover:text-ivory/75">
				{m.contacts_quickLinksOrderDesc({}, { locale })}
			</span>
		</a>
		<a
			href={toHref(`/${locale}/products/`)}
			class="group flex flex-col gap-2 rounded-card bg-accent-wash p-7 transition-colors duration-300 hover:bg-ink hover:text-ivory"
		>
			<span class="font-display text-2xl text-foreground group-hover:text-ivory">
				{m.contacts_quickLinksCatalogTitle({}, { locale })}
			</span>
			<span class="text-sm leading-relaxed text-muted-foreground group-hover:text-ivory/75">
				{productCountPhrase}
				{m.contacts_quickLinksCatalogSuffix({}, { locale })}
			</span>
		</a>
	</div>
</div>
