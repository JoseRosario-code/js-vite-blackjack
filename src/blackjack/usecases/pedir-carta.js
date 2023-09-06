/**
 * 
 * @param {Array<string>} deck Pasar el deck para pedir carta
 * @returns {string} Devuelve una carta Ejemplo: 2A, 2C, 2H
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
 }
 