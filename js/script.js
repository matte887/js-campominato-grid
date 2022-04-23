// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

/*
    1. Creare la griglia
        1.1 Creare un numero di div pari al livello scelto.
        1.2 In ogni div inserire un numero progressivo.
    2. Aggiungere un event listener ad ogni div per fare in modo che venga aggiunta una classe per fargli cambiare colore.

*/

const difficulty = 100;

const gameContainer = document.querySelector(".game-grid");

for (let i = 1; i <= difficulty; i++) {
    // Richiamo la funzione che genera gli elementi div
    const gridElement = generateGridElement(i);

    // Aggiungo un'event listener
    gridElement.addEventListener("click", function() {
        this.classList.add("click");
    })
}






// FUNCTION
/**
 * Descrizione: la funzione crea un div con dentro il numero i.
 * @param {Number} digitToPush-> è il numero di celle che voglio creare.
 * @returns {any} -> restituisce un div.
 */
function generateGridElement(digitToPush) {
    // Creo un nuovo elemento HTML.
    const newElement = document.createElement("div");

    // Aggiungo uno span all'elemento appena creato.
    newElement.innerHTML = `<span>${digitToPush}</span>`;

    // Assegno la classe grid-element al div.
    newElement.classList.add("grid-element");

    // Appendo il div al contenitore HTML.
    gameContainer.append(newElement);

    console.log(newElement);

    return newElement
}