<script lang="ts">
	import { Button, Checkbox, List, ListInput, Navbar, NavbarBackLink, Page } from 'konsta/svelte';
    import { superForm } from 'sveltekit-superforms';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

    const { form, errors, constraints, enhance} = superForm( data.form );


</script>
	

		<!-- Sign In Form Start -->
		<form class="relative z-20" use:enhance method="POST">
			<div class="dark:bg-color10 mt-12 rounded-xl bg-white px-6 py-8">
				<div class="flex items-center justify-between">
					<a href="/Auth/login" class="text-primary border-primary dark:text-slate-500 dark:border-slate-500 w-full border-b-2 pb-2 text-center text-xl font-semibold">Sign In</a>
					<a href="Auth/sign-up" class="text-p2 border-p2 dark:text-p1 dark:border-p1 w-full border-b-2 pb-2 text-center text-xl font-semibold" >Sign Up</a>
				</div>
				<div class="pt-8">
					<p class="pb-2 text-sm font-semibold">First Name</p>
					<div
						class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
					>
						<input
							type="text"
							placeholder="Enter Name"
							class="text-n600 placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18 w-full bg-transparent text-sm outline-none placeholder:text-sm"
						/>
						<i class="ph ph-user text-bgColor18 text-xl !leading-none"></i>
					</div>
				</div>

				<div class="pt-4">
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
					<div class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3">
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
				<div class="pt-4">
					<p class="pb-2 text-sm font-semibold">Confirm Password</p>
					<div
						class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
					>
						<input
							type="password"
							placeholder="*****"
							class="text-n600 placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18 confirmPasswordField w-full bg-transparent text-sm outline-none placeholder:text-sm"
						/>
						<i
							class="ph ph-eye-slash text-bgColor18 confirmPasswordShow dark:text-color18 cursor-pointer text-xl !leading-none"
						></i>
					</div>
				</div>
				<div class="pt-4">
					<p class="pb-2 text-sm font-semibold">Choose Gender</p>
					<div class="text-bgColor18 flex items-center justify-between gap-3 text-sm">
						{#snippet checkbox(name:string, label:string,checked:boolean = false)}
							<div class="border-slate-700 dark:border-color18 w-full rounded-xl border px-4 py-3">
								<label for={label} class="dark:text-slate-300 flex cursor-pointer items-center justify-start gap-2 capitalize">
									<input id={label} class="peer hidden" type="radio" {name} {checked} />
	
									<span class="border-primary peer-checked:bg-primary dark:border-slate-500 peer-checked:border-primary flex size-7 items-center justify-center rounded-full border !leading-none text-white">
										<i class="ph ph-check"></i>
									</span>
									{label}
								</label>
							</div>
						{/snippet}

						{#each [{name: 'gender', label:"male"}, {name: 'gender', label:"female"}] as {name, label}}
							{@render checkbox(name, label)}
						{/each}
					</div>
				</div>
				<div class="pt-4">
					<label for="checkbox" class="flex cursor-pointer items-center justify-start gap-3 text-sm">
						<input type="checkbox" name="checkbox" id="checkbox" class="peer hidden" />
						<span class="border-slate-700 peer-checked:bg-primary dark:border-slate-800 flex size-7 items-center justify-center rounded-full border !leading-none text-white">
							<i class="ph ph-check"></i>
						</span>
						I accept to all Term, Privacy and Fees
					</label>
				</div>
			</div>

			<Button type="submit">Sign Up</Button>
		</form>
		<!-- Sign In Form End -->
