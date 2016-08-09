
window.onload = function() {
	var
		$logo = $('#logo'),

		$camera = $('#camera'),
		$content = $('#landing'),
		$collabLink =$('.collab'),
		$collab = $('#collab'),
		$mobile = $('#mobile'),
		$desktopNav = $('#desktop-nav'),
		$mobileCamera = $('#mobile-camera'),
		$container = $('#container'),
		$accordion = $('.accordion'),
		$panel = $('.panel'),

		$lexyImg = $('#lexy'),
		$weddingImg = $('#wedding'),
		$mazatlanImg = $('#mazatlan'),
		$reelImg = $('#reel'),
		$videoTitle = $('#video-title'),
		$lexyTitle= $('<p class = "vid-title-p">Lexy Panterra</p>'),
		$weddingTitle= $('<p class = "vid-title-p">Wedding Reel</p>'),
		$mazatlanTitle=$('<p class = "vid-title-p">Mazatlan 2016</p>'),
		$reelTitle=$('<p class = "vid-title-p">Pure Gold Reel</p>'),
		$imgArray = [$lexyImg, $mazatlanImg, $reelImg, $weddingImg],
		$titleArray = [$lexyTitle, $mazatlanTitle, $reelTitle, $weddingTitle],
		mqMac = window.matchMedia('(min-width: 1200px) and (max-width: 1480px)'),
		mqMonitor = window.matchMedia('(min-width: 1480px)'),
		mqMobile = window.matchMedia('(max-width: 600px)'),
		mqIpad = window.matchMedia('(min-width : 600px) and (max-width: 1200px)');

		//-->functions:
		function videoDisplay(){
			$container.show("slide", {direction: "right"}, 1000);
		}

		function contentRemove(){
			$content.fadeOut(1000);
			$collab.fadeOut(1000);
			$container.fadeOut(1000);
		}
		function videoTitleShow(elem, elem2){
			elem.mouseenter(function(){
				$videoTitle.fadeIn(500);
				$videoTitle.append(elem2);
			}).mouseleave(function(){
				$videoTitle.fadeOut(500);
				elem2.remove();
			});
		}

	// Media Query Js //
	if (mqMobile.matches) {
		console.log("im in mobile");
		$collabLink.click(function(){
			contentRemove();
			$mobile.fadeIn(1000);
		});
		$accordion.click(function(){
			console.log($(this).siblings('section'));
			$(this).next($panel).slideToggle(500);
			$(this).siblings('section').next('.panel').slideUp(500);

		});


		//some code will likely go here
	} else if (mqIpad.matches){
		$menu.click(function(){
			menuToggle();
		});
		$x.click(function(){
			menuToggle();
		});
		$mobileCamera.click(function(){
			$('#mobileLogo').animate({
				height:'-=100px',
				width:'-=100px',
			}, 5000);
			$mobileLogo.animate({
				top: '-=30px',
			}, 5000);
			menuToggle();
			contentRemove();
			setTimeout(function(){
			// mobileVideoDisplay();
			videoDisplay();
			}, 1000);
		});
		$add.click(function(){
			menuToggle();
			contentRemove();
			setTimeout(function(){
				$mobileBlurb.fadeOut(500);
				$mobileProfile.slideDown(2000);
			}, 1000);
		});
	} else if (mqMac.matches){ // --> MACBOOK jquery
		// -->CLICK FUNCTIONS -->
		$camera.click(function(){
			contentRemove();
			setTimeout(function(){
				videoDisplay();
			}, 1000);
		});
		$collabLink.click(function(){
			contentRemove();
			setTimeout(function(){
				$collab.fadeIn(2000);
			}, 1000);
		});
		$('.media').click(function(){
			contentRemove();
			setTimeout(function(){
				videoDisplay();
			}, 1000);
		});
		$imgArray.forEach(function(img){
			if(img.attr('id') === "lexy"){
				videoTitleShow(img, $lexyTitle);
			}
			if(img.attr('id') === "mazatlan"){
				videoTitleShow(img, $mazatlanTitle);
			}
			if(img.attr('id') === "reel"){
				videoTitleShow(img, $reelTitle);
			}
			if(img.attr('id') === "wedding"){
				videoTitleShow(img, $weddingTitle);
			}
		});
		$('.arrow').hover(function(){
			$('.arrow-blurb').fadeIn(1000);
		}, function(){
			$('.arrow-blurb').fadeOut(1000);
		});

		//review hover function
		$('.reviews').hover(function(){
			$('.review').fadeIn(1000);
			$('.review1').animate({
				left: '60px'
			}, 2000);
			$('.review2').animate({
				right: '60px'
			}, 2000);
			$('.review3').animate({
				left: '60px'
			}, 2000);
			$('.review4').animate({
				right: '60px'
			}, 2000);
		}, function(){
			$('.review').fadeOut(1000);
		});

		//hexagon profile hover div function //
		$('.center-hex').hover(function(){
			$('.hexagon').animate({
				margin: '20px'
			}, 500);
		}, function(){
			$('.hexagon').animate({
				margin: '15px'
			}, 500);
		});

		//profile hover function
		$('.profile').hover(function(){
			$('#profile').animate({
				opacity: 1
			}, 1000);
		}, function(){
			$('#profile').animate({
				opacity: 0
			}, 1000);
		});
		$('.about').hover(function(){
			$('#about').animate({
				opacity: 1
			}, 1000);
		}, function(){
			$('#about').animate({
				opacity: 0
			}, 1000);
		});

	} else if(mqMonitor.matches) { // monitor
		// -->CLICK FUNCTIONS -->
		$camera.click(function(){
			contentRemove();
			setTimeout(function(){
				videoDisplay();
			}, 1000);
		});
		$collabLink.click(function(){
			contentRemove();
			setTimeout(function(){
				$collab.fadeIn(2000);
			}, 1000);
		});
		$('.media').click(function(){
			contentRemove();
			setTimeout(function(){
				videoDisplay();
			}, 1000);
		});
		$imgArray.forEach(function(img){
			if(img.attr('id') === "lexy"){
				videoTitleShow(img, $lexyTitle);
			}
			if(img.attr('id') === "mazatlan"){
				videoTitleShow(img, $mazatlanTitle);
			}
			if(img.attr('id') === "reel"){
				videoTitleShow(img, $reelTitle);
			}
			if(img.attr('id') === "wedding"){
				videoTitleShow(img, $weddingTitle);
			}
		});
		// -->HOVER FUNCTIONS -->
		$('.arrow').hover(function(){
			$('.arrow-blurb').fadeIn(1000);
		}, function(){
			$('.arrow-blurb').fadeOut(1000);
		});

		//review hover function
		$('.reviews').hover(function(){
			$('.review').fadeIn(1000);
			$('.review1').animate({
				left: '60px'
			}, 2000);
			$('.review2').animate({
				right: '60px'
			}, 2000);
			$('.review3').animate({
				left: '60px'
			}, 2000);
			$('.review4').animate({
				right: '60px'
			}, 2000);
		}, function(){
			$('.review').fadeOut(1000);
		});

		//hexagon profile hover div function //
		$('.center-hex').hover(function(){
			$('.hexagon').animate({
				margin: '20px'
			}, 500);
		}, function(){
			$('.hexagon').animate({
				margin: '15px'
			}, 500);
		});

		//profile hover function
		$('.profile').hover(function(){
			$('#profile').animate({
				opacity: 1
			}, 1000);
		}, function(){
			$('#profile').animate({
				opacity: 0
			}, 1000);
		});
		$('.about').hover(function(){
			$('#about').animate({
				opacity: 1
			}, 1000);
		}, function(){
			$('#about').animate({
				opacity: 0
			}, 1000);
		});

	} else {
	}

}
