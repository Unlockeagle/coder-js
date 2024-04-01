//localStorage

localStorage.setItem("saludo", "bienvenidos!");
localStorage.setItem("comision", 53950);
localStorage.setItem("aprobado", true);

let comision = localStorage.getItem("comision");
let saludo = localStorage.getItem("saludo");
console.log(comision);
console.log(saludo);

//sessionStorage
sessionStorage.setItem("almuerzo", "pizza");
sessionStorage.setItem("puntaje", 100);
let puntaje = sessionStorage.getItem("puntaje");

// console.log(puntaje);

//Recorrer el storaage

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("clave: " + clave, "Valor: ", localStorage.getItem(clave));
}
//Borrar elementos
localStorage.removeItem("saludo");
sessionStorage.removeItem("puntaje");

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("clave: " + clave, "Valor: ", localStorage.getItem(clave));
}

//Vaciar el storage
sessionStorage.clear();
localStorage.clear();
