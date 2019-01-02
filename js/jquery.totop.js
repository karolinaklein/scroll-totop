(function($, window, document, undefined){

	$.fn.totop = function(userOptions){
		
		var options = $.extend({}, $.fn.totop.defaults, userOptions);
		
		$.fn.totop.defaults = {
			
			
		};
		
		
		
		return this.each(function(){
			
			var page = $("html, body"),
				toTopBtn = $("#totopbtn");
			
			
			$(window).on("scroll", function(){
				if(page.scrollTop() > 20){
					toTopBtn.fadeIn(500);
				}else{
					toTopBtn.fadeOut(500);
				}
			});
			
			toTopBtn.on("click", function(){
				page.animate({
					scrollTop: 0
				}, 500, "easeOutCubic");
			});
			
		
		});
	};
	
	
	
	
})(jQuery, window, document);