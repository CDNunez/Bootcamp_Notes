const router = require('express').Router();
// Import Model
// Import helper functions

//! Create Task for Vehicle
router.post('/', async (req,res) => {
    try {
        //1. Obtain data from our user

        //2. Capture the ID from our parameter.

        //3. Check if Vehicle exists and respond if not.

        //4. Build our task object we want to pu to the collection.
            //a: What if a user doesn't provide a date?
            //b: If the task isn't noted as resolved, how can we default to false?
            //c: Set the ID of the vehicle within the object.

        //5. Save object to the database.

        //6. Structure how we may want to save task object for the vehicle it is being assigned to.
            //ex: We wouldn't need to store the vehicles ID within the tasks array of that vehicle.

        //7. Update our Vehicles tasks array so that it may reference it.

        //8. Response to User (success/incomplete)
        
    } catch (err) {
        
    }
})

module.exports = router;