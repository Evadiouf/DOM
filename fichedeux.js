// Tableau creation
let tables =[
    {livre:'Chambre Sept', auteur:'Faty Dieng',anneePub:'06/02/2024'},
    {livre:'Romance', auteur:'ZAC',anneePub:'06/02/2026'},
    
]
const table = document.querySelector(".table");
const tblbody=document.createElement("tbody");

function createTable() {
    for (let index = 0; index <3; index++) {

        let row= document.createElement("tr");
        // bouton de supprimer
        buttoncell=document.createElement("td");
        deleteButton=document.createElement("button");
        let buttonText=document.createTextNode("SUPPRIMER");
        deleteButton.setAttribute("class","sup-delete");
        deleteButton.appendChild(buttonText);
        
        

    for (let element = 0; element < tables.length; element++) {

        // Ajout des td

        const cell= document.createElement("td");
        const cellText=document.createTextNode();
        buttoncell.appendChild(deleteButton);
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.appendChild(buttoncell);
        }
        
        tblbody.appendChild(row)
    }
    table.appendChild(tblbody)
    document.body.appendChild(table)
}

createTable();
