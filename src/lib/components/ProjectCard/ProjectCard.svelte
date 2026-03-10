<script>
	let { name, description, screenshot, frameworkIcon, frameworkName, demoUrl } = $props();
</script>

<a
	href={demoUrl}
	target="_blank"
	class="group block overflow-hidden rounded-lg border border-gray-700 bg-gray-900 transition-all duration-200 hover:border-gray-500"
>
	<img src={screenshot} alt="{name} screenshot" class="h-48 w-full object-cover" />
	<div class="p-4">
		<div class="flex items-center gap-2">
			<h2 class="text-lg font-bold text-white">{name}</h2>
			<img src={frameworkIcon} alt={frameworkName} class="h-5 w-5" />
		</div>
		<p class="mt-2 text-sm text-gray-400">{description}</p>
	</div>
</a>
