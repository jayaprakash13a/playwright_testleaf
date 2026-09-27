export class BaseActions {

    pageName: string = "Logged in Page";

    //browser action
    openUrl(url: string){
        console.log(`Navigating to URL: ${url}`);
    }

    getText(locator: string) {
        console.log(`Getting text from: ${locator}`);
        return "Welcome Admin";
    }
}