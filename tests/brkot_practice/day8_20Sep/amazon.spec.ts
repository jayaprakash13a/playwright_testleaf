import { test, expect } from '@playwright/test';


test('Alert check', async ({ page, context }) => {
    await page.goto('https://www.amazon.in/');

    const searchBox = page.locator('[id="twotabsearchtextbox"]');
    await searchBox.fill('Furnitures');

    const searchButton = page.locator('[id="nav-search-submit-text"]');
    await searchButton.click();

    const newPagecontext = context.waitForEvent('page');

    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']/h2").first().click();

    const newPage = await newPagecontext;
    await newPage.waitForLoadState();

    await newPage.locator('[id="wishListMainButton"]').click();
    await page.waitForTimeout(5_000);

    page.bringToFront();
    await searchBox.fill('Mobile');
    await searchButton.click();
    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']/h2").first().click();
    await page.waitForTimeout(10_000);
});