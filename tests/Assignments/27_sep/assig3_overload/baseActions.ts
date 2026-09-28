export class BaseActions {
  pageName: string;

  constructor(pageName: string) {
    this.pageName = pageName;
  }

  openUrl(url: string): void {
    console.log(`BaseActions: Opening ${this.pageName} with URL -> ${url}`);
  }

  getTitle(): string {
    return `${this.pageName} title`;
  }

  click(locator: string): void;
  click(locator: string, description: string): void;
  click(locator: string, description?: string): void {
    if (description) {
      console.log(`BaseActions: Clicking on ${description} using locator -> ${locator}`);
    } else {
      console.log(`BaseActions: Clicking element with locator -> ${locator}`);
    }
  }

  fill(locator: string, value: string): void;
  fill(locator: string, value: string, description: string): void;
  fill(locator: string, value: string, description?: string): void {
    if (description) {
      console.log(`BaseActions: Entering ${description} as "${value}" in locator -> ${locator}`);
    } else {
      console.log(`BaseActions: Filling locator -> ${locator} with value -> ${value}`);
    }
  }
}
