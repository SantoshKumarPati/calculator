function calculateReciprocal() {
    const inputBox = document.getElementById('inputBox');
    const number = parseFloat(inputBox.value);
    if (!isNaN(number) && number !== 0) {
        inputBox.value = 1 / number;
    } else {
        alert("Cannot divide by zero or invalid input");
    }
}

function calculateSquare() {
    const inputBox = document.getElementById('inputBox');
    const number = parseFloat(inputBox.value);
    if (!isNaN(number)) {
        inputBox.value = number * number;
    }
}

function calculateSquareRoot() {
    const inputBox = document.getElementById('inputBox');
    const number = parseFloat(inputBox.value);
    if (!isNaN(number)) {
        inputBox.value = Math.sqrt(number);
    }
}

function toggleSign() {
    const inputBox = document.getElementById('inputBox');
    const number = parseFloat(inputBox.value);
    if (!isNaN(number)) {
        inputBox.value = number * -1;
    }
}

function clearInput() {
    document.getElementById('inputBox').value = "";
}

function deleteLast() {
    const inputBox = document.getElementById('inputBox');
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculateEqual() {
    try {
        const inputBox = document.getElementById('inputBox');
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        document.getElementById('inputBox').value = "Error";
    }
}

function insert(value) {
    const inputBox = document.getElementById('inputBox');
    inputBox.value += value;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === '1/x' || value === 'x²' || value === '√x' || value === '+/-') {
            return;  
        }

        if (value === '=') {
            calculateEqual();
        } else if (value === 'AC') {
            clearInput();
        } else if (value === 'DEL') {
            deleteLast();
        } else {
            insert(value);
        }
    });
});
