/**************************************************************************************************************
 ***********************-WJANV -19/10/2021- On appelle notre ID et le Stocke dans une Variables ---*****************************/

let cube = document.getElementById("couleurAleatoire");

/**************************************************************************************************************
 ***********************-WJANV -19/10/2021- On appelle notre ID et le Stocke dans une Variables ---*****************************/

cube.addEventListener("click", (maCouleurAleatoire));
//
function maCouleurAleatoire() {
    cube = document.getElementById("couleurAleatoire");
    let diese = "#"; // Ici ce symbole va nous permettre que les nombres Hexadecimal fonctionnent que ce soit ici ou en CSS 
    let chiffreLettre = "0123456789ABCDEF"; // Ici j'applique les 16 symboles du système hexadécimal
    /* Nous declarons notre boucle*/
    for (let i = 0; i < 16; i++) //Ici notre boucle tournera 16x  
    {
        //Ici nous avons une opération pour assemblé le diese avec les 16symbole hexadécimal.
        diese = diese + chiffreLettre[Math.floor(Math.random() * 16)]; // Ici nous avons mis x16 parce que c'est le nombre hexadécimal en réalité il va representez le F
        cube.style.backgroundColor = diese; // Ici nous avons définit un emplacement oû se produira le changement aléatoire de couleur 
    }
    console.log() // La console a été utlisé pour décteter les erreurs de code ou de syntaxe .. 
}