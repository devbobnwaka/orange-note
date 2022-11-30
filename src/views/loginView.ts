import { elements} from "../base.js";
import Validator from "../validate.js";

export const changeBorder = (bool:boolean , element:HTMLElement) => {
    if(bool){
        element.classList.remove('error');
        element.classList.add('success');
    }else{
        element.classList.remove('success');
        element.classList.add('error');
    }
}

