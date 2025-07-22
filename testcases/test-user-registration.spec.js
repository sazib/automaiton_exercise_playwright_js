import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/login.page.js";
import {HomePage} from "../pages/home.page.js";
import {SignupPage} from "../pages/signup.page.js";


test('Test user registration for valid information', async ({page}) => {
    const emailAddress = 'sazib_' + Math.random() * 10000 + '@gmail.com';
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    await page.goto('')
    await page.context()
    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.homeLink).toHaveCSS('color', 'rgb(255, 165, 0)');
    await homePage.signupOrLoginLink.click();
    await expect(loginPage.newUserSignupLabel).toBeVisible();
    await loginPage.usernameInputField.fill('Abdul Awal', {timeout: 3000});
    await loginPage.emailAddressInputField.first().fill(emailAddress);
    await loginPage.signupBtn.click();
    await signupPage.fillupSignupForm({password: "testPassword", date_of_birth: "13", firstName: "Abdul Awal", lastName: "Mandal"});
    await expect(page.getByText('Account Created!')).toBeVisible();
});