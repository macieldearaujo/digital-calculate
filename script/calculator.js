let calculation = localStorage.getItem('calculation');

function calculationUpdate(value) {
    calculation += value;
    document.querySelector('.js-display').innerHTML = calculation;
    updateSave();
}

function updateSave() {
    localStorage.setItem('calculation', calculation);
}

document.addEventListener("keydown", function typeNumber(event) {
    const number = event.key;
    let callNumber = '';

    if (number === '1') {
        callNumber = 1;
    } else if (number === '2') {
        callNumber = 2;
    } else if (number === '3') {
        callNumber = 3;
    } else if (number === '4') {
        callNumber = 4;
    } else if (number === '5') {
        callNumber = 5;
    } else if (number === '6') {
        callNumber = 6;
    } else if (number === '7') {
        callNumber = 7;
    } else if (number === '8') {
        callNumber = 8;
    } else if (number === '9') {
        callNumber = 9;
    } else if (number === '0') {
        callNumber = 0;
    } else if (number === '+') {
        callNumber = '+';
    } else if (number === '.') {
        callNumber = '.';
    } else if (number === '*') {
        callNumber = '*';
    } else if (number === '-') {
        callNumber = '-';
    } else if (number === '(') {
        callNumber = '(';
    } else if (number === ')') {
        callNumber = ')';
    } else if (number === 'Escape') {
        document.querySelector('.js-display').innerHTML = ''
        calculation = '';
    } else if (number === 'Enter') {
        showResult();
    }

    calculationUpdate(callNumber);
})

function showResult() {
    document.querySelector('.js-display').innerHTML = calculation = eval(calculation);
}


function addParentheses() {
    const display = document.querySelector('.js-display');

    if (!display.classList.contains("js-parentheses")) {
        calculationUpdate('(')
        display.classList.add("js-parentheses");
    } else {
        calculationUpdate(')');
        display.classList.remove("js-parentheses");
    }
}