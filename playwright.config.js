const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    trace: 'on', 
    headless: false 
  },
});
