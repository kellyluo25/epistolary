$('.letters').slick({
      fade: true,
    nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
    prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
});

		
$(window).scroll(function() {
      if ($(this).scrollTop() >= 1){
      $('.header').addClass('sticky-top smallheader');
      $('.header').removeClass('fullheader');
      } else {
      $('.header').removeClass('sticky-top smallheader');
      $('.header').addClass('fullheader');
      }
});

//$('.entry').height(function(){
//    return $(this).width();
//});
