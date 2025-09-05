<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>derrickholleman.dev - Home</title>
</svelte:head>

<main
	class="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center text-center text-2xl text-white"
>
	<img src="/logo.png" alt="Derrick Holleman Logo" class="h-[200px] w-auto" />
	<h1>Derrick Holleman.</h1>
	<p>Frontend Software Engineer</p>
	<div class="mt-6 flex gap-4">
		<a
			href="/resume.pdf"
			target="_blank"
			class="rounded-full border-2 border-rose-300 px-6 py-3 text-rose-300 transition-colors duration-100 hover:border-rose-200 hover:text-rose-200"
			>View Resume</a
		>
		<a
			href="/projects"
			class="rounded-full border-2 border-blue-300 px-6 py-3 text-blue-300 transition-colors duration-100 hover:border-blue-200 hover:text-blue-200"
			>View Projects</a
		>
	</div>
</main>

<Footer />
