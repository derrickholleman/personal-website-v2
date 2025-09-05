<script>
	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>derrickholleman.dev - Home</title>
</svelte:head>

<main
	class="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center text-center text-2xl text-white"
>
	<img
		src="/src/lib/assets/logo_white_transparent.png"
		alt="Derrick Holleman Logo"
		class="h-[200px] w-auto"
	/>
	<h1>Derrick Holleman.</h1>
	<p>Frontend Software Engineer</p>
	<div class="mt-6 flex gap-4">
		<a
			href="/src/lib/assets/Derrick-Holleman-resume.pdf"
			target="_blank"
			class="rounded-full border border-rose-300 px-6 py-3 text-rose-300 transition-colors duration-100 hover:border-rose-200 hover:text-rose-200"
			>View Resume</a
		>
		<a
			href="/projects"
			class="rounded-full border border-blue-300 px-6 py-3 text-blue-300 transition-colors duration-100 hover:border-blue-200 hover:text-blue-200"
			>View Projects</a
		>
	</div>
</main>

<footer class="fixed right-0 bottom-4 left-0 text-center text-sm text-gray-300">
	© {currentYear} Derrick Holleman. All Rights Reserved.
</footer>
