// Importation des modules
const fs = require("fs");

// ============= Fonction d'ajout d'un user ================
const addUser = (options) => {
    const fileData = fs.readFileSync("./backend/data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    if (JSONData.length == 0) {
        options.id = 1; // quand le tableau est vide, stocke 1 dans l'id
    }
    else {
        options.id = Math.max(...JSONData.map(e => e.id)) + 1; // ajouter l'id : incrémente l'id par rapport au client précédent
    }
    options.created_at = (new Date()).toUTCString(); // ajouter la date de création du client
    JSONData.push(options);
    fs.writeFileSync("./backend/data/info.json", JSON.stringify(JSONData)); // save it
};

// ============= Fonction de modification d'un user ================
const modifUser = (options) => {
    const fileData = fs.readFileSync("./backend/data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    let rang = find_rank(JSONData,options);
    JSONData[rang].last = options.last; // Permet d'écrire par dessus les champs existants
    JSONData[rang].first = options.first;
    JSONData[rang].email = options.email;
    JSONData[rang].company = options.company;
    JSONData[rang].country = options.country;

    fs.writeFileSync("./backend/data/info.json", JSON.stringify(JSONData)); // save it
};

// ============= Fonction de suppression d'un user ================
const deleteUser = (options) => {
    // supprime un utilisateur
    console.log(`On va supprimer le client portant l'id : ${options.id}`);
    const fileData = fs.readFileSync("./backend/data/info.json", "utf-8");
    let JSONData = JSON.parse(fileData);
    JSONData.splice(find_rank(JSONData,options), 1); // supprime "1" élément en position "options.id-1" 
    fs.writeFileSync("./backend/data/info.json", JSON.stringify(JSONData)); // save it
};

// ============= Constante de renvoie du fichier JSON ================
const getJSON = () => {
    // renvoie le JSON intact
    const fileData = fs.readFileSync("./backend/data/info.json", "utf-8").toString();
    return fileData;
};

// ============= Fonction de recherche d'un rang à partir de l'id dans un fichier JSON ================
function find_rank(content,more) // content : le JSON, more : un objet du JSON
{
    let rang;
    let compt = 0;
    for (let text of content) // si il y a des trou, cet boucle va chercher le rang de l'id 
    {
        if (text.id == more.id) rang = compt;
        compt++;
    }
    return rang;
}

// ============= Constante de vérification des champs du formulaire ================
const check_field = (options) => {
    // Fonction de vérification de l'email entré
    function checkEmail(email) {
        var re = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
        return re.test(email);
    }
    // Fonction de vérification du nom entré
    function checkName(name) {
        return isNaN(name);
    }

    if (checkEmail(options.email) && checkName(options.last)) {
        return 1;
    } else {
        return 0;
    }
};
// Exportation des fonctions pour une utilisation dans un autre fichier
module.exports = { addUser, getJSON, modifUser, deleteUser,check_field}; 