/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- On appelle nos ID et les Stocke dans des Variables ---*****************************/
let btnAllume = document.getElementById("allume_eteint");
let p = document.getElementById("emplacement_texte");

/**************************************************************************************************************
 ***********************- WJANV -18/10/2021 -On Ajoute un Ecouteur sur cet élement ---*****************************/
btnAllume.addEventListener("click", (allumeEtEteint));
/**************************************************************************************************************
 ***********************-WJANV -18/10/2021 -On declare notre function qui contiendra notre code qui sera lue lors du click---*****************************/

function allumeEtEteint() {
    btnAllume = document.getElementById("allume_eteint").value; // je récupère la valeur de mon button avec le ".value" 
    console.log(btnAllume) // Je vérifie qu'il n'y pas d'anomalie
    if (btnAllume === "on") // Je vérifie la valeur de mon button si elle est de meme type ou de meme valeur 
    // Puis nous allons traitez la valeur qui a été récupéré 
    {
        // Ici on vient lui rajoutez une valeur supplémentaire en plus de "on" qui se toruve dans le html. 
        document.getElementById("allume_eteint").value = "off";
        p.innerHTML = "La Touche <mark> Off </mark> est Active "; // je lui défini un texte
        p.style.color = " rgb(79, 83, 60)";
        p.style.fontWeight = "bold"; // Je defini la couleur au texte
        p.style.fontSize = "18"; // on ajoute une taille au texte 
        allume_eteint.style.color = "red"; // on ajoute une couleur au button
        allume_eteint.innerHTML = "OFF" // Je change le texte html 

    } else {
        document.getElementById("allume_eteint").value = "on";
        p.innerHTML = "La Touche <mark> On </mark> est Active";
        p.style.color = "red";
        p.style.fontSize = "18";
        allume_eteint.style.color = "rgb(119, 119, 230)";
        allume_eteint.innerHTML = "ON"
    }
}