const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-display');
const numberButton = document.querySelectorAll('.data-number');
const deletenButton = document.querySelector('.data-delete');
const equalsButton = document.querySelector('.data-equals');
const clearButton = document.querySelector('.data-all-clear');



for (let number of numberButton) {
    number.addEventListener('click', () => {
        currentDisplay.value += number.innerText;
    })
};


deletenButton.addEventListener('click', () => {
    let temp = currentDisplay.value;
    currentDisplay.value = temp.slice(0, temp.length - 1);
});

clearButton.addEventListener('click', () => {
    currentDisplay.value = '';
    previousDisplay.value = parseInt('0');
});

equalsButton.addEventListener('click', () => {
    let x = previousDisplay.value;
    x = parseFloat(x);
    let a = currentDisplay.value;
    let b = eval(a);
    previousDisplay.value = x + b;
    currentDisplay.value = '';
})

