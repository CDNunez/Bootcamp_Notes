//! Objects

let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'Spider-Man',
    age: 25,
    active: true
}

/* 
* Object Literal 
    When our values are written within our keys.
        - Hard Coded

* Structure

    keyword objectName = {
        key: value,
    }

* Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */]
    },
    currently_running: true,
}

// console.log(theSimpsons.genre); // dot notation
// console.log(theSimpsons['genre']); // square bracket notation

// console.log(theSimpsons.seasons["season one"]);
// console.log(theSimpsons.seasons["season one"][1].episode_title);

theSimpsons.characters = ['Homer','Marge','Bart','Lisa','Maggie'];
// console.log(theSimpsons);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push('Ned Flanders');
// console.log(theSimpsons.characters);

theSimpsons.currently_running = false;
console.log(theSimpsons);

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

let prevDate = theSimpsons.seasons["season one"][1].aired;

theSimpsons.seasons["season one"][1].aired = '1990-01-14';
console.log(theSimpsons.seasons["season one"][1].aired);
console.log(prevDate);

