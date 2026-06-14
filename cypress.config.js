const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.hsbc.bank.in",
    chromeWebSecurity: false
  },

  viewportWidth: 1920,
  viewportHeight: 1080
});
