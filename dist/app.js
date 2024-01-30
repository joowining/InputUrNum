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
const resultSpace = document.querySelector('#result-space');
const resultText = document.querySelector('#result-text');
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let input;
    let result;
    input = pageInput.value;
    if (validation(input)) {
        result = factorial(+input);
        resultText.innerHTML = result.toString();
    }
});
const validation = (inputNum) => {
    let transedNum = +inputNum;
    if (isNaN(transedNum)) {
        alert("Please input a number");
        pageInput.value = '';
        return false;
    }
    else {
        if (transedNum > 10 || transedNum < 1) {
            alert("Please input a number between 1 and 10");
            pageInput.value = '';
            return false;
        }
        else {
            return true;
        }
    }
};
