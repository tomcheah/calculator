/* Adds a and b */
function add(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
}

/* Subtracts b from a */
function subtract(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a-b;
}

/* Multiplies a and b */
function multiply(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a*b;
}

/* Divides a by b */
function divide(a,b) {
    a = parseInt(a);
    b = parseInt(b);
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

/* Global variables */
const equationRow = document.querySelector('.top-row');
const displayRow = document.querySelector('.bottom-row');
let displayValue = 0;
let equationValue = 0;
let currOperator = null; 
let operatorText = '';
let equals = false; 

function updateOperator(opText) { 
    if (opText === "" || opText === null || opText === undefined) {
        currOperator = null;
        operatorText = ""; 
    } else {
        operatorText = opText;
        currOperator = operators[opText];
    }
}

function handleButtonClick(buttonValue) {
    buttonValue = buttonValue.toLowerCase();
    if (buttonValue == '=') {
        handleEquals();
    } else if (buttonValue in operators) {
        handleOperator(buttonValue);
    } else if (buttonValue == ".") {
        console.log(buttonValue);
    } else if (buttonValue == "clear") {
        console.log(buttonValue);
    } else if (buttonValue == "delete") {
        console.log(buttonValue);
    } else {
        // Number
        handleNumber(buttonValue);
    }
}

/* Handles a number button press */
function handleNumber(buttonValue) {
    if (displayValue == 0) {
        displayValue = buttonValue;
        updateDisplay(true, false);
    } else {
        displayValue = displayValue + String(buttonValue);
        updateDisplay(true, false);
    }
}

function handleOperator(buttonValue) {
    updateOperator(buttonValue);
    equationValue = displayValue;
    displayValue = 0;
    /* Update values 
        - Move displayValue to equation Value
        - Set equationValue to 0 
    */
    updateDisplay(false, true);
}

function handleEquals(buttonValue) {
    /* 
        Set equals to true
        Update display value
        Update entire display
        Null out equationValue
        Null out operator
        Set equals to false again
    */
   
    if (currOperator === null) {
        return;    
    }
    equals = true;
    updateDisplay(false, true);
    displayValue = operate(currOperator, equationValue, displayValue);
    updateDisplay(true, false);
    equationValue = 0;
    currOperator = null;
    operaterText = "";
    equals = false;
}

/* Updates display of calculator */
function updateDisplay(updateDisplayValue, updateEquationValue) {
    if (updateDisplayValue) {
        displayRow.textContent = displayValue;
    }

    if (updateEquationValue) {
        let content = ''; 
        if (equationValue !== null) {
            content += String(equationValue); 
        }
        if (operatorText !== null || operatorText !== "") {
            content += operatorText;
        }
        if (equals) {
            content += String(displayValue) + '=';
        }

        equationRow.textContent = content; 
    }

}

/* Adds event listeners to all the buttons */
function addButtonEventListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;
            handleButtonClick(buttonValue);
            console.log("Button clicked: " + buttonValue);
        });
    });
}

addButtonEventListeners();