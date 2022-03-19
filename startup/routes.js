const error = require("../middleware/error")

module.exports = function (app) {
    app.use("/api/v1/common", require('../routes/common'))
    app.use(error)//last middleware
}