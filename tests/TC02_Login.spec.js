const {test, expect}=require('@playwright/test');
const{HomePage} = require('../pages/HomePage');
const {LoginPage} = require('../pages/LoginPage');
const{MyAccountPage}=require('../pages/MyAccountPage');


const dataset=JSON.parse(JSON.stringify(require("../Utils/CloudBerryStoreTestData.json"))); 
const users=dataset.Sheet1;
for (const data of users)//object is created for users
{
test(`@sanity @datadriven @regression TC02_Login-${data.username}`,async ({page})=>  //Standard way to write without using function fixture
{
const home=new HomePage(page);
const login=new LoginPage(page);
const myAccount = new MyAccountPage(page);
await home.goto();
await home.clickMyAccount();
await home.clickLoginLink();
await login.login(data.username,data.password);
expect(myAccount.isMyAccountVisible());

});
}