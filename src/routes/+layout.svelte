<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<title>Derrick Holleman - Frontend Software Engineer</title>
	<meta
		name="description"
		content="Frontend Software Engineer specializing in building high quality apps, in fast, collaborative environments."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
