define(['jquery'],function($){

$(".h4").on("click",function(){
	
	$(this).next().slideToggle();
})

$(".logo").on("click",function(){

	$(".left").css("visibility","visible");
})



})