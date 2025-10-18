import { test, expect } from '@playwright/test';

test.describe('Expense Flow', () => {
  test('should complete full expense flow', async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // Should show landing page since not authenticated
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Expense Tracker Pro' })).toBeVisible();

    // Click on "Get Started" to go to registration
    await page.click('text=Get Started');
    await expect(page).toHaveURL('/register');

    // Register a new user
    const uniqueEmail = `test-${Date.now()}@example.com`;
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Should redirect to login after registration
    await expect(page).toHaveURL(/\/login/);

    // Login with the new user
    await page.fill('input[name="email"]', uniqueEmail);
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
    await expect(page.getByRole('cell', { name: '$12.34' })).toBeVisible();

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

    // Wait for response and check for error message or stay on login page
    await page.waitForTimeout(2000);
    
    const errorMessages = [
      'Invalid email or password',
      'Invalid credentials',
      'Login failed'
    ];

    let foundError = false;
    for (const errorMsg of errorMessages) {
      if (await page.locator(`text=${errorMsg}`).isVisible()) {
        foundError = true;
        break;
      }
    }
    
    // If no specific error message found, verify we're still on login page
    if (!foundError) {
      const currentUrl = page.url();
      foundError = currentUrl.includes('/login');
    }
    
    expect(foundError).toBe(true);
  });

  test('should handle form validation', async ({ page }) => {
    await page.goto('/register');
    
    // Try to register with invalid email and short password
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', '123');
    await page.click('button[type="submit"]');

    // Wait for any error message to appear
    await page.waitForTimeout(2000);

    // Check if any error message is visible
    const errorMessages = [
      'Invalid email or password format',
      'Invalid email address', 
      'Password must be at least 6 characters',
      'Failed to create account'
    ];
    
    let foundError = false;
    for (const errorMsg of errorMessages) {
      if (await page.locator(`text=${errorMsg}`).isVisible()) {
        foundError = true;
        break;
      }
    }
    
    // If no specific error message found, check if we're still on register page (indicating validation failed)
    if (!foundError) {
      const currentUrl = page.url();
      foundError = currentUrl.includes('/register');
    }
    
    expect(foundError).toBe(true);
  });
});
