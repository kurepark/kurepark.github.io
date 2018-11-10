// 메인페이지 JavaScript



$(document).ready(function(){
	
	
	
	
	//배너리스트 li숨기기기
	$("#slider li").hide();//display:none
	$("#slider li").first().show();
	
	
	var snum=0;//슬라이드번호
	setInterval(function(){
		snum++;
		if(snum==3){snum=0}//snum이 3번을 만나면 0번으로 돌아가기!
		//siblings를 써서 다른 형제요소를 안보이도록
		$("#slider li").eq(snum).fadeIn(1000).siblings().fadeOut(1000);
		//eq해당번호는 fadein되고 다른형제요소는는 fadeout!
	},4000);
	
	
	/*공지내용클릭시 내용바뀌기*/
	$("#title>span").click(function(e){
		e.preventDefault();//기본이동막기...
		$("a",this).css({color:"#265d86"})
			.parent().siblings().find("a").css({color:"#666"});
//		$("a:not").css({color:"#666"});
//		var notinum=$(this).index();
		//alert(notinum);
		$(".realnoti").eq($(this).index())
		.show().siblings().hide();
//		$(".noti"+(notinum+1)).show().siblings().hide();
	});//click
	
	//광고박스 배너 움직이기~~^^v
	var bnum=0;
	setInterval(function(){
		$("#banslide").animate({left:"-100%"},600,"easeInOutCubic",function(){
			$(this).append($("#banslide li").first()).css({left:"0"});
		});//ani
		bnum++;
		if(bnum==3){bnum=0;}
		$(".slidebtn  img").eq(bnum).attr("src","web_images/rolling_btn_on.png").siblings().attr("src","web_images/rolling_btn_off.png");

	},5000);//setinterval
	/////////////////////////////////////////////////////////////
	
	
	
	//영화순위 알림~~
	$("#mvtb tr").eq(1).addClass("mvchart");
		var mnum=1;
	setInterval(function(){
	mnum++;
		if(mnum===6){mnum=1;}
		$("#mvtb tr").eq(mnum).addClass("mvchart").siblings().removeClass();
		//영화포스터 바꾸기
		$("#box>div:nth-child(3)>img").attr("src","web_images/poster0"+mnum+".jpg");
		
		
		//랭킹아이콘바꾸기
		$("#mvtb tr").eq(mnum).find(">td:first-child>img").attr("src","web_images/rank_0"+mnum+"_on.png");
		
		for(var i=1;i<6;i++){
			if(i==mnum)continue;
			$("#mvtb tr").eq(i).find("td:first-child>img").attr("src","web_images/rank_0"+(i)+"_off.png");
		}
	},2000);//setinterval
	//////////////////////////////////////////////////////////
	
	
	//영화순위 알림~~
	$("#mvtbweek tr").eq(1).addClass("mvchart");
		var wmnum=1;
	setInterval(function(){
	wmnum++;
		if(wmnum===6){wmnum=1;}
		$("#mvtbweek tr").eq(wmnum).addClass("mvchart").siblings().removeClass();
		//영화포스터 바꾸기
		$("#box>div:nth-child(3)>img:last-child").attr("src","web_images/wposter0"+wmnum+".jpg");
		
		
		//랭킹아이콘바꾸기
		$("#mvtbweek tr").eq(wmnum).find(">td:first-child>img").attr("src","web_images/rank_0"+wmnum+"_on.png");
		
		for(var i=1;i<6;i++){
			if(i==wmnum)continue;
			$("#mvtbweek tr").eq(i).find("td:first-child>img").attr("src","web_images/rank_0"+(i)+"_off.png");
		}
	},2000);//setinterval
	
	//영화 일일/주말 버튼 클릭시 색바꾸기
	$("#box>div:nth-child(2)>a").click(function(e){
		e.preventDefault();//기본이동막기	
		var cnum=$("#box>div:nth-child(2)>a").index(this);
		//alert(cnum);
		$(this).css({color:"#f29503"}).siblings().css({color:"#fff"});
	
		if(cnum==0){
			$("#mvtb").show().parents().find("#mvtbweek").hide();
			$("#box>div:nth-child(3)>img:first-child").show().siblings().hide();
		}//if끝
		else{
			$("#mvtbweek").show().parents().find("#mvtb").hide();
			$("#box>div:nth-child(3)>img:last-child").show().siblings().hide();
		}//else
	});//click
	
});//제이쿼리블럭끝



