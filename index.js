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

const tituloCarrito = document.getElementById("titulo-carrito");

//Boton aspiradora1
const aspiradora1 = new Producto(1, 0, "S10 Plus", 200);

const aspiradora1btn = document.getElementById("boton-aspiradora1");
const aspiradora1Eliminar = document.getElementById("eliminar-aspiradora1")

aspiradora1btn.onclick = function () {
  addProducto(aspiradora1);
};
aspiradora1Eliminar.onclick = function () {
  if (aspiradora1.cantidad > 0){
    restarProducto(aspiradora1);
  }
  
};

//Boton aspiradora2
const aspiradora2 = new Producto(2, 0, "ROPVACNIC", 150);

const aspiradora2btn = document.getElementById("boton-aspiradora2");
const aspiradora2Eliminar = document.getElementById("eliminar-aspiradora2")

aspiradora2btn.onclick = function () {
  addProducto(aspiradora2);
};
aspiradora2Eliminar.onclick = function () {
  restarProducto(aspiradora2);
};

//Boton aspiradora3
const aspiradora3 = new Producto(3, 0, "A12 Pro", 180);

const aspiradora3btn = document.getElementById("boton-aspiradora3");
const aspiradora3Eliminar = document.getElementById("eliminar-aspiradora3")

aspiradora3btn.onclick = function () {
  addProducto(aspiradora3);
};
aspiradora3Eliminar.onclick = function () {
  restarProducto(aspiradora3);
};

//Boton aspiradora4
const aspiradora4 = new Producto(4, 0, "BL-20 Lidar", 350);

const aspiradora4btn = document.getElementById("boton-aspiradora4");
const aspiradora4Eliminar = document.getElementById("eliminar-aspiradora4")

aspiradora4btn.onclick = function () {
  addProducto(aspiradora4);
};
aspiradora4Eliminar.onclick = function () {
  restarProducto(aspiradora4);
};

//Boton aspiradora5
const aspiradora5 = new Producto(5, 0, "S10 Plus", 182);

const aspiradora5btn = document.getElementById("boton-aspiradora5");
const aspiradora5Eliminar = document.getElementById("eliminar-aspiradora5")

aspiradora5btn.onclick = function () {
  addProducto(aspiradora5);
};
aspiradora5Eliminar.onclick = function () {
  restarProducto(aspiradora5);
};

const finalizarCompra = document.getElementById("btn-fin-compra")
finalizarCompra.onclick = function()
{
  Comprar()
}

function addProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if(indexEncontrado == -1){
    p.cantidad = 1;
    lista.innerHTML += `<li class="d-flex justify-content-end">
    <div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>
    </li>`;
    carrito.items.push(p);
  }else{
    p.cantidad++;
    lista.children[indexEncontrado].innerHTML = `<div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>`;
  }


  //Suma el costo al total en el carrito
  carrito.total = carrito.total + p.precio;
  tituloCarrito.innerHTML = `<h2 class="text-center title-secciones">Carrito</h2>`;
  total.innerHTML = `<h3 class="px-4 border-top border-3 py-4"> TOTAL: <strong>US$${carrito.total}</strong> </h3>`;
  finalizarCompra.innerHTML = `<button class="btn-comprar">Finalizar Compra</button>`
  
}

function restarProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if (indexEncontrado >= 0 && p.cantidad > 0) {
    p.cantidad--;
    lista.children[indexEncontrado].innerHTML = `<div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>`;

    carrito.total = carrito.total - p.precio;
    total.innerHTML = `<h3 class="px-4 border-top border-3 py-4"> TOTAL: <strong>US$${carrito.total}</strong> </h3>`;
  }

  if (indexEncontrado >= 0 && p.cantidad == 0){
    lista.children[indexEncontrado].innerHTML = ``;
    lista.removeChild(lista.children[indexEncontrado]);
    carrito.items.splice(indexEncontrado,1);
  }

  if (carrito.total == 0){
    tituloCarrito.innerHTML = ``
    total.innerHTML = ``
    finalizarCompra.innerHTML = ``
  }

}

function Comprar(){
  alert("Su compra fue por el total de: US$"+carrito.total)
  console.log("**********FACTURA**********\n")
  for (let i=0; i<carrito.items.length; i++){
    console.log(". "+[i+1]+": "+carrito.items[i].nombre+" .....Valor unit.: "+carrito.items[i].precio+" .....Cant.: "+carrito.items[i].cantidad+" .....Subtotal: US$"+SubTotal(carrito.items[i])+"\n")
  }
  console.log("TOTAL: US$"+carrito.total)
  }

  function SubTotal(p){
    return p.cantidad*p.precio
  }
