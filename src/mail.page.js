import { expect } from '@playwright/test';
import { locators } from './locators';
import { BasePage } from './base.page';

export class MailPage extends BasePage {
  /**
   * Функция для наведения курсора на элемент страницы и проверки всплывающей подсказки(поповер)
   * @param locator - локатор(селектор) на который нужно навести курсор
   * @param textPopover - текст всплывающей подсказки
   */
  async openPopover(locator, textPopover) {
    await this.page.locator(locator).hover();
    await expect(this.page.locator(locator), {
      hasText: textPopover,
    }).toBeVisible();
  }

  /**
   * Открытие контекстного меню футера страницы
   */
  async openFooterMenu() {
    await this.page.click(locators.footerMoreBtn);
  }

  /**
   * Открытие страницы технической поддержки
   */
  async openHelpPage() {
    await this.page.click(locators.footerHelpBtn);
  }

  /**
   * Открытие формы регистрации
   */
  async openRegistrationPage() {
    await this.page.getByRole('link', { name: 'Регистрация' }).click();
  }

  /**
   * Открытие страницs описания информации о компании
   */
  async InfoCompany() {
    await this.page.click(locators.infoBtn);
  }

  /**
   * Функция поиска
   */
  async SearchInfo() {
    // await this.page.getByRole('link', { name: 'Поиск' }).click();
    await this.page.click(locators.searchBtn)
    await this.page.getByPlaceholder('Поиск').fill('racoon');
    await this.page.getByPlaceholder('Поиск').press('Enter');
  }

  /**
   * Открытие страницы политики приватности
   */
  async OpenPrivacyPage() {
    await this.page.click(locators.privacyBtn);
  }
}
