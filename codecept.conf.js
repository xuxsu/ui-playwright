const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './src/*.spec.js',
  timeout: 300,
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com/',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    open: "./pages/page_object.js",
    see: './pages/page_object.js',
  },
  name: 'project'
}