<script lang="ts">
	interface Props {
		name: string;
		description: string;
		screenshot: string;
		frameworkIcon: string;
		frameworkName: string;
		demoUrl: string;
		githubLink?: string;
	}

	let { name, description, screenshot, frameworkIcon, frameworkName, demoUrl, githubLink }: Props =
		$props();
</script>

<div
	class="group overflow-hidden rounded-lg border border-gray-700 bg-gray-900 transition-all duration-200 hover:border-gray-500"
>
	<img src={screenshot} alt="{name} screenshot" class="h-48 w-full object-cover object-top" />
	<div class="p-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<h2 class="text-lg font-bold text-white">{name}</h2>
				<img src={frameworkIcon} alt={frameworkName} class="h-5 w-5" />
			</div>
			<div class="flex gap-3">
				<a
					href={demoUrl}
					target="_blank"
					class="text-sm text-gray-400 underline hover:text-gray-300"
				>
					Live Demo
				</a>
				{#if githubLink}
					<a
						href={githubLink}
						target="_blank"
						class="text-sm text-gray-400 underline hover:text-gray-300"
					>
						GitHub
					</a>
				{/if}
			</div>
		</div>
		<p class="mt-2 text-sm text-gray-400">{description}</p>
	</div>
</div>
