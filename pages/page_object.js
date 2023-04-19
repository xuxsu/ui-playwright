const { I } = inject();

module.exports = {
  // fields:{
  //   freePlanBtn

  // },
element(locator) {
    I.click(locator);
  },

  text(text) {
    I.see(text);
  },
}