$(document).ready(function () {
  //관계인 투자 버튼
  $('.change-btn').on('click', function (e) {
    e.preventDefault();
    var changeTypeBtn = $(this);
    if (changeTypeBtn.hasClass('change-relation')) { //관계인으로 신청 클릭
      changeTypeBtn.addClass('change-normal').removeClass('change-relation');
      $('.relation-info').css('display', 'block');
      $('.invest-form .type').text('기업 관계인');
    } else {
      changeTypeBtn.addClass('change-relation').removeClass('change-normal');
      $('.relation-info').css('display', 'none');
      $('.invest-form .type').text('일반투자자');
    }

  });

  //총 투자금액 입력 동작
  $("input#amount").on('keyup', function () {
    var amountValue = $(this).val();
    checkInvestLimit(amountValue);
    calculateAmount(amountValue);
    veiwBenefitCard(amountValue);
  });
  // 투자혜택 선택 ui
  $(document).on('click', '.benefit-list li', function () {
    $(this).addClass('sel-benefit').siblings('li').removeClass('sel-benefit');
  });

  //접근성 탭메뉴
  var ItemParent = $("ul.account-tab");
  var accountItem = $("ul.account-tab div.account-item");
  var firstItem = $("ul.account-tab>li:first-child");
  var accountItemHeight = accountItem.outerHeight() + 80; //absolute사용으로 부모높이값 구하기 위해서.


  //모든 컨텐츠박스 숨기기
  accountItem.hide();
  firstItem.addClass('on').find('div.account-item').css('display', 'block');
  //접속시 부모 높이값 계산해서 넣어주기
  ItemParent.css('height', accountItemHeight); //최초 접속시 계좌 높이값주기


  //탭메뉴 클릭시 컨텐츠 전환
  $('ul.account-tab>li>a').on('click', function () {
    ItemParent = $("ul.account-tab");
    var thisItem = $(this);
    accountItemHeight = thisItem.parent('li').addClass('on').end().next().outerHeight(); //클릭시마다 높이값 입력

    //탭 컨텐츠 보여주기
    accountItem.hide().parent('li').removeClass('on');
    thisItem.parent('li').addClass('on').end().next().css('display', 'block');

    //클릭해서 보여지는 페이지 높이값
    thisItem.parent('li').addClass('on').end().next().css('height', accountItemHeight);

    //새로운 계좌 등록시엔 다음단계 버튼 없습니다
    if ($(this).parent('li').hasClass('setbank-account')) {
      $("div.btn-area").css('display', 'none');
    } else {
      $("div.btn-area").css('display', 'block');
    }
  });

  //금융사 옵션 선택시 입력영역 보여주기
  $("div.account-item select").change(function () {
    if ($(this).val() !== '') {
      $(this).next('div.account-form').css('display', 'block');
    } else {
      $(this).next('div.account-form').css('display', 'none');
    }
  });

  //저장된 계좌선택
  $(document).on('click', 'div.account-item>ul>li', function () {
    $(this).addClass('selected').siblings('li').removeClass('selected');
  });

  //새로운 계좌등록 버튼 활성화
  $("div.account-item form input").keyup(function () {
    var bankNumVal = $('input[type="number"]').val();
    if (bankNumVal !== '') {
      $("div.account-item form button").attr('disabled', false).css('opacity', '1');
    } else {
      $("div.account-item form button").attr('disabled', 'disabled').css('opacity', '.5');
    }
  })

  //이체 수수료 팝업 보기 클릭 동작
  $(document).on('click', 'button.feemodal-btn', function () {
    $("#feeInfo-modal").fadeIn();
  });


  //이용약관 내용보기 클릭 동작
  $(document).on('click', 'button.view-agreement', function () {
    var $thisItem = $(this).parent('div.input-chk').next('div.agreement-item');
    $thisItem.slideToggle(200);
    $("div.agreement-item").not($thisItem).slideUp(200);
  });

}); //jqb


//가입폼 검사;;/
$(".btn-area a.payment-btn").on('click', function () {
  var form = $(this);
  var addtion = $(".agreement");
  form.find(".warning p").text("");

  var message;

  if (!checkFormChecked("플랫폼 이용약관에 동의해 주세요", addtion
      .find("[name='agreement']")))
    return false;

  if (!checkFormChecked("개인정보 취급방침에 동의해 주세요", addtion
      .find("[name='privacy']")))
    return false;

  if (!checkFormChecked("크라우드펀딩 서비스 이용약관에 동의해 주세요", addtion
      .find("[name='serviceAgreement']")))
    return false;

  //텍스트내용은 변호사님과 정해지면 추가합니다
  if (!checkFormChecked("(투자 위험 안내)온라인소액투자중개서비스 이용약관에 동의해 주세요", addtion
      .find("[name='investRiskAgreement']")))
    return false;


  return false;
});
//투자한도 초과시 클래스 넣기
function checkInvestLimit(val) {
  var maxAmount = 1000; //최대입력 가능한 주식수
  if (val > maxAmount) {
    $("div.invest-form").addClass('over-amount');
    $("div.btn-area a.next-btn").attr('disabled', 'disabled').css('opacity', '.5');
  } else {
    $("div.invest-form").removeClass('over-amount');
    $("div.btn-area a.next-btn").attr('disabled', false).css('opacity', '1');
  }
}
//총 투자금액 계산
function calculateAmount(val) {
  var perPrice = 5000; //주당가격
  var total = val * perPrice;
  $("div.total-amount dd").text(total + '원');
}
//투자혜택 최소주식수 입력시 투자혜택선택 보여주기 

function veiwBenefitCard(val) {
  var minBenefitAmount = 50; //투자혜택 최소금액
  if (val >= minBenefitAmount) {
    $("div.benefit ul.benefit-list").show();
  } else {
    $("div.benefit ul.benefit-list").hide();
  }
}


function checkForm(message, input, checker) {

  if (input.length > 0) {
    if (!checker(input)) {
      if (input.parent().parent().parent().next().hasClass("warning")) {

        //약관 미동의시 스크롤.
        $(".agreement div.warning p").text(message);

      } else if (input.next().hasClass("warning")) {
        input.next().find('p').text(message);
      } else {
        alert(message);
      }
      input.focus();
      return false;
    }
  }
  return true;
}

function checkFormChecked(message, input) {
  return checkForm(message, input, function (i) {
    return i.prop("checked");

  });
}
