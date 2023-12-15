const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    )
}

module.exports = {
    errorResponse
}