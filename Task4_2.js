/*
Exercise:
Using a loop, create an inverted version of an arbitrary string. 
For example, the line "Hello, world!" should turn into “!dlrow, olleH”.
*/

let string = 'Hello World!';
let result = '';

for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
}

console.log(result);