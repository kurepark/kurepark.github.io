/**
 * 전용관 스크립트
 */

$(document).ready(function () {
    //사이드메뉴 클릭
    $(".toggle-btn").on('click', function () {
        var btn = $(this);
        $(this).parent().find("ol").slideToggle(300, function () {
            if (btn.hasClass("active")) {
                btn.removeClass("active");
            } else {
                btn.addClass("active");
                btn.parent('li').siblings().find('a').removeClass('active');
            }
        });
        btn.parent().siblings('li').find('.nav-dept1').slideUp(300); //열려있는 dept1 닫기
    });
    //모바일- 사이드메뉴 햄버거버튼 클릭
    $(".ham-menu").on('click', function () {
        //클릭하면 메뉴가 나오면서 화면 mask가 나옴
        $(".dedicate-side-nav").css('left', 0);
        $(".nav-mask").fadeIn(300);
        $('body').css({
            'overflow-y': 'hidden',
            'height': '100%'
        });
    });

    //모바일 - 사이드 메뉴 닫기버튼 클릭
    $("div.close-btn,.nav-mask").on('click', function () {
        $(".dedicate-side-nav").css('left', '-100%');
        $(".nav-mask").fadeOut(300);
        $('body').css({
            'overflow-y': 'scroll',
            'height': '100%'
        });
    });

    var headerHeight = $(".small-header").outerHeight(); //헤더 높이값
    var headlineHeight = $(".headline").outerHeight(); //컨텐츠 타이틀 영역 높이값
    var fixedHeight = headerHeight + headlineHeight;

    var winWidth = $(window).width();
    //스크롤시 중간메뉴 고정

    // addmargin += $("#companyNav").height();

    var navOffset = $(".participation-body").offset().top;
    $(window).scroll(function () {
        var winTop = $(document).scrollTop();
        if (winTop > navOffset) { //gnb높이만큼 더해줌
            $(".participation-body").css("padding-top", headlineHeight);
            $("div.headline").addClass('contfix');
            $(".dedicate-cont.closed").addClass('closedfix');
            if (winWidth < 669) {
            	$("header").addClass('non-fixed');
                $(".ham-menu").css('margin-left', '0');
            }
            $("nav.dedicate-side-nav").addClass('sidenav-fix');

        } else {
            $(".participation-body").css("padding-top", 0);
            $("div.headline").removeClass('contfix');
            $(".dedicate-cont.closed").removeClass('closedfix');
            if (winWidth < 669) {
            	$("header").removeClass('non-fixed');
                $(".ham-menu").css('margin-left', '-45px');
                $(".dedicate-side-nav").css('left', '-100%');
                $(".nav-mask").fadeOut();
            }
            $("nav.dedicate-side-nav").removeClass('sidenav-fix');
        }
    });
    //정렬버튼 클릭시 active주기
    $(".sort-tab a").on('click', function () {
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');
    })

    //정렬버튼
    var tabBtn = $(".sort-tab a");
    $(document).on('click',".sort-tab a", function () {
        if (this.nextElementSibling) {
            $(this).css('display','none').next('a').css('display','inline-block');
        } else {
            $(this).css('display','none');
            tabBtn.first('a').css('display','inline-block');
        }
    });

	//sns 리스트 보여주기
	$(document).on('click','li.sns-share',function(){
		if(winWidth < 669) {
			$("div.sns-list-mobile").show();
		} else {
			$(this).prev('.sns-list').addClass('showlist');
			$(this).css('display','none');
		}

	});
	$(document).on('click','li.sns-close',function(){
		if(winWidth < 669 ){
			$("div.sns-list-mobile").hide();
		}else {
			$(this).parent().parent('li.sns-list').removeClass('showlist');
			$(this).parent().parent().siblings('li.sns-share').css('display','block');
		}
	});

}); //jqb

//모바일 검색영역 열고 닫기
function openSearchMob(){
    $(".headline .search-area").slideDown(300,'easeOutBack');
    $("button.mob-search-btn").hide();
}
function closeSearchMob(){
    $(".headline .search-area").slideUp(300,'easeInBack');
    $("button.mob-search-btn").fadeIn(500);
}
