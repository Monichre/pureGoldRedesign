$(document).ready(function(){
	var
		$header = $('#intro header'),
		$intro = $('#intro'),

	  scroll = $(window).scrollTop(),
		mqMobile = window.matchMedia('(max-width: 768px)'),
		mqTablet = window.matchMedia('(min-width: 768px) and (max-width: 1130px)'),
		mqMac = window.matchMedia('(min-width: 1130px)');




	// Media Query Js //
	if (mqMobile.matches) {

	} else if (mqTablet.matches){



	} else if (mqMac.matches){




	} else {
	}


	$(window).scroll(function(){
		var windowWidth = $(this).width();
	 var windowHeight = $(this).height();
	 var windowScrollTop = $(this).scrollTop();
	 var $introHeight = $('#intro').height();

	  // if (scroll >= 10){
		// 	header.addClass('fixed');
		// } else {
		// 	header.removeClass('fixed');
		// }
		if (windowScrollTop > ($introHeight/2)) {
			$('.gear section:nth-child(1)').addClass('slideInLeft').show();
			$('.gear section:nth-child(2)').addClass('slideInRight').show();

		}
	});
	$('.fa').click(function(){
		var id = $(this).attr('value');
		$('#' + id).addClass('zoomInUp').show();

	});




});
