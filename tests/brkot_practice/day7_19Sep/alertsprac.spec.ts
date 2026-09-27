import { test, expect } from '@playwright/test';


test('Alert check', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    
    page.on('dialog', async dlg => {
        
        if (dlg.type() === 'prompt') {
            await dlg.accept('Playwright');
        }else if (dlg.type() === 'confirm') {
            await dlg.dismiss();
        }else {
            await dlg.accept();
        }
       console.log(dlg.message());
    });

    await page.locator('[id="alertButton"]').click();

    await page.locator('[id="timerAlertButton"]').click();

    await page.locator('[id="confirmButton"]').click();

    await page.locator('[id="promtButton"]').click();

    await page.waitForTimeout(10000);



});

