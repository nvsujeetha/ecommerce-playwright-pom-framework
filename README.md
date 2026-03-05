Ecommerce Playwright POM Framework
A scalable end-to-end UI automation framework built using Playwright Test and the Page Object Model (POM) design pattern for an ecommerce web application.
This project demonstrates clean test architecture, reusable page components, data-driven execution, and cross-browser validation — structured for real-world maintainability and CI/CD integration.

Key Highlights
✔ Page Object Model (POM) architecture
✔ Clear separation between test logic and page implementation
✔ Data-driven login using external JSON
✔ Cross-browser execution (Chromium, Firefox, WebKit, Edge)
✔ HTML reporting with screenshot, video, and trace on failure
✔ CI/CD ready (GitHub Actions compatible)

🏗 Architecture Overview
Before POM
Spec file
 ├── Navigation
 ├── Locators
 ├── Actions
 └── Assertions
After POM
Spec file → Calls page methods
Page classes → Contain locators and reusable actions
Benefits
Improved maintainability
Reduced duplication
Increased scalability
Cleaner, business-readable test cases

📁 Project Structure
ecommerce-playwright-pom-framework
│
├── pages/               # Page classes (locators + actions)
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── AccountPage.js
│   ├── CategoryPage.js
│   └── ProductPage.js
│
├── tests/               # Test specifications
│   ├── TC01_LaunchApplication.spec.js
│   ├── TC02_Login.spec.js
│   └── TC03_AddToCart.spec.js
│
├── utils/               # Test data
│   └── CloudBerryStoreTestData.json
│
├── playwright.config.js
├── package.json
└── README.md

🧪 Test Scenarios
Launch Application (Title validation)
Data-driven Login (Multiple user credentials)
Add to Cart flow
Cross-browser validation
Failure artifact capture

⚙️ Tech Stack
Playwright Test
JavaScript (Node.js)
Page Object Model (POM)
Git & GitHub
GitHub Actions (CI/CD Ready)

🛠 Installation & Setup
Clone the repository
git clone https://github.com/nvsujeetha/ecommerce-playwright-pom-framework1.git
cd ecommerce-playwright-pom-framework
Install dependencies
npm install
Install Playwright browsers (first-time setup)
npx playwright install

▶️ Running Tests
Run all tests
npx playwright test
Run in headed mode
npx playwright test --headed
Run specific test file
npx playwright test tests/TC02_Login.spec.js
Debug mode
npx playwright test --debug
View HTML report
npx playwright show-report

📊 Reporting
On failure, Playwright captures:
Screenshot
Video
Trace file
Artifacts are stored in:
test-results/
HTML report output:
playwright-report/

🎯 What This Project Demonstrates
Clean automation framework design
Separation of concerns
Reusable page-level abstraction
Data-driven test strategy
Cross-browser execution strategy
CI/CD-ready automation structure

👨‍💻 Author
Sujeetha Nallamilli
Playwright | Selenium | CI/CD | AI-Driven Testing
