$(document).ready(function () {

	var headerHeight = $(".small-header").outerHeight(); //헤더 외부 높이값
	var NavHeight = $("#userhomeNav").outerHeight(); //중간메뉴 외부 높이값
	var headlineHeight = $(".headline").outerHeight(); //컨텐츠 타이틀 영역 외부 높이값
	var headlineNetHeight = $(".headline").height(); //컨텐츠 타이틀 영역 높이값
	var fixedHeight = headerHeight + NavHeight + headlineHeight;


	var addmargin = 0; //스크롤 고정시 콘텐츠영역 패딩기본값
	addmargin = headerHeight + NavHeight + headlineNetHeight;

	//스크롤시 중간메뉴 고정하기
	var winWidth = $(window).width();
	var navOffset = $("#userhomeNav").offset().top;

	$(window).scroll(function () {
		var winTop = $(document).scrollTop();

		if (winTop > navOffset) { //gnb높이만큼 더해줌
			//$("#userContents").css("padding-top",addmargin);
			$("#userhomeNav").addClass('navfix');
			$("div.headline").addClass('contfix');
			if (winWidth < 669) {
				$("header").addClass('non-fixed');
				$(".ham-menu").css('margin-left', '0');
				$("p.sub-title").css('margin-left', '30px');
			}
			if ($("nav.userhome-side-nav ol").hasClass('story-nav')) { // 성장스토리는 사이드메뉴 고정 안함
				return false;
			} else {
				$("nav.userhome-side-nav").addClass('sidenav-fix');
			}
			//메뉴가 footer에 닿을때 사이드메뉴 고정 풀어주기
			sideNavAtBottom();
		} else {
			//$("#userContents").css("padding-top",0);
			$("#userhomeNav").removeClass('navfix');
			$("div.headline").removeClass('contfix');
			if (winWidth < 669) {
				$("header").removeClass('non-fixed');
				$(".ham-menu").css('margin-left', '-45px');
				$("p.sub-title").css('margin-left', '-15px');
				$(".userhome-side-nav").css('left', '-100%');
				$(".nav-mask").fadeOut();
			}
			if ($("nav.userhome-side-nav ol").hasClass('story-nav')) {
				return false;
			} else {
				$("nav.userhome-side-nav").removeClass('sidenav-fix');
			}

		}

		//사업요약페이지 스크롤할 때 리스트 active
		$(".userhome-cont>.business-item").each(function () {
			if (Number($(window).scrollTop() + fixedHeight + 30) >= $(this).offset().top) {
				var articleID = $(this).attr('id');
				var articleTitle = $(this).find('h3').text();
				$("div.headline h2 + p.sub-title").text(articleTitle);
				$(".biz-nav-dept1 li").removeClass('active');
				$(".biz-nav-dept1 a[href='#" + articleID + "']").parent('li').addClass('active');
			}
		});


		//기업연혁 페이지 스크롤할때 리스트 active
		$(".userhome-cont>.history-list").each(function () {
			if (Number($(window).scrollTop() + fixedHeight + 60) >= $(this).offset().top) {
				var ulId = $(this).attr('id');
				var ulTitle = $(this).find('li:first-child div.news-date span').text().split('.');
				$("div.headline h2 + p.sub-title").text(ulTitle[0]);
				$(".history-nav-dept1 li").removeClass('active');
				$(".history-nav-dept1 a[href='#" + ulId + "']").parent('li').addClass('active');
			}
		});
	}); //scroll

	//사업요약 사이드 하위메뉴 ui
	$(document).on('click', ".biz-nav-dept1 a", function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		var targetArticle = $(this).attr('href');
		// 하위메뉴 컨텐츠 부드럽게 스크롤 되도록;;
		$(this).parent().siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('html,body').animate({
			scrollTop: $(targetArticle).offset().top - fixedHeight
		}, 500); //스크롤동작과 같은 높이만큼 빼줌.
	});

	//기업연혁 사이드 하위메뉴 ui
	$(document).on('click', ".history-nav-dept1 a", function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		var targetUl = $(this).attr('href');
		$(this).parent().siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('html,body').animate({
			scrollTop: $(targetUl).offset().top - fixedHeight
		}, 500); //스크롤동작과 같은 높이만큼 빼줌.
	});

	// 기업홈 성장목표 ui
	var highlightLeng = $(".growthHighlight-module li").length;
	var highlightOlWid = $(".growthHighlight-module ol").actual('width');
	var highlightWidth = highlightOlWid / highlightLeng;
	$(".growthHighlight-module li").css('width', highlightWidth + 'px');
	//마우스 오버 효과
	$(".growthHighlight-module li").hover(function () {
		if ($(this).hasClass('active')) {
			return false;
		} else {
			$(this).addClass('hover');
		}
	}, function () {
		$(this).removeClass('hover');
	});
	//마우스 클릭 효과
	$(".growthHighlight-module li a").on('click', function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		$(this).parent().parent('li').addClass('click');
		$(this).parent().parent('li').siblings().removeClass('click');
		$(this).parent().parent('li').removeClass('hover').addClass('active');
		$(this).parent().parent('li').siblings().removeClass('active').css('width', highlightWidth + 'px');
	});
	//기업홈 성장목표 ui 끝

	//더보기 버튼
	$(".module-more").on('click', function () {
		$(".module-wrap").last().slideToggle(function () {
			if ($(".module-more").hasClass("up")) {
				$(".module-more").removeClass("up");
			} else {
				$(".module-more").addClass("up");
			}
		});
	});

	//모바일- 사이드메뉴 햄버거버튼 클릭
	$(".ham-menu").on('click', function () {
		//클릭하면 메뉴가 나오면서 화면 mask가 나옴
		$(".userhome-side-nav").css('left', 0);
		$(".nav-mask").fadeIn(300);
		$('body').css({
			'overflow-y': 'hidden',
			'height': '100%'
		});
	});

	//모바일 - 사이드 메뉴 닫기버튼 클릭
	$("div.close-btn,.nav-mask").on('click', function () {
		$(".userhome-side-nav").css('left', '-100%');
		$(".nav-mask").fadeOut(300);
		$('body').css({
			'overflow-y': 'scroll',
			'height': '100%'
		});
	});

	//참여한펀딩 상세보기 클릭 동작
	$(document).on('click', 'div.funding-info-area', function () {
		var detail = $(this).next('.funding-detail');
		if (winWidth < 769) { /* 모바일에선 토글아닌 팝업형태로 */
			detail.show();

		} else {
			if (detail.is(':visible')) {
				$(this).find('span.detail-btn').text('상세보기');
			} else {
				$(this).find('span.detail-btn').text('닫기');
			}
			detail.slideToggle();
			$("div.funding-detail").not(detail).slideUp();
			$("div.funding-detail").not(detail).siblings('.funding-info-area').find('span.detail-btn').text('상세보기');
		}

	});

	//상세보기 모바일 닫기 버튼 클릭
	$(document).on('click', 'div.mob-title .close-mobtit', function () {
		var detail = $(this).parent().parent('.funding-detail');
		detail.hide();
	});

	//사이드메뉴 클릭
	$(".toggle-btn").on('click', function (e) {
		e.preventDefault();
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

	//성장스토리 연도 클릭
	$(".year-toggle-btn").on('click', function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
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

	//댓글보기 클릭 동작
	$(".open-comment-body").on('click', function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		$(this).parent().siblings('.comment-body').find('.comments').css('display', 'block');
		$(this).parent().siblings('.comment-body').find('.reply-comments').css('display', 'block');
	});

	//댓글쓰기 버튼 클릭
	$(".open-comment").on('click', function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		$(this).parent().siblings('.comment-body').find('.comment-form').css('display', 'block');
	});

	//대댓글(답글)쓰기 버튼 클릭
	$(".open-reply").on('click', function (e) {
		e.preventDefault(); // a링크 기본 클릭 없애기
		$(this).parent().parent(".comments").siblings(".reply-form").css('display', 'block');
		$(this).css('display', 'none');
	});

	//sns 리스트 보여주기
	$(document).on('click', 'li.sns-share', function () {
		if (winWidth < 669) {
			$("div.sns-list-mobile").show();
		} else {
			$(this).prev('.sns-list').addClass('showlist');
			$(this).css('display', 'none');
		}

	});
	$(document).on('click', 'li.sns-close', function () {
		if (winWidth < 669) {
			$("div.sns-list-mobile").hide();
		} else {
			$(this).parent().parent('li.sns-list').removeClass('showlist');
			$(this).parent().parent().siblings('li.sns-share').css('display', 'block');
		}
	});
	//모바일 sns공유버튼 클릭시 공유 모달 닫히기
	$(document).on('click', 'div.sns-list-mobile li a', function () {
		$("div.sns-list-mobile .sns-close button").click();
	});
}); //jqb

