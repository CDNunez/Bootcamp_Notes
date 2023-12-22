const router = require('express').Router();
const { Task, Vehicle } = require('../models');
const { success, error, incomplete } = require('../helpers');

//! Create Task for Vehicle
router.post('/:vehicle', async (req,res) => {
    try {
        //1. Obtain data from our user
        const { title, date, details, resolved } = req.body;

        //2. Capture the ID from our parameter.
        const { vehicle } = req.params;

        //3. Check if Vehicle exists and respond if not.
        const vehicleCheck = await Vehicle.find({_id: vehicle});

        if(!vehicleCheck) throw new Error('Vehicle not available');

        //4. Build our task object we want to add to the collection.
            //a: What if a user doesn't provide a date?
            //b: If the task isn't noted as resolved, how can we default to false?
            //c: Set the ID of the vehicle within the object.
        const task = new Task({
            title, 
            date : date ? date : new Date(), 
            details, 
            resolved : resolved ? resolved : false,
            vehicle_id: vehicle
        })

        //5. Save object to the database.
        const newTask = await task.save();

        //6. Structure how we may want to save task object for the vehicle it is being assigned to.
            //ex: We wouldn't need to store the vehicles ID within the tasks array of that vehicle.
        const forVehicle = {
            id: newTask._id,
            title: newTask.title,
            date: newTask.date,
        }

        //7. Update our Vehicles tasks array so that it may reference it.
        await Vehicle.findOneAndUpdate(
            {_id: vehicle},
            {$push: {tasks: forVehicle}}
        )

        //8. Response to User (success/incomplete)
        newTask ?
            success(res, newTask) :
            incomplete(res);
        
    } catch (err) {
        error(res,err);
    }
})

module.exports = router;