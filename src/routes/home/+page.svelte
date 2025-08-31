<script lang="ts">
	import { Button, Page } from 'konsta/svelte';
	import type { PageProps } from './$types';
	import Welcome from './components/welcome.svelte';
	import FeatureMenu from './components/featureMenu.svelte';
	import RecentActivities from './components/recentActivities.svelte';
	import { animateIn } from '$lib/utils';
	import DarkMode from '$lib/components/darkMode.svelte';

	let { data }: PageProps = $props();
</script>

<Page>
	<div class="relative container min-h-dvh overflow-hidden py-8 dark:bg-black dark:text-white">
		<!-- Absolute Items Start -->
		<img src="/images/header-bg-1.png" alt="" class="absolute top-0 right-0 left-0 -mt-6" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->

		<!-- Page Title Start -->
		<div class="relative z-10 pb-10">
			<div class="relative z-20 flex items-center justify-between gap-4 px-6">
				<div class="flex items-center justify-start gap-2">
					<button class="sidebarModalOpenButton text-2xl !leading-none text-white" aria-label="Open sidebar">
						<i class="ph ph-list"></i>
					</button>
					<h2 class="text-2xl font-semibold text-white">CliniQ</h2>
				</div>
				<div class="flex items-center justify-start gap-2">
					<DarkMode />
					<a href="my-profile.html"
						class="border-color24 bg-color24 flex items-center justify-center rounded-full border p-2 text-white"
					>
						<i class="ph ph-user"></i>
					</a>
				</div>
			</div>
			<!-- Page Title End -->

			<!-- Search Box Start -->
			<div class="relative z-20 flex items-center justify-between gap-3 px-6 pt-8">
				<a
					href="contest-search-result.html"
					class="bg-color24 border-color24 flex w-full items-center justify-start gap-3 rounded-full border p-4 text-white"
				>
					<i class="ph ph-magnifying-glass"></i>
					<span class="w-full text-xs text-white">
						<span>Search Contest</span>
					</span>
				</a>
				<div
					class="bg-color24 border-color24 flex items-center justify-center rounded-full border p-4 text-white"
				>
					<i class="ph ph-sliders-horizontal"></i>
				</div>
			</div>
			<!-- Search Box End -->
			<Welcome user={data.user} />

			<!-- <div class="px-6">
				<div
					class="bg-p2 after:bg-p2 before:bg-p2 relative flex items-center justify-between rounded-2xl px-4 before:absolute before:right-4 before:left-4 before:-z-10 before:mt-12 before:h-full before:rounded-2xl before:opacity-30 after:absolute after:right-2 after:left-2 after:-z-10 after:mt-6 after:h-full after:rounded-2xl after:opacity-30"
				>
					<div class="pl-2 !leading-none font-semibold text-white">
						<p class="">Invite Friends</p>
						<p class="py-2 pl-2 text-[36px]">$80</p>
						<p class="pl-7">Earn Up To</p>
					</div>
					<div class="">
						<img src="/images/invite_illus.png" alt="" />
					</div>
				</div>
			</div> -->
			<!-- Main Content Grid -->
			<div class="grid lg:grid-cols-3 gap-6">
				<!-- Feature Menu -->
				<div class="lg:col-span-2">
					<div class="my-4 pl-5">
						<h2 class="text-xl font-bold text-gray-900 dark:text-gray-300 mb-2">Learning Hub</h2>
						<p class="text-gray-600 dark:text-gray-200 text-sm">Choose your next learning activity</p>
					</div>
					<FeatureMenu />
				</div>

				<!-- Recent Activity Sidebar -->
				<div class="space-y-6">
			 		<RecentActivities />
				</div>
			</div>

			<div class="text-center pt-6 px-5 opacity-0 translate-y-5 transition-all duration-500" use:animateIn>
				<Button large class="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-xl px-8 py-4 text-lg rounded-2xl flex items-center justify-center">
					<i class="ph ph-lightning text-lg w-5 h-5 mr-2" />
					Start Practice Session
				</Button>
			</div>
			
		</div>
	</div>
</Page>
