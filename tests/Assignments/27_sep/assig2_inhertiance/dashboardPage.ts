import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  welcomeMessageLocator = 'div#welcome';
  crmSfaLink = 'a:has-text("CRM/SFA")';
  leadsLink = 'a:has-text("Leads")';
  createLeadLink = 'a:has-text("Create Lead")';

  constructor(page: Page) {
    super('DashboardPage', page);
  }

  async verifyWelcomeMessage(): Promise<boolean> {
    return await this.page.locator(this.welcomeMessageLocator).isVisible();
  }

  async openCrmSfa(): Promise<void> {
    await this.click(this.crmSfaLink);
  }

  async openLeads(): Promise<void> {
    await this.click(this.leadsLink);
  }

  async openCreateLead(): Promise<void> {
    await this.click(this.createLeadLink);
  }
}
