class Producto {
  constructor(id, cantidad, nombre, precio) {
    this.id = id;
    this.cantidad = cantidad;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let newProducto;

const aspiradora1 = new Producto(1, 1, "S10 Plus", 200);

const aspiradora1btn = document.getElementById("boton-aspiradora1");

aspiradora1btn.onclick = function () {
  newProducto = aspiradora1;
  addProducto(newProducto);
};

const aspiradora2 = new Producto(2, 1, "pppp", 150);

const aspiradora2btn = document.getElementById("boton-aspiradora2");

aspiradora2btn.onclick = function () {
  newProducto = aspiradora2;
  addProducto(newProducto);
};

let carrito = [];

function addProducto(p) {
  let encontrado = false;

  if (carrito.length < 1) {
    carrito.push(p);
  } else {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id == p.id) {
        encontrado = true;
        i = carrito.length;
      } else {
        encontrado = false;
      }
    }
    if (encontrado) {
      p.cantidad++;
    } else {
      carrito.push(p);
    }
  }

  console.log(carrito);
}
