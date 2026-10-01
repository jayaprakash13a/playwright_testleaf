import { expect, test } from '@playwright/test';

test('search running shoes, filter for men UK 10.5, and add to cart', async ({ page }) => {
	await page.goto('https://www.decathlon.in/');

	await expect(page).toHaveURL('https://www.decathlon.in/');
	await expect(page.getByRole('link', { name: 'Decathlon Home' })).toBeVisible();

	const searchBox = page.getByRole('searchbox');
	await expect(searchBox).toBeEnabled();
	await searchBox.click();
	await searchBox.fill('Shoes');
	await searchBox.press('Enter');

	await expect(page).toHaveTitle(/Search \| Shoes/);
	await expect(page.getByText(/Showing \d+ results for Shoes/)).toBeVisible();

	await page.getByRole('button', { name: 'Sport', exact: true }).click();
	await page.getByRole('checkbox', { name: /^Running(?:\s|$)/ }).check();

	await page.getByRole('button', { name: 'Gender', exact: true }).click();
	await page.getByRole('checkbox', { name: /^Men(?:\s|$)/ }).check();

	await page.getByRole('button', { name: 'Size', exact: true }).click();
	const uk10_5Filter = page.getByRole('checkbox', { name: /^10\.5(?:\s|$)/ });
	await expect(uk10_5Filter, 'UK 10.5 must be available in the filtered results').toBeVisible();
	await uk10_5Filter.check();

	const firstProduct = page.locator('a[href^="/p/"]').first();
	await expect(firstProduct).toBeVisible();
	const productName = await firstProduct.locator('img').first().getAttribute('alt');
	expect(productName).toBeTruthy();
	await firstProduct.click();

	await expect(page.getByRole('complementary', { name: 'Product details and purchase options' })).toBeVisible();
	await page.getByRole('button', { name: 'Select size 10.5', exact: true }).click();
	await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
	await page.locator('.dy-lb-close').first().click();

	await page.getByRole('link', { name: /^Cart/ }).click();
	await expect(page).toHaveURL(/\/checkout\/cart/);
	await expect(page.getByText(productName!, { exact: false })).toBeVisible();
});
