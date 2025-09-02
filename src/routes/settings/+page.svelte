<script lang="ts">
	import { BackLink, toggleTheme } from '$lib/utils';
	import type { PageProps } from './$types';
	import {
		Button,
		Card,
		List,
		ListItem,
		Navbar,
		NavbarBackLink,
		Page,
		Range,
		Toggle
	} from 'konsta/svelte';

	let { data }: PageProps = $props();

	let userData = { username: 'Guest', telegramId: 'N/A', email: 'Not Set' };
	let theme = $state(false);

    $effect(() => {
        toggleTheme(theme);
    });

	// async function saveSettings() {
	// 	await fetch('/api/settings', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ notifications, theme, language, quizLength, difficulty })
	// 	});
	// 	f7.toast.create({ text: 'Settings saved!', closeTimeout: 2000 }).open();
	// }

	async function logout() {
		await fetch('/api/auth/logout', { method: 'POST' });
		// Telegram.WebApp.close();
	}

	// function openPremiumInvoice() {
	// 	Telegram.WebApp.openInvoice('https://your-invoice-link', (status) => {
	// 		if (status === 'paid') {
	// 			f7.toast.create({ text: 'Premium unlocked!', closeTimeout: 2000 }).open();
	// 		}
	// 	});
	// }
</script>

<Page class="container py-8">
	<!-- Absolute Items Start -->
	<img src="/images/header-bg-1.png" alt="" class="absolute top-0 right-0 left-0 -mt-8" />
	<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
	<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
	<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
	<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
	<div class="relative z-10 px-6">
		<div class="flex items-center justify-between gap-4">
			<div class="flex items-center justify-start gap-4">
				<button
					use:BackLink
					aria-label="back link"
					class="dark:bg-color10 flex size-8 items-center justify-center rounded-full bg-white text-xl"
				>
					<i class="ph ph-caret-left"></i>
				</button>
				<h2 class="text-2xl font-semibold text-white">Settings</h2>
			</div>
		</div>
		<!-- Page Title End -->

		<div class="pt-8">
			<div class="rounded-2xl bg-white p-5 dark:bg-slate-700">
				<div class="flex flex-col gap-3">
					<List>
						<ListItem title="Theme">
							{#snippet after()}
								<Toggle bind:checked={theme} />
							{/snippet}
						</ListItem>
					</List>
					<Card>
						<h3>Upgrade to Premium</h3>
						<p>Unlock unlimited mock exams and advanced analytics!</p>
						<Button onclick={() => {}}>Subscribe Now</Button>
						<p>Current Plan: Free</p>
					</Card>
					<List>
						<ListItem title="Change Password" link href="/create-password" />
						<ListItem title="Contact Support" link href="https://t.me/YourNursingBot" />
						<ListItem title="FAQ" link href="/faq" />
						<ListItem title="App Version" after="1.0.0" />
						<ListItem title="Terms of Service" link href="/terms" />
						<ListItem title="Privacy Policy" link href="/privacy" />
					</List>

					<Button class="bg-red-500 dark:bg-red-400">Log Out</Button>
				</div>
			</div>
		</div>
	</div>
</Page>
