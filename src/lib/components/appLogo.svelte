<script lang="ts">
	/** Cliniq logo
	 *  Props:
	 *   - size: 'sm' | 'md' | 'lg'
	 *   - variant: 'brand' | 'mono'
	 *   - showTagline: boolean
	 */

     const { size = 'md', variant = 'brand', showTagline, class:className }: { size?: 'sm' | 'md' | 'lg'; variant?: 'brand' | 'mono'; showTagline?: boolean, class?: string } = $props();

	const map = {
		sm: { icon: 28, textClass: 'text-xl', gap: 'gap-2', tag: 'text-[10px]' },
		md: { icon: 36, textClass: 'text-3xl', gap: 'gap-3', tag: 'text-xs' },
		lg: { icon: 48, textClass: 'text-5xl', gap: 'gap-4', tag: 'text-sm' }
	}[size] ?? { icon: 36, textClass: 'text-3xl', gap: 'gap-3', tag: 'text-xs' };

	const gradientId = `cliniqGradient`;
</script>

<div class="inline-flex flex-col {className}">
	<div class={`inline-flex items-center ${map.gap} select-none`}>
		<!-- Mark -->
		<svg
			width={map.icon}
			height={map.icon}
			viewBox="0 0 64 64"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			class="shrink-0"
		>
			<defs>
				<linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#34D399" />
					<stop offset="50%" stop-color="#14B8A6" />
					<stop offset="100%" stop-color="#06B6D4" />
				</linearGradient>
				<filter id="cliniqShadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12" />
				</filter>
			</defs>

			<!-- Outer circular Q ring -->
			<circle
				cx="28"
				cy="28"
				r="20"
				stroke={variant === 'brand' ? `url(#${gradientId})` : 'currentColor'}
				stroke-width="6"
				fill="none"
				filter="url(#cliniqShadow)"
			/>

			<!-- Q tail -->
			<path
				d="M40 40 L56 56"
				stroke={variant === 'brand' ? `url(#${gradientId})` : 'currentColor'}
				stroke-width="6"
				stroke-linecap="round"
			/>

			<!-- subtle cross -->
			<g transform="translate(28 28)">
				<rect
					x="-6"
					y="-2"
					width="12"
					height="4"
					rx="2"
					fill={variant === 'brand' ? '#14B8A6' : 'currentColor'}
				/>
				<rect
					x="-2"
					y="-6"
					width="4"
					height="12"
					rx="2"
					fill={variant === 'brand' ? '#14B8A6' : 'currentColor'}
				/>
			</g>
		</svg>

		<!-- Wordmark -->
		<div class="leading-none">
			<span
				class={`${map.textClass} font-extrabold tracking-tight ${variant === 'brand' ? 'bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent' : 'text-current'}`}
			>
				ClinIQ
			</span>
		</div>
	</div>

	{#if showTagline}
		<div class={`${map.tag} mt-2 text-slate-600 dark:text-slate-400`}>care, clearly connected</div>
	{/if}
</div>
