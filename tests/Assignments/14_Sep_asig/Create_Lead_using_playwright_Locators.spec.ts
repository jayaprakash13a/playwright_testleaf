import { test, expect } from '@playwright/test';


test('should login and create a lead using locators', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.locator('#username').fill('Demosalesmanager');
  await page.locator('#password').fill('crmsfa');
  await page.locator('input[type="submit"]').click();

  await page.locator('a:has-text("CRM/SFA")').click();
  await page.locator('a:has-text("Leads")').click();
  await page.locator('a:has-text("Create Lead")').click();

  await page.locator('#createLeadForm_companyName').fill('TestLeaf');
  await page.locator('#createLeadForm_firstName').fill('John');
  await page.locator('#createLeadForm_lastName').fill('Smith');
  await page.locator('#createLeadForm_personalTitle').fill('Mr.');
  await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');
  await page.locator('#createLeadForm_annualRevenue').fill('1000000');
  await page.locator('#createLeadForm_departmentName').fill('Engineering');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

  await page.locator('input[value="Create Lead"]').click();

  //await expect(page.locator('div[id="sectionHeaderTitle\_lead"]')).toContainText('View Lead');
});

