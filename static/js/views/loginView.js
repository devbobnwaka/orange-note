export const changeBorder = (bool, element) => {
    if (bool) {
        element.classList.remove('error');
        element.classList.add('success');
    }
    else {
        element.classList.remove('success');
        element.classList.add('error');
    }
};
