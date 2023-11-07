/* 
!   DOM
        - Document Object Model
        - Only through the browser.

    Frame:
        - Document: HTML page (in the browser)
            - "document" - Is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web.

*   BOM
        - Broswer Object Model
        - "window" - global variable
        - various methods available
*/
// console.log('Test')

function askForStuff() {
    prompt();
}

// askForStuff();
console.log(document);
console.log(document.URL);
console.log(document.location); // same as .URL except it returns an object form.
console.log(document.title);
document.title = "DOM it";

//! Creating Our First Element
let h1 = document.createElement('h1');
// console.log(h1);

/* 
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node.
        - textContent: return the full text
        
        ex:
            <p>Hello <b>World</b></p>
        ~ innerText would return just "Hello"
        ~ textContent would return "Hello World"
*/

h1.innerText = 'Creating my first DOM element!';
// console.log(h1);

/* 
*   Chain of Events:
    1. Create the element
    2. Apply the value/properties
    3. Place the element
*/

// console.log(document.body);
document.body.appendChild(h1);

h1.style.color = "blue";
h1.style.textAlign = 'center';
// console.log(document.body.style)

let color = 'red';

h1.style = `
    text-shadow: 2px 2px 2px yellow;
    color: ${color};
    text-align: center;
`;

h1.className = 'h1-class-name';
// JS require camelCasing as "className" instead of "class" due to it being a keyword.
h1.id = 'set-id';

/* 
!  Finding Elements

*   HTMLCollection
        - An array-like object
        - Allows access to index, properties, and methods to help navigate and modify.
        - Does NOT allow to modify a group of elements all at once.
        - Can loop through it.
        - Can use .length property to get the size of the list.

    Accessing Multiple Elements requires these methods:
        - getElementsByTagName()
        - querySelectorAll()
        - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
console.log(li);

let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'green';

for(i of li) {
    i.style.color = 'green';
}

/* 
*   .querySelector()
        - Grabs first instance of an element or null if nothing found.
        - can target by ID, Class, or Element
            - will need to append # for ID
            - will need to append . for Class
*/

let firstLi = document.querySelector('li');
// console.log(firstLi);

let listTitle = document.querySelector('#listTitle');
// console.log(listTitle);
listTitle.style.textAlign = 'center';

let toDoList = document.querySelector('#toDoList');
// console.log(toDoList);

let classListItem = document.querySelector('.listItem');
// console.log(classListItem);

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
*/

let nodeListLi = document.querySelectorAll('li');
// nodeListLi[0].style.color = 'blue';
// console.log(nodeListLi);

let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');

newListItem.innerText = 'New Item';
// ul.append(newListItem);
ul.appendChild(newListItem);

let liClass = document.getElementsByClassName('listItem');
// console.log(liClass);

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        - DOM node method
        - requires an event to "listen fo" or type and a callback function.

    ex:
    node.addEventListener('click', () => {})

    Adding an item to the list:
        Step:
            - Capture the input
            - Access the parent element
            - Create a new element (li)
            - Assign value to attributes
                - "text from input"
            - Append to parent parent
*/

let btn = document.getElementById('submit');
let input = document.querySelector('#listInput');

// btn.addEventListener('click', e => {
    // console.log(e);
    // console.log('Someone clicked')
// })

btn.addEventListener('click', addItem);

function addItem() {
    // console.log(input.value);

    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = `
        color: blue;
    `;

    ul.appendChild(newItem);
}

