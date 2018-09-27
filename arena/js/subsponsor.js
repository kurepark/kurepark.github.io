// 스폰서쉽 JavaScript Document

//var tsts=0;

$(function(){//제이쿼리블록/////////
	//1.포토플러그인 사용해서 갤러리박스보이기기
	$(".gallery").photobox();
	
	//2. 플러스버튼 클릭시 텍스트박스 보이기, 버튼효과
	$(".spbtn>button").click(function(){
		
		var csts=$(this).siblings(".txtbox").css("width");
		//console.log(csts);
		
	if(csts===0+"px"){
	//버튼원형 동작 및 색변화
		$(this).css({backgroundColor:"#ff553f",border:"1px solid #ff553f"});
		
		$(this).find("span:last-child").animate({rotate:"-90deg",opacity:"0"},500);
		
		$(this).find("span:first-child").animate({backgroundColor:"#fff"},500);
	
	//텍스트박스 보이기
		$(this).siblings(".txtbox").animate({width:"700px"},500,"easeOutCirc",function(){
			$(".txtbox>p").delay(300).animate({opacity:"1"},500);//글자보이기
		$(".gallery").delay(200).animate({left:"2%"},300);//갤러리박스 나타나기
			
			
		});//상자나오는 animation
		
	}//if문
		
		
		
		
		else{
		$(this).css({backgroundColor:"transparent",border:"1px solid #00aced"});
		
		$(this).find("span:last-child").animate({rotate:"0deg",opacity:"1"},500);
		
		$(this).find("span:first-child").animate({backgroundColor:"#00aced"},500);
			
			$(this).siblings(".txtbox").animate({width:"0px"},300,function(){
				$(".txtbox>p").animate({opacity:"0"},500);//글자보이기
			$(".gallery").animate({left:"-100%"},300);//갤러리박스 나타나기
				
			});//클릭하면 상자사라지는 애니메이션
			
		}//else문문
	
		
		
		//다른 버튼 클릭시엔엔 형제요소 숨기기
			$(this).parent().parent().siblings().find(".txtbox").animate({width:"0"},300)	.prev().css({backgroundColor:"transparent",border:"1px solid #00aced"})
			.find("span:last-child").animate({rotate:"0deg",opacity:"1"},500)
			.parent().find("span:first-child").animate({backgroundColor:"#00aced"},500);
			
			
		
	});//버튼클릭
	
	//3. 페이지스크롤하면 나타나기
	
	
		//스크롤시 각 li높이값 구하기
	var gnum=700;
		p1=$("#spon01").offset().top-gnum;
		p2=$("#spon02").offset().top-gnum;
		p3=$("#spon03").offset().top-gnum;
	
	console.log(p1);
	
	
});//제이쿼리블록////////////////////////

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
	else if(cTop>=p3&&cTop<p3*1.18){
		scrollAction(3);
	}

});/////////scroll///////////////



/*
		함수명 : scrollAction
		기능 : 스크롤시 텍스트와 사진 등장
	*/
	function scrollAction(num){//num은 페이지 아이디 번호
			
			$("#spon"+0+num).animate({opacity:"1",marginTop:"150px"},700);
	}//scrollAction함수끝		




		
			