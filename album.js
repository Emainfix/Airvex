const imgAlbumMain = document.getElementById("img-al-main")
const imgAlbum01 = document.getElementById("img-album-01")
const imgAlbum02 = document.getElementById("img-album-02")

imgAlbum01.onclick = function(){
    mostrarImg(imgAlbum01)
}

imgAlbum02.onclick = function(){
    mostrarImg(imgAlbum02)
}

function mostrarImg (a){
    imgAlbumMain.innerHTML = `<img src="${a.src}" class="img-main-album " alt="Imagen del álbum">`;
}