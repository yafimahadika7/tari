let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue || '0';
}

function appendNumber(number) {
    displayValue += number.toString();
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue.slice(-1);
    if ('+-*/'.includes(lastChar)) return;
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
