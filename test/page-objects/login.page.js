class LoginPage {
    get email() {return $('#email')}
    get emailCreate() {return $('#email_create')}
    get sbmit() {return $('#SubmitCreate')}
    get password() {return $('#passwd')}
    get signIn() {return $('#SubmitLogin')}
    get breadcrumber() {return $('.home')}
    get titleCreateAccount() {return $('#create-account_form h3')}

    
    inputData(){
        this.email.setValue('matiaspanella@gmail.com');
        this.password.setValue('szENhY@M8wLsZdb');
    }
    failedInput(){
        this.email.setValue('matiaspanellagmail.com')
    }
   getTitulo(){
        this.titleCreateAccount.getText();
    }
}
export default new LoginPage()