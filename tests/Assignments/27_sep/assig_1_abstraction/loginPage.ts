import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private username = '#username';
  private password = '#password';
  private loginButton = 'input[type="submit"]';

  constructor(page: Page, pageName: string) {
    super(page, pageName);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginButton);
    console.log(`Logged in with username: ${username}`);
  }

  async validatePage(): Promise<boolean> {
    return await this.page.locator('a:has-text("CRM/SFA")').isVisible();
  }
}
