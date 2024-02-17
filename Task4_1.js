/*
Exercise:
Write a generator of arrays of length count with random numbers from n to m. 
Note that n and m can be negative, and it can also be n > m or n < m. 
Print the result using console.log.
*/

let array = [];
let count = 50;
let n = -3;
let m = -10;

for (let i = 0; i < count; i++) {
    let randomValue = Math.round(Math.random() * Math.abs(m - n)) + Math.min(n, m);
    array.push(randomValue);
}

console.log(array);