// Single line comment: ctrl+/ or cmd+/

/* 
Multi line comment:
shift+alt+a or shift+option+a
*/

// * Variables

/* 
    Variable are named containers for storing data values.
    
    We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable through 3 different keywords:
    1. var
    2. let
    3. const
    4. (none/no keyword)
*/

let a = 2;

//  (1)   (2)  (3)  (4)
    let    b    =   1;

/* 
    1. Use JS keyword to denote the creation of a variable.
    2. The name of the variable, what the developer refers to/calls on to get the stored value. Variable names should be to the point/pertain to the data.
        - Should be camelCase, lower case first letter & upper case each next starting letter.
    3. Assignment operator: equal sign, =
    4. The initial variable value, it's starting data value.
*/

// * Variable Declaration Vs Initialization

// Declaration: declaring the variable but not assigning it.
let x;
console.log("Declaration of x: ", x); // Declaration of x:  undefined

let apple;

// Initialization: variable is given/set a value.
let y = 4;

let life = 42;

// Reassign a variable value, reassign declared or initialized variables (not const keyword variables)
x = 20;
console.log("Initialization 1: ", x);

x = 100;
console.log("Initialization 2: ", x); 

apple = 12;


// * Assigning to Other Variables / create variables from variables! 

let firstName = "Kate"; // string datatype 
let lastName = "Lockhart";

let fullName = firstName + " " + lastName;
let fullN = firstName + lastName;

/* 
    * CONSOLE 

    - A place to see text output / code results. 
    - There is a console object attached to the browser (web).
    - We have a console in VSC to view results/what is logged. 

    .log(), this is the log method of the console, log will print whatever it is passed
*/

console.log(fullName); // Kate Lockhart

console.log(2+2); // 4

console.log(x);


// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

today = "Super!";
// javaScript = "Meh."; // TypeError: Assignment to constant variable.

console.log(today, javaScript);