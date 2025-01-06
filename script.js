const resultInput = document.getElementById("result");

// Append numbers or operators to the display
function append(value) {
    if (resultInput.value === '0' && value !== '.') {
        resultInput.value = '';
    }
    resultInput.value += value;
}

// Clear the display
function clearResult() {
    resultInput.value = '';
}

// Delete the last character
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        let expression = resultInput.value.replace(/×/g, '*').replace(/÷/g, '/');
        resultInput.value = eval(expression) || 0;
    } catch (e) {
        resultInput.value = 'Error';
    }
}