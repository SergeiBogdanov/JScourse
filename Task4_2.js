/*
Exercise:
Using a loop, create an inverted version of an arbitrary string. 
For example, the line "Hello, world!" should turn into “!dlrow, olleH”.
*/

/*Со строками можно работать так же, как и с массивами, 
то есть получить i-й символ строки str можно с помощью str[i].
Но в строках нельзя заменять i-й символ, то есть запись str[i] = 'x' ничего не изменит.*/

let string = 'Hello World!';
let result = '';

for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
}

console.log(result);