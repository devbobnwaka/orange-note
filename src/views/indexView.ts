import { elements, cssClass } from "../base.js";

export const handleClick = (e:Event) => {
    let element = e.target as HTMLElement
    if(element.classList.contains(cssClass.getStarted)){
        elements.overlay?.classList.add(cssClass.fadeInLeft);
        elements.overlay?.classList.remove(cssClass.hide);
        elements.signup?.classList.remove(cssClass.hide);
    } else if(element.classList.contains(cssClass.signIn)){
        elements.overlay?.classList.add(cssClass.fadeInRight);
        elements.overlay?.classList.remove(cssClass.hide);
        elements.signIn?.classList.remove(cssClass.hide);
    }
}

export const handleCloseClick = (e:Event) => {
    e.preventDefault();
    let element = e.target as HTMLElement
    if(element.classList.contains(cssClass.close) || element.classList.contains(cssClass.overlay)){
        elements.overlay?.classList.add(cssClass.hide);
        elements.signup?.classList.add(cssClass.hide);
        elements.signIn?.classList.add(cssClass.hide);
        elements.overlay?.classList.remove(cssClass.fadeInLeft);
        elements.overlay?.classList.remove(cssClass.fadeInRight);
    }   
}