// JavaScript 글로벌

$(function(){
	$("#map>div>.pointer").click(function(){

$(this).addClass("updown").parent().siblings().find(".pointer").removeClass("updown");
		
		$(this).parent().find(".glob_info").animate({opacity:1},600).parent().siblings().find(".glob_info").animate({opacity:0});
	});
	
	
	
	
});//jqb//////////////////////

