class AccountPage {
    get customerName() {return $('#customer_firstname')}
    get customerLast() {return $('#customer_lastname')}
    get accountEmail() {return $('#email')}
    get passwd() {return $('#passwd')}
    get day() {return $('#days')}
    get month() {return $('#uniform-months')}
    get year() {return $('#uniform-years')}
    get address1() {return $('#address1')}
    get city() {return $('#city')}
    get state() {return $('#id_state')}
    get code() {return $('#postcode')}
    get country() {return $('#id_country')}
    get phone() {return $('#phone_mobile')}
    get alias() {return $('#alias')}
    get createbt() {return $('#submitAccount')}

    //generate a random number of 11 digits for phone field
    aleatorio(){
        let a=1000000;
        let b=99999999999;
        this.phone.setValue(Math.round(Math.random()*(b-a)+parseInt(a)));

    }
    
}


export default new AccountPage()