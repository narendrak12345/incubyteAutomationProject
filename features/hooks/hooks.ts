import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000); // 60 seconds

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

Before(async function () {
    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();
    page = await context.newPage();

    await page.goto(
        "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );
});

After(async function () {
    await browser.close();
});