const express = require('express');
const router = express.Router();
const {lang} = require("../models")


router.get("/:id?", async (req, res) => {
    const result = await lang.findAll();
    res.status(200).json(result)
})

module.exports = router;