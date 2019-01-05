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