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

let carrito = [];

aspiradora1btn.onclick = function () {
  newProducto = aspiradora1;
  addProducto(newProducto);
};

function addProducto(p) {
  if (carrito.length < 1) {
    carrito.push(p);
  } else {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id == p.id) {
        p.cantidad++;
      } else {
        carrito.push(p);
      }
    }
  }

  console.log(carrito);
}
