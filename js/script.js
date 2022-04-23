// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

/*
    1. Creare la griglia
        1.1 Creare un numero di div pari al livello scelto.
        1.2 In ogni div inserire un numero progressivo.
    2. Aggiungere un event listener ad ogni div per fare in modo che venga aggiunta una classe per fargli cambiare colore. 

*/

const difficulty = 100;

const gameTable = generateGridNumber(difficulty);

document.querySelector(".game-grid").innerHTML = gameTable;




// FUNCTION
/**
 * Descrizione: la funzione crea un numero di div pari all'input.
 * @param {Number} numberOfCells è il numero di celle che voglio creare.
 * @returns {String} restituisce una stringa da pushare nell'HTML.
 */
function generateGridNumber(numberOfCells) {
    let gridElement = "";
    for (let i = 1; i <= numberOfCells; i++) {
        gridElement += `<div class="grid-element click"><span>${[i]}</span></div>`;
    }
    return gridElement
}