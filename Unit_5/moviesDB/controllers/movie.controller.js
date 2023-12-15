const router = require('express').Router();
const Movie = require('../models/movie.model');
const { errorResponse } = require('../utils');

//TODO POST
router.post('/', async (req, res) => {
    try {

        //1. Pull data from client (body)
        const {
            title, genre, rating, length, releaseYear
        } = req.body;

        //2. Create a new object using the model
        const movie = new Movie({
            title, genre, rating, length, releaseYear
        });

        //3. Save the object to the DB
        const newMovie = await movie.save();

        //4. Response to client
        res.status(200).json({
            message: `${newMovie.title} added to collection`,
            newMovie
        })

    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO GET All
router.get('/', async (req, res) => {
    try {
        /* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Test the route within Postman
        
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
        
        Hint: parameters within method are optional
*/
    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO GET One
router.get('/', async (req, res) => {
    try {
        /* 
!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/
    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO Get All by Genre
router.get('/', async (req, res) => {
    try {
        /* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider query casing within the endpoint.
            - hint: conditional w/ looping
        - Test the route within Postman
*/
    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO PATCH/PUT One
router.patch('/', async (req, res) => {
    try {

    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO DELETE One
router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        errorResponse(res, err)
    }
});


module.exports = router;