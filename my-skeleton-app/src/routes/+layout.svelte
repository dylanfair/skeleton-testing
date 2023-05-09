<script lang='ts'>
	import {base} from '$app/paths';
	
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
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
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/notes">Notes</a></li>
				<li><a href="{base}/data" data-sveltekit-preload-data="hover">Data</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>

	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
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
