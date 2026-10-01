import { Page } from '@playwright/test';

export class BasePage {
  pageName: string;

  constructor(pageName: string, protected page: Page) {
    this.pageName = pageName;
  }

  async openUrl(url: string): Promise<void> {
    await this.page.goto(url);
    console.log(`Navigating to ${this.pageName}: ${url}`);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async fill(locator: string, value: string): Promise<void> {
    await this.page.locator(locator).fill(value);
  }

  async click(locator: string): Promise<void> {
    await this.page.locator(locator).click();
  }
}
