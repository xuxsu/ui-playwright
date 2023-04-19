/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './src/*.spec.js',
  timeout: 300,
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: false,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
    open: './pages/page_object.js',
    see: './pages/page_object.js',
  name: 'project',
  }
};