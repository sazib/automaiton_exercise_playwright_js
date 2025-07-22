class HomePage{
    /**
     * @param { import('playwright').Page } page
     */

    constructor(page){
        this.page = page;
        this.homeLink = page.getByRole('link', { name: ' Home' });
        this.signupOrLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    }
}

// module.exports = {HomePage}
export {HomePage};