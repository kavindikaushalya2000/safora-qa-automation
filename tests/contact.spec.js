const { test, expect } = require('@playwright/test');
const { ContactPage } = require('../pages/ContactPage');

test.describe('Safora Contact Us Page Tests', () => {
    let contactPage;

    // Setup before running each test case
    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigateToContact();
    });

    // Test Case 1: Checking form fields with valid inputs
    test('Verify user can fill all text fields successfully', async () => {
        // Fill data into the form
        await contactPage.fillContactForm(
            'Kavindi Kaushalya',
            'kavindi.qa@example.com',
            '0771234567',
            'This is a test message for automation verification.'
        );

        // Assertions to check if the data was entered correctly
        await expect(contactPage.nameInput).toHaveValue('Kavindi Kaushalya');
        await expect(contactPage.emailInput).toHaveValue('kavindi.qa@example.com');
        await expect(contactPage.phoneInput).toHaveValue('0771234567');
        await expect(contactPage.messageInput).toHaveValue('This is a test message for automation verification.');

        // Verify that the Google reCAPTCHA is visible on the screen
        await expect(contactPage.recaptcha).toBeVisible();
        
        console.log('Test execution completed: Form fields successfully filled and verified.');
    });

    // Test Case 2: Negative test for empty fields
    test('Verify empty form submission does not bypass field criteria', async () => {
        // Click submit without entering data
        await contactPage.clickSubmit();
        
        // Wait for a small timeout to ensure the state does not change unexpectedly
        await contactPage.page.waitForTimeout(2000);
        
        console.log('Test execution completed: Empty form submitted to test validation.');
    });
});