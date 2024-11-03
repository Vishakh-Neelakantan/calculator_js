// Validation function
function validateInput(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return false;
    }
    return true;
}

// Updated functions with validation
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!validateInput(num1, num2)) return;
    document.getElementById("result").innerText = num1 + num2;
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!validateInput(num1, num2)) return;
    document.getElementById("result").innerText = num1 - num2;
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!validateInput(num1, num2)) return;
    document.getElementById("result").innerText = num1 * num2;
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!validateInput(num1, num2)) return;
    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerText = num1 / num2;
    }
}
