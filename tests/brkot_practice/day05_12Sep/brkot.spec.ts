import {test} from "@playwright/test";

test('LeafGround basic', async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");

    await page.getByRole('textbox', {name: 'Babu Manickam'}).fill('Jayaprakash A');
    //await page.getByPlaceholder('Babu Manickam').fill('Jayaprakash A');
    
    await page.pause();
});