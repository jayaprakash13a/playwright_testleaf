import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  private crmSfaLink = 'a:has-text("CRM/SFA")';
  private leadsLink = 'a:has-text("Leads")';
  private createLeadLink = 'a:has-text("Create Lead")';

  constructor(page: Page, pageName: string) {
    super(page, pageName);
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

  async validatePage(): Promise<boolean> {
    return await this.page.locator('text=Create Lead').isVisible();
  }
}
