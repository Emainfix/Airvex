const imgAlbumMain = document.getElementById("img-al-main") // Traigo el div que corresponde a la imagen principal del album

const imagenes = document.querySelectorAll("#album-imgs img"); // Selecciono cada elemento img dentro de mi album

imagenes.forEach(function(im){ // Recorro cada elemento img
    im.addEventListener("click", () => {
    mostrarImg(im)
})
})

const mostrarImg = (a) => imgAlbumMain.innerHTML = `<img src="${a.src}" class="img-main-album " alt="Imagen del álbum">`; // Cuando se selecciona una miniatura la convierte a la img principal