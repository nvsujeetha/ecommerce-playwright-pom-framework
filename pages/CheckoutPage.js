import { expect } from '@playwright/test';
class CheckoutPage
{
    //constructor
    constructor(page)
    {
        this.page=page;

        //locators
        this.loginPage=page.getByRole('link', { name: 'login page' });
        this.radioButton=page.getByRole('radio', { name: 'I want to use an existing' });
        
this.chooseAddress = page.locator('#input-shipping-address');

        //this.chooseAddress=page.selectOption('#input-shipping-address', { index: 1 });
        this.chooseShippingMethod=page.locator('#button-shipping-methods');
        this.selectContinue=page.getByRole('button', { name: 'Continue' });
        this.choosePaymentMethod=page.locator('#button-payment-methods');
        this.confirmOrderButton=page.getByRole('button', { name: 'Confirm Order' });
        this.orderConfirmedText=page.getByRole('heading', { name: 'Your order has been placed!' });
    }
    //methods
   async loginPageLink()
   {
    await this.loginPage.click();
  }
   async selectRadioButton()
   {
    await this.radioButton.click();
   }
   async selectAddress()
   {
    await this.chooseAddress.selectOption({ index: 1 });
   }
   async selectShippingAddress()
   {
    await this.chooseShippingMethod.click();
    await this.selectContinue.click();
   }
   async selectPaymentMethod()
   {
    await this.choosePaymentMethod.click();
    await expect(this.selectContinue).toBeVisible();
    await this.selectContinue.click();
   }
   async confirmOrder()
   {
    await this.confirmOrderButton.click();
   }
   async orderPlacedMessage()
   {
    return await this.orderConfirmedText.isVisible();
   }
} module.exports={CheckoutPage};