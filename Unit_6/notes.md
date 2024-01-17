# React
- Created by Facebook
- Is a client-side JavaScript Library
- Quickly renders on the page.
- Companies transisitioning more to React.
  - Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX
  1. **Must** Export for it to be used.
  2. **Must** be imported to be used.
  3. **Must** be mounted to be used.
  4. **Must** only return **ONE** JSX Element.

# Creating a React App

- `npx create-react-app starting-react`
- **npx create-react-app [your-project-name]**
  - **npx create-react-app .** (within a directory)

## Points of Interest
- public
  - `index.html`: What is displayed to the browser.
- src
  - `index.js`: JavaScript being rendered to `index.html`.
  - `App.js`: Main point where components are mounted. This is being rendered within `index.js`.

# In Class Group Challenge Footer
```js
/* 
    - Create a new folder within the component folder for a footer.
        - Within it's proper folder, create a new component called "Footer" as a jsx.
    
    - Write a function that exports a single h6 element with a copyright.
    - Type in the current year.
    - Export the component.
    - Import the component within App.jsx
    - Mount at the bottom of the JSX being returned in App.jsx. 
        - note: it doesn't need to be fixed to the bottom of the browser page

    Bonus: Make the year dynamic so it is not hard coded and will change after this year.
*/
```

## About Me Challenge
```js
/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
```