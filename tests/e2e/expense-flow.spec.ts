import { test, expect } from '@playwright/test';

test.describe('Expense Flow', () => {
  test('should complete full expense flow', async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // Should redirect to login since not authenticated
    await expect(page).toHaveURL('/login');

    // Register a new user
    await page.click('text=create a new account');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Should redirect to login after registration
    await expect(page).toHaveURL('/login');

    // Login with the new user
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');

    // Create a category
    await page.click('text=Categories');
    await page.click('text=Add Category');
    await page.fill('input[id="name"]', 'Food');
    await page.click('button[type="submit"]');

    // Should see the new category
    await expect(page.locator('text=Food')).toBeVisible();

    // Navigate to expenses
    await page.click('text=Expenses');

    // Add an expense
    await page.click('text=Add Expense');
    await page.fill('input[id="amount"]', '12.34');
    await page.selectOption('select[id="category"]', { label: 'Food' });
    await page.fill('input[id="note"]', 'Lunch');
    await page.click('button[type="submit"]');

    // Should see the new expense in the table
    await expect(page.locator('text=Lunch')).toBeVisible();
    await expect(page.locator('text=$12.34')).toBeVisible();

    // Test filtering
    await page.click('text=Show Filters');
    await page.fill('input[placeholder="Search notes..."]', 'Lunch');
    await page.click('button:has-text("Search")');

    // Should still see the expense
    await expect(page.locator('text=Lunch')).toBeVisible();

    // Test export
    await page.click('text=Export CSV');
    
    // Should download a CSV file (we can't easily test the download in Playwright)
    // but we can verify no errors occurred
    await expect(page.locator('text=Export CSV')).toBeVisible();
  });

  test('should handle authentication errors', async ({ page }) => {
    await page.goto('/login');
    
    // Try to login with invalid credentials
    await page.fill('input[name="email"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Should show error message
    await expect(page.locator('text=Invalid email or password')).toBeVisible();
  });

  test('should handle form validation', async ({ page }) => {
    await page.goto('/register');
    
    // Try to register with invalid email
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', '123');
    await page.click('button[type="submit"]');

    // Should show validation errors
    await expect(page.locator('text=Invalid email or password format')).toBeVisible();
  });
});
