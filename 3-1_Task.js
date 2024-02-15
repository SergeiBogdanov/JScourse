/* 
Exercise:
In the password variable, write a string with any arbitrary password. Check the strength of your password. 
A password is strong when it contains at least four characters and also contains at least one of the characters '-', '_'. 
Print the messages "Password is strong" or "Password is not strong enough" to the console.
*/

let password = '_-a';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Password is strong');
} else {
    console.log('Password is not strong enough');
}





