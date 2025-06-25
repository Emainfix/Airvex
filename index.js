class Producto {
  constructor(id, cantidad, nombre, precio) {
    this.id = id;
    this.cantidad = cantidad;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const carrito = {
  items: [],
  total: 0,
};

const lista = document.getElementById("lista-carrito");

let newProducto; // Variable para agregar un producto

//Boton aspiradora1
const aspiradora1 = new Producto(1, 1, "S10 Plus", 200);

const aspiradora1btn = document.getElementById("boton-aspiradora1");

aspiradora1btn.onclick = function () {
  newProducto = aspiradora1;
  addProducto(newProducto);
};

//Boton aspiradora2
const aspiradora2 = new Producto(2, 1, "pppp", 150);

const aspiradora2btn = document.getElementById("boton-aspiradora2");

aspiradora2btn.onclick = function () {
  newProducto = aspiradora2;
  addProducto(newProducto);
};

function addProducto(p) {
  let encontrado = false;

  if (carrito.items.length < 1) {
    carrito.items.push(p);
  } else {
    for (let i = 0; i < carrito.items.length; i++) {
      if (carrito.items[i].id == p.id) {
        encontrado = true;
        i = carrito.items.length;
      } else {
        encontrado = false;
      }
    }
    if (encontrado) {
      p.cantidad++;
    } else {
      carrito.items.push(p);
    }
  }

  //Suma el costo al total en el carrito
  carrito.total = carrito.total + p.precio;
  console.log(carrito.items);
  console.log(carrito.total);

  lista.innerHTML += `<li>Se agregó</li>`;
}
