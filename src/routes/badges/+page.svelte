<script lang="ts">
	import NavbarBackLink from '$lib/components/ui/navbarBackLink.svelte';
	import { Tab, TabItem } from '$lib/components/ui/tabs';
	import type { PageProps } from './$types';
	import { Page, Tabbar, TabbarLink } from 'konsta/svelte';

	let { data }: PageProps = $props();

	let activeTab: 'claimed'|'unclaimed' = $state('claimed');
	let isTabbarLabels = $state(true);
	let isTabbarIcons = $state(true);
</script>

<Page>
	<div
		class="dark:bg-color1 relative container min-h-dvh overflow-hidden px-6 py-8 dark:text-white"
	>
		<!-- Absolute Items Start -->
		<img src="/images/header-bg-2.png" alt="" class="absolute top-0 right-0 left-0 -mt-15" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->
		<!-- Page Title Start -->
		<div class="relative z-10 flex items-center justify-start gap-4">
			<NavbarBackLink />
			<h2 class="text-2xl font-semibold text-white">Master Medal</h2>
		</div>
		<!-- Page Title End -->

		<!-- Tabbar Start -->
         <div class="py-8">
            <Tab bind:value={activeTab}>
                <TabItem title='Claimed' name='claimed'></TabItem>
                <TabItem title='UnClaimed' name='unclaimed'></TabItem>
            </Tab>
         </div>

		<div class="relative z-20 pt-15">
			<p class="text-lg font-semibold">Award Unlocking</p>

			<div class="grid grid-cols-2 gap-5 pt-5 text-center">
				<a
					href="medal-details.html"
					class="dark:bg-color9 relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-5"
				>
					<div
						class="bg-color14 text-p2 border-color16 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 absolute top-2 right-2 flex items-center justify-center rounded-full border p-1.5 text-sm"
					>
						<i class="ph ph-lock-simple"></i>
					</div>
					<img src="/images/medal1.svg" alt="" />
					<p class="pt-3 text-sm font-semibold">Beginner</p>
					<p class="pt-1 pb-3 text-xs">0-1000 points</p>
					<p
						class="bg-p2 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm text-white dark:border"
					>
						1600 <i class="ph ph-users text-base"></i>
					</p>
				</a>
				<a
					href="medal-details.html"
					class="dark:bg-color9 relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-5"
				>
					<div
						class="bg-color14 text-p2 border-color16 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 absolute top-2 right-2 flex items-center justify-center rounded-full border p-1.5 text-sm"
					>
						<i class="ph ph-lock-simple"></i>
					</div>
					<img src="/images/medal2.svg" alt="" />
					<p class="pt-3 text-sm font-semibold">Pro</p>
					<p class="pt-1 pb-3 text-xs">0-1000 points</p>
					<p
						class="bg-p2 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm text-white dark:border"
					>
						1600 <i class="ph ph-users text-base"></i>
					</p>
				</a>
				<a
					href="medal-details.html"
					class="dark:bg-color9 relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-5"
				>
					<div
						class="bg-color14 text-p2 border-color16 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 absolute top-2 right-2 flex items-center justify-center rounded-full border p-1.5 text-sm"
					>
						<i class="ph ph-lock-simple"></i>
					</div>
					<img src="/images/medal3.svg" alt="" />
					<p class="pt-3 text-sm font-semibold">Hustler</p>
					<p class="pt-1 pb-3 text-xs">0-1000 points</p>
					<p
						class="bg-p2 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm text-white dark:border"
					>
						1600 <i class="ph ph-users text-base"></i>
					</p>
				</a>
				<a
					href="medal-details.html"
					class="dark:bg-color9 relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-5"
				>
					<div
						class="bg-color14 text-p2 border-color16 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 absolute top-2 right-2 flex items-center justify-center rounded-full border p-1.5 text-sm"
					>
						<i class="ph ph-lock-simple"></i>
					</div>
					<img src="/images/medal4.svg" alt="" />
					<p class="pt-3 text-sm font-semibold">Scholar</p>
					<p class="pt-1 pb-3 text-xs">0-1000 points</p>
					<p
						class="bg-p2 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm text-white dark:border"
					>
						1600 <i class="ph ph-users text-base"></i>
					</p>
				</a>
				<a
					href="medal-details.html"
					class="dark:bg-color9 relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-5"
				>
					<div
						class="bg-color14 text-p2 border-color16 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 absolute top-2 right-2 flex items-center justify-center rounded-full border p-1.5 text-sm"
					>
						<i class="ph ph-lock-simple"></i>
					</div>
					<img src="/images/medal5.svg" alt="" />
					<p class="pt-3 text-sm font-semibold">Champion</p>
					<p class="pt-1 pb-3 text-xs">0-1000 points</p>
					<p
						class="bg-p2 dark:text-p1 dark:bg-bgColor14 dark:border-bgColor16 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm text-white dark:border"
					>
						1600 <i class="ph ph-users text-base"></i>
					</p>
				</a>
			</div>
		</div>
	</div>
</Page>
