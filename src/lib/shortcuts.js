export const getDisplay = (element) =>
    window.getComputedStyle(element).getPropertyValue('display');

export const getPropValue = (element, prop) =>
    window.getComputedStyle(element).getPropertyValue(prop);

export const idSelected = (id) => document.querySelector(`#${id}`);