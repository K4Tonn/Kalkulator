const resultInput = document.getElementById("result");

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Append value to the display
function append(value) {
    if (resultInput.dataset.rawValue === '0' && value !== '.') {
        resultInput.dataset.rawValue = '';
    }
    resultInput.dataset.rawValue += value;
    resultInput.value = formatNumber(resultInput.dataset.rawValue);
}

// Clear the display
function clearResult() {
    resultInput.dataset.rawValue = '';
    resultInput.value = '0';
}

// Delete the last character
function deleteLast() {
    resultInput.dataset.rawValue = resultInput.dataset.rawValue.slice(0, -1) || '0';
    resultInput.value = formatNumber(resultInput.dataset.rawValue);
}

// Perform calculation
function calculate() {
    try {
        const rawExpression = resultInput.dataset.rawValue.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(rawExpression) || 0;
        resultInput.dataset.rawValue = result.toString();
        resultInput.value = formatNumber(result);
    } catch (e) {
        resultInput.value = 'Error';
    }
}
