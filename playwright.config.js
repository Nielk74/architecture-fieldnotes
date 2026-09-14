import { defineConfig } from '@playwright/test';
const built=process.env.TEST_BUILT==='1';
const port=built?4173:5173;
export default defineConfig({testDir:'./tests',use:{baseURL:`http://127.0.0.1:${port}`,browserName:'chromium'},webServer:{command:built?'npm run preview -- --host 127.0.0.1 --port 4173':'npm run dev -- --port 5173',url:`http://127.0.0.1:${port}`,reuseExistingServer:!process.env.CI}});
