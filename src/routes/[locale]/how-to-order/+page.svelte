<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { getProductBySku } from '$lib/services/catalog.js';
	import {
		buildProductEnquiryMessage,
		buildGenericEnquiryMessage,
		buildEmailSubject
	} from '$lib/services/order-message.js';
	import { buildMailtoUrl } from '$lib/utils/mailto.js';
	import { getSearchParam } from '$lib/utils/locale.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import SelectedProductSummary from '$lib/components/contacts/SelectedProductSummary.svelte';
	import PreparedMessage from '$lib/components/contacts/PreparedMessage.svelte';
	import ContactCard from '$lib/components/contacts/ContactCard.svelte';
	import HowToOrderSteps from '$lib/components/contacts/HowToOrderSteps.svelte';

	let locale = $derived(page.data.locale);
	let rawSku = $derived(getSearchParam(page.url, 'sku'));
	let product = $derived(rawSku ? getProductBySku(rawSku) : null);
	let notFound = $derived(Boolean(rawSku) && !product);

	let message = $derived(
		product ? buildProductEnquiryMessage({ product, locale }) : buildGenericEnquiryMessage(locale)
	);

	let emailSubject = $derived(buildEmailSubject({ sku: product?.sku ?? null, locale }));
	let mailtoUrl = $derived(
		buildMailtoUrl({ email: siteContacts.email, subject: emailSubject, body: message })
	);
</script>

<SeoHead
	title={m.order_heading({}, { locale })}
	description={m.order_genericIntro({}, { locale })}
/>

<div class="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
	<header class="rise-in max-w-2xl">
		<p class="flex items-center gap-3 text-accent">
			<span class="bead-rule w-10" aria-hidden="true"></span>
			<span class="eyebrow">{m.siteTagline({}, { locale })}</span>
		</p>
		<h1 class="mt-5 font-display text-3xl text-foreground sm:text-4xl">
			{m.order_heading({}, { locale })}
		</h1>
		<p class="mt-5 leading-relaxed text-muted-foreground">{m.order_genericIntro({}, { locale })}</p>
	</header>

	{#if notFound}
		<p
			class="mt-8 rounded-card border border-border bg-status-made-to-order-bg px-4 py-3 text-sm text-status-made-to-order"
		>
			{m.order_notFoundNotice({}, { locale })}
		</p>
	{/if}

	{#if product}
		<div class="rise-in rise-delay-1 mt-8">
			<SelectedProductSummary {product} />
		</div>
	{/if}

	<div class="rise-in rise-delay-1 mt-10 sm:mt-12">
		<PreparedMessage {message} />
	</div>

	<section class="mt-12 sm:mt-16" aria-labelledby="channels-heading">
		<h2 id="channels-heading" class="font-display text-2xl text-foreground">
			{m.order_channelsHeading({}, { locale })}
		</h2>
		<div class="mt-6 flex flex-col gap-4">
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
			<ContactCard
				channel="email"
				label={m.order_emailLabel({}, { locale })}
				description={m.order_emailDesc({}, { locale })}
				href={mailtoUrl}
				displayValue={siteContacts.email}
				external={false}
			/>
		</div>
	</section>

	<section class="mt-12 sm:mt-16" aria-labelledby="steps-heading">
		<h2 id="steps-heading" class="font-display text-2xl text-foreground">
			{m.home_howItWorksHeading({}, { locale })}
		</h2>
		<div class="mt-6">
			<HowToOrderSteps />
		</div>
	</section>
</div>
