import { BaseActions } from './baseActions';

export class InputActions extends BaseActions {
  constructor(pageName: string) {
    super(pageName);
  }

  override fill(locator: string, value: string): void {
    console.log(`InputActions: Entering text '${value}' in field -> ${locator}`);
    super.fill(locator, value);
  }
}
