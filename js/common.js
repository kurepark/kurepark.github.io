$(document).ready(function(){
  $('nav.gnb li').on('click',function(){
    var $this = $(this);
    $this.addClass('active');
    $('nav.gnb li').not($this).removeClass('active');

  });

  $('.item_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
  //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
  $(document).on('click','nav.gnb a',function(event){
    event.preventDefault();
      $("html,body").animate({
        scrollTop : $(this.hash).offset().top
      },500)
    });
});