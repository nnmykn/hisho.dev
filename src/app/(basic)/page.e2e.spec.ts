import { test } from '@playwright/test'

test.describe('トップページテスト', () => {
  test('headerがレンダリングされている', async ({ page }) => {
    await page.goto('/')
  })
})
