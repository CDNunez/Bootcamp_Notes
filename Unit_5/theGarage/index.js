//! Dependencies
require('dotenv').config(); // dependency to allow environmental variables.
const express = require('express');
const app = express();
const PORT = process.env.PORT; // need to connect to established port. 

//! Imports
// Will need connections to controllers
const { db } = require('./db');
const { vehicleController, taskController } = require('./controllers');

//! Middleware
app.use(express.static(`${__dirname}/public`)); // links to public/index.html file.
app.use(express.json()); // allows server to accept json as data to process.
app.use(express.urlencoded({extended: true})); // allows us to send data back to the browser.

//! Routes
// Will establish routes once controllers have been imported
app.use('/vehicle', vehicleController)
app.use('/task', taskController);

//! Connection
const server = async () => {
    db();

    app.listen(PORT, () => console.log(`Server Running: ${PORT}`));
}

server();