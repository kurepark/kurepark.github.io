// 상위메뉴 공통 JavaScript
$(document).ready(function(){
	
	//상단 로고클릭시 메인페이지로 이동~
	$("#top>header:nth-child(2) img").click(function(){
		location.href="indexDT.html";
	});//click
	
	
	//클릭시 페이지 이동시키기기
	$("#navi>div ul>li:nth-child(4) .gnb-sub-list").click(function(){
		location.href="indexDT-subpage.html";
	});
	$("#navi>div ul>li:nth-child(3) .gnb-sub-list").click(function(){
		location.href="indexDT-subpage_global.html";
	});
	
	
	//GNB메뉴 click
	$(".gnbline>span").hide();
	$("#navi>div>ul>li").click(function(){
		$(".gnbline").animate({height:"400px"},300);
		if($(".gnbline").css("height")==="0px"){
			$(".gnb-sub",this).slideDown(300);
		}//gnbline의 height값이 0px이면 gnb-sub가 슬라이드다운(보인다)
		else{//gnbline의 height값이 0px이 아닌경우 gnb-sub를 보여만준다, 
			$(".gnb-sub",this).show();
		}
		
		$(".gnb-sub",this).parent().siblings().find(".gnb-sub").hide();
		//메뉴를 클릭하면 gnb-sub의 부모형제요소들의 gnb-sub를 찾아 숨긴다(클릭한것만 보이도록 함)
		$(".gnbline").css({"borderBottom":"5px solid #3980a8"});
		$(".gnbline>span").show();
	});//GNB메뉴 click끝
	
	
	$(".gnbline>span").click(function(){
		$(this).hide(300);
		$(".gnb-sub").slideUp(300);
		$(".gnbline").animate({height:"0px",borderBottom:"0px"},300);
	});//닫기버튼클릭끝
	
	//패밀리사이트 보기 클릭
	var fh=0;
	$("#family a").click(function(e){
		e.preventDefault();//a링크 기본이동막기
		if(fh==0)fh=100;
		else fh=0;
		
		$("#hideinfo").animate({height:fh+"px"},300);
	});//click// display:none을 확인할것,
	
	//gnb클릭 서브메뉴 있는지 유무확인하는 버튼넣기
//	$(".btn_arr").add
	
});//jQB끝///