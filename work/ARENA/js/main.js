// JavaScript main
var pNum=0;
var psts=0;
var menusts=0; //1 이면 참, 고정되었을때. 0이면 false, 고정이 아닌 첫화면 상태일때
var mob=0;//모바일, 태블릿일때 1, 데스크탑일때 0;


//var menusts=$(window).scrollTop()>navOffset, $(window).scrollTop()>hamOffset;

var p1, p2, p3, p4;

$(window).scroll(function(){
		
var cTop=$(this).scrollTop();//scrollTop()->현재 오른쪽 스크롤바의 위치를 리턴
	var wH = $(this).height();/*높이값*/
	//console.log("스크롤높이:"+cTop+"/높이값:"+wH);
	if(cTop<= wH){
		pNum=11;
	}//if끝
});/////////scroll///////////////







$(window).scroll(function(){
		
var cTop=$(this).scrollTop();//scrollTop()->현재 오른쪽 스크롤바의 위치를 리턴
	//console.log("스크롤높이값 : "+cTop+"/p2 : "+p2+"/p3 : "+p3+"/p4 : "+p3*1.25)
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




var winh=$(window).height();//화면 높이값...
var win=$(window).width();//화면크기

var hamh=(win>375)?70:55;//화면폭에 따라 햄버거버튼 높이값 바꾸기 

$(function(){//JQB/////////////////

	
	if(mob===0&&win>768){//데스크탑일때 적용
		//화면사이즈에 맞춰 패럴렉스 이미지 조정

		if(win>1400){
			//팰럴랙스 이미지 설정
		$(".parall1").parallax("8%",0.4);
		$(".parall2").parallax("70%",0.3);
		$(".parall3").parallax("90%",0.7);
		}
		else if(win>768&&win<=1400){
			//팰럴랙스 이미지 설정
		$(".parall1").parallax("5%",0.2);
		$(".parall2").parallax("90%",0.5);
		$(".parall3").parallax("70%",0.8);
		}
		
	}//데스크탑일때만 패럴렉스 if문
	
/*	else if(mob===1&&win<=1024){
		
		
	}//else if문 모바일일때 실행구역*/
	
	
	
	
	
	
	
	
	var gnum=300;
		p1=$("#main1").offset().top-200;
		p2=$("#main2").offset().top-gnum;
		p3=$("#main3").offset().top-gnum;
		p4=$("#main4").offset().top-gnum;
	//console.log("메인1높이"+p2);
	
	
	///////// 1020픽셀 이상일 경우만 스크롤 화면 열리기 이벤트 발생시키기
	if(win>1024){///////////////////////////스크롤이벤트영역//////////////////////
		$(document).on("DOMMouseScroll mousewheel",function(e){
			
			if(pNum===12){/*대문열기 한계값*/
				psts=0;
				return true;
			}
			
			//0.스크롤 연속실행 막기
			if(psts===1){return false;}//
			psts=1;//잠금
			
			// 1. 기본스크롤기능 막기
			e.preventDefault();
			
			
			//2.IE구버전 구분하기
			var evt=window.event || e;// window.event가 맞으면 변수evt에 할당, 아니면 e(들어온 이벤트)를 할당
			//변수=값1 || 값2 ->할당 가능한 여부에 따라 값1 혹은 값2가 변수에 할당됨
			
			var delta=evt.detail?evt.detail:evt.wheelDelta;//조건연산자를 사용하여 detail이 유효하면 (true)이면 그대로 쓰고 아니면 wheelDelta를 씀
			//console.log("델타값:"+delta);
			
			//////////////////////////////////////////////////
			//파이어폭스를 위한 코딩
			//1. 파이어폭스는 스크롤 처리시 방향이 반대
			//2. 파이어폭스는 detail처리시 originalEvent.detail로 사용해야한다
			if(/Firefox/i.test(navigator.userAgent)){
				delta=-evt.originalEvent.detail;
			}
			////////////////////////////////////////////////
			
			
			if(delta>0){//delta값이 양수면 화면을 위로(120)
				pNum--;
				if(pNum===-1){pNum=0;}//첫페이지로 고정
			}
			else{//delta값이 양수가 아니므로 마이너스, 화면이 아래로 (-120)
				pNum++;
				if(pNum===13){pNum=12;}//마지막페이지로 고정
			}
			
			//console.log("pnum"+pNum);
			
			if(pNum===10){
				$("html,body").animate({scrollTop:"0"},500);
			}//if///
			
			//첫번째 대문 이동
			$(".back1").animate({left:(-6*pNum)+"%"},300,"easeInOutQuad",function(){
				psts=0;//애니메이션이 끝난 후 잠금을 해제함.	
				
			});
			$(".back2").animate({left:(6*pNum)+"%"},300,"easeInOutQuad",function(){
				psts=0;//애니메이션이 끝난 후 잠금을 해제함.	
				
			});
			
			//스크롤도중 텍스트 사라지기
			if(pNum>2){
				$("#mimage>div:nth-of-type(3)>p").animate({opacity:"0",top:"-100%"},500,"easeInExpo");
			}//if	
			else if(pNum<=2){//다시보이기
				$("#mimage>div:nth-of-type(3)>p").animate({opacity:"1",top:"0%"},500,"easeOutExpo");
				
			}//else if
			
			//영상컨트롤
			if(pNum===0){
				$("#mainav").get(0).pause();
			}//if문
			else if(pNum>0){
				$("#mainav").get(0).play();
			}//else if
			
		});///마우스 휠 
		
		
		
		
		
	}//if문 화면크기 1020픽셀 이상일 경우 실행구역
	
	
	
			//스크롤시 메뉴바 상단에 고정시키기기
			var hamOffset=$("#hambox").offset().top;
			var navOffset=$("#navbox").offset().top;//메뉴바 위치값 구하기
			//console.log("메뉴바:"+navOffset);
	
		$(window).scroll(function(){
			console.log($(window).scrollTop());
			if($(window).scrollTop()>navOffset, $(window).scrollTop()>hamOffset){//스크롤높이가 메뉴바보다 커지면 고정.
				$("#navbox").css({position:"fixed",top:"0",marginTop:"0",opacity:".9"});
				$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"});//상단에 걸릴때 햄버거버튼도 걸리도록
				$("#tbtn").show(300);
				menusts=1;
			}//if문
			
			
			
			
			else{//초기화시키기
			$("#tbtn").hide(300);
			
				if(win>375){
			$("#navbox").css({position:"relative",marginTop:"-70px",opacity:"1"});
				$("#hambox").css({position:"absolute",bottom:"0"});//햄버거버튼 고정 다시 풀어주기
			}//if 375보다클때 메뉴바 고정 풀어주기
				
			else{
				$("#navbox").css({position:"relative",marginTop:"-50px",opacity:"1"});
				$("#hambox").css({position:"absolute",bottom:"0%"});//햄버거버튼 고정 다시 풀어주기
			}//else 375보다 작을때 메뉴바 고정 풀어주기
				
				menusts=0;
			}//else////////
			
			
		});//scroll///////////////////
	
	
	
	
	
	
	
	
	
	
});//JQB//////////////////////////



			
/*
		함수명 : scrollAction
		기능 : 각페이지 사진 등장
	*/
	function scrollAction(num){//num은 페이지 아이디 번호
			
			$("#main"+num+" .mtit").animate({opacity:"1"},700);//css,animate(transform이 바뀌지 않기 때문에 애니메이트 사용 가능)
			$("#main"+num+" .mtxt").animate({opacity:"1",top:"45%"},700);
	}//scrollAction함수끝

				
		


