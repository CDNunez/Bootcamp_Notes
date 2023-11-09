//* Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = []; // MOCK DATABASE

// console.log(form.sex);
// console.log(Object.values(form));
// console.log(form[3]);
console.log(table);

//* Event Listener
form.addEventListener('submit', e => {
    // console.log(e);
    e.preventDefault(); // stops the default refresh of the form element
    // console.log('HIT')

    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    // console.log(animal);
    animals.push(animal);

    form.reset(); // clears the inputs within the form
    form[0].focus(); // targets the first input within the form when it is "new"
    //* alt way: form.species.focus()

    displayTable();
})


//TODO: Display to a table (function)
function displayTable() {
    // console.log('DT: ', animals);

    
    while(table.firstChild) {
        // console.log(table.firstChild);
        table.removeChild(table.firstChild);
    }

    animals.forEach((animal, i) => {
        // console.log('loop', i, animal);
        //* Create
        let tr = document.createElement('tr'); // Will be the parent element for 'td'
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //* Assign
        id.textContent = i + 1;
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

        //* Append/Set
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}