import {Given, When, Then, Before, After, BeforeAll} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";
import {LoginPage} from "../../pages/login.page.js";
import {HomePage} from "../../pages/home.page.js";

let browser;
let context;
let page;

Before( async function(){
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();

    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
});

After( async () => {
        await browser.close();
    }
);

Given('Open the URL', async () => {
    await page.goto(' https://www.saucedemo.com/');
 });

When('User enters the username {string} and password {string}', async function(username, password) {
});

When('User clicks on the login button', function () {
   // Write code here that turns the phrase above into concrete actions
 });

Then('User should be logged in successfully', function () {
   // Write code here that turns the phrase above into concrete actions
 });

When('User clicks on HamburgerMenu', function () {
   // Write code here that turns the phrase above into concrete actions
 });

Then('Logout from the application', async function () {

});

Then('User should be in login page', function () {
 });