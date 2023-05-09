// Importation du module mongoose
const mongoose = require("mongoose");

// Définition d'un schéma pour MongoDB avec les différents champs
const userSchema = mongoose.Schema({
    last: { type: String, required: true },
    first: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    country: {type: String, required:true},
});

// On exporte sous la forme d'un modèle nommé 'User'
module.exports = mongoose.model("User", userSchema);
