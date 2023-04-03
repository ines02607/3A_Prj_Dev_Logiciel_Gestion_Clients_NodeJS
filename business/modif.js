const express = require("express");
const router = express.Router();
const {getJSON} = require("../data/main");



router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
    res.redirect("modif.html");
});

module.exports = router;
