/*
Crea una función para que con estos datos de entrada se produzca los siguientes
*/
const input1 = 'string';
const longReverse = (item) => {
    const characteres = item.length;
    const newlist = [...item];invest = newlist.reverse();
    return(`Resultado ejrcicio 3.3: ${characteres}  ${invest.join('')}`)
}
console.log(longReverse(input1)); // '6 gnirts'
const input2 = 'variable';
console.log(longReverse(input2)); // '8 elbairav'
const input3 = 'pointer';
console.log(longReverse(input3)); // '7 retniop'
