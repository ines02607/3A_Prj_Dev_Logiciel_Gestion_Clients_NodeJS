// Importation des modules

const express = require("express");
const router = express.Router();
const {getJSON} = require("../data/main.js");

// Récupération des requêtes GET pour le remplissage des champs lors de la modification
router.get("/", function (req, res) {
    // on vient étudier le JSON
    res.send(getJSON());
    // on redirige vers la page MODIF
    res.redirect("modif.html");
});

// On exporte
module.exports = router;
