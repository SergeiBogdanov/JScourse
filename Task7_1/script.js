let countDisplay = document.querySelector(".count-display");
let incrementButton = document.querySelector(".icrement-button");

function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
}

incrementButton.addEventListener('click', incrementCount);