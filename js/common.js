// 개인포폴 JavaScript Document


$(function(){//////////////////////
	
	var currH = $(window).height();
	 $("#fullpage").fullpage({
        navigation: true, //블릿내비게이션 표시여부(기본값false)
        navigationPosition: "left", //블릿내비 위치설정
        navigationTooltips: ["HOME", "ABOUT ME", "PORTFOLIO", "CONTACT"], //블릿툴팁
        menu: "#menu", //메뉴로 쓸 a링크가 담긴 박스의 아이디명을 #과 함께 사용
        anchors: ["page1", "page2", "page3", "page4"], //a태그의 href값을 #을 빼고 써준다.
//		 showActiveTooltip: true
	afterLoad:function(link,idx){
		var mnum=$("#menu>ul>li").eq(idx-1);
		if(idx===1){
			mnum.addClass("selm").siblings().removeClass("selm");
		}//if
		else if(idx===2){
			
			mnum.addClass("selm").siblings().removeClass("selm");
			//2페이지 도착시 skill 박스 실행
			$("#skill>li:first-child>span>span").delay(200).animate({width:"85%"},700);
			$("#skill>li:nth-child(2)>span>span").delay(200).animate({width:"80%"},700);
			$("#skill>li:nth-child(3)>span>span").delay(200).animate({width:"30%"},700);
			$("#skill>li:nth-child(4)>span>span").delay(200).animate({width:"70%"},700);
			$("#skill>li:nth-child(5)>span>span").delay(200).animate({width:"95%"},700);
			$("#skill>li:nth-child(6)>span>span").delay(200).animate({width:"90%"},700);
		}//else if
		
		else if(idx===3){
			mnum.addClass("selm").siblings().removeClass("selm");
			
		}
		 
		else{
			mnum.addClass("selm").siblings().removeClass("selm");
		}
		
		
	},//afterload
		onLeave :  function ( index , nextIndex , direction ) {

		// 섹션 2를 떠난 후 
		if (index !==2) {
			 $("#skill>li>span>span").css({width:"0"});
		}//if
		}//onleave
	 });//fullpage
});//jqb//////////////////////

