const Vehicle = require('./vehicle.model');
const Task = require('./task.model');

module.exports = {
    Vehicle, Task
}

/* 
    - Exporting a simple object that references each model based off a key within it.
    - Can be destructured when importing into another file.
    - Easier to import into other files especially when importing several at a time.
*/