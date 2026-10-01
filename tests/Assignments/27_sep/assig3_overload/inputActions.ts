import { BaseActions } from './baseActions';

export class InputActions extends BaseActions {
  constructor(pageName: string) {
    super(pageName);
  }

  override fill(locator: string, value: string): void;
  override fill(locator: string, value: string, description: string): void;
  override fill(locator: string, value: string, description?: string): void {
    if (description) {
      console.log(`InputActions: Entering ${description} -> ${value} in ${locator}`);
    } else {
      console.log(`InputActions: Typing "${value}" into locator -> ${locator}`);
    }

    super.fill(locator, value, description ?? 'input field');
  }
}
