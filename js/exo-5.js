/**************************************************************************************************************
 ***********************- Information  ---********
 * Vous trouverez Ici toutes les documentations qui m'ont aidé à comprendre 
 * l'évènement Keypress,keydown et keyup.
 *  -------------------------------------------------
 * https://fr.javascript.info/keyboard-events
 * https://www.w3schools.com/jsref/event_onkeypress.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
 * https://www.google.fr/amp/s/www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-
 * https://developer.mozilla.org/fr/docs/Web/API/Document/keypress_event

 *********************/
/**************************************************************************************************************
 ***********************-WJANV- 21 /10/2021- On appelle nos ID et les Stocke dans des Variables ---*****************************/

let presse = document.getElementById("presse_clavier");
let affiche = document.getElementById("text_press");
let content = document.getElementById("divcontainer");

/**************************************************************************************************************
 ***********************-WJANV - 21 /10/2021- On ajoute ici un évènement qui va s'activer à la pression 
  d'une touche de clavier ---************/

presse.addEventListener("keydown", (pressClavier));

// Ici je n'ai pas utilisé keypress parce que apparemment keypress est déprécié et donc vaut mieux utiliser 
// Keydown qui fait un peu pres la meme chose que "Keypress".

/**************************************************************************************************************
 ***********************-WJANV -21 /10/2021- déclare nos function---************/


/**
 * ***.code le .code dans la console va  nous donnez un code exemple 'KeyW'
 * ***.key  le .Key dans la console va directement nous donnez le nom de la lettre exemple'A'
 */


function pressClavier(smart) // je mets un arguments à ma function
{
    console.log(smart) // i
    let motCle = smart.key;
    affiche.innerHTML = "Bonjour Alexandre, Vous avez appuyez sur : " + motCle + " "; // Affiche le Message 
    // Mise en place du support d'apparition du texte
    content.style.borderRadius = "70%";
    content.style.border = "5px solid rgba(0, 0, 0, 1)";
    content.style.width = "150px";
    content.style.height = "150px";
    content.style.margin = "4em auto";
    content.style.backgroundColor = "blue";
}