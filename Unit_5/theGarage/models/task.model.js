const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: String,
    date: Date,
    details: String,
    resolved: Boolean,
    // connection to Vehicle
});

module.exports = mongoose.model('Task', Task);