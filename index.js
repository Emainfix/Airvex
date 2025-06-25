class Producto {
  constructor(nombre, precio, cantidad) {
    this.cantidad = cantidad;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const aspiradora1 = new Producto(1, "S10 Plus", 200);

const agregar = document.getElementById("boton-aspiradora1");

let carrito = [];

agregar.onclick = function () {
  for (let i = 0; i < carrito.length; i++) {
    for (let k = 0; k < carrito.length; k++) {
      if (i != k && carrito[i] == carrito[k]) {
        aspiradora1.cantidad++;
      } else {
        carrito.push(aspiradora1);
      }
    }
  }

  console.log(carrito);
};
