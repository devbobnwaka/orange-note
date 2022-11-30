export default class Validator {
    val;
    constructor(val) {
        this.val = val;
    }
    email() {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.val.match(mailFormat)) {
            return true;
        }
        else {
            return false;
        }
    }
    stringLen() {
        if (this.val.length > 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
