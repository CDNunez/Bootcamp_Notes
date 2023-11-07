//! Global Variables
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

//* mock data
const myList = [
    'red','blue','green','purple','yellow','orange'
];

//! Event Listeners
buildBtn.addEventListener('click', buildTable);

//! Function to build and display
function buildTable() {
    // console.log('test');

    myList.forEach((color,i) => {
        //* Create
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        //* Assign values
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list.
        `;
        //* Set to a Parent
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);
    })

    shellDiv.style = `
        display: flex;
        align-items: space-around;
    `
}