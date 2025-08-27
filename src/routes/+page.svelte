<script>
    import { Page, Button, Block, Navbar, App } from 'konsta/svelte';
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
    register();

    import 'swiper/css';
	import AppLogo from '$lib/components/appLogo.svelte';
    const slides = [
        {
            icon: '📖', // Book
            title: 'Practice Questions',
            desc: 'Practice with AI-generated MCQs and OSCE scenarios',
            img: '/images/sample-mcq.png'
        },
        {
            icon: '⏱️', // Timer
            title: 'Mock Exams',
            desc: 'Simulate real council exams with scoring',
            img: '/images/exam-timer-ui.png'
        },
        {
            icon: '🏆', // Trophy
            title: 'Gamification',
            desc: 'Earn points, badges, and climb leaderboards',
            img: '/images/badge-grid.png'
        },
        {
            icon: '💬', // Chat
            title: 'Community',
            desc: 'Share resources and discuss with peers',
            img: '/images/forum-thread.png'
        }
    ];
</script>

<Page class="min-h-screen flex flex-col">
    <!-- Minimal Telegram Header/Navbar -->
    <Navbar transparent titleClass='text-gray-800'>
        {#snippet right()}
        <Button small clear class="text-blue-500 border-blue-500">
            Skip
        </Button>
        {/snippet}
    </Navbar>

    <!-- Full-Screen Intro Section -->
    <div class="flex flex-col items-center justify-center flex-1">
        <AppLogo size="lg" variant="brand" class="mb-4" />
        <h1 class="text-2xl font-bold mb-2 text-center">Ace Your Nursing Council Exams!</h1>
        <p class="text-center mb-6 max-w-md">
            AI-powered study companion for practice questions, mock exams, and more.
        </p>

        <!-- Onboarding Carousel -->
        <div class="w-full max-w-md grow">
            <swiper-container slides-per-view={1} pagination={{ clickable: true }}>
                {#each slides as slide}
                    <swiper-slide>
                        <div class="flex flex-col items-center py-6">
                            <div class="text-4xl mb-2">{slide.icon}</div>
                            <div class="font-semibold text-lg mb-1">{slide.title}</div>
                            <div class="text-center text-gray-700 mb-3">{slide.desc}</div>
                            <img src={slide.img} alt={slide.title} class="w-32 h-20 object-contain rounded shadow" />
                        </div>
                    </swiper-slide>
                {/each}
            </swiper-container>
        </div>
    </div>

    <!-- Bottom Main Button - Telegram Style -->
    <div class="safe-area-bottom w-full px-4 pb-4">
        <Button large class="w-full bg-blue-500 text-white font-bold rounded-full py-3">
            Continue to App
        </Button>
    </div>
</Page>
