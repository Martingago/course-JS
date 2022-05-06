"use strict";

function mezcladorFrutas(pera,manzana) {
    var clpera = (pera * 60);
    var clmanzana = (manzana * 75);
    var zumo = clpera + clmanzana
    var percentPera = (( clpera / zumo) * 100).toFixed(2);
    var percentManzana = ((clmanzana / zumo) * 100).toFixed(2);
    var datosZumo = `${zumo} cl de zumo creado con ${pera} pera/s (${percentPera}%) y ${manzana} manzana/s (${percentManzana}%)`;
    return datosZumo;

}
console.log(mezcladorFrutas(2,5));

// DECLARACION DE FUNCION 
function AnonimacalcAge(daybirth){
    let year = new Date().getFullYear();
    const yearsOld = year - daybirth;
    return yearsOld;
}

// FUNCION EXPRESSION 
 const calcAge = function(daybirth){
    let year = new Date().getFullYear();
    const yearsOld = year - daybirth;
    return yearsOld;
}

// FUNCION FLECHA

const calcAge2 = (platano,pera) => {
 let zumo = platano + pera;
 return zumo;
}

console.log(AnonimacalcAge(1997), calcAge(1997))