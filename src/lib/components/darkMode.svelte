<script lang="ts">
	import { onMount } from "svelte";

    let { theme }: {theme?: 'dark'|'light'} = $props();

    const iconClass = $derived(theme === 'dark'? 'ph-sun-dim': 'ph-moon');

    const toggleTheme = () => {
        document.body.classList.toggle('dark')
    }

    onMount(() => {
        if(theme === 'dark') {
            document.body.classList.add('dark')
        }
    })
</script>

<button class="border-color24 bg-color24 flex items-center justify-center rounded-full border p-2 text-white" aria-label="dark mode" onclick={toggleTheme}>
	<i class="ph {iconClass}"></i>
</button>
