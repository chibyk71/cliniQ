<script lang="ts">
	import { Button, Page } from 'konsta/svelte';
	import type { PageProps } from './$types';
	import { BackLink } from '$lib/utils';

	let { data }: PageProps = $props();
</script>

<Page>
	<div
		class="dark:bg-color1 relative container min-h-dvh overflow-hidden px-6 py-8 dark:text-white"
	>
		<!-- Absolute Items Start -->
		<img src="assets/images/header-bg-2.png" alt="" class="absolute top-0 right-0 left-0 -mt-6" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->
		<!-- Page Title Start -->
		<div class="relative z-10 flex items-center justify-start gap-4">
			<button use:BackLink aria-label="back link" class="dark:bg-color10 flex items-center justify-center rounded-full bg-white p-2 text-xl">
				<i class="ph ph-caret-left"></i>
			</button>
			<h2 class="text-2xl font-semibold text-white">Forgot Password</h2>
		</div>
		<!-- Page Title End -->

		<!-- Sign In Form Start -->
		<form action="forgot-password.html" class="relative z-10">
			<div class="dark:bg-color10 mt-12 rounded-xl bg-white px-6 py-8">
				<div class="flex flex-col gap-3 text-center">
					<h3 class="text-xl font-semibold">Forgot Password</h3>
					<p class="text-bgColor18 dark:text-color18 text-sm">
						Reset your access evffortlessly and regain control with our password recovery service.
					</p>
				</div>

				<div class="pt-8">
					<p class="pb-2 text-sm font-semibold">Email</p>
					<div class="border-color21 dark:border-color18 flex items-center justify-between gap-3 rounded-xl border px-4 py-3">
						<input type="text" placeholder="Enter Email"
							class="text-slate-600 placeholder:text-slate-900 dark:text-slate-400/50 dark:placeholder:text-slate-500/60 w-full bg-transparent text-sm outline-none placeholder:text-sm"
						/>
						<i class="ph ph-envelope-simple text-slate-900/40 text-xl !leading-none"></i>
					</div>
				</div>
			</div>

			<Button class="bg-primary-500 dark:bg-orange-500/40 mt-12 font-semibold text-white">Continue</Button>
		</form>

		<!-- Sign In Form End -->
	</div>
</Page>
