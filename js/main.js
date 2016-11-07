(function($) {

	$(window).scroll(function(){
		var
			$window = $(window),
			windowScrollTop = $window.scrollTop(),
			$introHeight = $('#intro').height(),
			$portfolioHeight = $('#portfolio').height();
			$gearHeight = $('#gear').height();


		if (windowScrollTop > $introHeight/2) {
			$('.gear section:nth-child(1)').addClass('slideInLeft').show();
			$('.gear section:nth-child(2)').addClass('slideInRight').show();
		}
		if (windowScrollTop > ($gearHeight + $portfolioHeight + $introHeight + 300)) {

			$('#contact form').show();
		}
	});

	$(function() {

		// Smooth Scroll

		$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

		$('.award').click(function(){
			var id = $(this).attr('value');
			$('#' + id).removeClass('lightSpeedOut');

			if($('#' + id).siblings().hasClass('info')) {
				$('#' + id).siblings('.info').addClass('lightSpeedOut');
				$('#' + id).siblings('.about-container').find('.info').addClass('lightSpeedOut');
			} else {
				$('#' + id).siblings('.about-container').find('.info').addClass('lightSpeedOut');
				$('#' + id).parent('.about-container').siblings('.info').addClass('lightSpeedOut');
			}

			if(id === "reviews"){
				$('#' + id).addClass('slideInDown').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					var $self = $(this);
					$self.removeClass('slideInDown');
					$self.children('h3').first().addClass('animated lightSpeedIn').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

						$self.find('.review').each(function(){
							$(this).delay(2000).addClass('animated lightSpeedIn').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('lightSpeedIn');
							});
						});
						$(this).removeClass('lightSpeedIn');
					});
				});
			} else if(id === "bio"){
					$('#' + id).addClass('slideInDown').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						var $self = $(this);
						$self.removeClass('slideInDown');
						$self.children('h3').first().addClass('animated lightSpeedIn').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){


							$self.find('main').first().addClass('animated slideInLeft').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ $(this).removeClass('slideInLeft');
							});
							$(this).removeClass('lightSpeedIn');

						});
					});
			} else {
				$('#' + id).addClass('slideInUp').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					var $self = $(this);
					$self.removeClass('slideInUp');
					$self.find('main').first().addClass('animated slideInLeft').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ $(this).removeClass('slideInLeft');
					});
					$self.children('h3').first().addClass('animated lightSpeedIn').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('lightSpeedIn');
					});
				});
			}
		});

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
