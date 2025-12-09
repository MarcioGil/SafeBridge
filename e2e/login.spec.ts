import { test, expect } from '@playwright/test';

// Teste E2E: Login

test('Usuário pode fazer login', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.fill('input[name="email"]', 'usuario@teste.com');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('text=Dashboard')).toBeVisible();
});
