const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

function calculate(e) {
    const clickedButtonValue = e.target.value;

    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'AC') {
        display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
}