import { ButtonActions } from './buttonActions';
import { InputActions } from './inputActions';

const button = new ButtonActions('Login Page');
const input = new InputActions('Login Page');

button.click('#submit');
input.fill('#username', 'Admin');

button.click('#submit');
input.fill('#password', 'Admin123');
