import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import CopyButton from '$lib/components/ui/CopyButton.svelte';

describe('CopyButton', () => {
	beforeEach(() => {
		Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } });
	});

	it('reports success after copying', async () => {
		render(CopyButton, { props: { text: 'hello', label: 'Copy message' } });

		await fireEvent.click(screen.getByRole('button', { name: 'Copy message' }));

		expect(navigator.clipboard.writeText).toHaveBeenCalledWith('hello');
		const messages = await screen.findAllByText('Message copied');
		expect(messages.length).toBeGreaterThan(0);
	});

	it('reports an error when the clipboard API rejects', async () => {
		Object.assign(navigator, {
			clipboard: { writeText: vi.fn().mockRejectedValue(new Error('denied')) }
		});

		render(CopyButton, { props: { text: 'hello', label: 'Copy message' } });
		await fireEvent.click(screen.getByRole('button', { name: 'Copy message' }));

		const messages = await screen.findAllByText(
			"Couldn't copy automatically — please select and copy the text manually."
		);
		expect(messages.length).toBeGreaterThan(0);
	});
});
