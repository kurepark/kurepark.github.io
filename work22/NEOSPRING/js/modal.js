var KEY_ESC = 27;
var DURATION = 400;

//class scroll : body 스크롤 막기 클래스
function forceHideModal(modalSelector) {
  if(modalSelector==null || modalSelector==undefined){
	  $(".modal-layer").children('.modal-wrapper').css('transform','translateY(-300%)');
	  $('body').removeClass("no-scroll");
	  $('body').addClass("scroll");
    $(".modal-layer").fadeOut(DURATION);
  }
  $(modalSelector).children('.modal-wrapper').css('transform','translateY(-300%)');
  $('body').removeClass("no-scroll");
  $('body').addClass("scroll");
  $(modalSelector).fadeOut(DURATION);
}
function showModal(modalSelector) {
	if(modalSelector!=".popupModal"){
		$(".modal-layer").children('.modal-wrapper').css('transform','translateY(-300%)');
		$(modalSelector).parents('body').removeClass("no-scroll");
		$(modalSelector).parents('body').addClass("scroll");
		$(".modal-layer").fadeOut(DURATION);
	}
  var elems = $(modalSelector);
  $(modalSelector).fadeIn(DURATION);
  $(modalSelector).children('.modal-wrapper').css('transform','translateY(0%)');
  $(modalSelector).parents('body').addClass("no-scroll");
  $(modalSelector).parents('body').removeClass("scroll");
  var closeButtons = $(modalSelector).find(".close-modal");

  function hideModal(modalSelector) {
	$(modalSelector).children('.modal-wrapper').css('transform','translateY(-300%)');
	  $(modalSelector).parents('body').removeClass("no-scroll");
	$(modalSelector).parents('body').addClass("scroll");
	$(modalSelector).fadeOut(DURATION);
  }

  var hideByEsc = function(e) {
    if (e.keyCode == KEY_ESC) {
      hideModal(modalSelector);
      $(document).unbind("keydown", hideByEsc);
      $(modalSelector).unbind("click", hideByClick);
    }
  };

  var hideByClick = function(e) {
    if (e.target != e.currentTarget)
      return;
    hideModal(modalSelector);
    $(document).unbind("keydown", hideByEsc);
    $(modalSelector).unbind("click", hideByClick);
  };

  var hideByClose = function(e) {
    hideModal(modalSelector);
    $(closeButtons).unbind("click", hideByClose);
  }

  $(document).keydown(hideByEsc);
  $(modalSelector).click(hideByClick);
  closeButtons.click(hideByClose);
}
/*
 * 동적 모달 요소 초기화
 */
function initModal(selector) {
	$(selector).click(function() {
  	forceHideModal();
    var target = $(this).attr("data-target");
    if(target == "#header-login-layer"){
    	if($(window).width()<670){
    		location.href="/user/login";
    	}
    }

    if (!target) {
      target = $(this).attr("href");
    }
    showModal(target);
    return false;
  });
}
/*
 * 동적 토글 초기화
 */
function initToggle(selector) {
  $(selector).click(function() {
	forceHideModal();
  	var _target = $(this).attr("data-target");
    if (!_target) {
      _target = $(this).attr("href");
    }
    var target = $(_target);
    var effect = $(this).attr("data-toggle-effect");
    if (target.css("display") == "none") {
      if (effect == "fade"){
        target.fadeIn(DURATION);
        target.children('.modal-wrapper').css('transform','translateY(0%)');
      }else{
        target.show();
        target.children('.modal-wrapper').css('transform','translateY(0%)');
      }
    } else {
      if (effect == "fade"){
          target.children('.modal-wrapper').css('transform','translateY(-300%)');
        target.fadeOut(DURATION);
      }else{
        target.children('.modal-wrapper').css('transform','translateY(-300%)');
        target.hide();
      }
    }
  });
}


/*
 * 문서 생성시 초기화
 */
$(document).ready(function() {
  initModal("[data-toggle='modal']");
  initToggle("[data-toggle='toggle']");
  showModal(".popupModal");
});




//인스턴트 모달
function showModalMessage(message,okFunction,contestId){
  var okbtn="";
  var icon ="/img/icon/icon_noti_main.png";

  if(okFunction!=null || okFunction !=undefined){
  	if(okFunction=='ok'){
  		if(contestId == null || contestId.length < 1){
  			okbtn ="<button type='button' class='modal-check' onclick='forceHideModal();' style='width:100%;'>확인</button>";
  		}else{
  			okbtn ="<button type='button' class='modal-check' onclick='successUrl("+contestId+");forceHideModal();' style='width:100%;'>확인</button>";
  		}
  	}else{
  		 okbtn ="<button type='button' class='modal-cancel' onclick='forceHideModal()'>취소</button><button type='button' class='modal-confirm' onclick='forceHideModal();"+okFunction+";'>확인</button>";
  	}
  }
  if($('#instant-modal').length){
    $('#instant-modal').find(".modal-msg").html(message);
    $('#instant-modal').find(".modal-btn-area").html(okbtn);
    showModal("#instant-modal");
    return true;
  }
  $('body').append(' <div id="instant-modal" class="modal-layer popupModal">'+
    '<section class="modal-wrapper">'+
    '  <div class="modal-content">'+
    '<div class="icon-area"><img src="'+icon+'" alt="" title="" /></div>'+
    '    <div class="modal-msg"><p class="tit">'+message+'</p></div>'+
     ' </div>'+
     '   <div class="modal-btn-area">'+
     okbtn+
   '   </div>'+
   ' </section>'+
  '</div>');
  showModal("#instant-modal");
}

function successUrl(contestId){
	location.href="/contest/"+contestId+"/chart";
}

function showLogin(){
	if($(window).width()<670){
		location.href="/user/login";
	}
  showModal("#header-login-layer");
}

function showCancelMessage(message){
	var okbtn="<button type='button' class='modal-cancel' onclick='forceHideModal()'>취소</button><button type='button' class='modal-confirm' onclick='cancelOk();forceHideModal();'>확인</button>";
	var icon ="/img/icon/icon_noti_main.png";

	if($('#instant-modal').length){
	    $('#instant-modal').find(".modal-msg").html(message);
	    $('#instant-modal').find(".modal-btn-area").html(okbtn);
	    showModal("#instant-modal");
	    return true;
	  }
	  $('body').append(' <div id="instant-modal" class="modal-layer popupModal">'+
	    '<section class="modal-wrapper">'+
	    '  <div class="modal-content">'+
	    '<div class="icon-area"><img src="'+icon+'" alt="" title="" /></div>'+
	    '    <div class="modal-msg"><p class="tit">'+message+'</p></div>'+
	     ' </div>'+
	     '   <div class="modal-btn-area">'+
	     okbtn+
	   '   </div>'+
	   ' </section>'+
	  '</div>');
	  showModal("#instant-modal");
}

function cancelOk(){
	location.href="/intro";
}
