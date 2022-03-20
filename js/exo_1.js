/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- on déclare une varible compteur ayant pour valeur 0 ---*****************************/
let compteur = 0;
/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- On appelle nos ID et les Stocke dans des Variables ---*****************************/
let plus = document.getElementById("compteur_plus");
let moin = document.getElementById("compteur_moin");
/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- On met un ecouteur sur chaque element ---*****************************/
plus.addEventListener("click", (generePlus));
moin.addEventListener("click", (generemoins));

/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- on déclare une function qui servira pour afficher le nombre qu'il y'a au compteur  ---*****************************/
function compt() {
    document.getElementById("place_pour_l'affichage").innerText = compteur;
}
/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- Notre premier function va nous permettre d'ajouter au compteur ---******************************/
function generePlus() {
    if (compteur < 20) {
        //oN VA INCrémenter +1 
        compteur++;
        compt();
    }

}
/**************************************************************************************************************
 ***********************-WJANV -18/10/2021- La deuxieme function va nous permettre d'enlever au compteur ---******************************/

function generemoins() {
    if (compteur > 0) {
        compteur--; // on va décrémenter -1 
        compt();
    }
}