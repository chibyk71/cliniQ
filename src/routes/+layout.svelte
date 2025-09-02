<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { App } from 'konsta/svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	let localStorageMode: string | null = $state(null),
		documentBody: HTMLElement | null = $state(null);

	onMount(() => {
		localStorageMode = localStorage.getItem('mode') || 'white';
		documentBody = document.body;

		if (localStorageMode === 'dark') {
			changeMode(localStorageMode);
		}
	});
	function changeMode(mode: string) {
		if (mode === 'dark') {
			documentBody?.classList?.remove('white');
			documentBody?.classList.add('dark');
		} else {
			documentBody?.classList?.remove('dark');
			documentBody?.classList.add('white');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<App>
	{@render children?.()}
</App>
