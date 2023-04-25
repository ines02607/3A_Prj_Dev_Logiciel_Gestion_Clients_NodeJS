// ===========================================
// 			Lecture des fichiers
// ===========================================

// on définie fs pour la lecture du fichier json
const fs = require("fs");
// on vient lire le fichier users.json
let rawdata = fs.readFileSync("users.json");
// on manipule le fichier via cet objet nommé tab
let tab = JSON.parse(rawdata);

// ===========================================
// 			Calcul des occurences
// ===========================================

const occurence = { 
    occurence : function calculOccurence(tab, motcle)
    {
    // on crée un tableau de sortie vide
        let tab2 = [];
        // on utilise forEach pour chaque itération du tableau en entrée
        tab.forEach((x)=> {
        // On vérifie si il y a déjà un objet qui contient la valeur cherchée dans le tableau de sortie
        
            if(tab2.some((val)=>{ return val[motcle] == x[motcle] ;})
            ){
                
                // Si oui, on incrémente l'occurence de 1
                tab2.forEach((k)=>{
                    if(k[motcle] === x[motcle])
                    {
                        k["occurrence"]++ ;
                    }
                })
                
            }//test
            else
            // Sinon, on créé un nouvel objet dans le tableau et initialise l’objet avec le nom de la clé fournie
            {
            // et on initialise l'occurrence à 1
                let a = {};
                a[motcle] = x[motcle];
                a["occurrence"] = 1 ;
                tab2.push(a);
            }
        })
        // on retourne le tableau de sortie avec noms des objets et occurences
        return tab2;
    }
};

// ===========================================
// 			Lien entre fichiers
// ===========================================

module.exports = occurence;