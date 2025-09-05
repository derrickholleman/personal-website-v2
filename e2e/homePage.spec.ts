import { expect, test } from '@playwright/test';

test('home page has expected text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Derrick Holleman.')).toBeVisible();
	await expect(page.getByText('Frontend Software Engineer')).toBeVisible();
});
