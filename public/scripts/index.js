window.addEventListener('load', function(){

var time = setInterval(ChangeImgTimer,5000);
var contador = 0;
var text = document.querySelector('header').textContent;

var imgs = ['url(data/Mbappe,jpg)','url(data/munich.png)', 'url(data/juve.png)', 'url(data/milano.png)'];

function ChangeImgTimer(){
    document.querySelector('header').style.backgroundImage = imgs[contador];

    contador++;
    if(contador==imgs.length)contador=0;
    console.log(contador);
}

//seleccionar boton para ir a productos
document.querySelector(".product").addEventListener('click', function(){
    window.location.href = "/products";
})

});
