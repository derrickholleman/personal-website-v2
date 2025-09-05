import { expect, test } from '@playwright/test';

test.describe('Projects', async () => {
	test('projects page renders Projects title', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
	});

	test('back button navigates to home page', async ({ page }) => {
		await page.goto('/projects');
		await page.getByRole('link', { name: '← Back' }).click();

		await expect(page.locator('main').getByText('Derrick Holleman.')).toBeVisible();
	});
});
