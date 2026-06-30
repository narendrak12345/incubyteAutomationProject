import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 10000,
  },

  use: {
    headless: false,
    viewport: {
      width: 1366,
      height: 768,
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    baseURL: 'https://parabank.parasoft.com/parabank/',
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});