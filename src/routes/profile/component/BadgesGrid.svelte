<script lang="ts">
	import { Button, Card } from 'konsta/svelte';

	let user: { user?: { badges: [string] } } = $props();

	// Badge definitions
	const allBadges: { name: string; icon: any }[] = [
		{ name: 'Quiz Whiz', icon: 'ph ph-trophy' },
		{ name: 'Streak Master', icon: 'ph ph-flame' },
		{ name: 'Community Helper', icon: 'ph ph-users' }
	];
</script>

<div class="w-full rounded-2xl border border-slate-500/50 bg-white p-5 dark:bg-slate-600/40">
	{#snippet header()}
		<h4 class="flex items-center gap-2 text-lg font-bold text-gray-900">
			<i class="ph ph-trophy h-5 w-5 text-lg text-yellow-500" />
			Your Achievements
		</h4>
	{/snippet}
	<div class="mb-4 grid grid-cols-3 gap-4 text-center">
		{#each allBadges as badge (badge.name)}
			<div class="rounded-lg bg-gray-200 p-3">
				<i class="{badge.icon} mx-auto mb-1 inline-block h-8 w-8 text-4xl text-blue-600" />
				<p class="text-xs font-medium text-gray-800">{badge.name}</p>
			</div>
		{/each}
	</div>

	<Button class="w-full" outline>
		View All Badges
		<i class="ph ph-arrow-right ml-2 h-4 w-4" />
	</Button>
</div>
