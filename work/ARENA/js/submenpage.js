// 상품페이지 JavaScript Document
$(function(){//jQb///////////////////////
	// 1. 컬렉션 버튼에 마우스 오버시 효과주기
	$(".menbtn").hover(function(){//마우스오버
		$(this).stop().animate({width:"30px"},400,function(){
			$(this).stop().animate({width:"130px",backgroundColor:"#ff553f"},400);
			$(this).find("a").stop().animate({opacity:"0"},200,function(){
				$(this).next("span").stop().animate({opacity:"1"},700);
			});
			
		});//animation
	},function(){//마우스아웃
		$(this).stop().animate({width:"0"},400,function(){
			$(this).stop().animate({width:"250px"},300).css({backgroundColor:"transparent"});
			
			$(this).find("span").stop().animate({opacity:"0"},100);
			$(this).find("a").delay(100).stop().animate({opacity:"1"},500);
			});
	});//hover
	
	

	//스크롤시 각 li높이값 구하기
	var gnum=500;
		p1=$("#wear1").offset().top-gnum;
		p2=$("#wear2").offset().top-gnum;
		p3=$("#wear3").offset().top-gnum;
		p4=$("#wear4").offset().top-gnum;
	
	
	
});//jQb/////////////////////////////////
var p1, p2, p3, p4;

$(window).scroll(function(){
		
var cTop=$(this).scrollTop();//scrollTop()->현재 오른쪽 스크롤바의 위치를 리턴
	
	/////////////////////글자등장 함수호출
	if(cTop>p1&&cTop<p2){
		scrollAction(1);
	}
	else if(cTop>=p2&&cTop<p3){
		scrollAction(2);
	}
	else if(cTop>=p3&&cTop<p3*1.25){
		scrollAction(3);
	}
	else if(cTop>=p3*1.25){
		scrollAction(4);
	}
//else if의 경우 첫번째에 걸리면 계속 실행되기 때문에 구간값을 설정해야한다. 단순히 ctop>p1은 적용 안됨.
	
	//console.log("스크롤높이"+cTop);
});/////////scroll///////////////



/*
		함수명 : scrollAction
		기능 : 스크롤시 텍스트와 사진 등장
	*/
	function scrollAction(num){//num은 페이지 아이디 번호
			
			$("#wear"+num+" .mentxt").animate({opacity:"1",top:"0%"},700);//css,animate(transform이 바뀌지 않기 때문에 애니메이트 사용 가능)
			$("#wear"+num+" .menimg").animate({opacity:"1",top:"0%"},700);
	}//scrollAction함수끝















