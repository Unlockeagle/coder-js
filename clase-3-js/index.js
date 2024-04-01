// for (desde; hasta; salto) {
//   //se ejecuta
// }

/**Formas equivalentes
 * contador = contador +1
 * contador += 1
 * contador++
 *
 * promedio = sumatoria /cantidad
 * */

//i = 0                     i = 1
// 8                        5
// sumatoria = 8 + 0        sumatoria = 5 + 8

// let i;
// let sumatoria = 0;
// let cantAlumnos = Number(prompt("Cuantos alumnos tiene"));
// //desde   hasta   salto
// for (i = 0; i < 5; i++) {
//   let nota = Number(prompt("ingrese la nota del alumno"));
//   sumatoria = sumatoria + nota;
// }
// let promedio = sumatoria / cantAlumnos;
// /*     5.4    =    27    /    5     */
// alert("el promedio es: " + promedio);

///////////*WHILE*//////////
// let res = "S";
// let sumatoria = 0;
// let cant = 0;

// while (res == "S") {
//   cant++;
//   let nota = Number(prompt("ingrese una nota"));
//   sumatoria = sumatoria + nota;
//   res = prompt("Desea seguir repitiendo? (S / N)");
// }
// let promedio = sumatoria / cant;
// alert("El promedio es: " + promedio);

///////////*SWITCH*//////////
// let num1;
// let num2;
// let res;
// let opcion;

// do {
//   opcion = prompt("ingrese la operacion deseada: \n+\n-\n*\n/");
//   do {
//     num1 = Number(prompt("Ingrese un numero"));
//   } while (isNaN(num1));

//   do {
//     num2 = Number(prompt("Ingrese un numero"));
//   } while (isNaN(num1));

//   switch (opcion) {
//     case "+":
//       res = num1 + num2;
//       break;
//     case "-":
//       res = num1 + num2;
//       break;
//     case "*":
//       res = num1 + num2;
//       break;
//     case "/":
//       res = num1 + num2;
//       break;
//     default:
//       alert("Opcion incorrecta");
//   }

//   alert("Resultado es: " + res);
// } while (opcion != "0");

// let res = "s";
// while (res === "s") {
//   let num1 = Number(prompt("ingrese el primer numero"));
//   let num2 = Number(prompt("ingrese el segundo numero"));
//   let validador = num1 >= 0 && num2 >= 0;
//   if (validador) {
//     for (let i = 0; i < 5; i++) {
//       let sumatoria = num1 + num2;
//       num1 = num2;
//       num2 = sumatoria;
//       console.log(sumatoria);
//     }
//   } else {
//     alert("Ingrese numeros Validos");
//   }

//   res = prompt("Desea continuar: (s/n)");
// }
// alert("Fin");

// // // // Calculadora

let res = "s";
let resultado;
let num1;
let num2;
let operacion;

while (res === "s") {
  do {
    num1 = Number(prompt("Ingrese primer numero"));
    num2 = Number(prompt("Ingrese segundo numero"));
  } while (isNaN(num1) || isNaN(num2));

  do {
    operacion = prompt("Ingrese una operacion: + - * /");
  } while (
    operacion != "+" &&
    operacion != "-" &&
    operacion != "*" &&
    operacion != "/"
  );

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;

    default:
      break;
  }
  alert("El resultado es: " + resultado);
  res = prompt("Desea realizar una operacion?? (s/n)");
}

console.log(resultado);
