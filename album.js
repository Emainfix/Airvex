const imgAlbumMain = document.getElementById("img-al-main")
const imgAlbum01 = document.getElementById("img-album-01")
const imgAlbum02 = document.getElementById("img-album-02")
const imgAlbum03 = document.getElementById("img-album-03")
const imgAlbum04 = document.getElementById("img-album-04")
const imgAlbum05 = document.getElementById("img-album-05")
const imgAlbum06 = document.getElementById("img-album-06")

imgAlbumMain.innerHTML = `<img src="${imgAlbum01.src}" class="img-main-album " alt="Imagen del álbum">`;

imgAlbum01.onclick = function(){
    mostrarImg(imgAlbum01)
}

imgAlbum02.onclick = function(){
    mostrarImg(imgAlbum02)
}

imgAlbum03.onclick = function(){
    mostrarImg(imgAlbum03)
}

imgAlbum04.onclick = function(){
    mostrarImg(imgAlbum04)
}

imgAlbum05.onclick = function(){
    mostrarImg(imgAlbum05)
}

imgAlbum06.onclick = function(){
    mostrarImg(imgAlbum06)
}

function mostrarImg (a){
    imgAlbumMain.innerHTML = `<img src="${a.src}" class="img-main-album " alt="Imagen del álbum">`;
}