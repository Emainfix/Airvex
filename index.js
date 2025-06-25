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

const total = document.getElementById("total");

//Boton aspiradora1
const aspiradora1 = new Producto(1, 1, "S10 Plus", 200);

const aspiradora1btn = document.getElementById("boton-aspiradora1");

aspiradora1btn.onclick = function () {
  addProducto(aspiradora1);
};

//Boton aspiradora2
const aspiradora2 = new Producto(2, 1, "pppp", 150);

const aspiradora2btn = document.getElementById("boton-aspiradora2");

aspiradora2btn.onclick = function () {
  addProducto(aspiradora2);
};

function addProducto(p) {
  
  let encontrado = false;
  let indexEncontrado = carrito.items.indexOf(p);

  for (let i = 0; i < carrito.items.length; i++) {
    if (carrito.items[i].id == p.id) {
      encontrado = true;
      indexEncontrado = i;
      break
    }
  }
  if (encontrado) {
    p.cantidad++;
    lista.children[indexEncontrado].innerHTML = `<strong>${p.nombre}</strong> <strong>Costo:</strong> ${p.precio}$ <strong>Cantidad:<strong/> ${p.cantidad}`;
  } else {
    lista.innerHTML += `<li><strong>${p.nombre}</strong> <strong>Costo:</strong> ${p.precio}$ <strong>Cantidad:<strong/> ${p.cantidad}</li>`;
    carrito.items.push(p);
    console.log(carrito.items.length);
  }
    


  //Suma el costo al total en el carrito
  carrito.total = carrito.total + p.precio;
  console.log(carrito.items);
  console.log(carrito.total);
  total.innerHTML = `<h3> ${carrito.total} </h3>`;
  
}