/**
 * @return 펀딩 요약정보의 마진을 포함한 영역 전체 높이
 */
function sideNavHeight() {
	var sideNav = $(".userhome-side-nav");
	var marginTop = parseInt(sideNav.css("margin-top").replace(/px$/i, ''));
	var marginBottom = parseInt(sideNav.css("margin-bottom")
		.replace(/px$/i, ''));
	var height = sideNav.height();
	return marginTop + height + marginBottom;
}

/**
 * 화면 스크롤 위치를 계산하여 푸터와 사이드메뉴가 겹치지 않도록
 */
function sideNavAtBottom() {

	// 스크롤 높이 + 헤더 높이 + 펀딩 요약정보 (영역) 높이
	var scrolledLength = (function () {
		var scrollTop = $(window).scrollTop();
		var headerHeight = $("header").height();
		return scrollTop + headerHeight + sideNavHeight();
	})();

	// 푸터 위치
	var threshold = $("footer").offset().top - 150;

	var target = $(".user-home-article");
	if ($(window).width() > 769) {
		if (scrolledLength >= threshold) {
			// 요약정보 위치 고정
			$(".userhome-side-nav").removeClass('sidenav-fix').addClass("sidenav-bottomAt");
		} else {
			// 요약정보 위치 복구
			$(".userhome-side-nav").addClass('sidenav-fix').removeClass("sidenav-bottomAt");
		}
	} else {
		return false;
	}
}
