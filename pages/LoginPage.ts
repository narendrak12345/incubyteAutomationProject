import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  // Locators
  private username = 'input[name="username"]';
  private password = 'input[name="password"]';
  private loginButton = 'input[value="Log In"]';
  private logoutLink = 'text=Log Out';

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }

  async logout() {
    await this.page.click(this.logoutLink);
  }
}