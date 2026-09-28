import { expect, test } from '@playwright/test';
import { LoginPage } from './assig_1_abstraction/loginPage';
import { DashboardPage } from './assig_1_abstraction/dashboardPage';

test('LoginPage and DashboardPage flow using interface and abstract class', async ({ page }) => {
  const loginPage = new LoginPage(page, 'LoginPage');
  const dashboardPage = new DashboardPage(page, 'DashboardPage');

  await loginPage.openUrl('http://leaftaps.com/opentaps/control/main');
  await loginPage.login('Demosalesmanager', 'crmsfa');

  await expect(page.locator('a:has-text("CRM/SFA")')).toBeVisible();

  await dashboardPage.openCrmSfa();
  await dashboardPage.openLeads();
  await dashboardPage.openCreateLead();

  const title = await dashboardPage.getTitle();
  expect(title).toContain('Create Lead');
});
