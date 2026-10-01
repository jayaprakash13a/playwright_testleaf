import { ButtonActions } from './buttonActions';
import { InputActions } from './inputActions';

const button = new ButtonActions('Login Page');
const input = new InputActions('Login Page');

button.click('#submit');
button.click('#submit', 'Submit Button');

input.fill('#username', 'Demosalesmanager');
input.fill('#password', 'crmsfa', 'Password');

console.log(`Page title: ${button.getTitle()}`);
