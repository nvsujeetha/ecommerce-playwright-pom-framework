class AffiliatePage
{
    constructor(page)
    {
        this.page=page

        //locators
        this.affiliateLink=page.getByRole('link', { name: 'Affiliate' });
        this.affiliateTitle-page.getByRole('heading', { name: 'Your Affiliate Information' });
        this.company=page.getByRole('textbox', { name: 'Company' });
        this.webSite=page.getByRole('textbox', { name: 'Web Site' });
        this.taxID=page.getByRole('textbox', { name: 'Tax ID' });
        this.cheque=page.getByRole('textbox', { name: '* Cheque Payee Name' });
        this.continue=page.getByRole('button', { name: 'Continue' });
        this.paymentMethod=page.getByRole('radio', { name: 'Cheque' });
        this.agreeToggle=page.locator('#input-agree');
 }

    //Actions
    async clickAffiliateLink()
    {
        await this.affiliateLink.click();
    }
    async fillAffiliateForm()
    {
        //await this.affiliateTitle.tocontainText('Your Affiliate Information');
        await this.company.fill('Cloudberry');
        await this.webSite.fill('https://www.linkedin.com/');
        await this.taxID.fill('123456');
        //await choosePlan('Cheque');
        await this.paymentMethod.check();
        await this.cheque.fill('Cloudberry');
        //await this.agreeToggle.check();
        await this.continue.click();
        
    }
    async choosePlan(plan) {
    await this.page.getByRole('radio', { name: plan }).check();
   }
    
}module.exports={AffiliatePage};