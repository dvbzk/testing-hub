import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', {
      open: 'on-failure',       
      outputFolder: 'playwright-report',  
      host: '0.0.0.0',     
    }],
    ['json', {
      outputFile: 'test-results/results.json'  
    }]
  ],
  use: {
    trace: 'on',    
    screenshot: 'on',
    video: 'retain-on-failure'    
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});
