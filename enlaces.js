
const resize = () => {
 let info = $('#info').offset().top,
      web = $('#web').offset().top,
        estrategias= $('#estrategias').offset().top,
                        mail = $('#mail').offset().top;


}

let info = $('#info').offset().top,
     web = $('#web').offset().top,
     estrategias = $('#estrategias').offset().top,
    mail = $('#mail').offset().top;


window.addEventListener('resize', resize)
window.addEventListener('DOMcontentLoaded', resize) 


$('#enlace-inicio').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop:0
},600);
});


$('#enlace-info').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
  scrollTop: info
  },600);
  });
  

$('#enlace-web').on('click', function(e){
e.preventDefault();
$('html, body').animate({
scrollTop: web
},600);
});



$('#enlace-estrategias').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
  scrollTop: estrategias
  },600);
  });

  $('#enlace-mail').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
    scrollTop: mail
    },600);
    });

  


 