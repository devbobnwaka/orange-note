import { elements } from "./base.js";

export default class Validator {
    protected val : string;

    constructor(val:string){
        this.val = val;
    }

    email(): boolean {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.val.match(mailFormat)){
            return true;
        } else{
            return false;
        }
    }

    stringLen(): boolean{
        if(this.val.length > 1){
            return true;
        } else{
            return false;
        }
    }
}
