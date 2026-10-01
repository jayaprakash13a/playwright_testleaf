import {test} from "@playwright/test";

test('LeafGround basic', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");

    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.comm");
    await page.locator("//input[@id='Login']").click();
    //await page.locator("//input[@id='password']").fill("TestLeaf@2025");
    await page.locator("//input[contains(@class,'password')]").fill("TestLeaf@2025");

    await page.pause();
    await page.locator("//input[@id='Login']").click();
    
    await page.pause();
});