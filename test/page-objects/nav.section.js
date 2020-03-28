class navSection{
    get login() {return $('.login') }
    get contact() {return $('#contact-link')}

    logClick(){
        this.login.click()}

}
export default new navSection()