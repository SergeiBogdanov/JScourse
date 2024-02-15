/*
Exercise:
The name and surname variables contain the person's first and last name. At the same time, 
the lines are a mess with large and small letters, and you need to put the lines in order. 
To do this, convert the first letters of your first and last name to upper case, 
and the remaining letters to lower case. Write the result to new variables
and print their values using console.log. Using ternary operators and console.log, 
print the message "Name was converted" or "Name remained unchanged" for the first and last names, 
depending on whether the original strings were equal to the converted ones.
*/

let name = 'John';
let surname = 'Snow';

let newFirstLetterName = name.substr(0, 1);
newFirstLetterName = newFirstLetterName.toUpperCase();

let newLastName = name.substr(1);
newLastName = newLastName.toLowerCase();

let newName = newFirstLetterName + newLastName;

let newFirstLetterSurname = surname.substr(0, 1);
newFirstLetterSurname = newFirstLetterSurname.toUpperCase();

let newLastSurname = surname.substr(1);
newLastSurname = newLastSurname.toLowerCase();

let newSurname = newFirstLetterSurname + newLastSurname;

newName === name && newSurname === surname ?
 console.log('Name remained unchanged') :
 console.log('Name was converted')





