import { expect, test } from '@playwright/test'

test.describe('トップページテスト', () => {
  test('headerがレンダリングされている', async ({ page }) => {
    await page.goto('/')
    await expect(await page.getByText('page')).toBeVisible()
  })
})
