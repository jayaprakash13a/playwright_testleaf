import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  usernameLocator = '#username';
  passwordLocator = '#password';
  loginButton = 'input[type="submit"]';

  constructor(page: Page) {
    super('LoginPage', page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameLocator, username);
    await this.fill(this.passwordLocator, password);
    await this.click(this.loginButton);
    console.log(`Login attempted using username: ${username}`);
  }
}
