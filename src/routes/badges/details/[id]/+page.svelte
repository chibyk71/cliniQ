<script lang="ts">
	import { Button, Page } from 'konsta/svelte';
	import type { PageProps } from './$types';
	import NavbarBackLink from '$lib/components/ui/navbarBackLink.svelte';

	let { data }: PageProps = $props();
</script>

<Page>
	<div class="dark:bg-color1 relative container min-h-dvh overflow-hidden py-8 dark:text-white">
		<!-- Absolute Items Start -->
		<img src="/images/header-bg-1.png" alt="" class="absolute top-0 right-0 left-0 -mt-16" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-blue-500 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->

		<!-- Page Title Start -->
		<div class="relative z-10 px-6">
			<div class="flex items-center justify-between gap-4">
				<div class="flex items-center justify-start gap-4">
					<NavbarBackLink />
					<h2 class="text-2xl font-semibold text-white">Medal Details</h2>
				</div>
			</div>
			<!-- Page Title End -->

			<div class="flex flex-col items-center justify-center gap-5 pt-20">
				<div class="border-orange-400/30 dark:bg-slate-800/50 rounded-xl border bg-white px-20 py-5">
					<img src="/images/medal1.svg" alt="" />
					<p class="pt-2 text-center text-xs font-semibold">Beginner</p>
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<p class="text-xl font-semibold">Talkative</p>
					<div class="dark:bg-orange-500/40 bg-blue-600/30 relative my-3 h-1 w-[200px] rounded-full">
						<div class="bg-blue-900/70 dark:bg-orange-900/70 absolute top-0 left-0 h-1 w-[40%] rounded-full"></div>
					</div>
					<p><span class="text- dark:text-orange-400">20</span>/200</p>
				</div>
			</div>

			<div class="border-slate-900/10 dark:bg-blue-900/30 mt-8 rounded-2xl border bg-white px-5 py-4">
				<p class="border-slate-900/10 dark:border-white/20 border-b border-dashed pb-3 font-semibold">
					Description
				</p>
				<div class="flex items-center justify-start gap-2 pt-3">
					<div class="bg-blue-600 dark:bg-orange-400 flex items-center justify-center rounded-full p-2 text-white"
					>
						<i class="ph ph-scroll"></i>
					</div>
					<p class="text-slate-800/80 dark:text-white/20 text-sm">
						Achievement, significance, earned points, rewards, level, and milestone insights.
					</p>
				</div>
			</div>

			<div class="flex flex-col gap-4 pt-8">
				<div class="dark:bg-slate-300/20 flex items-center justify-between rounded-xl bg-white px-5 py-3">
					<div class="flex items-center justify-start gap-3">
						<div class="bg-blue-700 text- border-blue-200 dark:text-orange-400 dark:bg-bgblue-700 dark:border-orange-900/40 flex items-center justify-center rounded-full border p-1.5 text-base">
							<i class="ph ph-hand-coins"></i>
						</div>
						<p class="text-sm font-semibold">Quantity</p>
					</div>
					<div class="bg-blue-200/40 text-blue-500 border-blue-200 dark:bg-orange-700/60 dark:border-orange-900/40 flex items-center justify-center rounded-full border px-4 py-1 text-sm dark:text-white">
						Unlimited
					</div>
				</div>
				<div class="dark:bg-slate-300/20 flex items-center justify-between rounded-xl bg-white px-5 py-3">
					<div class="flex items-center justify-start gap-3">
						<div class="bg-blue-700 text-blue-500 border-blue-200 dark:text-orange-400 dark:bg-bgblue-700 dark:border-orange-900/40 flex items-center justify-center rounded-full border p-1.5 text-base">
							<i class="ph ph-clock-countdown"></i>
						</div>
						<p class="text-sm font-semibold">Duration</p>
					</div>
					<div class="bg-blue-200/40 text-blue-500 border-blue-200 dark:bg-orange-700/60 dark:border-orange-900/40 flex items-center justify-center rounded-full border px-4 py-1 text-sm dark:text-white">
						Unlimited
					</div>
				</div>
			</div>

			<div class="w-full"></div>
			<Button class="bg-blue-500 dark:bg-orange-400 mt-12 font-semibold text-white">9546 <i class="ph ph-users text-lg"></i></Button>
		</div>
	</div>
</Page>
