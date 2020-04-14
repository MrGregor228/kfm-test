var TIMEOUT = null;		
						$(window).on('resize', function () {
							if (TIMEOUT === null) {
								TIMEOUT = window.setTimeout(function () {
									TIMEOUT = null;
									$('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
		
									FB.XFBML.parse();
								}, 300);
							}
						});