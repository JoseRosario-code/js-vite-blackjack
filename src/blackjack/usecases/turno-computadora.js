import { crearCartaHtml, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que necesita la PC para ganar
 * @param {Array<string>} deck  Deck de cartas
 * @param {string} puntoshtml HTML DONDE SE COLOCARAN LOS PUNTOS
 * @param {string} divCartas HTML DONDE SE COLOCARAN LAS CARTAS
 */
export const turnoComputadora = ( puntosMinimos, deck =[], puntoshtml, divCartas) => {

    const carta = pedirCarta(deck);
   let puntosComputadora = 0;
    
    btnNuevo.disabled = false;
    
   do {
      

       puntosComputadora = puntosComputadora + valorCarta(carta);
       puntoshtml.innerText = puntosComputadora;
       let imgCarta=crearCartaHtml(carta);
    
       divCartas.append( imgCarta );

       if( puntosMinimos > 21 ) {
           break;
       }

   } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

   setTimeout(() => {
       if( puntosComputadora === puntosMinimos ) {
           alert('Nadie gana :(');
       } else if ( puntosMinimos > 21 ) {
           alert('Computadora gana')
       } else if( puntosComputadora > 21 ) {
           alert('Jugador Gana');
       } else {
           alert('Computadora Gana')
       } 

   }, 300 );
}

