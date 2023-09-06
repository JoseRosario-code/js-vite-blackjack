/**
 * 
 * @param {String} carta Ejemplo: 2T, 2C, 2H
 * @returns {number} Retorna cuato vale esa carta (DIGITO NUMERICO)
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
 }