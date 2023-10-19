//! Iteration Methods
/* 
    - Do not destroy the original array
    - take in callback function
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

//* arrow function w/ block body
const filteredFruit = fruits.filter(fruit => {
    // console.log('Parameter: ', fruit)
    let result = fruit !== 'mango';
    // console.log('Inside Filter: ', result);
    return result;
});

// console.log(filteredFruit);

let fruit1 = 'pineapple';
// console.log(fruit1[0]);
// console.log(fruit1.includes('apple'))

//* arrow function w/ concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filteredFruit2);

//* Function Example
function removeMango(fruit) {
    // console.log(fruit);
    let results = fruit !== 'mango';
    // console.log(results);
    return results;
}

const filterFruit3 = fruits.filter(removeMango);
// console.log('Filtered: ', filterFruit3);
// console.log('Original: ', fruits);

// console.log(removeMango('mango'));

/* 
!   Challenge: 
        How do you remove the 5s from the array?
        Store it in a new variable and console.log that variable
*/
let myNumberArray = [3, 5, 7, 3, 5, 5, 5, 2, 7, 2, 12, 5];

function removeFive(num) {
    return num !== 5;
}

const noFives = myNumberArray.filter(removeFive)
console.log(noFives);

let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

movies.push({ name: "It", category: 'Horror' });
movies.push({ name: "Get Out", category: 'Horror' });
movies.push({ name: "Taken", category: 'Action' });

const actionMovies = movies.filter(movie => movie.category === 'Action');
const horrorMovies = movies.filter(movie => movie.category === "Horror");

console.log('Horror: ', horrorMovies);
console.log('Action: ', actionMovies);

//! .forEach()
let newFoodList = [
    'apple', 'pear', 'mushroom', 'cheese', 'peach'
];

// for(let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i])
// }

newFoodList.forEach((item, i) => {
    console.log('ForEach: ', item, "index: ", i);
});

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movieList = ["Matrix", "Babe", "Little Mermaid", "The Two Towers"];

movieList.push('Aladdin');
movieList.splice(2, 1, 'Barbie');

// movieList.forEach((item,index) => console.log('Movie:', item, index));
movieList.forEach((item, index) => {
    console.log('Movie:', item, index)
});
// movieList.forEach((function(item) {
//     console.log(item);
// }))


//! .find()
let tmnt = [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character));

character = 'April';
console.log('Find Again: ', tmnt.find(c => c == character));

character = 'Splinter';
tmnt.find((c, i) => console.log('Index: ', c == character, "index: ", i))

//! .map()
/* 
    - similar to a .forEach()
    - takes a callback function (cb)
*/
let numArray = [];
let fizzBuzzArray = [];

for (let i = 0; i < 101; i++) {
    numArray.push(i);
}

numArray.map(x => {
    if (x % 15 === 0) {
        fizzBuzzArray.push(x)
    };
});

console.log(fizzBuzzArray);

/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    console.log(revArr);
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

