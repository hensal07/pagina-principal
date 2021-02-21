$(function(){
    $('.filter').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
            if (valor == 'compras, marketing, programacion, diseño'){
                $('.cont-work').show('1000');
                    }else{
                        $('.cont-work').not('.'+ valor).hide('1000');
                             $('.cont-work').filter('.'+ valor).show('1000');
        }
        });
        
  
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

    
        $('#enlace-inicio').on('click', function(e){
         e.preventDefault();
            $('html, body').animate({
                scrollTop:0
                    },600);
    });

        $('#enlace-nosotros').on('click', function(e){
         e.preventDefault();
            $('html, body').animate({
                scrollTop: nosotros
                    },600);
    });
    
        $('#enlace-servicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: servicio+10
            },600);
    });
    
    
        $('#enlace-trabajo').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: trabajo
            },600);
    });
    
    $('#enlace-brouchure').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: brouchure
        },600);
});
        
        $('#enlace-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: contacto
            },600);
    });
    });