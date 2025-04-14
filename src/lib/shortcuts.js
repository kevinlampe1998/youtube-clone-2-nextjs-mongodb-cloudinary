export const getDisplay = (element) =>
    window.getComputedStyle(element).getPropertyValue('display');

export const getPropValue = (element, prop) =>
    window.getComputedStyle(element).getPropertyValue(prop);

export const idSelected = (id) => document.querySelector(`#${id}`);

export const selectByClass =
    (className) => document.querySelector(`.${className}`);

export const selectAllByClass =
    (className) => document.querySelectorAll(`.${className}`);