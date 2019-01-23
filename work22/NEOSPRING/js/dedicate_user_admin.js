/*
    전용관 관리자 공통 스크립트
*/


$(document).ready(function () {

    $(".sort-tab a").on('click', function () {
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');
    });

    //정렬버튼
    var tabBtn = $(".sort-tab a");
    $(document).on('click', ".sort-tab a", function () {
        if (this.nextElementSibling) {
            $(this).css('display', 'none').next('a').css('display', 'inline-block');
        } else {
            $(this).css('display', 'none');
            tabBtn.first('a').css('display', 'inline-block');
        }
    });



    //사이드메뉴 클릭
    $(".dedicate-side-nav .toggle-btn").on('click', function () {
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

    $(".sort-list-wrapper li").on('click', function () {
        $(this).toggleClass('select-list');
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


    $(window).scroll(function () {
        var navOffset = $(".dedicate-user-admin-content").offset().top;
        var winTop = $(document).scrollTop();

        if (winWidth < 669) {
            if (winTop + 49 > navOffset) { //gnb높이만큼 더해줌
                $("div.headline").addClass('contfix');
                $(".ham-menu").css('margin-left', '0');
                $("nav.dedicate-side-nav").addClass('sidenav-fix');
                $("aside.content-menu").addClass('sidenav-fix');

            } else {
                $("div.headline").removeClass('contfix');
                $(".ham-menu").css('margin-left', '-45px');
                $(".dedicate-side-nav").css('left', '-100%');
                $(".nav-mask").fadeOut();
                $("nav.dedicate-side-nav").removeClass('sidenav-fix');
                $("aside.content-menu").removeClass('sidenav-fix');
            }
        }
    });



}); //jqb



//글 수정삭제 버튼
function editBtn(target) {
    var $this = target.siblings('.edit-box');
    $this.toggle();
    target.toggleClass('active');
    $("ul.edit-box").not($this).css('display', 'none');
    $("span.edit").not(target).removeClass('active');
}

//모바일 그룹디바이더 고정
function sticky() {
    var winWidth = $(window).width();
    if (winWidth < 669) { //모바일에서만 적용
        setTimeout(function () { //로딩이 모두 완료 된 후에 스크롤 이벤트 시작할 수 있도록
            $(".group-divider").each(function () {

                var sticky = $(this),
                    stickyTop = sticky.offset().top;

                $(document).scroll(function () {
                    var headerHeight = $("header").outerHeight();
                    var headlineHeight = $(".headline").outerHeight();
                    var stickyHeight = $(".group-divider").outerHeight();
                    var totalHeight = headerHeight + headlineHeight + (stickyHeight * 2);
                    var scroll = $(window).scrollTop() + totalHeight;

                    if (scroll > stickyTop) {
                        $(".sticky").not(sticky).removeClass("sticky--on");
                        if (!sticky.hasClass("sticky--on")) {
                            sticky.addClass("sticky--on");
                        }
                    } else {
                        sticky.removeClass("sticky--on");
                    }
                });
            });
        }, 500);
    }
}


//모바일 검색영역 열고 닫기
function openSearchMob() {
    $(".headline .search-area").slideDown(300, 'easeOutBack');
    $("button.mob-search-btn").hide();
}

function closeSearchMob() {
    $(".headline .search-area").slideUp(300, 'easeInBack');
    $("button.mob-search-btn").fadeIn(500);
}
