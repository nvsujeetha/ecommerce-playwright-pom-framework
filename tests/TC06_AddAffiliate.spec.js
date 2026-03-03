const{test,expect} = require('@playwright/test');
const{HomePage} = require('../pages/HomePage');
const {LoginPage} = require('../pages/LoginPage');
const{AffiliatePage}=require('../pages/AffiliatePage');

test('@regression TC06_AddAffiliate',async ({page})=>
{
   const home=new HomePage(page);
   const login=new LoginPage(page);
   const affiliate=new AffiliatePage(page);
    await home.goto();
    //await home.clickLoginLink();
    //await home.clickMyAccount();
    await affiliate.clickAffiliateLink();
    await login.login('suji@test.com','Happylearning');
    await affiliate.fillAffiliateForm();
    await expect(page.getByText('Success: Your affiliate')).toContainText('Success: Your affiliate');
    //await browser.close();
});