<script lang="ts">
	import { Navbar, NavbarBackLink, Page } from 'konsta/svelte';
    import type { LayoutProps } from './$types';
	import { page } from '$app/state';

    let { data, children, }: LayoutProps = $props();

    const title = page.route.id?.includes('sign-up')? 'Sign Up': "Sign In"
    console.log(title);
    
</script>
<Page>
    <div class="relative container min-h-dvh overflow-hidden py-8 px-4">
		<!-- Absolute Items Start -->
		<img src="/images/header-bg-2.png" alt="" class="absolute top-0 right-0 left-0 -mt-6" />
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>
		<!-- Absolute Items End -->
		<!-- Page Title Start -->
		<Navbar {title} titleClass="text-2xl font-semibold text-white !opacity-100" transparent>
            {#snippet left()}
                <NavbarBackLink class=" text-white" />
            {/snippet}
        </Navbar>
		<!-- Page Title End -->
        
{@render children()}
		<!-- Sign In Form Start -->
		<div class="relative z-10">
			<div class="my-8 flex items-center justify-center gap-2">
				<div class="border-color21 dark:border-color18 w-full border-b"></div>
				<p class="text-color1 text-sm text-nowrap dark:text-white">Or Continue With</p>
				<div class="border-color21 dark:border-color18 w-full border-b"></div>
			</div>
			<div class="flex flex-col gap-4">
				<button
					class="border-color21 dark:bg-color11 dark:border-color21 flex items-center justify-center gap-3 rounded-full border bg-white py-3 text-sm font-semibold"
				>
					<img src="/images/google.png" alt="" />
					<p>Continue With</p>
				</button>
				<button
					class="border-color21 dark:bg-color11 dark:border-color21 flex items-center justify-center gap-3 rounded-full border bg-white py-3 text-sm font-semibold"
				>
					<img src="/images/AppleLogo.png" alt="" />
					<p>Continue With</p>
				</button>
			</div>

			<p class="pt-5 text-center text-sm font-semibold">
				Already have an account?
				<a href="auth/login" class="text-primary dark:text-primary-200">Sign In</a> here
			</p>
		</div>
		<!-- Sign In Form End -->
	</div>
</Page>