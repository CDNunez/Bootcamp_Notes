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

//* Object.keys() - returns back an array of keys
// console.log(Object.keys(theSimpsons));

const listKeys = Object.keys(theSimpsons);
// console.log(listKeys);

//* Object.values() - returns an array of values
// console.log(Object.values(theSimpsons));
// console.log(Object.values(theSimpsons.seasons));

//* Object.assign() - copies all enumerable properties from one or more sources.

let objOne = {name: 'Bob',age:50};
let objTwo = {work: 'Manager'};

let newObject = Object.assign(objOne, objTwo);
// console.log(newObject);
// console.log(newObject.name);

let futurama = Object.assign(theSimpsons);
// console.log("Futurama: ", futurama);

//* delete object.key
// console.log('BEFORE: ', Object.keys(futurama));
delete futurama.currently_running;
// console.log('AFTER: ', Object.keys(futurama));

//* Object.freeze()
Object.freeze(theSimpsons);
theSimpsons.id = 2;
console.log(theSimpsons.id);