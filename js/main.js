(function($) {

	$(window).scroll(function(){
		var
			$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			windowHeight = $window.height(),
			windowScrollTop = $window.scrollTop(),
			$introHeight = $('#intro').height(),
			$portfolioHeight = $('#portfolio').height();

		if (windowScrollTop > $introHeight/2) {

			$('.gear section:nth-child(1)').addClass('slideInLeft').show();
			$('.gear section:nth-child(2)').addClass('slideInRight').show();
		}

	});

	$(function() {

		var
			mqMobile = window.matchMedia('(max-width: 768px)'),
			mqTablet = window.matchMedia('(min-width: 768px) and (max-width: 1130px)'),
			mqMac = window.matchMedia('(min-width: 1130px)');



		// Media Query Js //
		if (mqMobile.matches) {
			$('.award').click(function(){
				var id = $(this).attr('value');
				if($('#' + id).siblings().hasClass('info')) {
					$('#' + id).siblings('.info').hide();
					$('#' + id).siblings('.about-container').find('.info').hide();
				} else {
					$('#' + id).siblings('.about-container').find('.info').hide();
					$('#' + id).parent('.about-container').siblings('.info').hide();
				}
				$('#' + id).addClass('fadeInUp').show();
			});

		} else if (mqTablet.matches){

			$('.award').click(function(){
				var id = $(this).attr('value');
				$('#' + id).addClass('fadeInUp').show();
			});

		} else if (mqMac.matches){

			$('.award').click(function(){
				var id = $(this).attr('value');
				$('#' + id).addClass('fadeInUp').show();
			});

		} else {
		}

		// poptrox

			$('#videos').poptrox({
				overlayColor: '#2c2c2c',
				overlayOpacity: 0.85,
				popupCloserText: '',
				popupLoaderText: '',
				selector: '.work-item a.image',
				usePopupCaption: true,
				usePopupDefaultStyling: false,
				usePopupEasyClose: false,
				usePopupNav: true
			});

	});

})(jQuery);
