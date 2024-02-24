/*
Exersise: 
Create a page that allows users to select a color and fill a block with that color. 
Use HTML to place controls such as <input> for color selection and <button> for clearing. 
Then add JavaScript to add interactivity, such as changing the color of the block 
when you select a color and clearing the block when you click the "Clear" button.
*/

document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.querySelector('.color-input');
    let colorBlock = document.querySelector('.color-block');
    let clearButton = document.querySelector('.clear-color-button');

    function paintBlock() {
        colorBlock.style.backgroundColor = colorInput.value;
    }

    colorInput.addEventListener('input', paintBlock);

    paintBlock();

    clearButton.addEventListener('click', function() {
        colorBlock.style.removeProperty('background-color');
        colorInput.value = '';
    });
});