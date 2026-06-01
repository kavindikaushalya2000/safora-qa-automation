// Page Object Model for Safora Contact Us Page
class ContactPage {
    constructor(page) {
        this.page = page;
        
        // Define locators using basic css selectors and placeholders
        this.nameInput = page.locator('input[placeholder="Your Name"]');
        this.emailInput = page.locator('input[placeholder="Email Address"]');
        this.phoneInput = page.locator('input[placeholder="Phone Number"]');
        this.messageInput = page.locator('textarea[placeholder="Your Message"]');
        
        // Submit button locator
        this.submitButton = page.locator('button:has-text("Send Message")');
        
        // Captcha block locator to check if it is displayed
        this.recaptcha = page.locator('iframe[title*="reCAPTCHA"]');
    }

    // Method to navigate to the contact page
    async navigateToContact() {
        await this.page.goto('https://safora.se/en/contact.html', { waitUntil: 'networkidle' });
    }

    // Method to fill the contact form fields
    async fillContactForm(name, email, phone, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageInput.fill(message);
    }

    // Method to click the submit button
    async clickSubmit() {
        await this.submitButton.click();
    }
}

module.exports = { ContactPage };