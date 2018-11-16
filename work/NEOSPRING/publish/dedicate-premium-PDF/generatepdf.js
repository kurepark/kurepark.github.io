// Web Page를 Control 하기 위한 Web Page Module 객체 생성
var page = require('webpage').create();
 
// PhantomJS에서 화면을 어떤 사이즈로 출력할 것인지에 대한 값
// 미디어 쿼리도 동작
page.viewportSize = { width: 1024, height: 768 };
 
page.onLoadFinished = function(status) {
    console.log('onLoadFinished Status: ' + status);
 
    page.render('screenshot.pdf');    // 스크린 캡쳐파일 생성
      phantom.exit();
}
 
// 페이지 오픈
page.open('https://neospring.kr/user/home/3', function(status) {
    // status 인자를 통해 성공, 실패여부 확인
    if (status !== 'success') {
		console.log('Cannot open site');
		
    } 
});