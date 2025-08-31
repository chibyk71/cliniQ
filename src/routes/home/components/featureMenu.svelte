<script lang="ts">
	import { animateIn } from '$lib/utils';
	import { Badge, Card } from 'konsta/svelte';

	let {
		stats
	}: {
		stats?: {
			practiceProgress?: number;
			lastMockScore?: number;
			rankPercentage?: number;
			newPosts?: number;
			newBadges?: number;
		};
	} = $props();

	const features = [
		{
			title: 'Practice Questions',
			description: 'Master concepts with targeted practice',
			icon: 'ph ph-book-open-text',
			link: '/Practice',
			color: 'from-blue-500 to-blue-600',
			lightColor: 'bg-blue-50',
			stats: `${stats?.practiceProgress || 60}% Complete`,
			badge: null
		},
		{
			title: 'Mock Exams',
			description: 'Full-length practice exams',
			icon: 'ph ph-clock',
			link: '/MockExams',
			color: 'from-purple-500 to-purple-600',
			lightColor: 'bg-purple-50',
			stats: `Last Score: ${stats?.lastMockScore || 78}%`,
			badge: null
		},
		{
			title: 'Performance Analytics',
			description: 'Track your learning progress',
			icon: 'ph ph-chart-bar',
			link: '/Analytics',
			color: 'from-green-500 to-green-600',
			lightColor: 'bg-green-50',
			stats: 'View Detailed Reports',
			badge: null
		}
	];
</script>

<div class="space-y-4">
	{#each features as feature, index}
		<div
			class="-translate-x-5 opacity-0 transition-all duration-500"
			use:animateIn={{ delay: index * 100 }}
		>
			<Card class="transition-all duration-200 hover:shadow-lg">
				<div class="flex items-center gap-4 p-4">
					<!-- Icon container -->
					<div class={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
					>
						<i class="{feature.icon} h-6 w-6 text-xl inline-block text-white" />
					</div>

					<!-- Text content -->
					<div class="flex-1">
						<h3 class="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
							{feature.title}
							{#if feature.badge}
								<Badge class="bg-orange-100 text-xs text-orange-800">{feature.badge}</Badge>
							{/if}
						</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
						<p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-200">{feature.stats}</p>
					</div>

					<!-- Arrow -->
					<i class="ph ph-arrow-right h-5 w-5 text-lg text-gray-400" />
				</div>
			</Card>
		</div>
	{/each}
</div>
