function affichage()
{   var recuperation2 = document.getElementById('recherche');
	var recuperation1 = document.getElementById('Here');
	recuperation2.style.display = "none";
	recuperation1.style.display = "block";
}

setTimeout ( function() { alert ("Hey le site xxxvidsxxxest trop bien. Viens dessus stp please") }, 4000 ) ;

function submitform()
{
var site = " https://www.google.fr/#q=";
var query = document.getElementById("searchbar").value;
var win = window.open(site.concat(query), '+');
win.focus();
}


