module.exports = ((error, req, res, next) => {
    console.log(`error From Middleware/error.js ${error}`)
    res.status(500).send("error From Middleware/error.js\n" + error)
})
