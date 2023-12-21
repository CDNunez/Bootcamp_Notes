const mongoose = require('mongoose');

const Vehicle = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    //tasks to be added
});

module.exports = mongoose.model('Vehicle', Vehicle);