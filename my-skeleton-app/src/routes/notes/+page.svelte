<script lang="ts">
    import { noteStore } from "$lib/stores";
	import { toastStore, type ModalSettings, modalStore } from "@skeletonlabs/skeleton";
	import NotesModal from '$lib/modals/NotesModal.svelte';

	import type { ModalComponent } from "@skeletonlabs/skeleton";

	function deleteNote(noteId: string): void {
		const confirmDelete: ModalSettings = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete this note?',
			response: (r: boolean) => {
				if (r) {
					noteStore.update((notes) => notes.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: 'Note deleted successfully',
						background: 'variant-filled-success'
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-ghost-error'
				});
			}
		};
		modalStore.trigger(confirmDelete);
	}

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: NotesModal };
		const d: ModalSettings = {
			type: 'component',
			component: c,
			title: "Let's make a new note!",
			body: 'Fill in the following to create a new note.',
			response: (r: any) => console.log('response:', r)
		};
		modalStore.trigger(d);
	}
</script>


<div class="container mx-auto p-8 space-y-8">
	<div class="flex items-center justify-between">
		<h2>Notes</h2>
		<button on:click={modalComponentForm} class="btn variant-ghost-primary">Create a Note</button>
	</div>
	<p>On this page I wanted to implement the code from <a href="https://www.youtube.com/watch?v=P_A0qQ7AuK8" target="_blank">Huntabyte's video</a>, with a couple changes of my own. Most notably was having the 'Create a Note' action be a form module instead of a page redirect.</p>
	<hr />

	<div class="grid grid-cols-3 gap-4">
		{#each $noteStore as note}
			<div class="card p-4 variant-ghost-warning flex flex-col gap-2 relative">
				<button on:click={() => deleteNote(note.id)} class="btn-icon btn-icon-sm variant-filled-error absolute -top-1.5 -right-1.5">
					X
				</button>
				<div>{note.content}</div>
				<div class="flex gap-1 flex-wrap">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}

	</div>
</div>
