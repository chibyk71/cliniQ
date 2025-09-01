<script lang="ts">
    let {opened = $bindable(false)} = $props();
</script>
<div class="flex items-center justify-start gap-2">
	<div class="relative">
		<button class="peer relative flex items-center justify-center rounded-full border border-white/25 bg-white/25 p-2" aria-label="more options" onclick={() => opened=!opened}>
			<i class="ph ph-dots-three text-white"></i>
		</button>
		<div class="dark:bg-slate-800 shadow6 absolute top-12 right-0 z-40 min-w-48 rounded-xl bg-white p-5 duration-500 animation2" class:hidden={!opened}>
			<div class="flex cursor-pointer items-center justify-start gap-3 pb-3">
				<div
					class="text-p2 dark:bg-color24 dark:border-color18 border-color16 bg-color14 flex items-center justify-center rounded-full border p-2 text-sm dark:text-white"
				>
					<i class="ph ph-user"></i>
				</div>
				<p class="text-sm">Edit Profile</p>
			</div>
			<div
				class="border-color21 dark:border-color24 flex cursor-pointer items-center justify-start gap-3 border-y border-dashed pt-3 pb-3"
			>
				<div
					class="text-p2 dark:bg-color24 dark:border-color18 border-color16 bg-color14 flex items-center justify-center rounded-full border p-2 text-sm dark:text-white"
				>
					<i class="ph ph-gear"></i>
				</div>
				<p class="text-sm text-nowrap">Settings</p>
			</div>
			<div class="flex cursor-pointer items-center justify-start gap-3 py-3">
				<div
					class="text-p2 dark:bg-color24 dark:border-color18 border-color16 bg-color14 flex items-center justify-center rounded-full border p-2 text-sm dark:text-white"
				>
					<i class="ph ph-scroll"></i>
				</div>
				<p class="text-sm text-nowrap">Privacy Policy</p>
			</div>
		</div>
	</div>
</div>
