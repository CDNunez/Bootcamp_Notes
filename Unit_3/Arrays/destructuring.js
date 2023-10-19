//! Array Destructuring
/* 
    - Syntax is on the left side of assignment operator
    - Great for puling info out of an array and assigning data to it's own variable.

*/

const fullName = ['Jane', 'Doe'];

const [firstName, lastName] = fullName;

// const firstName = fullName[0];
// const lastName = fullName[1];

// console.log(firstName, lastName);

// console.log(`Hello Mrs. ${lastName}`);

//! Spread
/* 
    - denoted by three consecutive periods: ...
    - pulls out all elements of an array and gives them to you as standalone list of elements.

* Concept of the spread operator - NOT syntax

const fullName = [ 'Rocket', 'Racoon' ];

...fullName // 'Rocket', 'Racoon'

const elements = ...fullname;

*/

const copiedFullName = [...fullName];
// const copiedFullName = [fullName];
// console.log(copiedFullName);

fullName.push('Mrs.');
// console.log(fullName, copiedFullName);

// console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(Math.min(...prices));

//! Rest
const fullName2 = [
    'Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973},
    'testOne', 2, 'test3', 4, true, false
];

const [ fName, lName, , , ...otherInfo ] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);

const [,,,birthday] = fullName2;
console.log(birthday);

