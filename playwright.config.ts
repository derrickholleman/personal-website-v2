import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'e2e',
	testMatch: ['e2e/**/*.spec.{ts,js}', 'e2e/**/*.test.{ts,js}']
});
