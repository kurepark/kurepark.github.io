$(document).ready(function(){
  makeImageSlide();
  $('.btn_linkPage').on('click',function(){
    var $url = $(this).attr('data-url');
    linkToPage($url);
    makeImageSlide();
  });	 

   
  //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
  $(document).on('click','nav.gnb a',function(event){
    event.preventDefault();
      $("html,body").animate({
        scrollTop : $(this.hash).offset().top
      },500)
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
