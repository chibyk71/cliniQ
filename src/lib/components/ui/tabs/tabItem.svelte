<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { activeTabValue } from './tab.svelte';
	let { icon, title, name }: { icon?: Snippet; title: Snippet | string, name:string } = $props();

    const activeClass = $derived($activeTabValue === name? 'bg-white dark:bg-orange-600/40': 'bg-inherit')
</script>

<li class="z-30 flex-auto text-center">
	<button class="z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-md border-0 {activeClass} px-0 py-2 text-sm text-slate-600 transition-all ease-in-out" data-tab-target="" role="tab" aria-selected="true" onclick={()=> $activeTabValue = name}>
		{@render icon?.()}
		{#if title && typeof title === 'function'}
			{@render title()}
		{:else}
			<span class="ml-1">{title}</span>
		{/if}
</button>
</li>
