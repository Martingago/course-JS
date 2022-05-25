"use strict";

const nombres = ["Martin", "Pepe", "Juan"];
const edad = new Array("29", "18", "23")

console.log(nombres, edad);

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) �
// GOOD LUCK �

const calcTip = (value) => {
    let tip = 0;
    if (value >= 50 && value <= 300) {
        tip = value * 0.15;
    } else {
        tip = value * 0.20
    }
    let totalAmount = value + tip
    return tip;
}
//  FORMA SIMPLIFICADA DE LA FUNCION EMPLEANDO ? Y : 
 
const calcTip2 = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

}

console.log(calcTip(80), calcTip2(80))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)

// OBJETOS  

const martin = {
    firstName: 'Martin',
    lastName: 'Gago',
    age: 24,
    job: 'programador',
    friends: ['maria', 'marcos', 'xiana']
};

const ageKey = 'age';
console.log(martin.firstName);
console.log(martin['lastName']);
console.log(martin[ageKey]);

console.log(`${martin.firstName} tiene ${martin.friends.length} amigos, 
y su mejor amigo se llama: ${martin.friends[1]}`)

// OBJECT METHODS

const persona = {
    firstName: 'Martin',
    lastName: 'Gago Choren',
    birthYear: 1997,
    driverLincense: true,
    calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age
    }
};
console.log(persona.calcAge())
console.log(persona.age)

