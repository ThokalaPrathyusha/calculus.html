let expression = [];

function press(value) {
    if (value === 'C') {
        expression = [];
    } else {
        expression.push(value);
    }
    updateDisplay();
}

function calculate() {
    let computation = '';
    let numbers = expression.join('').split(/[\+\-\*\/]/);
    let operators = expression.join('').replace(/[0-9]|\./g, '').split('');
    
    for (let i = 0; i < operators.length; i++) {
        if (i === 0) {
            computation = operate(numbers[i], numbers[i + 1], operators[i]);
        } else {
            computation = operate(computation, numbers[i + 1], operators[i]);
        }
    }

    expression = [computation];
    updateDisplay();
}

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = expression.join('') || '0';
}
