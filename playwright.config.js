const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        trace: 'on',
      },
    },
  ],
});
