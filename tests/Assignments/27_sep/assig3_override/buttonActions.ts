import { BaseActions } from './baseActions';

export class ButtonActions extends BaseActions {
  constructor(pageName: string) {
    super(pageName);
  }

  override click(locator: string): void {
    console.log(`ButtonActions: Clicking on submit button -> ${locator}`);
    super.click(locator);
  }
}
