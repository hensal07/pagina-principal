$(function(){
    $('.filter').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
            if (valor == 'compras, marketing, programacion, diseño'){
                $('.cont-work').show('1000');
                    }else{
                        $('.cont-work').not('.'+ valor).hide('1000');
                             $('.cont-work').filter('.'+ valor).show('1000');
        };
    });
        });
