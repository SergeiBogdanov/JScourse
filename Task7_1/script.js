/*
Exersise:
Create a web page that allows users to increment a counter value by one. 
Use HTML to place interface elements, such as the <p> element 
to display the current counter value and the <button> button to increment the counter. 
Then add JavaScript to add functionality that increments the counter value by one when the button is clicked.
*/

let countDisplay = document.querySelector(".count-display");
let incrementButton = document.querySelector(".icrement-button");

function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
}

incrementButton.addEventListener('click', incrementCount);