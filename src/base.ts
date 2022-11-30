type Elements =  {
    getClick: HTMLElement | null,
    overlay: HTMLElement | null,
    signup: HTMLFormElement | null,
    signupBtn: HTMLElement | null,
    signInBtn: HTMLElement | null,
    prev: HTMLElement | null,
    next: HTMLElement | null,
    contentBtn: HTMLFormElement | null,
    contentForm: HTMLFormElement | undefined |null,
    signIn: HTMLFormElement | null,
    mail: HTMLInputElement | null,
    mail2: HTMLInputElement | null,
    title: HTMLInputElement | null,
    note: HTMLInputElement | null,
    token: HTMLInputElement | null,
    editor: HTMLIFrameElement | null,
    username: HTMLInputElement | null,
    password: HTMLInputElement | null,
    password2: HTMLInputElement | null,
    confirmPassword: HTMLInputElement | null,
}

export const elements:Elements = {
    getClick: document.querySelector<HTMLElement>('main'),
    next: document.querySelector<HTMLElement>('.next'),
    prev: document.querySelector<HTMLElement>('.prev'),
    overlay: document.querySelector<HTMLDivElement>('.overlay'),
    signup: document.querySelector<HTMLFormElement>('.signup'),
    signupBtn: document.querySelector<HTMLFormElement>('.signup-btn'),
    signIn: document.querySelector<HTMLFormElement>('.signIn'),
    signInBtn: document.querySelector<HTMLFormElement>('.signIn-btn'),
    contentBtn: document.querySelector<HTMLFormElement>('.content-btn'),
    contentForm: document.querySelector<HTMLFormElement>('.content-form'),
    mail: document.querySelector<HTMLInputElement>('.mail'),
    mail2: document.querySelector<HTMLInputElement>('.mail2'),
    title: document.querySelector<HTMLInputElement>('.title-input'),
    note: document.querySelector<HTMLInputElement>('.note-textarea'),
    token: document.querySelector<HTMLInputElement>('.token'),
    editor: document.querySelector<HTMLIFrameElement>('.rte-editable'),
    username: document.querySelector<HTMLInputElement>('.username'),
    password: document.querySelector<HTMLInputElement>('.password'),
    password2: document.querySelector<HTMLInputElement>('.password2'),
    confirmPassword: document.querySelector<HTMLInputElement>('.confirmPassword'),
}

interface CssClass  {
    getStarted : string;
    fadeInLeft : string;
    fadeInRight : string;
    hide : string;
    signIn : string;
    overlay : string;
    close : string;
}

export const cssClass:CssClass = {
    getStarted : 'get-started',
    fadeInLeft : 'fadeInLeft',
    fadeInRight : 'fadeInRight',
    hide : 'hide',
    signIn : 'signIn',
    overlay : 'overlay',
    close : 'close'
}

interface State {
   
}

export let state: State = {};

