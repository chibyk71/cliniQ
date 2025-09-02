<script module>
    export const activeTabValue = writable<null|string>(null)
</script>

<script lang="ts">
	import { type Snippet } from "svelte";
	import { writable } from "svelte/store";

    let { children,value = $bindable(null) }: { children: Snippet, value: string|null } = $props();

    $activeTabValue = value
</script>
<div class="w-full">
	<div class="relative right-0">
		<ul class="relative flex list-none flex-wrap rounded-md bg-slate-100 px-1.5 py-1.5"data-tabs="tabs" role="list">
            {@render children()}
		</ul>
	</div>
</div>
