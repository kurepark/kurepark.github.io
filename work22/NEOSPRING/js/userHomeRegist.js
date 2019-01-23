$(document).ready(function () {
  //상단 버튼 동작
  $(".user-article .btn-area").find("input[type='reset']").on('click', function () {
    $(".top-menu .btn-area").find('button[type="submit"]').prop('disabled', false);
    $(".top-menu .btn-area").find('button[type="submit"]').css('opacity', '1');
  });
  //각 정보 입력박스 활성화 동작
  $(".user-article").on('click', function () {
    var formState = $(this).find('form').css('display');
    var wid = $(window).width();

    if (formState === 'none') {
      $(this).find('form').slideDown(300);
      $(this).find('.explain').hide();
      $(this).css('border', '1px solid #b8becc');

      $(this).siblings('.user-article').css('border', 'none');
      $(this).siblings('.user-article').addClass('unactive');
      $(this).removeClass('unactive');
      $(this).siblings('.user-article').find('form').slideUp(300);
      $(this).siblings('.user-article').find('.explain').show();
      $(".top-menu .btn-area").find('button[type="submit"]').prop('disabled', true);
      $(".top-menu .btn-area").find('button[type="submit"]').css('opacity', '.5');
      if (wid < 669) { //모바일화면 ui
        $(this).css({
          border: "none",
          borderBottom: "1px solid #b8becc"
        });
      }
    }
    resizeAll();
    autosize($("textarea.autosize"));
  });

  //배경이미지 클릭 바인딩(버튼 안눌러도 이미지 업로드 띄우기)
  $(".imagebox .default-image").on('click', function () {
    $(this).siblings(".neo-file").val('');
    $(this).siblings(".neo-file").click();
  })
  //파일 등록하기 버튼클릭 동작
  $(".file-registBtn").on('click', function () {
    $(this).next(".neo-file").click();
  });

  //companySns 값이 있을 때 삭제
  $(".snsbox .snsDelete").on('click', function () {
    $(this).parent().find("input.state").val("DELETE");
    $(this).parent().hide();
    $("#profileSNS .snsbox").each(function (idx) {
      if ($(this).hasClass('newbox')) {
        $("#profileSNS input[type='submit']").attr("disabled", true).addClass('off');
      } else {
        $("#profileSNS input[type='submit']").attr("disabled", false).removeClass(
          'off');
      }
    })
  });


  $(".interest-list input[name='interest']").on('change', function () {
    //관심사 5개까지만 선택
    if ($("input[name='interest']:checked").length > 5) {
      this.checked = false;
    }

    //관심사가 1개라도 체크되었을 때 저장하기 버튼 활성화
    if ($("input[name='interest']:checked").length > 0) {
      $("#interestItem input[type='submit']").attr("disabled", false).removeClass('off');
    } else {
      $("#interestItem input[type='submit']").attr("disabled", true).addClass('off');
    }
  })


  //ir파일 저장후 보여줄때 파일 있으면 삭제버튼 활성화.
  if ($("#registIR input[name='text']").val() !== '') {
    $(".file-remove").attr('disabled', false).css('opacity', '1');
  }

  //ir자료 등록하고 파일명 보여주기
  var uploadFile = $(".filewrap #irRegistInput");
  uploadFile.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings(".filename").val(filename);
    $(this).siblings(".file-remove").attr('disabled', false).css('opacity', '1');

    $("#registIR input[type='submit']").attr("disabled", false).removeClass('off');
  })

}); //jqb

//등록된 파일 지우기
function fileRemove() {
  $('#irRegistInput').val("");
  $(".filewrap .filename").val("");
  $(".file-remove").attr('disabled', true).css('opacity', '0.5');
  $("#registIR input[type='submit']").attr('disabled', true).addClass('off');
}

//기업정보 버튼 활성화
function infoCheck(target) {
  var targetVal = target.val();
  $("#companyInfo li input").each(function () {
    var inputVal = $(this).val();
    console.log(inputVal);
    if (inputVal === '') {
      $("#companyInfo input[type='submit']").attr('disabled', true).addClass('off');
    } else {
      $("#companyInfo input[type='submit']").attr("disabled", false).removeClass('off');
    }
  })
}

//페이지 로딩 시 이미지 리사이징
window.onload = function () {
  resizeAll();
} //window.onload
function resizeAll() {
  var divs = document.querySelectorAll('.container .image-resizebox');
  for (var i = 0; i < divs.length; ++i) {
    if (divs[i].querySelector('img') != null) {
      resize(divs[i]);
      divs[i].style.cssText = 'background:none;'
    }

  } //for

}

