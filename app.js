// require important modules
require("express-async-errors")
const express = require("express")
//const multer = require('multer')
const ip = require('ip');
const body_parser = require("body-parser")
let cors = require('cors')
require('dotenv').config()

// create our App
const app = express()
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use(cors());

require("./startup/routes")(app)
require("./startup/db")

app.get('/files/:fileType/:fileId', (req, res) => {
    const {fileId, fileType} = req.params
    res.sendFile(`./upload/${fileType}/${fileId}`, {root: __dirname});

    //http://localhost:8088/files/images/1.jpg
});

app.use((req, res) => {
    res.status(404).send("404 not Found.")
})

const port = process.env.PORT || 9009
app.listen(port, (err) => {
    console.log(`start server  http://${ip.address()}:${port}`)
});


