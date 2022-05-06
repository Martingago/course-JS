// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

"use strict";

// DATA 1

const KoalasAvg = (96 + 108 + 89) / 3;
const DolphinsAvg = (88 + 91 + 110) / 3

console.log(KoalasAvg, DolphinsAvg);
if(KoalasAvg > DolphinsAvg){
    console.log(`Koalas es el equipo ganador, con un puntaje de ${KoalasAvg}`)
}else if(KoalasAvg == DolphinsAvg){
    console.log(`La puntuacion de los equipos es la misma, el resultado es empate`)
}
else{
    console.log(`Dolhpin es el equipo ganador con un puntaje de ${DolphinsAvg}`)
} 

// DATA BONUS 1
const DolphinsData1 = (97 + 112 + 121) / 3;
const koalasData1 = (109 + 95 +113) / 3;

console.log(DolphinsData1, koalasData1);

if(DolphinsData1 > koalasData1 && DolphinsData1 >= 100){
    console.log("los ganadores son Dolphins")
} else if(DolphinsData1 < koalasData1 && koalasData1 >= 100){
    console.log("El ganador el Koalas")
} else{
    console.log("nadie gana el trofeo");
}

// DATA BONUS 2
const DolphinsData2 = (97 + 112 + 141) / 3;
const KoalasData2 = (109 + 95 + 164) / 3;

console.log(DolphinsData2, KoalasData2)

if(DolphinsData2 > KoalasData2 && DolphinsData2 >= 100){
    console.log("el ganador es Dolphins");
} else if(DolphinsData2 < KoalasData2 && KoalasData2 >= 100){
    console.log("el ganador es Koalas");
} else if(DolphinsData2 == KoalasData2 && DolphinsData2 >= 100 && !KoalasData2 < 100 ){
    console.log("es un empate entre ambos equipos")
} else{
    console.log("nadie gana el torneo")
}