function resize(div) {
  var divAspect = div.offsetHeight / div.offsetWidth;
  //div.style.overflow = 'hidden';

  var img = div.querySelector('img');
  var imgAspect = img.height / img.width;
  if (imgAspect <= divAspect) {
    // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
    var imgWidthActual = div.offsetHeight / imgAspect;
    var imgWidthToBe = div.offsetHeight / divAspect;
    var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
    img.style.cssText = 'width: auto; height: 100%; margin-left: ' + marginLeft + 'px;'
  } else {
    var imgHeightActual = div.offsetWidth / imgAspect;
    var imgHeightToBe = div.offsetWidth / divAspect;
    var marginTop = Math.round((imgHeightActual - imgHeightToBe) / 2);
    // 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
    img.style.cssText = 'width: 100%; height: auto; margin-left: 0;margin-top:' + marginTop + 'px;'
  } //else
}

//취소버튼 클릭시 폼 닫힘
function resetBtn(target) {
  target.parent().parent().slideUp(300);
  target.parent().parent().siblings('.explain').show(300);
  target.parent().find("input[type='submit']").attr("disable", true).addClass('off');

  $(".container .user-article").each(function () {
    $(this).removeClass("unactive");
    $(this).css({
      "border": "none",
      'border-bottom': '1px solid #ddd'
    });

  })
}


//취소버튼 클릭시 빈 dom삭제
function ResetBoxBtn() {
  var newBox = $("#profileSNS .newbox");
  newBox.remove();

  //삭제후 취소시 삭제한 div 보여주기
  $("#profileSNS .snsbox").each(function () {
    if ($(this).css('display') === 'none') {
      $(this).css('display', 'block');
    }
  })
}


//소셜네트워크 input체크
function activeSNSBtn(target) {
  $("#profileSNS input[name='sns']").each(function () {
    var allSel = $(this).siblings('select').val();
    var selInput = $(this).val().length;
    console.log(allSel);
    console.log(selInput);
    if (allSel !== '' && selInput !== 0) {
      $("#profileSNS .btn-area").find('input[type="submit"]').attr('disabled', false).removeClass(
        'off');
    } else {
      $("#profileSNS .btn-area").find('input[type="submit"]').attr('disabled', true).addClass('off');
    }
  })
}

//소셜서비스 셀렉트 이미지 변경
function changeSnsImg(target) {
  var selSNS = target.val();
  var selImg = target.siblings('img');
  if (selSNS === '') {
    selImg.attr('src', '../../img/user_companyHome/sns-select.png');
    $("#profileSNS input[type='submit']").attr('disabled', true).addClass('off');
  } else {
    selImg.attr('src', '../../img/user_companyHome/' + selSNS + '.png');
  }
}



//소셜네트워크 취소 이미지 변경
function imageReset() {
  $("#profileSNS .snsbox img").each(function () {
    var imgAttr = $(this).attr('src')
    var selOption = $(this).siblings('select').val();
    var attrStr = imgAttr.split('/');
    if (attrStr[3] !== selOption) {
      $(this).attr('src', '/img/fundingRegister/' + selOption + '.png');
    }
  })
}


//소셜네트워크 내용 추가 동작
function snsAdd() {
  $("#profileSNS input[type='submit']").attr("disabled", true).addClass('off');
  var new_item = $("#sns-select-origin").html();

  $("#profileSNS>.snsbox").last().after(new_item);

  $("#profileSNS>.snsbox").find(".remove").on('click', function () {
    $(this).parent().remove();
    $("#profileSNS .snsbox").each(function (idx) {
      var newSelect = $(this).find('select').val();
      var newInput = $(this).find('input[name="sns"]').val().length;
      if (($(this).hasClass('newbox') && newSelect === '') || ($(this).hasClass('newbox') &&
          newInput === 0)) {
        $("#profileSNS input[type='submit']").attr("disabled", true).addClass('off');

      } else {
        $("#profileSNS input[type='submit']").attr("disabled", false).removeClass('off');
      }
    })

  });
}


//프로젝트 대표이미지 보여주기
function projectThumbnailPrivew(html, $target) {
  if (html.files && html.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {

      $target.css('display', '');
      $target.html(
        '<img style="visibility:hidden" src="/file/" id="coverImg" alt="프로젝트 이미지" title="프로젝트 대표 이미지">'
      );
      $target.html('<img src="' + e.target.result +
        '" class="imgchange" border="0" alt="프로젝트 대표 이미지" title="프로젝트 대표 이미지" />');
    };

    reader.readAsDataURL(html.files[0]);

    setTimeout(function () {
      resizeAll();
    }, 10);


    $target.siblings('.file-registBtn').text('이미지 변경하기');
    $target.css('background', 'none');

    $target.parent().siblings(".btn-area").find('input[type="submit"]').attr('disabled', false);
    $target.parent().siblings(".btn-area").find('input[type="submit"]').removeClass('off');
  }
  //취소하기 버튼 클릭시 이미지 reset
  $target.parent().siblings(".btn-area").find('input[type="reset"]').click(function () {
    $target.html('<img src="/file/" id="coverImg" alt="프로젝트 이미지" title="프로젝트 대표 이미지">');
    $target.parent().siblings(".btn-area").find('input[type="submit"]').attr('disabled', true);
    $target.parent().siblings(".btn-area").find('input[type="submit"]').addClass('off');
  });

}