import { Page, expect } from "@playwright/test";

export class AccountOverviewPage {
  constructor(private page: Page) {}

  // Locators
  private accountBalance ="//table[@id='accountTable']/tbody/tr[1]/td[3]";
  private successfulMessageText="text=Your account was created successfully. You are now logged in."

async verifyAccountOverviewPage(){
     await expect(this.page.locator("#showOverview > h1")).toHaveText("Accounts Overview");

}
async getAccountBalance(){
     return await this.page.locator(this.accountBalance).textContent();
}
async getAccountSuccessfullMessage(){
     return await this.page.locator(this.successfulMessageText).textContent();
}
}