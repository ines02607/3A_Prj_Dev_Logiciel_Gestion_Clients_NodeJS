// --------------- MODULES IMPORT ---------------

const express = require("express");
const vroomRooter = require("./business/main.js");
const logger = require("morgan"); 

// --------------- SERVER SETUP ---------------


const app = express();
const port = 3000;  // Localhost Port
const User = require('./models/user.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://inesmazouz:yD6Kc9VmKUYzvQH@cluster2.qauexj1.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
app.use(logger("dev")); // permet d'avoir un retour des requetes sur le terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("public"));
app.use("/vroom", vroomRooter);

