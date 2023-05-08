<script lang="ts">
    import { noteStore } from '$lib/stores';
    import { InputChip, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';

    let content: string
    let tags: string[] = []

    const t: ToastSettings = {
        message: 'Note successfully created!',
        background: 'variant-filled-success',
    };

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(content);

        noteStore.update((notes) => [
            ...notes,
            {
                id: crypto.randomUUID(),
                content,
                tags
            }
        ]);
        toastStore.trigger(t);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<!-- Enable for debugging: -->
		<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Note</span>
				<input class="input" type="text" bind:value={content} placeholder="Note content..." />
			</label>
			
            <InputChip class="input" bind:value={tags} name="tags" placeholder="Enter tags... (optional)"/>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
	</div>
{/if}