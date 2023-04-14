/**
 * Базовый класс домашней страницы mail.ru
 */
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Функция открытия домашней страницы mail.ru
   */
  async pageOpen() {
    await this.page.goto('https://mail.ru');
  }

  async pageClose() {
    await this.page.close();
  }
}
