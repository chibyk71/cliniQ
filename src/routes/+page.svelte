<script lang="ts">
	import { Page, Button, Block, Navbar, App } from 'konsta/svelte';
	// import Swiper JS
	import Swiper from 'swiper';
	import { Pagination, Navigation } from 'swiper/modules';
	// import Swiper styles
	import 'swiper/css';
	import 'swiper/css/pagination';
	import { onMount } from 'svelte';
	const slides = [
		{ icon: '🎯', title: 'Welcome', text: 'Get ready for your health exams with AI.' },
		{ icon: '📝', title: 'Practice', text: 'Unlimited practice questions & mock exams.' },
		{ icon: '📊', title: 'Track Progress', text: 'See your strengths & improve weak areas.' }
	];

	let onboardingIsEnded = $state(false);
	let onboardingStepsSlider = $state<HTMLDivElement | null>(null);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			speed: 400,
			slidesPerView: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
			spaceBetween: 4,
			pagination: {
				el: '.onBoardingsliderPagingation',
				clickable: true
			},
			modules: [Pagination, Navigation],
			navigation: {
				nextEl: onboardingStepsSlider
			}
		});

		swiper.on('reachEnd', function () {
			onboardingIsEnded = true;
		});
	});
</script>

<Page class="flex min-h-screen flex-col">
	<!-- Full-Screen Intro Section -->
	<div class="relative container h-screen bg-white dark:bg-black dark:text-white">
		<div class="bg-p3 absolute top-0 left-0 h-[174px] w-[149px] blur-[145px]"></div>
		<div class="absolute top-40 right-0 h-[174px] w-[91px] bg-[#0ABAC9] blur-[150px]"></div>
		<div class="bg-p2 absolute top-80 right-40 h-[205px] w-[176px] blur-[235px]"></div>
		<div class="bg-p3 absolute right-0 bottom-0 h-[174px] w-[149px] blur-[220px]"></div>

		<div class="absolute bottom-[45%] left-0">
			<img src="/images/icon-1.png" alt="" />
		</div>
		<div class="absolute right-0 bottom-[35%]">
			<img src="/images/icon-2.png" alt="" />
		</div>
		<div class="relative z-10">
			<img src="/images/onboarding-img.png" alt="" />
		</div>
		<section class="pt-24">
			<div class="relative">
				<img src="/images/icon-3.png" class="absolute -top-8 left-4" alt="" />
				<div class="swiper onboarding-steps-slider">
					<div class="swiper-wrapper">
						{#each slides as { icon, title, text }}
							<div class="swiper-slide flex flex-col items-center justify-center px-4 text-center">
								<h1 class="text-4xl font-semibold">
									{title}
								</h1>
								<p class="m-body pt-5 opacity-80">
									{text}
								</p>
							</div>
						{/each}
					</div>

					<div class="flex items-center justify-center py-8">
						<div class="onBoardingsliderPagingation swiper-pagination"></div>
					</div>

					<div class="flex items-center justify-between px-6">
						<a href="sign-in.html" class="text-p2 dark:text-p1 font-semibold">Skip</a>
						<div class="nextButton">
							<div class="ara-next" bind:this={onboardingStepsSlider}>
								{#if !onboardingIsEnded}
									<button
										class="bg-p2 flex items-center justify-center rounded-full p-3.5 text-2xl text-white"
									>
										<i class="ph ph-arrow-right"></i>
										<span class="sr-only">Next</span>
									</button>
								{:else}
									<a
										href="./sign-up"
										class="bg-p2 block rounded-full px-6 py-4 text-center text-base font-semibold text-nowrap text-white"
										>Get Started</a
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</Page>
