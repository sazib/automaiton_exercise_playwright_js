class SignupPage {
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page) {
        this.page = page;
        this.signupPageTitle = page.getByText('Enter Account Information');
    }

    async fillupSignupForm({title='Mr.', name='', email='',
                         password='', date_of_birth='', firstName='', lastName='', address='Test Address',
                               country='India', state='Kerala', city='Pune', zipcode='2000', mobile='01998799977'}) {
        await this.page.getByLabel(title).check();
        // await this.page.getByRole('textbox', { name: 'Name *', exact: true }).fill(name);
        await this.page.getByRole('textbox', { name: 'Password *' }).fill(password);
        await this.page.locator('#days').selectOption({label: date_of_birth});
        await this.page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(address);
        await this.page.getByLabel('Country *').selectOption({label: country});
        await this.page.getByRole('textbox', { name: 'State *' }).fill(state);
        await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(city);
        await this.page.locator('#zipcode').fill(zipcode);
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(mobile);
        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }
}

module.exports = {SignupPage};