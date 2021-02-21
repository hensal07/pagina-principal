document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:40, /*milisegundos para velocidad de la animacion*/
        dist: -80, /*distancia de perspectiva aumento de la imagen al moverla*/
        shift:5,/*distancia de las imagenes en los costados*/
        padding:5,/*espaciado dentro*/
        numVisible:3, /*cuantas imagenes visibles quiero en el carrusel*/
        indicators:true, /*indicador de la imagen pasar imagen*/
        noWrap: false,   /*INDICA QUE COMIENCE EN LA PRIMER IMAGEN*/

        

    });
});





let boton = document.getElementById("hamburguer");
let clic = document.getElementById("enlaces8");
let enlaces = document.getElementById("enlaces8");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces8 dos8")
        contador=1;
    }else{
        enlaces.classList.remove("dos8")
        enlaces.className = ("enlaces8 uno8")
        contador=0;
    }
})
clic.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces8 dos8")
        contador=1;
    }else{
        enlaces.classList.remove("dos8")
        enlaces.className = ("enlaces8 uno8")
        contador=0;
    }
})


let  nosotros = $('#nosotros').offset().top,
servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top,
        brouchure = $('#brouchure').offset().top,
            contacto = $('#contacto').offset().top;


window.addEventListener('resize', function(){
let nosotros = $('#nosotros').offset().top,
servicio = $('#servicio').offset().top,
    trabajo = $('#trabajo').offset().top,
        brouchure = $('#brouchure').offset().top,
            contacto = $('#contacto').offset().top;
});


$('#enlace8-inicio').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop:0
    },600);
});

$('#enlace8-nosotros').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: nosotros+190
    },600);
});

$('#enlace8-servicio').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: servicio+100
},600);
});


$('#enlace8-trabajo').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: trabajo-100
},600);
});

$('#enlace8-brouchure').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: brouchure-100
},600);
});

$('#enlace8-contacto').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: contacto-100
},600);
});
