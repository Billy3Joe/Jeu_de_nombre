// let p = document.querySelector(".para").innerHTML;

// let t = document.querySelector(".para").textContent;
// alert("paragraphe" + p + "text\n" + t);

// window.setInterval(()=> { Ici doit se trouver tout mon code JS}, 700); //Il premet d'afficher d'abord mon Html puis dans 7 second afficher mon DOM 

console.log('rdy');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nbDevine = getRandomIntInclusive(1, 500);
let nbreSaisie = 0;
let nbreEssai = 0;
console.log(nbDevine);
let n = 0;

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    for (n = 0; n < 5; n++) {
        console.log(n);
        nbreEssai = nbreEssai + 1;
        nbreSaisie = prompt('Veillez saisir votre nombre');
        //  let  nbreSaisie2 = Number(nbreSaisie);


        // if (nbreSaisie == null) {
        //     alert("Veillez saisir un nombre");
        //     break;
        // }

        if (nbreSaisie == nbDevine) {
            alert(" BRAVO A VOUS POUR AVOIR TROUVE LE NOMBRE EXACT.\n " + "MES FELICITATION: C'etait bien ");

            break;
        } else if (Math.abs(nbreSaisie - nbDevine) > 100) {

            if (nbreSaisie > nbDevine) {
                alert("Votre nombre est beaucoup grand. Essayez un plus petit.");
            } else {
                alert("Votre nombre est beaucoup petit. Essayez un plus grand.")
            }
        } else if (Math.abs(nbreSaisie - nbDevine) > 10) {

            if (nbreSaisie > nbDevine) {
                alert("Votre nombre est grand. Essayez de diminuer.");
            } else {
                alert("Votre nombre est petit.  Essayez d'augmenter.");
            }
        } else if (nbreSaisie > nbDevine) {
            alert("Votre nombre est un tout petit peut plus grand mais très très proche.");
        } else {
            alert("Votre nombre est un tout petit peut plus petit mais très très proche.");
        }
    }
    if (nbDevine != nbreSaisie) {
        alert("ECHEC VOUS AVEZ PERDU.\n VOUS N'AVEZ PLUS D'ASSAI.\n LE NOMBRE EXACT EST: " + nbDevine);
    }
});