// permet de recupérer la ligne client correspondant à l'idée selectionné (avec le bouton)
fetch("/vroom", {
    method: "GET"
})
    .then((request) =>
        request.json())
    .then((data) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString); // permet de chercher les paramètre dans l'URL
        const id = urlParams.get("id"); // récupere l'id qui se trouctrouve dans l'URL
        let rang;
        let compt = 0;
        for(let text of data) // si il y a des trou, cet boucle va chercher le rang de l'id 
        {
            if(text.id == id) rang = compt;
            compt++;
        }
        let user = data[rang]; // stocke dans user la ligne du JSON correspondant à l'id choisit
        pre_rempli_JS(user);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

function pre_rempli_JS(options) {
    let last = document.getElementById("last"); // récupère l'id "last"
    let first = document.getElementById("first");
    let email = document.getElementById("email");
    let company = document.getElementById("company");
    let country = document.getElementById("country");
    let id = document.getElementById("id");
    last.value = options.last; // ajouter un "value" à l'input coté HTML
    first.value = options.first;
    email.value = options.email;
    company.value = options.company;
    country.value = options.country;
    id.value = options.id;
} 