// function saludos() {
//   alert("hola wen");
// }

// saludos();

// let nom = prompt("Ingrese su nombre");

// function saludos(nombre, apellido) {
//   alert("hola " + nombre + " " + apellido + "!!");
// }

// saludos(nom, "santiago");

// let nom = prompt("Ingrese su nombre");

// function saludos(nombre, apellido) {
//   return "hola " + nombre + " " + apellido + "!!";
// }

// let cadena = saludos(nom, "santiago");

// console.log(cadena);
// alert(cadena);

// do {
//     num1 = Number(prompt("Ingrese un numero"))

// } while (isNaN(num1));

// let num1;
// let num2;

// function ingresaunNumero() {
//   let resultado;

//   while (isNaN(resultado)) {
//     resultado = Number(prompt("Ingrese un numero"));
//     alert("ingrese un numero valido");
//   }

//   return resultado;
// }

// ingresaunNumero();

// if (opcion != "0") {
//   num1 = ingresaunNumero();
//   num2 = ingresaunNumero();
// }
let nombre = prompt("Ingrese su nombre");

function saludos(nombre, apellido) {
  return "hola " + nombre + " " + apellido + "!!";
}

let cadena = saludos(nombre, "santiago");

console.log(cadena);
alert(cadena);
