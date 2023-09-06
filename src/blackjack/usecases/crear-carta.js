
/**
 * 
 * @param {String} carta Carta a plasmar en HTML
 * @returns {number}HTMLIMAGE
 */

export const crearCartaHtml = (carta) =>{
       // <img class="carta" src="assets/cartas/2C.png">
       const imgCarta = document.createElement('img');
       imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
       imgCarta.classList.add('carta');
       return imgCarta;
};