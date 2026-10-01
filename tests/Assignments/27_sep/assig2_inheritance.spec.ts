import { expect, test } from '@playwright/test';
import { LoginPage } from './assig2_inhertiance/loginPage';
import { DashboardPage } from './assig2_inhertiance/dashboardPage';

test('inheritance-based page object model for login and dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.openUrl('http://leaftaps.com/opentaps/control/main');
  await loginPage.login('Demosalesmanager', 'crmsfa');

  await expect(page.locator('a:has-text("CRM/SFA")')).toBeVisible();

  await dashboardPage.openCrmSfa();
  await dashboardPage.openLeads();
  await dashboardPage.openCreateLead();

  const title = await dashboardPage.getTitle();
  console.log(`Page title after navigation: ${title}`);
  expect(title).toContain('Create Lead');
});
