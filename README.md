# Safora QA Automation

This project was developed as part of a QA Automation internship assignment. During this assignment, I gained hands-on experience with Playwright and implemented test automation using the Page Object Model (POM) design pattern.

This repository contains a UI automation testing suite for the Safora "Contact Us" form using Playwright with the Page Object Model (POM) architecture.

---

## Setup and Installation Instructions

Follow these simple steps to set up and run the automation scripts locally:

### 1. Prerequisites

Make sure you have Node.js installed on your machine.

### 2. Clone the Repository

Open your terminal and clone this project:

```bash
git clone https://github.com/kavindikaushalya2000/safora-qa-automation.git
cd safora-qa-automation
```

### 3. Install Dependencies

Install Playwright and required node modules by running:

```bash
npm install
```

### 4. Install Playwright Browsers

Download the required browser binaries like Chromium, Firefox, WebKit:

```bash
npx playwright install
```

---

## How to Run the Test Script

You can execute the automated test cases using the following commands:

### Run Tests in Headed Mode

(To see the browser action)

```bash
npx playwright test --headed
```

### Run Tests in Headless Mode

(UI hidden)

```bash
npx playwright test
```

### View Test Reports

After running the tests, you can open the detailed HTML test report using:

```bash
npx playwright show-report
```
