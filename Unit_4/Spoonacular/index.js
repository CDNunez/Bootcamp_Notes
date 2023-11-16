import apiKey from "./key.js";

const baseURL = 'https://api.spoonacular.com/recipes/random';

let buildURL = `${baseURL}/?apiKey=${apiKey}`;

fetch(buildURL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));