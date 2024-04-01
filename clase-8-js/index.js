// //**
// //  * constructor de un objeto de tipo producto
//  * @param {strin} sNombre
//  * @param {string} sPrecio
//  */
class Producto {
  constructor(sNombre, sPrecio) {
    this.nombre = sNombre;
    this.precio = sPrecio;
  }
}

function comprar(stock, carrito) {
  let i;
  let cantidad;
  do {
    i = Number(prompt("ingrese el producto que desea comrpar"));
    printSAtock();
  } while ((isNaN(i) && i < 0) || i >= stock.lengt);
  do {
    cantidad = Number(prompt("ingrese la cantidad"));
  } while (isNaN(cantidad) || cantidad < 0);

  carrito.push(new Item(stock[i], cantidad));
}

function eliminar(carrito) {
  let i;
  let cantidad;
  do {
    i = Number(prompt("ingrese el producto que desea comrpar"));
    printSAtock();
  } while ((isNaN(i) && i < 0) || i >= stock.lengt);
  do {
    cantidad = Number(prompt("ingrese la cantidad"));
  } while (isNaN(cantidad) || cantidad < 0 || cantidad > carrito[i].cantidad);

  carrito[i].cantidad -= cantidad;
  //   carrito.splice(i, 1);
  if (carrito[i].cantidad == 0) {
    //para eliminar un elemento
    carrito.splice(i, 1);
  }
}

function printSAtock(carrito) {
  let total = carrito.reduce((acum, el) => {
    return acum + el.cantidad * el.producto.precio;
  }, 0);
  console.log(`El total de la compra es ${total}`);
}

function printSAtock() {
  stock.forEach((el, id) => {
    console.log(`Id: ${id} \nNombre: ${el.nombre} \nPrecio: ${el.precio}`);
  });
}

let stock = [
  new Producto("Arroz", 1500),
  new Producto("Fideos", 600),
  new Producto("Sopa", 2000),
];

let carrito = [];

let op = prompt(
  "Ingrese la opcion: \n1- Comprar \n2-Eliminar \n3- Checkout \n4- Salir"
);
while (op != 4) {
  switch (op) {
    case "1":
      comprar(stock, carrito);
      break;
    case "2":
      eliminar(carrito);
      break;
    case "3":
      checkout(carrito);
      break;
  }
  op = prompt(
    "Ingrese la opcion: \n1- Comprar \n2-Eliminar \n3- Checkout \n4- Salir"
  );
}
