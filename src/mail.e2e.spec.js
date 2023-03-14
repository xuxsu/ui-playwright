const { test, expect, browser } = require('@playwright/test');

const locators = {
  registrationBtn: `[data-click-counter="75068995"]`,
  searchBtn: `.search-container`,
};

//test.describe.configure({ mode: 'parallel' });
// test.describe.configure({
// describe('mail home page', () => {
  // beforeEach(async function () {
    
// await page.goto('https://mail.ru');
// });

// afterEach(async function () {
// await page.screenshot({ path: `schreenshots/${this.currentTest.title.replace(/\s+/g, '_')}.png` })
// await browser.close();
// });

test.only('registration', async ({ page }) => {
  await page.goto('https://mail.ru');
  await expect(page.locator(locators.registrationBtn)).toHaveText(
    'Регистрация'
  );
});
// });
