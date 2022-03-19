module.exports= function () {
    const db = require('../config/database')
// Testing the connection
    db.authenticate()
        .then(() => {
            console.log("Connection has been established successfully.")
        })
        .catch(err => {
            console.error("Unable to connect to the database:", err)
        })
}