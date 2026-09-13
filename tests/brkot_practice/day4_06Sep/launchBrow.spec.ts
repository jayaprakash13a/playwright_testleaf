import {test, chromium} from '@playwright/test';

test('Launch browser', async () => {

    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://leaftaps.com/opentaps/control/login');
    page.pause();
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});