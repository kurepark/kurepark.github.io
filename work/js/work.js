$(document).ready(function(){
   $("#workItem").load('desc_kofic.html');
});//jqb

//kofic불러오기
function btnKoficPage(){
  $.ajax({ 
    type: 'get' 
    , url: 'desc_kofic.html' 
    , dataType : 'html' 
    , success: function(data) {
      $("#workItem").html(data); 
    } 
  });	
}

function btnArenaPage(){
  $.ajax({ 
    type: 'get' 
    , url: 'desc_arena.html' 
    , dataType : 'html' 
    , success: function(data) {
      $("#workItem").html(data); 
    } 
  });	 
}