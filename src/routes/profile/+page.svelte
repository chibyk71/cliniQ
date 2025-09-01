<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	import { Button, Page } from 'konsta/svelte';
	import BadgesGrid from './component/BadgesGrid.svelte';
	import SettingsList from './component/settingsList.svelte';
	import { onMount } from 'svelte';
	import Dropdown from '$lib/components/ui/dropdown.svelte';
	import { impressionOptions, meterOneOption, meterTwoOption, renderChart } from './chartSettings';
	import { browser } from '$app/environment';

	let user: any = null;
	let impression: HTMLElement | null = $state(null);
	let isLoading = $state(true);

	onMount(() => {
		isLoading = false;
		setTimeout(() => {
			if (browser && impression) {
				renderChart(impression!, impressionOptions);
				renderChart(document.querySelector('.meter1')!, meterOneOption);
				renderChart(document.querySelector('.meter2')!, meterTwoOption);
			}
		}, 1000);
	});
</script>

<Page>
	{#if isLoading}
		<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
			<div class="mx-auto max-w-md">
				<div class="animate-pulse space-y-6">
					<div class="h-48 rounded-2xl bg-gray-200"></div>
					<div class="h-32 rounded-2xl bg-gray-200"></div>
					<div class="h-40 rounded-2xl bg-gray-200"></div>
				</div>
			</div>
		</div>
	{:else}
		<div class="dark:bg-color1 relative container min-h-dvh overflow-hidden py-8 dark:text-white">
			<!-- Absolute Items Start -->
			<img src="/images/header-bg-1.png" alt="" class="absolute top-0 right-0 left-0 -mt-20" />
			<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
			<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
			<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
			<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
			<!-- Absolute Items End -->

			<!-- Page Title Start -->
			<div class="relative z-10 px-6">
				<div class="flex items-center justify-between gap-4">
					<div class="flex items-center justify-start gap-4">
						<a
							href="home.html"
							class="dark:bg-color10 flex size-8 items-center justify-center rounded-full bg-white text-xl"
							aria-label="back"
						>
							<i class="ph ph-caret-left"></i>
						</a>
						<h2 class="text-2xl font-semibold text-white">My Profile</h2>
					</div>
					<Dropdown />
				</div>
				<!-- Page Title End -->

				<!-- User Profile Image Start -->
				<div class="flex items-end justify-center gap-8 pt-16">
					<div class="relative flex size-40 items-center justify-center">
						<img
							src="/images/user-img.png"
							alt=""
							class="size-32 overflow-hidden rounded-full bg-[#B190B6]"
						/>
						<img src="/images/user-progress.svg" alt="" class="absolute top-0 right-0 left-0" />
						<img src="/images/badge1.png" alt="" class="absolute -bottom-2 left-[60px]" />
					</div>
				</div>
				<!-- User Profile Image End -->
				<div class="flex flex-col items-center justify-center pt-5 pb-5">
					<div class="flex items-center justify-start gap-1 text-2xl">
						<p class="font-semibold">Frost Phoenix</p>
						<i class="ph-fill ph-seal-check text-p1"></i>
					</div>
					<p class="text-color5 dark:text-bgColor20 pt-1 font-semibold">
						Frend come on, play with me
					</p>
				</div>

				<div class="userProfileTab">
					<div class="pt-8">
						<BadgesGrid />
						<div class="py-6">
							<div class="rounded-2xl border border-slate-500/50 bg-white p-5 dark:bg-slate-600/40">
								<div class="flex items-start justify-between">
									<div class="flex items-start justify-start gap-3">
										<div class="">
											<div class="flex items-start justify-start">
												<p class="font-semibold">216</p>
												<p class="text-xs/tight">th</p>
											</div>
											<p class="pt-2 text-xs">Ranking</p>
										</div>
										<div class="">
											<div class="text-p2 dark:text-primary-500 flex items-center justify-start">
												<i class="ph ph-arrow-up text-sm"></i>
												<p class="text-xs">28</p>
											</div>
											<p class="pt-3 text-xs">Points</p>
										</div>
									</div>
									<button
										class="flex items-center justify-start gap-1 rounded-lg bg-slate-300/50 px-2 py-1 text-xs"
									>
										<span>This Week</span>
										<i class="ph-fill ph-caret-down text-base text-orange-300"></i>
									</button>
								</div>
								<div bind:this={impression}></div>
							</div>
							<div class="mt-6 grid grid-cols-2 gap-4">
								<div class="dark:bg-color9 rounded-xl bg-white p-3">
									<div class="flex items-center justify-between">
										<div class="">
											<p class="text-lg font-bold">68%</p>
											<p class="text-xs">Correcto Meter</p>
										</div>
										<button
											class="flex items-center justify-start gap-1 rounded-lg bg-slate-500/40 px-2 py-1 text-xs"
										>
											<span>All</span>
											<i class="ph-fill ph-caret-down text-base text-orange-500"></i>
										</button>
									</div>
									<div class="meter1 relative pt-3"></div>
									<div class="-mt-12 flex flex-col justify-center text-center">
										<p class="text-p1 text-lg font-semibold dark:text-white">244</p>
										<p class="text-xs">Total Que</p>
									</div>
									<div class="flex items-center justify-between pt-6">
										<div class="">
											<div class="bg-p2 h-1 w-8 rounded-full"></div>
											<p class="text-color5 pt-1 text-xs dark:text-white">Correct</p>
										</div>
										<div class="">
											<div class="bg-p1 h-1 w-8 rounded-full"></div>
											<p class="text-color5 pt-1 text-xs dark:text-white">Wrong</p>
										</div>
										<div class="">
											<div class="bg-p3 h-1 w-8 rounded-full"></div>
											<p class="text-color5 pt-1 text-xs dark:text-white">Skip</p>
										</div>
									</div>
								</div>
								<div class="dark:bg-color9 rounded-xl bg-white p-3">
									<div class="flex items-center justify-between">
										<div class="">
											<p class="text-lg font-bold">68%</p>
											<p class="text-xs">Correcto Meter</p>
										</div>
										<button
											class="flex items-center justify-start gap-1 rounded-lg bg-slate-300/50 px-2 py-1 text-xs"
										>
											<span>All</span>
											<i class="ph-fill ph-caret-down text-p1 text-base"></i>
										</button>
									</div>
									<div class="meter2 relative pt-3"></div>
									<div class="-mt-12 flex flex-col justify-center text-center">
										<p class="text-p1 text-lg font-semibold">48</p>
										<p class="text-xs dark:text-white">Quiz played</p>
									</div>
									<div class="flex items-center justify-between pt-6">
										<div class="">
											<div class="bg-p2 h-1 w-8 rounded-full"></div>
											<p class="text-color5 pt-1 text-xs dark:text-white">Correct</p>
										</div>
										<div class="">
											<div class="bg-p1 h-1 w-8 rounded-full"></div>
											<p class="text-color5 pt-1 text-xs dark:text-white">Wrong</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</Page>
