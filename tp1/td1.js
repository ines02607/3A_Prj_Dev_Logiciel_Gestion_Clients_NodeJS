// TP1 - Méthode de Développement Logiciel
// Créateur : Inès Mazouz
// Classe : INFO 3A

/**
 * 
 * @param {string[]} tab list of xx 
 * @param {*} motcle 
 * @returns 
 */

// ===========================================
// 		Appel des autres fichiers js
// ===========================================

const occurence = require("./occurence.js");

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
// 				Saisi d'argument
// ===========================================

var arguments = process.argv; // on va ajouter l'argument à prendre en compte lors de la compilation
// soit country, soit company (au choix)
// on vient définir la clé à prendre en compte comme l'argument saisie lors de la compilation
let motcle = arguments[2];

// ===========================================
// 					Menu
// ===========================================

var readlineSync = require("readline-sync");
// Ligne de délimitation
console.log("\x1b[47m%s\x1b[49m", "\n");
// Affichage
console.log(" \x1b[1m\x1b[93m \n Bonjour ! Que souhaitez-vous afficher ? \x1b[39m \x1b[22m");
console.log(" \x1b[1m\x1b[37m \n 	> Taper 1 pour afficher les pays & leurs occurences \x1b[39m \x1b[22m");
console.log(" \x1b[1m\x1b[37m	> Taper 2 pour afficher les sociétés & leurs occurences \x1b[39m \x1b[22m");
console.log(" \x1b[1m\x1b[37m	> Taper un autre caractère pour sortir du menu ! \x1b[39m \x1b[22m");
// Ligne de délimitation
console.log("\x1b[47m%s\x1b[49m", "\n");

const nb = Number(readlineSync.question(""));

if (nb == 1)
{
    //Affichage à l'écran
	console.log(" \x1b[1m\x1b[93m \n Vous avez sélectionné : Pays & occurences \n \x1b[39m \x1b[22m");
	motcle = "country";
	var result = occurence.occurence(tab, motcle);
	// on vient effectuer un tri inverse (b - a pour un tri décroissant // a - b pour un tri croissant)
	result.sort(function(a,b) {return b.occurrence - a.occurrence}); // on précise qu'on compare des occurences
	// on vient retourner le résultat trié dans l'ordre décroissant
	console.table(result);
}
//else
else {
	if (nb == 2) 
	{ 
		//Affichage à l'écran
		console.log(" \x1b[1m\x1b[93m \n Vous avez sélectionné : Sociétés & occurences \n \x1b[39m \x1b[22m");
		motcle = "company";
		var result = occurence.occurence(tab, motcle);
		// on vient effectuer un tri inverse (b - a pour un tri décroissant // a - b pour un tri croissant)
		result.sort(function(a,b) {return b.occurrence - a.occurrence}); // on précise qu'on compare des occurences
		// on vient retourner le résultat trié dans l'ordre décroissant
		console.table(result);
	}
	else {
		console.log(" \x1b[1m\x1b[93m \n Vous avez demandé la sortie du menu. Aurevoir ! \n \x1b[39m \x1b[22m");
		}
}

// COMPILATION : node td1.js