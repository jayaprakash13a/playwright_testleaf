import { BaseActions } from "./baseAction";

export class LoginActions extends BaseActions {

    // Login
    username: string = "#username";
    password: string = "#password";
    loginButton: string = "#login";

    // Login method
    login(username: string, password: string): void {
        console.log(`Entering username: ${username}`);
        console.log(`Entering password: ${password}`);
        console.log(`Clicking on: ${this.loginButton}`);
    }
}

let url = "https://example.com/login";
let username = "admin";
let password = "pass123";

let login = new LoginActions();

login.openUrl(url);
login.login(username, password);
console.log(`Page Name: ${login.pageName}`);