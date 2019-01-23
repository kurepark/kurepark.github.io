$(document).ready(function(){
  makeImageSlide();
  $('.btn_linkPage').on('click',function(){
    var $url = $(this).attr('data-url');
    linkToPage($url);
    makeImageSlide();
  });	 

  $(".btn_top").on('click',function(){
    $('html, body').animate({
      scrollTop : 0
    },300)
  });
  
});

function makeImageSlide(){
  setTimeout(function(){
    $('.item_slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  },500)
}
function linkToPage(pageUrl){
  $.ajax({ 
    type: 'get' 
    , url: pageUrl
    , dataType : 'html' 
    , success: function(data) {
      $("#workItem").html(data); 
    } 
  });
}
