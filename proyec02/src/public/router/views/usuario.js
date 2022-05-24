const { render } = require("ejs");
const express = require("express");
const { json } = require("body-parser");
const router = express.Router();
const request = require("request");

router.get("/", (req, res) => {
    req.session = null;
    res.render("hola mundo");
})

module.exports = router;