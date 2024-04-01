// let notas = [2, 8, 9, 7, 4];

// console.log(notas[0]);

// let prom = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5;

// console.log(prom);

//notas[0] = notas[0] + 5
// notas[0] += 5;

// console.log(notas[0]);
// let notas = [];
// let nota;
// let cant;
// do {
//   cant = Number(prompt("ingrese la cantidada de alumnos"));
// } while (isNaN(cant) && cant >= 0);

// let i;
// let op;
// for (i = 0; i < cant; i++) {
//   do {
//     nota = Number(prompt("Ingrese una nota"));
//   } while (isNaN(nota) && nota > 0 && nota <= cant);
//   op = prompt("Desea continuar? S");
//   notas.push(op == "s");
// }
// console.log(notas);
// let prom;
// let i;
// let sumatoria = 0;

// for (i = 0; i < notas.length; i++) {
//   console.log("sum: " + sumatoria);
//   console.log("sum: " + notas[i]);
//   sumatoria += notas[i];
// }

// prom = sumatoria / notas.length;

// console.log(prom);

// console.log("logitud: " + notas.length);

// let notas = [];
// let alumnos;

// do {
//   alumnos = Number(prompt("Ingrese la cantidad de alumnos"));
//   if (alumnos <= 10) {
//     for (let i = 0; i < alumnos; i++) {
//       let nota = Number(prompt("Ingrese la nota del alumno " + (i + 1)));
//       notas.push(nota);
//     }
//   } else {
//     alert("Ingrese un número menor o igual a 10");
//   }
// } while (isNaN(alumnos) || alumnos > 10);

// for (let i = 0; i < notas.length; i++) {
//   console.log("Nota del alumno " + (i + 1) + ": " + notas[i]);
// }

let notas = [];
let alumnos;
let res;
do {
  alumnos = Number(prompt("Ingrese la cantidad de alumnos"));
  if (isNaN(alumnos) || alumnos > 0) {
    let i = 0;
    for (i = 0; i < alumnos; i++) {
      let nota = Number(prompt("Ingrese una nota"));
      notas.push(nota);
    }
  } else {
    alert("Ingrese un numero valido");
  }
} while (isNaN(alumnos));

let i;
let sumatoria = 0;
for (i = 0; i < notas.length; i++) {
  let numeracion = i + 1;
  console.log("nota " + numeracion + ": " + notas[i]);

  sumatoria += notas[i];
}

let promedio = sumatoria / notas.length;

console.log("El promedio es: " + promedio.toFixed(2));
