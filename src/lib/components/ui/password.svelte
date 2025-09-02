<script lang="ts">
	import { Button } from "konsta/svelte";

    let { value = $bindable(null), name } = $props()

    let type: 'password'|'text' = $state('password'),
        icon = $state('ph-eye-slash')

    const togglePassword = () => {
        if (type == 'password') {
            type = 'text'
            icon = 'ph-eye'
        }else {
            type = 'password'
            icon = 'ph-eye-slash'
        }
    }
</script>

<div class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border pl-4 !pr-2 py-3">
	<input {type} {name} bind:value placeholder="*****" class="text-slate-800/60 placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18 passwordField w-full bg-transparent text-sm outline-none placeholder:text-sm"/>
    <Button class='w-auto mr-0' type='button' small clear onclick={togglePassword}><i class="ph {icon} text-bgColor18 dark:text-color18 text-xl !leading-none"></i></Button>
</div>
