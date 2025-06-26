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
const aspiradora2 = new Producto(2, 1, "ROPVACNIC", 150);

const aspiradora2btn = document.getElementById("boton-aspiradora2");

aspiradora2btn.onclick = function () {
  addProducto(aspiradora2);
};

//Boton aspiradora3
const aspiradora3 = new Producto(3, 1, "A12 Pro", 180);

const aspiradora3btn = document.getElementById("boton-aspiradora3");

aspiradora3btn.onclick = function () {
  addProducto(aspiradora3);
};

//Boton aspiradora4
const aspiradora4 = new Producto(4, 1, "BL-20 Lidar", 350);

const aspiradora4btn = document.getElementById("boton-aspiradora4");

aspiradora4btn.onclick = function () {
  addProducto(aspiradora4);
};

//Boton aspiradora5
const aspiradora5 = new Producto(5, 1, "S10 Plus", 182);

const aspiradora5btn = document.getElementById("boton-aspiradora5");

aspiradora5btn.onclick = function () {
  addProducto(aspiradora5);
};

function addProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if (indexEncontrado >= 0) {
    p.cantidad++;
    lista.children[indexEncontrado].innerHTML = `${p.nombre} <strong>US$${p.precio}</strong> <strong>Cant.:<strong/> ${p.cantidad}`;
  } else {
    lista.innerHTML += `<li>${p.nombre} <strong>US$${p.precio}</strong> <strong>Cant.:<strong/> ${p.cantidad}</li>`;
    carrito.items.push(p);
    console.log(carrito.items.length);
  }
    


  //Suma el costo al total en el carrito
  carrito.total = carrito.total + p.precio;
  console.log(carrito.items);
  console.log(carrito.total);
  total.innerHTML = `<h3> TOTAL: <strong>US$${carrito.total}</strong> </h3>`;
  
}
