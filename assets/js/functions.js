$(document).ready(function(){

  $('#burger').click(function(){
    $(this).toggleClass('is-open');

    if ( $('.main-nav') .is(':hidden')) {
      $('.main-nav').slideDown(500);
    } else {
      $('.main-nav').slideUp(200);
    }
  });

});
