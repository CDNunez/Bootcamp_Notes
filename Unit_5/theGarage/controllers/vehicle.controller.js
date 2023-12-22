const router = require('express').Router();
// import Model/Schema
const { Vehicle } = require('../models')
const { error, success, incomplete } = require('../helpers');


//! CREATE
router.post('/', async(req,res) => {
    try {
        
        const { make, model, year, color } = req.body;
        if(!make) throw new Error('Please input a vehicle make.');

        const vehicle = await new Vehicle({
            make, model, year, color
        }).save();

        vehicle ? 
            success(res, vehicle) :
            incomplete(res);

    } catch (err) {
        error(res,err);
    }
});

//! GET ALL
router.get('/', async (req,res) => {
    try {

        const vehicles = await Vehicle.find();

        vehicles ?
            success(res,vehicles) :
            incomplete(res);
        
    } catch (err) {
        error(res,err);
    }
});





module.exports = router;