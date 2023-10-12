/* 
    (1)        (2)
    let hi = () => {
        console.log('hi');
    }

    1: We need to set the fat arrow function to a variable.
    2: We use the "fat arrow" to signify its a function.

    - arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations.
        - Do NOT get hoisted.
*/

//! Concise Body
let hi = () => console.log('Hi!');

//! Block Body
let hello = () => {
    let greeting = "Hello";
    let moreInfo = "Steve"
    return `${greeting}, ${moreInfo}`;
}

console.log(hello());

let apples1 = (x) => `There are ${x} apples.`;

let apples2 = x => {
    return `There are ${x} apples.`;
}

console.log(apples1(1));
console.log(apples2(10));

let apples3 = x => `There are ${x} apples.`;

let apple4 = (x,y) => `There are ${x+y} apples.`;

/* 
    let hi = () => {
        (1)
        return 'hi';
    }
        (2)       (3)
    let newName = hi();

    console.log(newName);

    1. The keyword that brings our data out of our function.
    2. We need a new variable to hold the value of the return.
    3. When called, the function becomes the value of the return.
*/

let firstName = fName => 'steve';
let myName = firstName();
console.log(myName);

function capitalizeName(name) {
    let capName = '';

    for(l in name) {
        // console.log(l)
        if(l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }

    return capName;
}

const newName = capitalizeName('erIC');
console.log(newName);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/

// function tipCalc(subTotal, tip) {
//     let newTotal = subTotal + tip;
//     // console.log(newTotal)
//     return newTotal
// }

// let total = tipCalc(15,3)
// console.log(total);

function tipCalc(subTotal) {
    let tip = subTotal * .2;
    let total = subTotal + tip;
    return total.toFixed(2);
}

let total = tipCalc(19.72)
console.log(total);