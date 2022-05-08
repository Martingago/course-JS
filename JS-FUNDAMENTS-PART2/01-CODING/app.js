"use strict";

// PRACTICA

function mezcladorFrutas(pera, manzana) {
    var clpera = (pera * 60);
    var clmanzana = (manzana * 75);
    var zumo = clpera + clmanzana
    var percentPera = ((clpera / zumo) * 100).toFixed(2);
    var percentManzana = ((clmanzana / zumo) * 100).toFixed(2);
    var datosZumo = `${zumo} cl de zumo creado con ${pera} pera/s (${percentPera}%) y ${manzana} manzana/s (${percentManzana}%)`;
    return datosZumo;

}
console.log(mezcladorFrutas(2, 5));

// DECLARACION DE FUNCION 
function AnonimacalcAge(daybirth) {
    let year = new Date().getFullYear();
    const yearsOld = `Las personas nacidas en el año ${daybirth}, tienen ahora mismo ${year - daybirth} años`
    return yearsOld;
}
console.log(AnonimacalcAge(1997))
// FUNCION EXPRESSION 
const calcAge = function (daybirth) {
    let year = new Date().getFullYear();
    const yearsOld = year - daybirth;
    return yearsOld;
}

// FUNCION FLECHA

const calcAge2 = (platano, pera) => {
    let zumo = platano + pera;
    return zumo;
}


// FUNCION DENTRO DE FUNCION

const cortadorFrutaSlice = (fruta) => {
    let slice = fruta * 4;
    return slice
}

const fabricarZumo = (manzana, pera) => {
    let zumoManzana = Number((cortadorFrutaSlice(manzana) * 0.5).toFixed(2));
    let zumoPera = Number((cortadorFrutaSlice(pera) * 0.4).toFixed(2));
    let zumoTotal = `${zumoManzana} ml + ${zumoPera}ml, en total ${zumoManzana + zumoPera} ml de zumo `;
    return zumoTotal;
}

console.log(fabricarZumo(4, 3));


// CODE CHALLENGE 01

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �
// GOOD LUCK 

let calcularMedia = (a, b, c) => {
    let media = (a + b + c) / 3;
    return media;
}

let puntuacionDolphins = calcularMedia(85, 54, 41);
let puntuacionKoalas = calcularMedia(23, 34, 27);

let checkWinner = (puntosDelfines, puntosKoalas) => {
    puntosDelfines > puntosKoalas ? console.log(`Delfines ganan el partido: ${puntosDelfines} pts a ${puntosKoalas} pts`)
        : console.log(`Koalas ganan el partido ${puntosKoalas}pts  a ${puntosDelfines} pts`);
    if (puntosDelfines >= puntosKoalas * 2) {
        console.log("la puntuacion de los delfines es el doble que de los koalas")
    } else if (puntosKoalas >= puntosDelfines * 2) {
        console.log("la puntuacion de los Koalas es el doble que de los Delfines")
    } else if (puntosKoalas == puntosDelfines) {
        console.log("ha habido un empate")
    }
    else {
        console.log("nadie ha puntuado el doble")
    }
}
checkWinner(puntuacionDolphins, puntuacionKoalas);
