$(function(){

	$(".btn-3").click(function() {
		if($(".nav-bar").hasClass("showBox")){
			$(".nav-bar").removeClass('showBox')
		}else{
			$(".nav-bar").addClass('showBox')
		}
	});

})