<script lang="ts">
	import { Button, Page } from 'konsta/svelte';
	import type { PageProps } from './$types';
	import Password from '$lib/components/ui/password.svelte';

	let { data }: PageProps = $props();
</script>

<Page>
	<div class="relative container min-h-dvh overflow-hidden px-6 py-8">
		<!-- Absolute Items Start -->
		<img src="/images/header-bg-2.png" alt="" class="absolute top-0 right-0 left-0 -mt-6" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->
		<!-- Page Title Start -->
		<div class="relative z-10 flex items-center justify-start gap-4">
			<h2 class="text-2xl font-semibold text-white">Create Password</h2>
		</div>
		<!-- Page Title End -->

		<!-- Sign In Form Start -->
		<form action="create-password.html" class="relative z-10">
			<div class="dark:bg-color10 mt-12 rounded-xl bg-white px-6 py-8">
				<div class="flex flex-col gap-3 text-center">
					<h3 class="text-xl font-semibold">Create Password</h3>
					<p class="text-bgColor18 dark:text-color18 text-sm">
						Create new password for your account now
					</p>
				</div>

				<div class="pt-4">
					<p class="pb-2 text-sm font-semibold">Password</p>
					<Password name='password' />
				</div>
				<div class="pt-4">
					<p class="pb-2 text-sm font-semibold">Confirm Password</p>
					<Password name='confirm_password' />
				</div>
			</div>

			<Button class="text-white">Confirm</Button>
		</form>

		<!-- Sign In Form End -->
	</div>
</Page>
