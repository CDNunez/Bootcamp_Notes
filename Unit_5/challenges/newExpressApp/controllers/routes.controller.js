const router = require('express').Router();
const db = require('../data.json');
const { errorHandling } = require('../utils/helpers');

// const errorHandling = (res, err) => {
//     return res.status(500).json({
//         error: err.message
//     })
// }

router.get('/', (req,res) => {
    try {
        // console.log(req);
        res.status(200).json({
            results: db,
            timestamp: req.timeStamp
        })
        // console.log(db);

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err);
    }
});

router.get('/find-id/:id', (req,res) => {
    try {
        let { id } = req.params;

        let results = db.filter(i => i.id == id);
        console.log(results);

        if(results.length !== 0) {
            res.status(200).json({
                results: results[0],
                timestamp: req.timeStamp  
            })
        } else {
            throw new Error('No book!')
        }

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err)
    }
});

router.get('/query/', (req,res) => {
    try {
        const {title} = req.query;

        let results = db.filter(i => i.title.toLowerCase() == title.toLowerCase())

        if(results.length > 0) {
            res.status(200).json({
                // results: {title: `${title}`},
                results: results[0],
                timestamp: req.timeStamp
            })
        } else {
            throw new Error('Title not found')
        }

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res,err);
    }
});

router.post('/titleAuthor', (req,res) => {
    try {
        const { title, author } = req.body;
        
        res.status(200).json({
            title: title,
            author: author,
            timestamp: req.timeStamp
        })

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err)
    }
})

module.exports = router;