function appendToResult(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    let expression = resultField.value;

    // Simple calculation logic with a while loop
    while (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
        expression = eval(expression);
        break; // To avoid infinite loop
    }

    resultField.value = expression;
}