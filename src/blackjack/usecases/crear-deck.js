import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tipoDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<string>} TipoEspecial Ejemplo: ['A','J','Q','K'];
 * @returns {Array} regresa un nuevo deck de carta
 */
export const crearDeck = (tipoDeCarta,TipoEspecial) => {
    
    if ((!tipoDeCarta) || (tipoDeCarta.length === 0)) {
        console.log(tipoDeCarta, tipoDeCarta.length);
        
    };

    if ((!TipoEspecial) || (TipoEspecial.length === 0)) {
        throw new Error('TIPO DE CARTA ES OBLIGATORIO COMO UN ARREGLO DE STRING'); 
    }''

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }
 
    for( let tipo of tipoDeCarta ) {
        for( let esp of TipoEspecial ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
   
    return deck;
 }