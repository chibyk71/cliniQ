<script lang="ts">
	import { Button } from "konsta/svelte";
	import type { PageProps } from "./$types";
	import { superForm } from "sveltekit-superforms";

	let { data }: PageProps = $props();
	const { form, errors, constraints, enhance} = superForm( data.form );
</script>

<form method="POST" class="relative z-10" use:enhance>
	<div class="dark:bg-color10 mt-12 rounded-xl bg-white px-6 py-8">
		<div class="flex items-center justify-between">
			<a
				href="sign-in.html"
				class="text-p2 border-primary-200 dark:text-primary-100 dark:border-primary-100 w-full border-b-2 pb-2 text-center text-xl font-semibold"
				>Sign In</a
			>
			<a
				href="sign-up.html"
				class="text-slate-300 border-slate-300 dark:text-slate-300 dark:border-slate-300 w-full border-b-2 pb-2 text-center text-xl font-semibold"
				>Sign Up</a
			>
		</div>

		<div class="pt-8">
			<p class="pb-2 text-sm font-semibold">Email</p>
			<div
				class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
			>
				<input
					type="text"
					placeholder="Enter Email"
					class="text-n600 placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18 w-full bg-transparent text-sm outline-none placeholder:text-sm"
				/>
				<i class="ph ph-envelope-simple text-bgColor18 text-xl !leading-none"></i>
			</div>
		</div>
		<div class="pt-4">
			<p class="pb-2 text-sm font-semibold">Password</p>
			<div
				class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
			>
				<input
					type="password"
					placeholder="*****"
					class="text-n600 placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18 passwordField w-full bg-transparent text-sm outline-none placeholder:text-sm"
				/>
				<i
					class="ph ph-eye-slash text-bgColor18 passowordShow dark:text-color18 cursor-pointer text-xl !leading-none"
				></i>
			</div>
		</div>
		<a
			href="forgot-password.html"
			class="text-p2 dark:text-p1 block pt-2 text-end text-sm font-semibold">Forgot password?</a
		>
	</div>
	<Button type='submit'>Sign In</Button>
</form>
