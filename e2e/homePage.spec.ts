import { expect, test } from '@playwright/test';

test.describe('Home Page', async () => {
	test('home page has expected text', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('main').getByText('Derrick Holleman.')).toBeVisible();
		await expect(page.getByText('Software Engineer')).toBeVisible();
	});

	test('footer displays expected text', async ({ page }) => {
		await page.goto('/');

		const currentYear = new Date().getFullYear();
		const copyrightText = `© ${currentYear} Derrick Holleman. All Rights Reserved.`;

		await expect(page.getByText(copyrightText)).toBeVisible();
	});
});
