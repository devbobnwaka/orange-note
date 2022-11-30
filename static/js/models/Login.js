import Validator from '../validate.js';
import { changeBorder } from '../views/loginView.js';
export const validateVal = (elements, name) => {
    elements?.addEventListener('keyup', e => {
        let element = elements;
        // console.log(element.value);
        const validate = new Validator(element.value);
        changeBorder(name == 'mail' ? validate.email() : validate.stringLen(), elements);
    });
    elements?.addEventListener('change', e => {
        let element = e.target;
        const validate = new Validator(element.value);
        changeBorder(name == 'mail' ? validate.email() : validate.stringLen(), elements);
    });
};
