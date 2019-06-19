$(document).mouseup(function (e){
var div = $(".search_block");
if (!div.is(e.target) 
  && div.has(e.target).length === 0) {
  div.hide();
  }
});

$('.search').click(function(){
  $('.search_block').show();
});
