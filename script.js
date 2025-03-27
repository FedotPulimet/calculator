function appendToResult(value) {
    const resultField = document.getElementById('result');
    // Проверяем, если добавляемая точка уже есть в текущем числе
    if (value === '.' && resultField.value.includes('.')) {
        return; // Не добавляем точку, если она уже есть
    }
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Ошибка';
    }
}

function calculateSquareRoot() {
    const resultField = document.getElementById('result');
    const value = parseFloat(resultField.value);
    if (!isNaN(value)) {
        resultField.value = Math.sqrt(value);
    } else {
        resultField.value = 'Ошибка';
    }
}