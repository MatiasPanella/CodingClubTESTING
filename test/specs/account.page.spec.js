import AccountPage from '../page-objects/account.page';
import navSection from '../page-objects/nav.section';
import LoginPage from '../page-objects/login.page';

describe('Create Account Suit', () => {
    xit('Create account', () => {
        browser.url('');
        navSection.login.click();
        LoginPage.emailCreate.setValue(Math.random().toString(36).substring(7)+'@gmail.com');
        LoginPage.sbmit.click();
        AccountPage.customerName.setValue('Matias');
        AccountPage.customerLast.setValue('Panella');
        AccountPage.passwd.setValue('Abc123');
        AccountPage.address1.setValue(Math.random().toString(24).substring(5));
        AccountPage.city.setValue('Valparaíso');
        AccountPage.state.selectByVisibleText('Indiana');
        AccountPage.code.setValue('25345');
        AccountPage.aleatorio();
        AccountPage.alias.addValue(Math.random().toString(10).substring(7));
        AccountPage.createbt.click();
        expect(browser.getTitle().toEqual('My account - My store'));

    })

})
