/* Adds a and b */
function add(a,b) {
    return a+b;
}

/* Subtracts b from a */
function subtract(a,b) {
    return a-b;
}

/* Multiplies a and b */
function multiply(a,b) {
    return a*b;
}

/* Divides a by b */
function divide(a,b) {
    if (b == 0) {
        alert("Division by zero is not allowed");
    }
    return a/b;
}

/* Applies the operator on the operands */
function operate(operator, a, b) {
    return operator(a,b);
}

const operators = {
    '+': add,
    '-' : subtract,
    'x' : multiply,
    '/' : divide,
}

let firstValue = 0;
let secondValue = 0;

function handleOperator(operator) {
    return 1;
}

function handleButtonClick(buttonValue) {
    buttonValue = buttonValue.toLowerCase();
    if (buttonValue == '=') {
        console.log(buttonValue);
    } else if (buttonValue in operators) {
        console.log(operators[buttonValue]);
        // handleOperator(operators[buttonValue]);
    } else if (buttonValue == ".") {
        console.log(buttonValue);

    } else if (buttonValue == "clear") {
        // clearCalculator();
        console.log(buttonValue);

    } else if (buttonValue == "delete") {
        // deleteLastDigit();
        console.log(buttonValue);

    } else {
        // handleNumber();
        updateDisplay(buttonValue);
        console.log(buttonValue);

    }
}

function addButtonEventListeners() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.innerText;
            handleButtonClick(buttonValue);
            console.log("Button clicked: " + buttonValue);
        });
    });
}

function updateDisplay(value) {
    let display = document.querySelector('.bottom-row');
    display.innerText = value;
}

addButtonEventListeners();

/* 

    - Have some kind of map that maps buttons to operators

    - Event listener for each button 
        - If the button is an operator, set the operator


*/