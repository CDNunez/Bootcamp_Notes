const router = require('express').Router();

router.post('/register', (req,res) => {
    console.log('in Auth Controller: ', req.datePosted);
    console.log('body: ', req.body);

    try {
        const { firstName, lastName, email, password } = req.body;
        // console.log(potato)
        res.status(200).send({
            fullname: `${firstName} ${lastName}`,
            email: email,
            password: password,
            date: req.datePosted,
        });
    } catch (err) {
        res.status(500).send(
            `<img src="https://http.cat/500" alt="status code 500"/>`
        )
    }

})

module.exports = router;