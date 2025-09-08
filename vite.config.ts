import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				plugins: [tailwindcss(), sveltekit()],
				test: {
					name: 'client',
					environment: 'browser',
					globals: true,
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }],
						isolate: true,
						headless: true, // set to false to show testing UI in browser
						screenshotFailures: false
					},
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**', 'src/**/*.server.*']
				}
			}
		]
	}
});
