// const playwright = require('playwright');
const playwright = require('@playwright/test');
const chai = require('chai');
const expect = chai.expect;

let page, browser, context;

const locators = {
   registrationBtn:`[data-click-counter="75068995"]`,
   searchBtn:`.search-container`,
}

describe('mail home page', () => {
  beforeEach(async function () {
    browser = await playwright.chromium.launch({
      headless: true,
    });

    context = await browser.newContext();
    page = await context.newPage('https://mail.ru/');
    await page.goto('https://mail.ru');
  });

  afterEach(async function () {
    // await page.screenshot({ path: `schreenshots/${this.currentTest.title.replace(/\s+/g, '_')}.png` })
    await browser.close();
  });

  it('registration', async () => {
    expect(
      await page.locator(locators.registrationBtn).textContent()
    ).to.equal('Регистрация');
  });
});
