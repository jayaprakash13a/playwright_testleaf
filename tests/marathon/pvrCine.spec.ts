import { expect, test } from '@playwright/test';

test('complete a PVR Chennai seat booking flow', async ({ page }) => {
	test.setTimeout(90_000);

	await page.goto('https://www.pvrcinemas.com/');
	await expect(page).toHaveTitle('PVR Cinemas');

	const dropdowns = page.locator('.p-dropdown');
	const chooseFirstAvailableOption = async () => {
		const optionLoc = page.locator('.p-dropdown-item')
		await optionLoc.nth(2).click();
		// const option = page.locator('.p-dropdown-panel:visible .p-dropdown-item:not(.p-disabled)').first();
		// await expect(option).toBeVisible();
		// await option.click();
	};

	await dropdowns.first().click();
	await page.getByText('Chennai', { exact: true }).first().click();

	await page.locator('#movie').click();
	// await dropdowns.nth(1).click();
	await chooseFirstAvailableOption();
	await chooseFirstAvailableOption();
	await chooseFirstAvailableOption();
	await chooseFirstAvailableOption();
	await page.getByRole('button', { name: 'Submit' }).click();

	const availableSeats = page.locator('.seat-current-pvr');
	const acceptTerms = page.getByText('Accept', { exact: true });
	const termsVisible = await acceptTerms
		.waitFor({ state: 'visible', timeout: 5_000 })
		.then(() => true)
		.catch(() => false);
	if (termsVisible) {
		await acceptTerms.click();
	}

	await expect(availableSeats.first()).toBeVisible();
	const seatId = await availableSeats.first().getAttribute('id');
	const seatLabel = seatId?.split('|').at(-1)?.replace(':', '');
	expect(seatLabel).toBeTruthy();
	await availableSeats.first().click();

	const bookingSummary = page.locator('.book-summary');
	await expect(bookingSummary).toContainText('Seat Info');
	await expect(bookingSummary).toContainText(seatLabel!);
	console.log('Seat Label:', seatLabel);

	const totalTicketPrice = page
		.locator('.ticket-value-ticket')
		.filter({ has: page.getByRole('heading', { name: 'Total Ticket Price' }) })
		.locator('.ticket-price p');
	await expect(totalTicketPrice).toHaveText(/[\d,]+\.\d{2}/);
	console.log('Total Ticket Price:', await totalTicketPrice.innerText());
	const amount = Number((await totalTicketPrice.innerText()).replace(/[^\d.]/g, ''));
	expect(amount).toBeGreaterThan(0);
	console.log('Total Ticket Price (number):', amount);
	
	await expect(page).toHaveTitle('PVR Cinemas');
});
