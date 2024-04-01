// let pElement = document.getElementById("p");

// console.log(pElement);

// console.log(paisesElement[1].innerHTML);

// let liElement = document.getElementsByTagName("li");

// console.log(liElement);

// pElement.innerText = "Ahora muestro otra cosa";
// pElement.innerHTML += `<select> <option> algo1 </option> <option> algo2 </option> </select> `;

// pElement.className = "container row";

// let pElementNuevo = document.createElement("p");

// let divAlgoEments = document.getElementsByClassName("algo");

// divAlgoEments[0].append(pElementNuevo);

// pElementNuevo.innerText = "soy un nuevo  p!";

// let paisesElement = document.getElementsByClassName("paises");

// let venli = paisesElement[1];
// venli.remove();

// let inputElemen = document.getElementById("input");

// console.log(inputElemen.value);
// inputElemen.value = 84;
// console.log(inputElemen.value);

// let pElement = document.getElementById("p");
// console.log(pElement.innerHTML);
// pElement.innerText = "Ahora es otra cosa";
// console.log(pElement.innerHTML);
// pElement.innerHTML += `<select> <option>Algo1</option><option>Algo2</option></select>`;
// pElement.className = "container-row";

// let paisesElement = document.getElementsByClassName("paises");
// console.log(paisesElement[0].innerText);

// let liEllement = document.getElementsByTagName("li");
// console.log(liEllement);

let pElementNuevo = document.createElement("p");
let h1Element = document.createElement("h1");

let divAlgoElements = document.getElementsByClassName("algo");
divAlgoElements[0].append(pElementNuevo);
divAlgoElements[0].append(h1Element);

pElementNuevo.innerText = "Soy un nuevo p";
h1Element.innerText = "Soy un nuevo h1";

let paisesElements = document.getElementsByClassName("paises");
let venLi = paisesElements[1];
venLi.remove();

let inputElemen = document.getElementById("input");
inputElemen.value = 84;
console.log(inputElemen.value);

let select = document.getElementById("simp");

let personas = [
  {
    nombre: "Maria",
    peso: 30,
  },
  {
    nombre: "Homero",
    peso: 40,
  },
  {
    nombre: "Lisa",
    peso: 20,
  },
];

personas.forEach((el) => {
  let op = document.createElement("option");
  op.innerText = el;
  select.append(op);
  console.log(`${op}`);
});
