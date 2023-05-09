// ====================== MAIN DU PROJET =================================

// On importe les modules nécessaires
const express = require("express");
const vroomRooter = require("./backend/business/main.js");
const logger = require("morgan"); 

// Paramètres du serveur 
const app = express();
const port = 3000; // on choisit un port local

// J'ai essayé de créer un lien vers MongoDB via le module mongoose

/*const User = require('./models/user.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://inesmazouz:yD6Kc9VmKUYzvQH@cluster2.qauexj1.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.post("/vroom", (req, res, next) => {
  delete req.body.id;
  delete req.body.created_at;
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'User enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});
*/

// Message dans le terminal
app.listen(port, () => {
    console.log(`App lancée sur le port ${port}`);
});


app.use(logger("dev")); // permet d'avoir un retour des requetes sur le terminal
app.use(express.json()); // lien entre express et json
app.use(express.urlencoded({ extended: true }));

// On vient relier aux fichiers statiques du FrontEnd
app.use(express.static("./frontend/public"));
app.use("/vroom", vroomRooter);
