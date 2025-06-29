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


//Creo un objeto de objetos para cada producto que tengo
const productos = {
  1:new Producto(1, 0, "S10 Plus", 200),
  2:new Producto(2, 0, "ROPVACNIC", 150),
  3:new Producto(3, 0, "A12 Pro", 180),
  4:new Producto(4, 0, "BL-20 Lidar", 350),
  5:new Producto(5, 0, "AI Ultra", 182)
};

const botonesAgregar = document.querySelectorAll(".btn-agregar") // Selecciono todos los elementos con la clase btn-agregar

botonesAgregar.forEach(b => { // Reviso uno a uno los elementos con la clase btn-agregar
  b.addEventListener("click", () =>{ // Cuando se hace click en cada uno
    const id = b.dataset.id; // Creo una constante llamada id que extrae la información del html llamada data-id en el primer caso 1
    addProducto(productos[id]) // Cargo en mi carrito el elemento dentro del objeto productos correspondiente al 1
  })
})

const botonesEliminar = document.querySelectorAll(".btn-eliminar")

botonesEliminar.forEach(b => {
  b.addEventListener("click", () =>{
    const id = b.dataset.id;
    restarProducto(productos[id]);
  })
})


const lista = document.getElementById("lista-carrito");

const total = document.getElementById("total");

const tituloCarrito = document.getElementById("titulo-carrito");

const finalizarCompra = document.getElementById("btn-fin-compra")
finalizarCompra.onclick = function()
{
  Comprar()
}

const limpiarCarrito = document.getElementById("btn-limpiar")

limpiarCarrito.onclick = function(){
  eliminarCarrito()
}

function addProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if(indexEncontrado < 0){
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
  limpiarCarrito.innerHTML = `<a class="py-3 px-4 border-top border-1 text-decoration-none">Limpiar Carrito</a>`
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
    limpiarCarrito.innerHTML = ``
  }

}

function Comprar(){
  alert("Su compra fue por el total de: US$"+carrito.total+"\n***** Console para el detalle *****")
  console.log("**********FACTURA**********\n")
  for (let i=0; i<carrito.items.length; i++){
    console.log(". "+[i+1]+": "+carrito.items[i].nombre+" .....Valor unit.: "+carrito.items[i].precio+" .....Cant.: "+carrito.items[i].cantidad+" .....Subtotal: US$"+subTotal(carrito.items[i])+"\n")
  }
  console.log("TOTAL: US$"+carrito.total)
  }

  const subTotal = (p) => p.cantidad*p.precio

  function eliminarCarrito(){
    carrito.items = []
    carrito.total = 0
    lista.innerHTML = ``
    tituloCarrito.innerHTML = ``
    total.innerHTML = ``
    finalizarCompra.innerHTML = ``
    limpiarCarrito.innerHTML = ``
  }