const errorHandling = (res, err) => {
    return res.status(500).json({
        error: err.message
    })
}

module.exports = {
    errorHandling
}