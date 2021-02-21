$(function(){
    $('.filter').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
            if (valor == 'todos'){
                $('.cont-work').show('1000');
                    }else{
                        $('.cont-work').not('.'+ valor).hide('1000');
                             $('.cont-work').filter('.'+ valor).show('1000');
        }
        });


         let  nosotros = $('#nosotros').offset().top,
                servicio = $('#servicio').offset().top,
                trabajo = $('#trabajo').offset().top,
                brouchure = $('#brouchure').offset().top;
             
    
        window.addEventListener('resize', function(){
            let nosotros = $('#nosotros').offset().top,
                servicio = $('#servicio').offset().top,
                trabajo = $('#brouchure').offset().top;
               trabajo = $('#trabajo').offset().top,
                contacto = $('#contacto').offset().top;
    });


        $('#enlace-nosotros').on('click', function(e){
         e.preventDefault();
            $('html, body').animate({
                scrollTop: nosotros-90
                    },600);
    });
    
        $('#enlace-servicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: servicio-90
            },600);
    });
    
    
       
    $('#enlace-brouchure').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: brouchure-90
        },600);
});

$('#enlace-trabajo').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
    scrollTop: trabajo-90
    },600);
});



$('#enlace-contacto').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: contacto-90
},600);
});
     
    });