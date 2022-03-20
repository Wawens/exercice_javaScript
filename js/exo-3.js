/**************************************************************************************************************
 ***********************-WJANV -19/10/2021- On appelle nos ID et les Stocke dans des Variables ---*****************************/
let umage = document.getElementById("carre_1"); // fait référence à l'image numero 1
let umageTwo = document.getElementById("carre_2"); // fait référence à l'image numero 2
let umageThree = document.getElementById("carre_3"); // fait référence à l'image numero 3

/**************************************************************************************************************
 ***********************-WJANV -19/10/2021- Ajout d'un Ecouteur sur les élement suivants---*****************************/
umage.addEventListener("click", (cacheImage));
umageTwo.addEventListener("click", (cacheImageTwo));
umageThree.addEventListener("click", (cacheImageThree));
//
/**************************************************************************************************************
 ***********************-WJANV -19/10/2021- ses functions vont nous permettre de cacher les images---*****************************/
function cacheImage() {
    umage.style.display = "none"; // je fais disparaitre l'image en l'enlevant de la place qu'il occupait

}

function cacheImageTwo() {
    umageTwo.style.display = "none"; // je fais disparaitre l'image en l'enlevant de la place qu'il occupait

}

function cacheImageThree() {
    umageThree.style.display = "none"; // je fais disparaitre l'image en l'enlevant de la place qu'il occupait

}

let image_one = document.getElementById("image_1");
let image_two = document.getElementById("image_2");
let image_three = document.getElementById("image_3");
//
image_one.addEventListener("click", (removeImageOne))
image_two.addEventListener("click", (removeImageTwo))
image_three.addEventListener("click", (removeImageThree))
    //
function removeImageOne() {
    image_one.style.display = "none";
}
//
function removeImageTwo() {
    image_two.style.display = "none";
}
//
function removeImageThree() {
    image_three.style.display = "none";
}