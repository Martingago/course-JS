"use strict";
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

const Jhon = {
  name: "Jhon",
  apellido: "Smith",
  peso: 92,
  altura: 1.95,
  fullName: function () {
    this.nombreCompleto = this.name + " " + this.apellido;
    return this.nombreCompleto;
  },
  calcBmi: function () {
    this.bmi = this.peso / this.altura ** 2;
    return this.bmi;
  },
};
console.log(Jhon.fullName());
console.log(Jhon.calcBmi());

const Mark = {
  name: "Mark",
  apellido: "Miller",
  peso: 78,
  altura: 1.69,
  fullName: function () {
    this.nombreCompleto = this.name + " " + this.apellido;
    return this.nombreCompleto;
  },
  calcBmi: function () {
    this.bmi = this.peso / this.altura ** 2;
    return this.bmi;
  },
};
console.log(Mark.fullName());
console.log(Mark.calcBmi());

Mark.bmi > Jhon.bmi
  ? console.log(
      `${Mark.nombreCompleto} tiene un BMI de ${Mark.bmi} que es mayor que el de ${Jhon.nombreCompleto}, que es de ${Jhon.bmi}`
    )
  : console.log(
      `${Mark.nombreCompleto} tiene un BMI de ${Mark.bmi} que es menor que el de ${Jhon.nombreCompleto}, que es de ${Jhon.bmi}`
    );
