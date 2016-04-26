(function($) {

	/*
	 * 부드러운 스크롤
	 * 
	 * 받은 인자로 스크롤을 부드럽게 이동한다. 스크롤 위치, jQuery Selector, jQuery Object
	 */
	$.smoothscroll = function(param, point) {

		var targetPoint = 0;
		var windowHeight = $('#container').outerHeight();
		var bodyHeight = $('#container>div').outerHeight();
		
		switch (typeof (param)) {
		case "number":
			targetPoint = param;
			break;
		case "string":
			if(!$(param).size()){
				console.log('[Smooth Scroll] 객체가 없습니다. "' + param + '"');
				
				break;
			}
			
			targetPoint = $(param).offset().top;
			break;
		case "object":
			if(!param.size()){
				console.log('[Smooth Scroll] 객체가 없습니다.');
				
				break;
			}
			
			targetPoint = param.offset().top;
		default:
			console.log('[Smooth Scroll] 올바른 호출이 아닙니다.');
			return;
		}
		
		if (targetPoint < 0 || !targetPoint)
			targetPoint = 0;
		
		var shortageHeight = windowHeight - bodyHeight + targetPoint;

		if (shortageHeight > 0)
			targetPoint -= shortageHeight;
		
		if(point)
			targetPoint += point;
		
		$('#container').stop().animate({
			scrollTop : targetPoint
		}, 500, 'easeInOutExpo');
	};

})(jQuery);