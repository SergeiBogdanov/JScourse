/*
Exersise: 
From JavaScript, create a page with an input field and an empty h2 element. 
The text entered in the field should be displayed inside the h2 element, 
but with a delay of 2000 ms. In this case, each character entered by the user 
in the field resets the previous pending call and starts a new one. 
Thus, the program must wait for the user to complete input and only then change the text in h2.
*/

document.addEventListener('DOMContentLoaded', function() {
    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', 'textInput');
    inputField.setAttribute('placeholder', 'Введите текст');

    let outputElement = document.createElement('h2');
    outputElement.setAttribute('id', 'outputText');

    document.body.appendChild(inputField);
    document.body.appendChild(outputElement);

    let timeoutID;

    inputField.addEventListener('input', function() {
        clearTimeout(timeoutID);

        timeoutID = setTimeout(function() {
            outputElement.textContent = inputField.value;
        }, 2000);

    });
});