// 모바일 사이트JavaScript
$(document).ready(function(){
	
	// 740보다 작은 width일때 모바일로 넘기기
	var cwidth = $(window).width();
	console.log(cwidth);
	if(cwidth>740)location.href="indexDT.html";
});//jqb
	