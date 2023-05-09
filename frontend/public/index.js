const table = document.getElementById("client-list");
const clientsPerPage = 300;
let currentPage = 0;
let pages = [];

// ================ Affichage des clients ===============
fetch("/vroom")
    .then((response) => response.json())
    .then((customers) => {
        pages = paginate(customers, clientsPerPage);
        renderPage(pages[currentPage]);
        renderPagination();
    });

// ================ Fonction de pagination ================
function paginate(clients, clientsPerPage) {
    const pages = [];
    for (let i = 0; i < clients.length; i += clientsPerPage) 
    {
        pages.push(clients.slice(i, i + clientsPerPage));
    }
    return pages;
}

// ================ Fonction d'affichage de la liste ================

function renderPage(page) {
    table.innerHTML = "";
    page.forEach((customer, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = customer.id;
        row.insertCell(1).innerHTML = customer.first;
        row.insertCell(2).innerHTML = customer.last;
        row.insertCell(3).innerHTML = customer.company;
        row.insertCell(4).innerHTML = customer.country;
        row.insertCell(5).innerHTML = customer.email;
        row.insertCell(6).innerHTML = formatDateTime(customer.created_at);

        // Ajout du bouton Modifier :
        const editButton = document.createElement("button");
        editButton.innerText = "Modifier";
        editButton.className = "button2";
        editButton.idName = "editButton";
        row.insertCell(7).appendChild(editButton);

        // Ajouter un gestionnaire d'événements pour le bouton "Edit"
        editButton.addEventListener("click", () => {
        // Rediriger l'utilisateur vers la page "modifier.html" avec l'identifiant unique du client
            window.location.href = `/modif.html?id=${customer.id}`;
        });
        
        // Ajout du bouton Supprimer
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Supprimer";
        deleteButton.className = "button4";
        row.insertCell(8).appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            // Rediriger l'utilisateur vers la page "suppr.html" avec l'identifiant unique du client
            window.location.href = `/suppr.html?id=${customer.id}`;
        });

    });
}

// ========== Fonction de formatage de la date et de l'heure ===============
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} à ${hours}:${minutes}`;
}

// ============== Pagination des clients (300 par pages) ===============

function renderPagination() {
    const paginationContainer = document.querySelector(".pagination-container");
    const paginationList = paginationContainer.querySelector(".pagination");
    const prevBtn = paginationList.querySelector(":first-child");
    const nextBtn = paginationList.querySelector(":last-child");
    paginationList.innerHTML = "";

    if (pages.length <= 1) {
        paginationContainer.style.display = "none";
        return;
    }

    for (let i = 0; i < pages.length; i++) {
        const pageBtn = document.createElement("li");
        pageBtn.classList.add("page-item");
        pageBtn.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            renderPage(pages[currentPage]);
            updatePagination();
        });
        paginationList.insertBefore(pageBtn, nextBtn);
    }

    function updatePagination() {
        const currentPageBtn = paginationList.querySelector(".active");
        if (currentPageBtn) {
            currentPageBtn.classList.remove("active");
        }
        paginationList.children[currentPage].classList.add("active");
    }

    paginationContainer.style.display = "block";
    updatePagination();
}
