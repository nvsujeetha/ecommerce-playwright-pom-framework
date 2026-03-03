class MyAccountPage {
  
  constructor(page) {
    this.page = page;
    this.myAccountText = page.locator('h1');
  }

  async isMyAccountVisible() {
    return await this.myAccountText.isVisible();
  }
}

module.exports = {MyAccountPage};