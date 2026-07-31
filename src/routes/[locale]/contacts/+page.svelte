<script>
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import { siteContacts } from '$lib/config/contacts.js';
	import { buildMailtoUrl } from '$lib/utils/mailto.js';
	import { toHref } from '$lib/utils/href.js';
	import SeoHead from '$lib/components/layout/SeoHead.svelte';
	import ContactCard from '$lib/components/contacts/ContactCard.svelte';

	let locale = $derived(page.data.locale);
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

<div class="mx-auto max-w-content px-4 py-8 sm:px-6">
	<h1 class="font-display text-3xl text-foreground">{m.contacts_heading({}, { locale })}</h1>
	<p class="mt-3 max-w-2xl text-muted-foreground">{m.contacts_intro({}, { locale })}</p>

	<p class="mt-4 text-sm text-muted-foreground">
		<span class="font-medium text-foreground">{m.contacts_locationLabel({}, { locale })}:</span>
		{m.contacts_location({}, { locale })}
	</p>

	<div class="mt-8 flex flex-col gap-4">
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

	<a
		href={toHref(`/${locale}/how-to-order/`)}
		class="mt-8 inline-flex text-sm font-medium text-accent hover:underline"
	>
		{m.contacts_howToOrderCta({}, { locale })} →
	</a>
</div>
