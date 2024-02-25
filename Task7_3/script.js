/*
Exersise: 
Create an HTML page with a number input field, a button, and a div element with the number 0. 
The input field should contain a number with the number of seconds, and the button should start a timer. 
When the timer starts, the number in the div element should be replaced with the one entered in the field. 
Then every second it should decrease by one until it reaches 0. In this case, 
the timer should work correctly if the user starts it again while it is running.
*/

document.addEventListener('DOMContentLoaded', function() {
    let numberInput = document.querySelector('.number-input');
    let runTimerButton = document.querySelector('.run-timer-button');
    let timer = document.querySelector('.timer');

    setInterval(func, delay)

    const intervalID = setInterval(clickButton, 1000);

        function clickButton() {
        timer.textContent = numberInput.value;
        timer.textContent -= 1;
    }

    numberInput.addEventListener('input', clickButton);

    paintBlock();

    clearButton.addEventListener('click', function() {
        timer.textContent = numberInput.value;

        colorBlock.style.removeProperty('background-color');
        colorInput.value = '';
    });
});