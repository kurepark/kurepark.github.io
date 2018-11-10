$(document).ready(function(){
});//jqb

//kofic불러오기
function btnKoficPage(){
  $.ajax({ 
    type: 'post' 
    , url: '/desc_kofic.html' 
    , dataType : 'html' 
    , success: function(data) {
      //$("#workItem").html(data); 
      console.log(111)
    } 
  });	
}