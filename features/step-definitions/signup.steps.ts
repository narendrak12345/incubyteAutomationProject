import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../hooks/hooks";
import { RegisterPage } from "../../pages/RegisterPage"
import { LoginPage } from "../../pages/LoginPage";
import { AccountOverviewPage } from "../../pages/AccountOverviewPage";
import { expect } from "@playwright/test";
import { User } from "../../models/user";
import { TestData } from "../../pages/utils/TestData";



let registerPage: RegisterPage;
let loginPage: LoginPage;
let accountOverview:AccountOverviewPage
let user: User;




Given("I launch the Parabank application", async function () {
    registerPage = new RegisterPage(page);
        user = TestData.getUser();
        loginPage = new LoginPage(page);
        accountOverview=new AccountOverviewPage(page);
});

When("I click on Register link", async function () {
    await registerPage.clickRegister();
});

When("I register a new user", async function () {
        await registerPage.registerUser(user);
});

Then("I should see the Accounts Overview page", async function () {
    await accountOverview.verifyAccountOverviewPage()
});
Then("I should see succesful registered message", async function () {
    let actualSuccesfulMessage=await accountOverview.getAccountSuccessfullMessage();
    expect(actualSuccesfulMessage).toEqual('Your account was created successfully. You are now logged in.')
});
Then("I logout from the application",async function(){
    await loginPage.logout();

});
When("I login with the registered credentials", async function () {
    await loginPage.login(user.username, user.password);
});

Then("I should see the account balance", async function () {
    let balance=await accountOverview.getAccountBalance();
    console.log('balance amount is ' +balance);
});