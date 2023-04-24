fetch("/vroom", {
    method: "GET"
})
    .then((request) =>
        request.json())
    .then((data) =>
        buildTable(data)
    )
    .catch((error) => {
        console.error("Error:", error);
    });

function buildTable(text) {
    var table = document.getElementById("myTable");
    for (var i = 0; i < text.length; i++) {
        var row = `<tr>
                            <td><span class="p1-4">${text[i]["id"]}</span></td>
                            <td><span class="font-medium mb-0">${text[i]["last"]} ${text[i]["first"]}</span></td>
                            <td><span class="text-muted">${text[i]["company"]}</span></td>
                            <td><span class="text-muted">${text[i]["country"]}</span></td>
                            <td><span class="text-muted">${text[i]["email"]}</span></td>
                            <td><span class="text-muted">${text[i]["created_at"]}</span></td>
                            <td><button onclick="location.href='modif.html?id=${text[i]["id"]}'" type="button" class="button">Modifier</button></td>
                        </tr>`;
        table.innerHTML += row;
    }
}
/*
$(document).ready(function() {
  // Charger les données JSON
  $.getJSON("/data/info.json", function(data) {
    // Nombre d'éléments par page
    var pageSize = 10;
    
    // Nombre total de pages
    var pageCount = Math.ceil(data.length / pageSize);
    
    // Ajouter les éléments de la première page
    displayList(1);
    
    // Générer les boutons de pagination
    var pagination = $("#pagination");
    for (var i = 1; i <= pageCount; i++) {
      var button = $("<button>" + i + "</button>");
      pagination.append(button);
    }
    
    // Ajouter un gestionnaire d'événements aux boutons de pagination
    pagination.on("click", "button", function() {
      displayList($(this).text());
    });
    
    // Fonction pour afficher les éléments d'une page donnée
    function displayList(page) {
      var start = (page - 1) * pageSize;
      var end = start + pageSize;
      
      // Afficher les éléments de la page actuelle
      var list = $("#data");
      list.empty();
      for (var i = start; i < end && i < data.length; i++) {
        var item = $("<div>" + data[i].name + "</div>");
        list.append(item);
      }
      
      // Mettre à jour la classe active du bouton de pagination
      pagination.find("button").removeClass("active");
      pagination.find("button:nth-child(" + page + ")").addClass("active");
    }
  });
});
*/