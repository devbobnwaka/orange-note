import { elements, state } from "./base.js";
import { handleClick, handleCloseClick } from "./views/indexView.js";
import { validateVal } from "./models/Login.js";
import Validator from "./validate.js";
import { changeBorder } from "./views/loginView.js";

elements.getClick?.addEventListener('click', handleClick);
elements.overlay?.addEventListener('click', handleCloseClick);

validateVal(elements.mail!, 'mail');
validateVal(elements.mail2!, 'mail');

validateVal(elements.username!, 'username');

validateVal(elements.password!, 'password');
validateVal(elements.password2!, 'password');

validateVal(elements.confirmPassword!, 'confirmPassword');

elements.signup?.addEventListener('click', e => {
    e.preventDefault();
    let validateEmail = new Validator(elements.mail!.value);
    let validateUsername = new Validator(elements.username!.value);
    let validatePass = new Validator(elements.password!.value);
    let validateCPass = new Validator(elements.confirmPassword!.value);

    if(elements.password!.value !== elements.confirmPassword!.value) {
        changeBorder(validatePass.email(), elements.password!);
        changeBorder(validateCPass.email(), elements.confirmPassword!);
    };

    if(validateEmail.email() && validateUsername.stringLen() && validatePass.stringLen() && validateCPass.stringLen()){
        elements.signup?.submit()     
    }
});

elements.signIn?.addEventListener('click', e => {
    e.preventDefault();
    let validateEmail = new Validator(elements.mail2!.value);
    let validatePass = new Validator(elements.password2!.value);
    if(validateEmail.email() && validatePass.stringLen()){
        elements.signIn?.submit()
    }
});

elements.contentBtn?.addEventListener('click', e => {
    e.preventDefault();
    let title = elements.title?.value;
    let note = elements.note;
    let editor = elements.editor?.contentWindow?.document.body.textContent as string;
    if(note != undefined){
        note.value = editor;
        console.log(note.value);
        
    }
    if(title || note?.value.length as number > 11){              
        let data = {
            title: title,
            note: note?.value,
        };
        
        let url = elements.contentForm?.action as any
        let res = fetch(url, {
            method: elements.contentForm?.method,
            body: JSON.stringify(data),
            headers: <HeadersInit>{
                'Accept': 'application/json',
                'X-CSRFToken': elements.token?.value,
                "X-Requested-With": "XMLHttpRequest",
            },
            mode: 'same-origin' // Do not send CSRF token to another domain
        })
        
    
        res.then(data => {
            if (data.ok) {
                // status.innerHTML = "Thanks for your submission!";
                console.log('"Thanks for your submission!"');
                elements.contentForm?.reset()
                elements.editor.contentWindow.document.body.innerHTML = ""
                // console.log(elements.editor?.contentWindow?.document.body.innerHTML) 
              } else {
                data.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                //   status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                console.log('"Oops! There was a problem submitting your form"');
                } else {
                //   status.innerHTML = "Oops! There was a problem submitting your form"
                console.log('"Oops! There was a problem submitting your form"');
                }
              })
            }
            // console.log(data);
        }).catch(error => {
            console.log('"Oops! There was a problem submitting your form"');
        }) 
           
    }    
})


// elements.next?.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('clicked next');
    
// })



    