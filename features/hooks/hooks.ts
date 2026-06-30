import {
  Before,
  After,
  AfterStep,
  setDefaultTimeout
} from "@cucumber/cucumber";
setDefaultTimeout(60000); // 60 seconds
import {
  chromium,
  Browser,
  BrowserContext,
  Page
} from "@playwright/test";

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

let stepCounter = 0;

Before(async function () {

  stepCounter = 0;

  browser = await chromium.launch({
    headless: false
  });

  context = await browser.newContext();

  page = await context.newPage();

  await page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
});

AfterStep(async function ({ pickle, pickleStep }) {

  stepCounter++;

  const scenarioName = pickle.name.replace(/[<>:"/\\|?*]/g, "_");
  const stepName = pickleStep.text.replace(/[<>:"/\\|?*]/g, "_");

  await page.screenshot({
    path: `screenshots/${scenarioName}/${stepCounter}-${stepName}.png`,
    fullPage: true
  });

});

After(async function () {
  await context.close();
  await browser.close();
});