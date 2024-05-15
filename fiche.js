


// verification des entrees
function checkEmptyInput()
{
var isEmpty = false,
    livre = document.getElementById("livre").value,
    auteur = document.getElementById("auteur").value,
    anneePub = document.getElementById("anneePub").value;

if(livre === ""){
    alert("livre Name Connot Be Empty");
    isEmpty = true;
}
else if(auteur === ""){
    alert("auteur Name Connot Be Empty");
    isEmpty = true;
}
else if(anneePub === ""){
    alert("anneePub Connot Be Empty");
    isEmpty = true;
}
return isEmpty;
}
// Modal
let modal=document.getElementById("modals")
let modalbutton=document.getElementById("addLivreModalButton")
let close=document.querySelector(".close")

modalbutton.onclick=function(){
    modal.style.display="block";
}

close.onclick=function(){
    modal.style.display="none";
}
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
        
        

    for (let element = 0; index < tables.length; element++) {

        // Ajout des td

        const cell= document.createElement("td");
        const cellText=document.createTextNode(Object.values(tables[index])[element]);
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
