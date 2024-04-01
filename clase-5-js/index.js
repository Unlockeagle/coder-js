// import { Auto } from "./autoClass";
const { Auto } = require("./autoClass");
const { Persona } = require("./personaClass");
const { CuentaBancaria } = require("./cuentabancariaClass");

// Objeto literal
// let auto = {
//   color: "gris",
//   marca: "fiat",
//   modelo: "grand sienna",
//   tanque: 0,
// };

// console.log(auto.color);

// auto.color = "rojo";

// console.log(auto.color);

// console.log(auto["color"]);

// auto.color = "rojo";

// console.log(auto.color);

let auto1 = new Auto("verde", "VS", "Gol", 0);
let auto2 = new Auto("verde", "VS", "Gol", 0);
let auto3 = new Auto("azul", "Toyota", "4Runner", 20);

console.log(auto3);
auto3.acelerar();
auto3.acelerar();
auto3.acelerar();
console.log(auto3);
auto3.frenar();
console.log(auto3);

// console.log(auto);
// console.log("auto1 " + auto1.velocidad);
// console.log("auto1 acelero");
// auto1.acelerar();
// console.log("auto1 " + auto1.velocidad);

// console.log("auto2 " + auto2.velocidad);
// console.log("auto2 acelera");
// auto2.acelerar();
// auto2.acelerar();
// auto2.acelerar();
// console.log("auto2 " + auto2.velocidad);

// console.log("color" in auto1);

// for (const atributo in auto1) {
//   console.log("atributo:" + atributo);
//   console.log("atributo:" + auto1[atributo]);
// }

// console.log("-------------------------");

// let cuenta1 = new CuentaBancaria("yoan", 70000, 100000);

// console.log("el saldo es: " + cuenta1.consultar());

// cuenta1.depositar(150000);
// console.log("el saldo es: " + cuenta1.consultar());

// cuenta1.retirar(50000);
// console.log("el saldo es: " + cuenta1.consultar());

// let persona1 = new Persona("yoan", 20, "Barcelona");

// console.log(persona1);
// persona1.hablar();
// console.log(persona1.hablare + " " + persona1.edad + " " + persona1.calle);
