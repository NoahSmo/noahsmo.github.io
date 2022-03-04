const recetteCrepe = [
    farine = 63,
    oeuf = 1,
    lait = 0.2,
    sucre = 0.5,
    beurre = 13,
    sel = 1
];

const ingredient = ("farine", "oeuf", "lait", "sucre", "beurre", "sel");

const mesureIngredient = ["g de farine", "oeuf(s)", "L de lait", "c à soupe de sucre", "g de beurre", "pincées de sel"];

const ingredientsList = document.getElementById("liste-ingredient");

function submit() {

    let nbCrepes = parseInt(document.getElementById("formulaire-input-text").value);

    let nbIngredient = recetteCrepe.map( x => x * nbCrepes);

    let div = document.getElementById('liste-ingredient');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    };

    for ( i = 0 ; i < 6 ; i++ ){
        let div = document.createElement("div");
        div.className = ("div-liste");
        div.id = (ingredient);
        div.innerHTML = nbIngredient[i].toFixed(1) + " " + mesureIngredient[i];
        ingredientsList.appendChild(div);
    };

}