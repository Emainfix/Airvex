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

const lista = document.getElementById("lista-carrito"); // Traigo la <ul> del html

const total = document.getElementById("total"); // Traigo el div en donde se creara el total dentro del html

const tituloCarrito = document.getElementById("titulo-carrito"); // Traigo el div donde se hará el titulo del carrito en el html


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

const finalizarCompra = document.getElementById("btn-fin-compra") // El boton de finalizar la compra

finalizarCompra.addEventListener("click", () =>{
  Comprar()
})


const limpiarCarrito = document.getElementById("btn-limpiar") // Opcion limpiar carrito

limpiarCarrito.onclick = function(){
  eliminarCarrito()
}

function addProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if(indexEncontrado < 0){ // Si el index da -1 que significa no encontrado
    p.cantidad = 1;

    //Crea un elemento li en la lista del carrito dentro del html
    lista.innerHTML += `<li class="d-flex justify-content-end">
    <div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>
    </li>`;
    carrito.items.push(p); // Ibnserta el producto en el array items dentro del acrrito
  }else{
    //En caso de encontrar el producto en el index dentro del carrito
    p.cantidad++;//Suma uno más a la cantidad de ese producto

    //Actualiza la infromación dentro del li en el html
    lista.children[indexEncontrado].innerHTML = `<div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>`;
  }

  //Suma el costo al total en el carrito
  carrito.total = carrito.total + p.precio;

  //Crea un elemento con el titulo en el html
  tituloCarrito.innerHTML = `<h2 class="text-center title-secciones">Carrito</h2>`;

  //Crea un h3 que muestra el total en el carrito dentro del html
  total.innerHTML = `<h3 class="px-4 border-top border-3 py-4"> TOTAL: <strong>US$${carrito.total}</strong> </h3>`;

  //Crea el boton finalizar compra en el html
  finalizarCompra.innerHTML = `<button class="btn-comprar">Finalizar Compra</button>`

  //Crea la opción limpiar carrito en el html
  limpiarCarrito.innerHTML = `<a class="py-3 px-4 border-top border-1 text-decoration-none">Limpiar Carrito</a>`
}

function restarProducto(p) {
  
  let indexEncontrado = carrito.items.indexOf(p); // Extrae el index que ocupa el producto

  if (indexEncontrado >= 0 && p.cantidad > 0) {// Si encuentra el producto en el carrito y la cantidad es mayor a cero
    p.cantidad--;// le resta 1

    //Actualiza la información del li en el html
    lista.children[indexEncontrado].innerHTML = `<div class="p-2 d-flex align-items-center">
      <h4 class="px-4">${p.nombre}</h4>
      <div class="px-4 border-start border-3 d-flex align-items-center"><strong>US$${p.precio}</strong></div> 
      <div class="px-4 border-start border-3"><strong>Cant:</strong>${p.cantidad}</div>
    </div>`;

    //Resta el costo del producto del total
    carrito.total = carrito.total - p.precio;

    //Actualiza la información del total en el html
    total.innerHTML = `<h3 class="px-4 border-top border-3 py-4"> TOTAL: <strong>US$${carrito.total}</strong> </h3>`;
  }

  // Si el producto es encontrado en el carrito y su cantidad llega a cero
  if (indexEncontrado >= 0 && p.cantidad == 0){
    lista.children[indexEncontrado].innerHTML = ``; // Se elimina del html
    lista.removeChild(lista.children[indexEncontrado]);
    carrito.items.splice(indexEncontrado,1); // Lo sacamos del array carrito
  }

  // Si el total llega a cero se eliminan todos los elementos del html
  if (carrito.total == 0){
    tituloCarrito.innerHTML = ``
    total.innerHTML = ``
    finalizarCompra.innerHTML = ``
    limpiarCarrito.innerHTML = ``
  }

}

//Esta función imprime un mensaje en console como si fuesa una factura
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