import loginPage from '../page-objects/login.page';
import navSection from '../page-objects/nav.section';

describe('Authentication screen', () => {
    xit('should have the right title', () => {
        browser.url('http://automationpractice.com/index.php');
        const title = browser.getTitle();
        expect(title).toEqual('My Store');
    })
    xit('should detect if an element is displayed',() => {
        browser.url('');
        browser.$('.login').isDisplayed();
        console.log(browser.$('.login').isDisplayed());

    })
    it('Verify the content of Authentication screen', () =>{
        browser.url('');
        navSection.logClick();
        console.log(browser.$('#create-account_form h3').getText());
        console.log(expect(loginPage.getTitulo()).toEqual('CREATE AN ACCOUNT'));
        //expect(browser.$('#create-account_form h3').getText().toEqual('CREATE AN ACCOUNT'));
        //console.log(loginPage.getTitulo());
        console.log('aaaa');
       // expect(loginPage.getTitulo().toEqual('CREATE AN ACCOUNT'));
    })
    xit('Click on Sign in button and return the browser url', () =>{
        browser.url('');
        navSection.logClick();
        browser.getUrl();
        expect(browser.getUrl().toEqual('http://automationpractice.com/index.php?controller=authentication&back=my-account'));
        console.log(text);
    })
    xit('Verify email and passwd fields is displayed', () => {
        browser.url('');
        loginPage.login.click();
        loginPage.email.isDisplayed();
        loginPage.password.isDisplayed();
    })
    xit('Verify login', () => {
        browser.url('');
        navSection.login.click();
        loginPage.inputData();
        loginPage.signIn.click();
        expect(browser.getTitle()).toEqual('My account - My Store');
        console.log(browser.getTitle());
    })
    xit('Verify login incorrect email address', () => {
        browser.url('');
        navSection.login.click();
        loginPage.failedInput();
        loginPage.sbmit();
        expect(browser.$('.alert-danger li').getText()).toEqual('Invalid email address.');
    })
})