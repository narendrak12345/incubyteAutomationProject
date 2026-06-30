import { faker } from "@faker-js/faker";
import { Page, expect } from "@playwright/test";
import { User } from "../models/user";

export class RegisterPage {

    constructor(private page: Page) {}

    // Locators
    private registerLink = 'a[href*="register"]';

    private firstName = 'input[id="customer.firstName"]';
    private lastName = 'input[id="customer.lastName"]';
    private address = 'input[id="customer.address.street"]';
    private city = 'input[id="customer.address.city"]';
    private state = 'input[id="customer.address.state"]';
    private zipCode = 'input[id="customer.address.zipCode"]';
    private phone = 'input[id="customer.phoneNumber"]';
    private ssn = 'input[id="customer.ssn"]';

    private username = 'input[id="customer.username"]';
    private password = 'input[id="customer.password"]';
    private confirmPassword = 'input[id="repeatedPassword"]';

    private registerButton = 'input[value="Register"]';

    async clickRegister() {
        await this.page.click(this.registerLink);
    }
async registerUser(user: User) {

    await this.page.fill(this.firstName, user.firstName);
    await this.page.fill(this.lastName, user.lastName);
    await this.page.fill(this.address, user.address);
    await this.page.fill(this.city, user.city);
    await this.page.fill(this.state, user.state);
    await this.page.fill(this.zipCode, user.zipCode);
    await this.page.fill(this.phone, user.phone);
    await this.page.fill(this.ssn, user.ssn);

    await this.page.fill(this.username,user.username);
    await this.page.fill(this.password, user.password);
    await this.page.fill(this.confirmPassword, user.password);

    await this.page.click(this.registerButton);

    return user;
}
}