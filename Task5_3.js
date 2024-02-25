/*
Exercise:
Given a natural number n. 
Write a recursive function that returns a string of numbers from 1 to n, separated by space.
*/

function numbersToString(n) {
    if (n === 1) {
        return '1';
    }
   
    return numbersToString(n - 1) + ' ' + n;
}

console.log(numbersToString(5)); 