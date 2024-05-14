// recuperation id de l element table

var rIndex,
table = document.querySelector(".table");


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


// ajout d une ligne dans le tableau
function addHtmlTableRow()
{
//event.preventDefault();
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
   
    livre = document.getElementById("livre").value,
    auteur = document.getElementById("auteur").value,
    anneePub = document.getElementById("anneePub").value;
    sup = document.getElementById("sup").value;

cell1.innerHTML = livre;
cell2.innerHTML = auteur;
cell3.innerHTML = anneePub;
cell4.innerHTML = sup;




localStorage.setItem("livre", document.getElementById("livre").value);
localStorage.setItem("auteur", document.getElementById("auteur").value);
localStorage.setItem("anneePub",document.getElementById("anneePub").value );


}
}

// Incrementation du tableau , recuperation du l index

function selectedRowToInput() {
    console.log("selectedRowToInput called");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            console.log("Row clicked");
            rIndex = this.rowIndex;
            console.log("Row index:", rIndex);
            document.getElementById("livre").value = this.cells[0].innerHTML;
            document.getElementById("auteur").value = this.cells[1].innerHTML;
            document.getElementById("anneePub").value = this.cells[2].innerHTML;
            document.getElementById("sup").value = this.cells[3].innerHTML;
        };
    }
}
selectedRowToInput();


// la fonction marquerlu ici

function marquerluHtmlTbleSelectedRow(){
    console.log("lu");
    table = document.querySelector(".table");


    livre = document.getElementById("livre").value,
    auteur = document.getElementById("auteur").value,
    anneePub = document.getElementById("anneePub").value;

   // document.getElementById("livre").style.textDecoration="line-through";
 //document.getElementById("auteur").style.textDecoration="line-through";
   //document.getElementById("anneePub").style.textDecoration="line-through";


}
//marquerluHtmlTbleSelectedRow();


function removeSelectedRow()
{
table.deleteRow(rIndex);
// supprimer un input
document.getElementById("livre").value = "";
document.getElementById("auteur").value = "";
document.getElementById("anneePub").value = "";

localStorage.setItem("livre", document.getElementById("livre").value);
localStorage.setItem("auteur", document.getElementById("auteur").value);
localStorage.setItem("anneePub",document.getElementById("anneePub").value );

}



