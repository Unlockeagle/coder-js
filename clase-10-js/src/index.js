//et buttonElement = document.getElementById("button");

// console.log("Esto pasa antes de asociar el evento");
// buttonElement.addEventListener("click", () => {
//   alert("Apretaste el boton");
//   console.log("Esto pasa durante en evento");
// });

// console.log("pasa luego");

// buttonElement.addEventListener("click", () => {
//   alert("Apretaste el boton");
// });

/*buttonElement.onclick = () => {
  alert("Apretaste el boton");
};*/
//////////////////////prueba
// class Productos {
//   /**
//    **Crear un producto
//    * @param {String} nombre // Nombre del producto
//    * @param {Float} precio  //Precio del producto
//    * @param {Float} cant    // Cantidad inicial
//    */
//   constructor(nombre, precio, cant) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cant = cant;
//   }
// }

// let inventario = [];
// console.log(inventario);

// function producto(nombre, precio, cant) {
//   return inventario.push(new Productos(nombre, precio, cant));
// }

// let buttonElement = document.getElementById("button");
// let divContenedor = document.createElement("div");
// buttonElement.addEventListener("click", () => {
//   producto("papa", 20, 2500);
//   inventario.forEach((el) => {
//     let op = divContenedor.append(el);
//     divContenedor.innerHTML = `<p>${el.nombre}</p>
//                                <h3>${el.precio}</h3>  `;
//   });
// });
// console.log(inventario);
let stock = [
  new Producto("Monitor", 15),
  new Producto("Mouse", 12),
  new Producto("Parlante", 10),
  new Producto("Teclado", 50),
];
