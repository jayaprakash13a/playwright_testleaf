import {test, expect} from "@playwright/test";

test('LeafGround basic', async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");

    await page.getByRole('textbox', {name: 'Babu Manickam'}).fill('Jayaprakash A');
    await expect(page.getByRole('textbox', {name: 'Babu Manickam'})).toBeEditable();
    //await page.getByPlaceholder('Babu Manickam').fill('Jayaprakash A');
    //const disObj = await page.locator(".j_idt88:j_idt93");
    const disabledObj = page.getByRole('textbox', {name: 'Disabled'});
    //expect(disObj).toBeDisabled();
    await expect(disabledObj).toBeDisabled();

    await page.pause();
});