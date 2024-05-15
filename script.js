let tables = [
    { livre: 'Romance', auteur: 'ZAC', annepublication: '07/08/2022' },
    { livre: 'Bienfait', auteur: 'Rachid', annepublication: '07/23/2021' },
    { livre: 'Passion', auteur: 'ZAC', annepublication: '07/23/2021' }
];

const table = document.querySelector('.table');
const tblbody = document.createElement('tbody');

// Fonction pour créer le tableau
function createTable() {
    for (let index = 0; index < tables.length; index++) {
        let row = document.createElement('tr');
        
        // Créer les cellules pour les propriétés de l'objet
        Object.values(tables[index]).forEach(value => {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(value);
            cell.appendChild(cellText);
            row.appendChild(cell);
        });

        // Créer la cellule et le bouton "SUPPRIMER"
        let buttonCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        let buttonText = document.createTextNode("SUPPRIMER");
        deleteButton.setAttribute("class", "delete-sup");
        deleteButton.appendChild(buttonText);
        buttonCell.appendChild(deleteButton);
        row.appendChild(buttonCell);

        // Ajouter un attribut ID pour la ligne
        row.setAttribute("id", "row-" + index);

        // Ajouter l'événement de suppression au bouton
        deleteButton.addEventListener('click', function() {
            tblbody.removeChild(row);  // Supprimer la ligne du tbody
        });

        tblbody.appendChild(row);  // Ajouter la ligne au tbody
    }

    table.appendChild(tblbody);  // Ajouter le tbody au tableau
    document.body.appendChild(table);  // Ajouter le tableau au body du document
}

createTable();  // Appeler la fonction pour créer le tableau

// Gestion de la modalité
let modal = document.getElementById("modals");
let modalbutton = document.getElementById("addLivreModalButton");
let close = document.querySelector(".close");

modalbutton.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// Ajouter un livre

let addAjouterButton = document.querySelector(".addAjouterButton");
addAjouterButton.onclick=function(event){
    event.preventDefault();
    const livre = document.getElementById("livre").value
    const auteur = document.getElementById("auteur").value
    const anneepub = document.getElementById("anneepub").value
   

   const  newtables = {livre , auteur,anneepub};
    tables.push(newtables);
    console.log("clic");
    let row = document.createElement('tr');
    let cell0 = row.insertCell(0);
    const cell0Text = document.createTextNode(livre);
    cell0.appendChild(cell0Text);
    row.appendChild(cell0);

    let cell1 = row.insertCell(1);
    const cell1Text = document.createTextNode(auteur);
    cell0.appendChild(cell1Text);
    row.appendChild(cell1);

    let cell2 = row.insertCell(2);
    const cell2Text = document.createTextNode(anneepub);
    cell0.appendChild(cell2Text);
    row.appendChild(cell2);



    //row.appendChild(buttonCell);
    table.appendChild(tblbody);  // Ajouter le tbody au tableau
    tblbody.removeChild(row);
    document.body.appendChild(table);  // Ajouter le tableau au body du document

}