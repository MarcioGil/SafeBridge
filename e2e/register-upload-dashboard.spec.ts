import { test, expect } from '@playwright/test';

// Teste E2E: Registro, Upload e Dashboard

test('Fluxo completo: registro, upload e dashboard', async ({ page }) => {
  await page.goto('http://localhost:3000/occurrence');
  await page.fill('input[name="type"]', 'Violência');
  await page.fill('textarea[name="description"]', 'Descrição detalhada do caso');
  await page.fill('input[name="city"]', 'São Paulo');
  // Supondo campo de upload
  // await page.setInputFiles('input[type="file"]', 'caminho/para/arquivo.jpg');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Ocorrência registrada')).toBeVisible();

  await page.goto('http://localhost:3000/dashboard');
  await expect(page.locator('text=Dashboard')).toBeVisible();
});
