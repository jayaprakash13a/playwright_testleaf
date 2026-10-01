export interface IPageActions {
  openUrl(url: string): Promise<void>;
  getTitle(): Promise<string>;
  validatePage(): Promise<boolean>;
}
