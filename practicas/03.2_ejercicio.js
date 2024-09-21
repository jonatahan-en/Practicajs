/*
Crea una función para que con estos datos de entrada se produzca los siguientes
*/
const input = 10;
const changeNumbers = (number) =>{string = number.toString();
    return(`${string.split('').join('-')}`);
};
console.log(changeNumbers(input)); // '1-0'
const secondInput = 1;
console.log(changeNumbers(secondInput)); // '1'
const thirdInput = 11234;
console.log(changeNumbers(thirdInput)); // '1-1-2-3-4'
