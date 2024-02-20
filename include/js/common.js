var wWidth = 0;

$(function(e){
	var $this = $(this),
		wWidth = $(window).outerWidth();
	
	$(document).ready(function(e){
		var loadCmnApp = (function(e){
			"user strict";
			
			function cmnFunc(){
				if(wWidth < 768){
				}else{
					$('#columns figure').removeAttr('style');
				}
			}
			
			function cmnResize(){
				// resize event
				wWidth = $(window).outerWidth();
				if(wWidth < 768){
				}else{
					$('#columns figure').removeAttr('style');
				}
			}
			
			return{
				cmnInit: function(e){
					cmnFunc();
				},
				cmnResize: function(e){
					$(window).resize(function(e){
						wWidth = $(window).outerWidth();
						//wWidth = windowWidth();
						cmnResize();
						
					});
				},
				
				cmnScroll: function(e){
					$(window).scroll(function(e){
						cmnScroll();
					});
				}
			}
		})();
		
		/* ====================
			* run
		===================== */
		 // init
		loadCmnApp.cmnInit();
		// resize
		loadCmnApp.cmnResize();
	});
});

function windowWidth() {
    if($(document).innerHeight() > $(window).innerHeight()) {
        return $(window).innerWidth() - 17;
    } else {
        return $(window).innerWidth();
    }
}

function progressBar(){
	var sliderTimer = 3000;

	$('.slider-progress').find('span').removeAttr('style');
	$('.slider-progress').find('span').removeClass('active');

	setTimeout(function(){
		$('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
	}, 100);
}