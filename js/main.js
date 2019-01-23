$(document).ready(function(){

  //gnb클릭
  $(document).on('click','.btn_menu',function(){
    var $url = $(this).attr('data-url');
    linkToPage($url);
    if($url === 'about.html') {
      $(".wrap").addClass('wrap_bg');
    }else {
      $(".wrap").removeClass('wrap_bg');
      setTimeout(workSlider, 50);
    }
  });	

  //작업물 클릭
  $(document).on('click','.btn_work_link',function(){
    var $url = $(this).attr('data-url');
    console.log(11111)
    $('.main_header, .main_content').addClass('wide');
    setTimeout(linkToPage($url), 1000);
  });


  setTimeout(workSlider, 50);

});//jqb

function workSlider() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        if(index < 10){
          index = '0' + (index + 1);
        }
        else{
          (index + 1)
        }
        return '<span class="' + className + '">' + index + '</span>';
      }
    },
});
}


function linkToPage(pageUrl){
  $.ajax({ 
    type: 'get' 
    , url: pageUrl
    , dataType : 'html' 
    , success: function(data) {
      $("#mainContent").html(data); 
    } 
  });
}