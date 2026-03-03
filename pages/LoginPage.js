
class LoginPage
{
    //constructor 

    constructor(page)
    {
        this.page=page;

        //locators
        this.email=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
        this.loginLink=page.getByRole('link', { name: 'login' });

    }
    //Actions
    
    async login(username,password)
    {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
}module.exports = {LoginPage};






//Actions