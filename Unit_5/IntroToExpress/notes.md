# Getting Started
- Create a `package.json`
  - In the terminal: `npm init -y` || `npm init`
    - initalizes our project.
  - An index of the project.
    - denote required dependecies to run the project.
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore.
  - tells our local repository to ignore the `node_modules` folder when backing up to GitHub.
    - node_modules folder
      - Provides us access to any "behind the scenes" code that helps run express and any dependency installed.
      - When we need to install/reinstall our node_modules, in the terminal we'll type `npm install`
- package-lock.json
  - locks project into required dependencies. Helps with our versioning.

## CRUD
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
  - GET | POST | PUT | DELETE depending on route
  - Body
    - raw
    - JSON
    - Make a JSON object

### Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code in our **middleware**:
```js
app.use(express.json());
```
- Provides us access to JSON files throughout the routes.

## MVC
- Stands for Model View Controller
- Archetecture pattern that helps our Separation of Concerns
- View: 
  - Browser, Postman, etc.
    - Application that interface with the server
- Controller: 
  - Part of the server application which handles logic.
- Model: 
  - Database schematic

## Middleware
- A function that accesses the request and response
- Has call stack
  - request
  - response
  - next
