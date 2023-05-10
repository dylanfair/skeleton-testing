<script lang='ts'>
	import {base} from '$app/paths';
	
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import "./../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Modal, Toast } from '@skeletonlabs/skeleton'
	import { Avatar } from '@skeletonlabs/skeleton';

	function avatarClick() {
		window.open(
			"https://github.com/dylanfair",
			"_blank"
		);
	}
</script>

<Toast position="t" />
<Modal />

<!-- App Shell -->
<AppShell>

	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3"  slotDefault=place-self-center slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase hover:text-primary-500"><a href="https://www.skeleton.dev/" target="_blank">Skeleton</a></strong>
			</svelte:fragment>

			<svelte:fragment>
				<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5 w-full h-20">
					<a class="logo-item variant-soft-warning h-20" href="{base}/">
						<span></span>
						<i class="fa-solid fa-house"></i>
						<span>Home</span>
						<span></span>
					</a>
					<a class="logo-item variant-soft-warning h-20" href="{base}/notes">
						<i class="fa-solid fa-note-sticky"></i>
						<span>Notes</span>
					</a>
					<a class="logo-item variant-soft-warning h-20" href="{base}/data" data-sveltekit-preload-data="hover">
						<i class="fa-solid fa-database"></i>
						<span>Data</span>
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">	
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/dylanfair/skeleton-testing"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<Avatar initials="DF" 
				fill="varient-filled-primary" 
				width="w-10" 
				cursor="cursor-pointer" 
				border = "border-4 border-surface-300-600-token hover:!border-primary-500"
				on:click={avatarClick}
				/>

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
