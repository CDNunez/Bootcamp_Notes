//! Dependencies
require('dotenv').config(); // dependency to allow environmental variables.
const express = require('express');
const app = express();
const PORT = "port number here"; // need to connect to established port. 

//! Imports
// Will need connections to controllers

//! Middleware
app.use(express.static(`${__dirname}/public`)); // links to public/index.html file.
app.use(express.json()); // allows server to accept json as data to process.
app.use(express.urlencoded({extended: true})); // allows us to send data back to the browser.

//! Routes
// Will establish routes once controllers have been imported

//! Connection
app.listen(PORT, () => console.log(`Server Running: ${PORT}`));