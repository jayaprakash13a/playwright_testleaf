export class BaseActions {
  pageName: string;

  constructor(pageName: string) {
    this.pageName = pageName;
  }

  click(locator: string): void {
    console.log(`BaseActions: Clicking on element -> ${locator}`);
  }

  fill(locator: string, value: string): void {
    console.log(`BaseActions: Entering '${value}' into ${locator}`);
  }

  validateText(locator: string, expectedText: string): void {
    console.log(`BaseActions: Validating ${locator} contains '${expectedText}'`);
  }
}
