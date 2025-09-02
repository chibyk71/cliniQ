<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { App } from 'konsta/svelte';

	let { children } = $props();

	const localStorageMode = localStorage.getItem("mode") || "white";
	const documentBody = document.body;
	
  function changeMode(mode: string) {
	if (mode === "dark") {
	  documentBody.classList?.remove("white");
	  documentBody.classList.add("dark");
	} else {
	  documentBody.classList?.remove("dark");
	  documentBody.classList.add("white");
	}
  }

  if (localStorageMode === "dark"){
	changeMode(localStorageMode);
  }
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<App>
	{@render children?.()}
</App>
