class ProductPage
{
    constructor(page)
    {
        this.page=page;
        //locators
        this.enterDeliveryDate=page.getByRole('textbox', { name: '* Delivery Date' });
        this.addToWishList=page.locator("//button//i[@class='fa-solid fa-heart']");
        this.successAlert=page.locator('#alert').getByText('Success: You have added HP');
        this.addToCartButton=page.getByRole('button', { name: 'Add to Cart' });
        this.checkoutButton=page.getByRole('link', { name: ' Checkout' });
        this.checkOutTitle=page.getByRole('heading', { name: 'Checkout' });
    }

    //methods
    async addProduct()
    {
        await this.product.click();
    }

    static setDeliveryDate(days)
    {
        const deliveryDate=new Date();
        //console.log(deliveryDate);
        deliveryDate.setDate(deliveryDate.getDate()+days);//Setting it to 5 days later from current date
        const mm=String(deliveryDate.getMonth()+1).padStart(2,'0');
        const dd=String(deliveryDate.getDate()).padStart(2,'0');
        const yyyy=String(deliveryDate.getFullYear());
        return `${yyyy}-${mm}-${dd}`;
    }
    async finalDeliveryDate(expectedDate)
    {
        await this.enterDeliveryDate.fill(expectedDate);
    }

    /*  async expectSuccessContains(text) {
    await expect(this.successAlert).toBeVisible();
    await expect(this.successAlert).toContainText(text);
  } */
  async addToCart()
  {
    
    await this.addToCartButton.click();
  }
  async openProductByName(productName) {
    await this.page.getByText(productName, { exact: true }).click();
  }
  async wishList()
  {
    await this.addToWishList.click();
  }

  async checkout()
  {
    await this.checkoutButton.click();
    //await expect(this.checkOutTitle).toContainText();
  }
}module.exports = { ProductPage };