<script lang="ts">
	import { Badge, Button, Card, Chip } from 'konsta/svelte';

	export let user: any;

	function getLevelColor(level: string) {
		const colors: Record<string, string> = {
			'Novice Nurse': 'bg-blue-100 text-blue-800',
			'Student Nurse': 'bg-green-100 text-green-800',
			'Graduate Nurse': 'bg-purple-100 text-purple-800',
			'Skilled Nurse': 'bg-orange-100 text-orange-800',
			'Expert Nurse': 'bg-red-100 text-red-800'
		};
		return colors[level] || 'bg-gray-100 text-gray-800';
	}

	function animateIn(node: HTMLElement) {
		setTimeout(() => {
			node.classList.remove('opacity-0', 'translate-y-5');
			node.classList.add('opacity-100', 'translate-y-0');
		}, 100);
	}
</script>

<!-- Container with entry animation -->
<div class="translate-y-5 opacity-0 transition-all duration-500" use:animateIn>
	<Card
		class="border-0 bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 text-white shadow-xl"
	>
		<!-- Header -->
		<div class="mb-4 flex items-start justify-between">
			<div>
				<h2 class="mb-2 text-2xl font-bold">
					Welcome back, {user?.full_name || 'Nursing Student'}! 👋
				</h2>
				<p class="text-blue-100">Ready to continue your learning journey?</p>
			</div>
			{#if user?.avatar_url}
				<img
					src={user.avatar_url}
					alt="Profile"
					class="h-12 w-12 rounded-full border-2 border-white/30"
				/>
			{/if}
		</div>

		<!-- Stats -->
		<div class="mb-4 grid grid-cols-3 gap-4">
			<div class="text-center">
				<div class="mb-1 flex items-center justify-center gap-1">
                    <i class="ph ph-flame w-4 h-4 text-orange-300"></i>
					<span class="text-2xl font-bold">{user?.streak || 0}</span>
				</div>
				<p class="text-xs text-blue-100">Day Streak</p>
			</div>
			<div class="text-center">
				<div class="mb-1 flex items-center justify-center gap-1">
					<i class="ph ph-star w-4 h-4 text-yellow-300"></i>
					<span class="text-2xl font-bold">{user?.points || 0}</span>
				</div>
				<p class="text-xs text-blue-100">Points</p>
			</div>
			<div class="text-center">
				<div class="mb-1 flex items-center justify-center gap-1">
                    <i class="ph ph-trend-up w-4 h-4 text-green-300"></i>
					<span class="text-xs font-bold">{user?.badges?.length || 0}</span>
				</div>
				<p class="text-xs text-blue-100">Badges</p>
			</div>
		</div>

		<!-- Footer -->
		<div class="flex items-center justify-between">
			<Chip class={`${getLevelColor(user?.level)} font-medium px-2`}>
				<i class="ph ph-trend-up mr-1 size-5 text-lg"></i>
				{user?.level || 'Novice Nurse'}
			</Chip>

            <Button small class="w-auto border-white/30 bg-white/10 text-white hover:border-white/40 hover:bg-white/20">
                View Badges
            </Button>
		</div>
	</Card>
</div>
