// historypage JavaScript Document
$(function(){//제이쿼리블록
	//1. gobtn클릭하면 페이지 슬라이드, 기존페이지 사라지기.
	var num=0;
	var year=[1970,1980,1990,2000,2010];
	var ytxt=["혁신의 시작","스타일의 자유","밀레니엄을 향해서","혁신에 대한 약속","현재 그리고 미래"];
	
	$(".btnR").click(function(e){
		e.preventDefault();//a링크 기본이동 막기
//		console.log(num);
		if(num===4){return false;}

		$(".story").eq(num).animate({bottom:"100%"},500,"easeInQuart");
		$(".story").eq(num).next().animate({bottom:"10%"},500);
		
		$("#histit>h1").text(year[num+1]);
		$("#histit>h3").text(ytxt[num+1]);
		
	
			
			$("#yearbox>ul>li").eq(num+1).addClass("selsc").siblings().removeClass("selsc");
			
		
		num++;
	});//btnr click
	
	//왼쪽 클릭시 이동.
	$(".btnL").click(function(e){
		e.preventDefault();//a링크 기본이동 막기
		
//		console.log(num);
		if(num===0){return false;}
		$(".story").eq(num).prev().animate({opacity:"1",bottom:"10%"},500,"easeOutQuart");
		$(".story").eq(num).animate({bottom:"-100%"},500);
		
		
		$("#histit>h1").text(year[num-1]);
		$("#histit>h3").text(ytxt[num-1]);
		
		$("#yearbox>ul>li").eq(num-1).addClass("selsc").siblings().removeClass("selsc");
		
		num--;
	});//btnr click
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});//제이쿼리블록

























