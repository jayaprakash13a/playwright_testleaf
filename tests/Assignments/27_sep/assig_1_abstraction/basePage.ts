import { Page } from '@playwright/test';
import { IPageActions } from './IPageActions';

export abstract class BasePage implements IPageActions {
  constructor( protected page: Page, protected pageName: string) {}

  async openUrl(url: string): Promise<void> {
    await this.page.goto(url);
    console.log(`Opened ${this.pageName} URL: ${url}`);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async validatePage(): Promise<boolean> {
    const title = await this.getTitle();
    return title.length > 0;
  }

  protected async fill(locator: string, value: string): Promise<void> {
    await this.page.locator(locator).fill(value);
  }

  protected async click(locator: string): Promise<void> {
    await this.page.locator(locator).click();
  }
}
