window.addEventListener('load', function(){

    //seleccionar los botones de los filtros

    //input filtro mujer
    document.querySelector(".mujer").addEventListener('click', function(){
        window.location.href = "/products/?producto=mujer";
    });

    //input filtro hombre
    document.querySelector(".hombre").addEventListener('click', function(){
        window.location.href = "/products/?producto=hombre";
    });

    //input filtro guayos
    document.querySelector(".guayos").addEventListener('click', function(){
        window.location.href = "/products/?producto=guayos";
    });

    //input filtro camisetas
    document.querySelector(".camisetas").addEventListener('click', function(){
        window.location.href = "/products/?producto=camisetas";
    });

    //input filtro pantalonetas
    document.querySelector(".pantalonetas").addEventListener('click', function(){
        window.location.href = "/products/?producto=pantalonetas";
    });

    //input filtro futbol sala
    document.querySelector(".futbol_sala").addEventListener('click', function(){
        window.location.href = "/products/?producto=futbol_sala";
    });

    //input filtro primer rango precio
    document.querySelector(".rango_uno").addEventListener('click', function(){
        window.location.href = "/products/?producto=rango_uno";
    });

    //input filtro segundo rango precio
    document.querySelector(".rango_dos").addEventListener('click', function(){
        window.location.href = "/products/?producto=rango_dos";
    });

    //input filtro tercer rango precio
    document.querySelector(".rango_tres").addEventListener('click', function(){
        window.location.href = "/products/?producto=rango_tres";
    });

    //input filtro cuarto rango precio
    document.querySelector(".rango_cuatro").addEventListener('click', function(){
        window.location.href = "/products/?producto=rango_cuatro";
    });

    //input filro quinto rango precio
    document.querySelector(".rango:cinco").addEventListener('click', function(){
        window.location.href = "/products/?producto=rango_cinco";
    });

    //input filtro nike
    document.querySelector(".nike").addEventListener('click', function(){
        window.location.href = "/products/?producto=nike";
    });

    //input filtro adidas
    document.querySelector(".adidas").addEventListener('click', function(){
        window.location.href = "/products/?producto=adidas";
    });

    //input filtro puma
    document.querySelector(".puma").addEventListener('click', function(){
        window.location.href = "/products/?producto=puma";
    });

    //Click en el primer producto
    document.querySelector(".puma").addEventListener('click', function(){
        window.location.href = "/products/?producto=puma";
    });

    //Al seleccionar un producto
   document.querySelector(".item").addEventListener('click', function(){
       window.location.href = `/description/?titulo=${document.querySelector(".item").getAttribute('data-titulo')}`;
   });
});