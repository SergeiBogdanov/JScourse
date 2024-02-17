/*
Exercise:
Generate an array of numbers 1–31 inclusive (days of the month). 
Use console.log to output the string ${day} of January, ${day of the week} for each number. 
The day of the week, January 1, must be specified using a variable, that is, 
the program must work correctly for any day of the week on which the month begins. 
Hint 1: For the days of the week, you can create an array with the names of the days 
so that you can access it by index. Hint 2: The index of the day of the week 
can be calculated using the remainder operation.
*/

let day = [];
let dayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let i = 1;
let j = 0;

while ( i  < 32 ) {
    day.push(i);
    console.log(`January ${day[i - 1]}, ${dayWeek[j]}`);
    i++;
    j = (j + 1) % 7;
}
