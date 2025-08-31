<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Badge, Button, Card } from 'konsta/svelte';

	let recentQuizzes = $props();

	let isExpanded = $state(false);

	// Default activities
	const defaultActivities = [
		{
			name: 'Pediatric Nursing Quiz',
			score: 85,
			type: 'practice',
			date: new Date(),
			category: 'Pediatrics'
		},
		{
			name: 'Pharmacology Mock Exam',
			score: 70,
			type: 'mock_exam',
			date: new Date(),
			category: 'Pharmacology'
		},
		{
			name: 'Community Health Practice',
			score: 92,
			type: 'practice',
			date: new Date(),
			category: 'Community Health'
		}
	];

	const activities = $derived(recentQuizzes.length > 0 ? recentQuizzes : defaultActivities);
	const displayedActivities = $derived(isExpanded ? activities : activities.slice(0, 2));

	function getScoreColor(score: number) {
		if (score >= 85) return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/30';
		if (score >= 70) return 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30';
		return 'text-orange-600 bg-orange-50 dark:text-yellow-300 dark-bg-red-900/30';
	}
</script>

<div transition:fade class="mx-auto w-full max-w-md">
	<Card>
		{#snippet header()}
			<div class="flex items-center justify-between">
				<h4 class="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
					<i class="ph ph-check-circle h-5 w-5 text-xl text-green-500" />
					Recent Activity
				</h4>
				<Button small tonal onclick={() => (isExpanded = !isExpanded)} class="text-gray-500 hover:text-gray-700 w-auto">
					<i class="ph {isExpanded ? 'ph-caret-up' : 'ph-caret-down'} size-5"></i>
				</Button>
			</div>
		{/snippet}

		<div class="space-y-3">
			{#each displayedActivities as activity, index}
				{#key activity.name}
					<div class="flex items-center gap-3 rounded-lg bg-gray-50 dark:bg-gray-700 p-3 transition-colors hover:bg-gray-100 hover:dark:bg-gray-600"
						in:fly={{ x: -10, duration: 300, delay: index * 100 }}
						out:fly={{ x: -10, duration: 300 }}>
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500">
							<i class="text-primary-600 ph size-4 {activity.type === 'mock_exam'? 'ph-clock'
									: 'ph-target'}"></i>
						</div>

						<div class="flex-1">
							<div class="mb-1 flex items-center gap-2">
								<span class="text-sm font-medium text-gray-900 dark:text-gray-200">
									{activity.name}
								</span>
								<Badge class={`text-xs font-semibold ${getScoreColor(activity.score)}`}>
									{activity.score}%
								</Badge>
							</div>
							<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-50">
								<span>{activity.category}</span>
								<span>•</span>
								<span>{new Date(activity.date).toLocaleDateString()}</span>
							</div>
						</div>
					</div>
				{/key}
			{/each}
		</div>

		<div class="mt-4 pt-3">
			<Button outline small class="w-full">
				View All Activity <i class="ph ph-arrow-right ml-2 h-4 w-4" /></Button
			>
		</div>
	</Card>
</div>
