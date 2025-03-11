export const getDisplay = (element) =>
    window.getComputedStyle(element).getPropertyValue('display');

export const idSelected = (id) => document.querySelector(`#${id}`);