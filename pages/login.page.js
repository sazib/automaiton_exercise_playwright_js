class LoginPage{
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page){
        this.page = page;
        this.emailAddressInputField = page.getByPlaceholder('Email Address').first();
        this.passwordInputField = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.newUserSignupLabel = page.getByRole('heading', { name: 'New User Signup!' });
        this.usernameInputField = page.getByRole('textbox', { name: 'Name' });
        this.emailAddressInputField = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupBtn = page.getByRole('button', { name: 'Signup' });
    }

    async performLogin({email='', password='' }){
        await this.emailAddressInputField.fill(email);
        await this.passwordInputField.fill(password);
        await this.loginBtn.click();
    }
}

export {LoginPage};