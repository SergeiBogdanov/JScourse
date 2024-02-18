/*
Exercise:
Write a function that creates an array of email addresses that are not blacklisted. 
As arguments, the function should take: an array of strings with source email addresses, 
an array of strings with email addresses in the blacklist.
*/

let allEmails = [
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com',
    'user5@example.com',
    'user6@example.com',
    'user7@example.com',
    'user8@example.com',
    'user9@example.com',
    'user10@example.com'
];

let blacklistedEmails = [
    'user2@example.com',
    'user5@example.com',
    'user8@example.com'
];

function checkIncludes(emails, blacklist) {
    let validEmails = [];
    for (let i = 0; i < emails.length; i++) {
        if (blacklist.includes(emails[i])) {
            continue;
        }
        validEmails.push(emails[i]);
    }
    return validEmails;
}

console.log(checkIncludes(allEmails, blacklistedEmails));
console.log(checkIncludes(allEmails, blacklistedEmails));
