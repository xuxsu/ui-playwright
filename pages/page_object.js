const { I } = inject();

module.exports = {
  element(locator) {
    I.click(locator);
  },

  text(text) {
    I.see(text);
  },
}
