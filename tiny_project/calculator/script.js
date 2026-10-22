let number = "0";
let firstNumber = 0;
let operator = "";

function addNumber(value) {
    if (number === "0") {
        number = value;
    } else {
        number = number + value;
    }

    document.getElementById("screen").textContent = number;
}

function chooseOperator(value) {
    firstNumber = Number(number);
    operator = value;
    number = "0";

    document.getElementById("expression").textContent =
        firstNumber + " " + operator;
}

function calculate() {
    let secondNumber = Number(number);
    let result = 0;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    } else if (operator === "%") {
        result = firstNumber % secondNumber;
    }

    document.getElementById("expression").textContent =
        firstNumber + " " + operator + " " + secondNumber + " =";

    document.getElementById("screen").textContent = result;

    number = String(result);
    operator = "";
}

function clearScreen() {
    number = "0";
    firstNumber = 0;
    operator = "";

    document.getElementById("expression").textContent = "";
    document.getElementById("screen").textContent = "0";
}
