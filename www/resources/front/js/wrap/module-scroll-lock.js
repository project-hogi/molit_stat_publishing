/*
 * 스크롤 잠금
 * 
 * mode : null, unlock
 */
(function($) {

	/* 생성자 */
	$.scrollLock = function(mode) {
		var settings = $.scrollLock.defaults;
		var $body = $('body');
		var $container = $(settings.container);
		
		if(!$container.hasClass('scroll-lock-wrap')){
			$container.addClass('scroll-lock-wrap');
		}
		
		// 유효성
		if (!$container.size()) {
			console.log('scrollLock : container가 존재하지 않습니다.');
			return;
		}

		// Lock and Unlock
		if (mode != 'unlock') {
			$body.addClass('scroll-lock');

			var scrollTop = $(window).scrollTop();
			var minWidth = $body.css('min-width');

			$container.css({
				'top' : -scrollTop
			});
		} else {
			if (!$body.hasClass('scroll-lock'))
				return;

			$body.removeClass('scroll-lock');

			var scrollTop = -parseInt($container.css('top'));

			$container.css({
				'top' : ''
			}).each(function() {
				$(window).scrollTop(scrollTop);
			});
		}
	};

	/* 속성 및 기능 */
	$.extend($.scrollLock, {
		defaults : {
			container : '#wrap'
		},
		setDefaults : function(options) {
			$.extend($.scrollLock.defaults, options);
		}
	});

})(jQuery);
