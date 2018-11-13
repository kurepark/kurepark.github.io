$(document).ready(function(){

  $('nav.gnb li').on('click',function(){
    var $this = $(this);
    $this.addClass('active');
    $('nav.gnb li').not($this).removeClass('active');

  });
  
});