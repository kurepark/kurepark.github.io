// JavaScript 서브페이지
$(document).ready(function(){
	//하위메뉴의 홈버튼 클릭시시 메인페이지로 이동동
	$("#lnb_menu>div>ul>li:first-child>a").click(function(){
		location.href="indexDT.html";
	});//click
	
	
	
	//서브메뉴 클릭시 하위메뉴 나오게하기
	
	
	$("#lnb_menu>div>ul>li").click(function(){
		//e.preventDefault();
		var csts=$("ol",this).css("display");//0이면면 닫힌상태, 1이면 열린상태
	if(csts=="none"){
		$("ol",this).slideDown(200);
		
	}	
		else{
			$("ol",this).slideUp(200);
		
		}
		/////////토글글, 상태값 질문하기.
		$("ol",this).parent().siblings().find("ol").slideUp(200);
	});//click
	
	
	//클릭시 li 메뉴 색바꾸기 등등
	$("#submenu>li").click(function(e){
		e.preventDefault();
		$("a",this).css({backgroundColor:"#3980a8", color:"white"}).parent().siblings().find("a").css({backgroundColor:"#fff",color:"#464646"});
		
		
		//클릭하면 컨텐츠내용 바꾸기
		$(".mvinfo").eq($(this).index())
		.show().siblings("article").hide();
	});//click
});//jqb///////////////