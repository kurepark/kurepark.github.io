// 서브페이지 공통 JavaScript Document
// JavaScript 공통

var menusts=0; //1 이면 참, 고정되었을때. 0이면 false, 고정이 아닌 첫화면 상태일때
var hamsts=0;//햄버거버튼 클릭상태값
var win=$(window).width();//화면값
var winh=$(window).height();//화면 높이값...
var hamh=(win>375)?70:55;//화면폭에 따라 햄버거버튼 높이값 바꾸기 
$(function(){//JQB//////////////////
	
	//로고클릭시 인덱스페이지로 링크
	$("#navbox>a:first-of-type").click(function(){
		location.href="../index.html";
	});//로고클릭
	
	
	//페이지 링크걸기
	$("#menu>ul>li>ul, #mob_menu>ul>li>ul").click(function(){
		var idx=$(this).parent().index();
		//alert(idx);
		switch(idx){
			case 0:location.href="historypage.html";break;
			case 1:location.href="menpage.html";break;
			case 2:location.href="sponsorship.html";break;
			case 3:location.href="newspage.html";break;
			case 4:location.href="store.html";break;
		}
	});//click
	

	
	
	//햄버거 메뉴 클릭시 아이콘x모양으로 변하고 화면 전체에 메뉴 보이기
		
	$("#ham").click(function(e){
		e.preventDefault();//기본이동막기
		
		
		//화면크기에 따라 gnb메뉴 별도로 보여주기
		//화면크기가 1024보다 클때때 데스크탑 gnb보여주기
	if(win>1024){
		//햄버거버튼 애니메이션주기
		if(hamsts===0){
			
			if(menusts===0){
				$("#ham").addClass("hamani");
		//메뉴클릭시시 gnb화면나오기기
		$("#menu").animate({left:"-98%"},300,"easeInOutCirc",function(){
			$(this).animate({left:"-120%"},400,function(){
				//$("#hambox").hide();//동작중에 버튼숨기기
				$(this).animate({left:"0%"},500,"easeOutCirc",function(){
					$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"}).fadeIn(100);
					//addclass
				});
			});//ani2
		});//ani1
				
			}///메뉴가 고정이 아닌닌 첫화면일때.
			
				else{
					$("#ham").addClass("hamani");
					$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"});
					$("#menu").animate({left:"-98%"},300,"easeInOutCirc",function(){
						$(this).animate({left:"-120%"},400,function(){
							$(this).animate({left:"0%"},500,"easeInOutCirc");
						});//ani2
					});//ani1
				}//menusts else문, 메뉴가 상단고정일때.
								
			$(".c1").css({"stroke-dashoffset":"0"});
			
		hamsts=1;//클릭상태값 변경
	}//if문
		else{
			//햄버거버튼 애니메이션 원상복구
	
			if(menusts===0){	
				$(this).removeClass("hamani");
			$(".c1").css({"stroke-dashoffset":"140"});
			
			//클릭시 gnb메뉴 집어넣기
			$("#menu").delay(500).animate({left:"-100%"},500,"easeInCirc",function(){
				$("#hambox").hide().css({position:"absolute",bottom:"0"}).fadeIn(100);
			});
			
				
			}//menusts if문, 메뉴가 고정아닌 첫화면 상태.
			
			
			else{
			
				$(this).removeClass("hamani");
				$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"});
		$(".c1").css({"stroke-dashoffset":"140"});
			
			//클릭시 gnb메뉴 집어넣기
			$("#menu").animate({left:"-100%"},500,"easeInCirc");
				
			}//menusts else문문 메뉴바 상단단 고정일때
		
			
		hamsts=0;//클릭상태값값 변경경
			
		}//else
		
		
		
	}//화면크기가 1024보다 클때때 데스크탑 gnb보여주기 끝
	
	
		else{//화면크기가 1024보다 아래일경우 나오는 gnb메뉴
			//햄버거버튼 애니메이션주기
		if(hamsts===0){
			
			if(menusts===0){
				$("#ham").addClass("hamani");
		//메뉴클릭시시 gnb화면나오기기
		$("#mob_menu").animate({left:"-98%"},300,"easeInOutCirc",function(){
			$(this).animate({left:"-120%"},400,function(){
				$("#hambox").hide();//동작중에 버튼숨기기
				$(this).animate({left:"0%"},500,"easeOutCirc",function(){
					$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"}).fadeIn(100);
					//addclass
				});
			});//ani2
		});//ani1
				
			}///메뉴가 고정이 아닌닌 첫화면일때.
			
				else{
					$("#ham").addClass("hamani");
					$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"});
					$("#mob_menu").animate({left:"-98%"},300,"easeInOutCirc",function(){
						$(this).animate({left:"-120%"},400,function(){
							$(this).animate({left:"0%"},500,"easeInOutCirc");
						});//ani2
					});//ani1
				}//menusts else문, 메뉴가 상단고정일때.
								
			$(".c1").css({"stroke-dashoffset":"0"});
			
		hamsts=1;//클릭상태값 변경
	}//if문
		else{
			//햄버거버튼 애니메이션 원상복구
	
			if(menusts===0){	
				$(this).removeClass("hamani");
			$(".c1").css({"stroke-dashoffset":"140"});
			
			//클릭시 gnb메뉴 집어넣기
			$("#mob_menu").delay(500).animate({left:"-100%"},500,"easeInCirc",function(){
				$("#hambox").hide().css({position:"absolute",bottom:"0"}).fadeIn(100);
			});
			
				
			}//menusts if문, 메뉴가 고정아닌 첫화면 상태.
			
			
			else{
			
				$(this).removeClass("hamani");
				$("#hambox").css({position:"fixed",bottom:winh-hamh+"px"});
		$(".c1").css({"stroke-dashoffset":"140"});
			
			//클릭시 gnb메뉴 집어넣기
			$("#mob_menu").animate({left:"-100%"},500,"easeInCirc");
				
			}//menusts else문문 메뉴바 상단단 고정일때
		
			
		hamsts=0;//클릭상태값값 변경경
			
		}//else
		
		}//화면크기가 1024보다 아래일경우 나오는 gnb메뉴끝
		
		
		
	});//햄버거메뉴 click
	
	
	//모바일 gnb 아코디언 메뉴 ////////////////
	$(".plus").click(function(){
		$(this).css({borderBottom:"none"}).addClass("plus2").find(".mob_lnbm").slideDown(200).parent().siblings().css({borderBottom:"1px solid #00aced"}).removeClass("plus2").find(".mob_lnbm").slideUp(200);
		$(this).css({backgroundColor:"#00151d"}).find("span").css({color:"#fff",textShadow:"0 0 15px #00aced"}).parent().siblings().css({backgroundColor:"#002e40"}).find("span").css({textShadow:"none"});
		
		
		
		
		
		
		
		
		
	});//gnb메뉴 제목 눌렀을때 작동
	
	//스크롤액션.
	
	$("#tbtn").click(function(){
		$("html,body").animate({scrollTop:0+"px"},300,"easeInOutCirc");
		//pNum=0;//페이지 번호 전역변수 변경
		//pageAction();
	});//click
	
	
	
	
	
	
});//JQB//////////////////////////