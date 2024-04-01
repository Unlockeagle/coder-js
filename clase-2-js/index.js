// let  = true;

// if (varCondicion) {
//   alert("es verdadero");
// }

// let numero = Number(prompt("Ingrese un numero del 1 al 10"));
// let secreto = 8;

// if (numero == secreto) {
//   alert("Acercate!");
//   console.log("asasa");
//   let var1;
//   var1 = 28;
//   alert(var1);
// } else {
//   alert("equivocado :'(");
// }

// let edad = Number(prompt("Ingrese su edad"));
// let esMenor = edad < 18;
// let esMuyMayor = edad > 80;

// if (esMenor < 18) {
//   alert("No Puede tomar alcohol");
// } else {
//   if (esMuyMayor < 80) {
//     alert("Puede tomar alcohol");
//   } else {
//     alert("No deberias pasarte con el alchol");
//   }
// }

// let estudio = false;
// let practico = true;

// if (estudio && practico) {
//   alert("Aprendemos JS XD");
// } else {
//   alert("No aprendemos");
// }

// let estudio = false;
// let practico = false;

// if (estudio || practico) {
//   alert("Aprendemos JS XD");
// } else {
//   alert("No aprendemos");
// }

// let bebida = prompt("toma agua o cocacola");
// let comida = prompt("Come frutas o ensaladas");

// if (bebida == "agua" && (comida == "frutas" || "ensalada")) {
//   alert("tiene una buena alimentacion");
// } else {
//   alert("Debe aprender a comer");
// }

// let numero = Number(prompt("Ingrese un numero"));
// let resto = numero % 2;

// if (resto === 0) {
//   alert("es par");
// } else {
//   alert("no es par");
// }

// let numero = Number(prompt("ingrese un numero"));

// if (numero < 0) {
//   alert("Es Negativo");
// } else {
//   alert("Es Positivo");
// }

// Fibonaci
// let limit = 15;

// let n1 = 0;
// let n2 = 1;

// while (n1 < limit) {
//   let resul = n1 + n2;
//   n1 = n2;
//   n2 = resul;
//   document.write(resul + " ");
// }

// let peso = Number(prompt("Cual es tu peso"));
// let estatura = Number(prompt("Cuanto mides"));
// document.getElementById("btn").addEventListener("click", function () {
//   let peso = parseFloat(document.getElementById("peso").value);
//   let estatura = parseFloat(document.getElementById("estatura").value);
//   let imc = peso / (estatura * estatura);
//   calcular(imc);
// });

// function calcular(imc) {
//   if (imc < 18.5) {
//     console.log("Estás bajo de peso");
//   } else if (imc >= 18.5 && imc <= 24.9) {
//     console.log("Estás en tu peso normal");
//   } else if (imc >= 25 && imc <= 29.9) {
//     console.log("Estás en sobrepeso");
//   } else {
//     console.log("Estás obeso");
//   }
// }

// document.getElementById("btn").addEventListener("click", function () {
//   let peso = parseFloat(document.getElementById("peso").value);
//   let estatura = parseFloat(document.getElementById("estatura").value);
//   let imc = peso / (estatura * estatura);
//   calcular(imc);
// });

// function calcular(imc) {
//   let resultadoDiv = document.getElementById("resultado");
//   if (imc < 18.5) {
//     resultadoDiv.innerHTML = "<p class='parrafo'>Estás bajo de peso</p>";
//   } else if (imc >= 18.5 && imc <= 24.9) {
//     resultadoDiv.innerHTML =
//       "<p class='text-green-500'>Estás en tu peso normal</p>";
//   } else if (imc >= 25 && imc <= 29.9) {
//     resultadoDiv.innerHTML =
//       "<p class='text-yellow-500'>Estás en sobrepeso</p>";
//   } else {
//     resultadoDiv.innerHTML = "<p class='text-red-900'>Estás obeso</p>";
//   }
// }

document.getElementById("btn").addEventListener("click", function () {
  let peso = parseFloat(document.getElementById("peso").value);
  let estatura = parseFloat(document.getElementById("estatura").value);
  let imc = peso / (estatura * estatura);
  calcular(imc);
  img(resultadoDiv);
});

let resultadoDiv = document.getElementById("resultado");
function calcular(imc) {
  if (imc < 18.5) {
    resultadoDiv.innerHTML =
      "<h3 class='bajoDePeso' id='bajodePeso'>Estas Bajo de peso</h3>";
    imagen.innerHTML = "<p>👍</p>";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoDiv.innerHTML =
      "<h3 class='pesoNormal'>Estas en tu peso normal</h3>";
    imagen.innerHTML = "<p>👍</p>";
  } else if (imc > 24.9 && imc <= 30) {
    resultadoDiv.innerHTML = "<h3 class='sobrePeso'>Estas en Sobrepeso</h3>";
    imagen.innerHTML = "<p>👎</p>";
  } else {
    resultadoDiv.innerHTML = "<h3 class='obeso'>Estas Obeso</h3>";
    imagen.innerHTML = "<p>👎</p>";
  }
}

let imagen = document.getElementById("imagen");
function img(resultadoDiv) {
  let resultadoValue = document.getElementById("resultado").innerHTML;
  if (
    resultadoValue ===
    "<h3 class='bajoDePeso' id='bajodePeso'>Estas Bajo de peso</h3>"
  ) {
    console.log("funciona");
  } else {
    console.log("no funciona");
  }
}
