<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
</script>

<svelte:head>
	<title>derrickholleman.dev - Projects</title>
</svelte:head>

<main class="mx-auto flex min-h-screen max-w-360 flex-col text-white">
	<div class="mt-8 flex justify-start">
		<a
			href="/"
			class="ml-4 rounded-full border-2 border-gray-400 px-4 py-2 text-gray-400 transition-colors duration-100 hover:border-gray-300 hover:text-gray-300"
			>← Back</a
		>
	</div>
	<h1 class="mt-4 text-center text-4xl font-bold">Projects</h1>
	<div class="mt-8 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
		<ProjectCard
			name="TapTrack"
			description="A student behavior tracking app for teachers. Record behaviors with timestamps and visualize patterns with charts."
			screenshot="/tap-track-screenshot.png"
			frameworkIcon="/react-icon.svg"
			frameworkName="React"
			demoUrl="https://tap-track.netlify.app"
			githubLink="https://github.com/derrickholleman/tap-track"
		/>
		<ProjectCard
			name="TaskPilot"
			description="A todo app built with Angular, my first project using the framework. Create, update, and delete tasks with data persisted in local storage."
			screenshot="/task-pilot-home-screen.png"
			frameworkIcon="/angular-icon.svg"
			frameworkName="Angular"
			demoUrl="https://taskpilott.netlify.app/"
			githubLink="https://github.com/derrickholleman/task-pilot"
		/>
	</div>
</main>

<Footer />
