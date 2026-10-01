import { BaseActions } from './baseActions';

export class ButtonActions extends BaseActions {
  constructor(pageName: string) {
    super(pageName);
  }

  override click(locator: string): void;
  override click(locator: string, description: string): void;
  override click(locator: string, description?: string): void {
    if (description) {
      console.log(`ButtonActions: Clicking on ${description} -> ${locator}`);
    } else {
      console.log(`ButtonActions: Clicking submit button -> ${locator}`);
    }

    super.click(locator, description ?? 'button');
  }
}
