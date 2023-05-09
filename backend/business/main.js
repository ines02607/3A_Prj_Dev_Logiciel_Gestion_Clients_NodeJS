// importation des modules
const express = require("express");
const router = express.Router();
const {addUser,getJSON,modifUser,deleteUser,check_field} = require("../data/main.js");// récuperer les fonctions de ../data

// Récupération de requête POST
router.post("/", function (req, res) {
    if(check_field(req.body) == 1) // permet de vérifier le champ email
    {
        // on ajoute l'utilisateur
        addUser(req.body);
    }
    else
    {
        console.log("Impossible d'ajouter le client car les champs sont mal renseigné");
        //informer l'utilisateur qu'il y a un problème
    }
    // on redirige vers la liste
    res.redirect("http://localhost:3000/liste.html");
});

// Récupération des requêtes GET
router.get("/", function (req, res) { // récupère la requète "GET"
    res.send(getJSON());
});

// Récupération de requète "POST"
router.post("/modif", function (req, res) { 
    // Clic vers le bouton modifier via id "changement"
    if(req.body.changement == "modifier")
    {
        // on vient appeler la fonction de modification du user
        modifUser(req.body);
    }
    else
    {
        // Si on appuie sur l'autre bouton => supprimer
        deleteUser(req.body);// on vient appeler la fonction qui supprimer un user
    }
    // On vient rediriger vers la liste principale
    res.redirect("http://localhost:3000/liste.html");
});

// On vient récupérer les requetes POST
router.post("/liste", function (req, res) { // récupère la requète "POST"
    // Clic sur le bouton via id "supprimer"
    if(req.body.bouton == "supprimer")
    {
        // on vient appeler la fonction qui supprimer un user
        deleteUser(req.body);
    }
    // On vient rediriger vers la liste principale
    res.redirect("http://localhost:3000/liste.html");
});

// On exporte les modules comme 'router'
module.exports = router;
