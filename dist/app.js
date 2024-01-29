"use strict";
const factorial = (inputNum) => {
    let result = 1;
    for (let i = 1; i <= inputNum; i++) {
        result = result * i;
    }
    return result;
};
const pageInput = document.querySelector('#input-number');
const submitBtn = document.querySelector('#submit-button');
let input;
const resultSpace = document.querySelector('#result-space');
const resultText = document.querySelector('#result-text');
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    input = factorial(+pageInput.value);
    resultText.innerHTML = input.toString();
});
