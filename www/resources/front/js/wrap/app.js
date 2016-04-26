jQuery(function($) {

	$(window).each(function() {
		var $window = $(window);
		var $body = $('body');

		$window.on('scroll', function() {
			var scrollPoint = $window.scrollTop();

			if (scrollPoint > 60) {
				$body.addClass('fixed');
			} else {
				$body.removeClass('fixed');
			}
		}).trigger('on');
	});

	$('.lnb').each(function() {
		var $lnb = $(this);

		$lnb.on('mouseover', 'li', function() {
			var $currentLi = $(this);
			var $ul = $currentLi.parent('ul');
			var $li = $ul.find('>li');

			$li.removeClass('focus');
			$currentLi.addClass('focus');
			$li.removeClass('over-on');
			$currentLi.addClass('over-on');
			timeoutClear($ul);
			childrenOn($currentLi);
		});

		$lnb.on('mouseout', 'li', function() {
			var $currentLi = $(this);
			var $ul = $currentLi.parent('ul');
			var $li = $ul.find('>li');

			$li.removeClass('focus');

			$ul.data('timeout', setTimeout(function() {
				$li.removeClass('over-on');
				/*
				var $liOn = $li.filter('.on').addClass('over-on');
				childrenOn($liOn);
				*/
				depthCheck();
			}, 2000));
		});

		/*
		$lnb.find('li.on').each(function() {
			$(this).addClass('over-on');
		});
		*/

		depthCheck();

		function depthCheck() {
			var depth = 1;

			$lnb.find('>ul>li.over-on').each(function() {
				$(this).find('>ul>li.over-on').each(function() {
					depth++;
					
					if(parseInt($(this).find('>ul').css('left')) != -10000){
						$(this).find('>ul>li.over-on').each(function() {
							depth++;
						});
					}
				});
			});

			$('body').removeClass('lnb-show-depth-1 lnb-show-depth-2 lnb-show-depth-3').addClass('lnb-show-depth-' + depth);
		}
		function childrenOn($li) {
			if (!$li || !$li.size()) {
				depthCheck();

				return;
			}

			var $childrenLi = $li.find('>ul>li');

			if (!$childrenLi.size()) {
				depthCheck();

				return;
			}

			if (!$childrenLi.filter('.over-on').size()) {
				var $firstChildLi = $childrenLi.first().addClass('over-on');
			}

			childrenOn($firstChildLi);
		}
		function timeoutClear($ul) {
			if ($ul.size()) {
				clearTimeout($ul.data('timeout'));

				timeoutClear($ul.parent('li').parent('ul'));
			}
		}
		
		/*
		if(!$lnb.find('>ul>li.on').size()){
			$lnb.find('>ul>li:first-child').addClass('on over-on');
			$('body').removeClass('lnb-show-depth-1 lnb-show-depth-2 lnb-show-depth-3').addClass('lnb-show-depth-2');
		}
		*/
	});

	$('.snb').each(function() {
		var $snb = $(this);
		var $li = $snb.find('.container>ul>li:not(.snb-home)');

		$li.on('mouseover', function() {
			$li.removeClass('snb-depth-on snb-depth-hover');
			$(this).addClass('snb-depth-on snb-depth-hover');
		});

		$li.on('mouseout', function() {
			$li.removeClass('snb-depth-on snb-depth-hover');
			$li.last().addClass('snb-depth-on');
		});
	});

	$('.board-info-list, .board-faq-list').each(function() {
		var $items = $('dt, dd', this);

		$('dt', this).on('click', function() {
			$items.removeClass('on');
			$(this).addClass('on').next('dd').addClass('on');
		});
	});

	$.sitemap = function() {
		var $sitemap = $('.sitemap');

		if ($sitemap.hasClass('on')) {
			$sitemap.removeClass('on');
			// $.scrollLock('unlock');
		} else {
			$sitemap.addClass('on');
			// $.scrollLock();
		}
	}

	$('a[href=#sitemap]').click(function() {
		$.sitemap();
		return false;
	});

	$('a[href=#qnb-toggle]').on('click', function(event) {
		event.preventDefault();

		var $qnb = $('.qnb');
		
		if($qnb.hasClass('on')){
			$qnb.removeClass('on');
			//$.scrollLock('unlock');
		}else{
			$qnb.addClass('on');
			//$.scrollLock();
		}
	});

	$(document).on('click', 'a.open-sitemap-mobile', function() {
		$('body>#wrap').addClass('disabled');
		$('body>.sitemap-mobile').addClass('on');

		return false;
	});

	$(document).on('click', '.sitemap-mobile .cancel', function() {
		$('body>#wrap').removeClass('disabled');
		$('body>.sitemap-mobile').removeClass('on');

		return false;
	});

	$(document).on('click', '.snb-toggle', function() {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next('.nav').removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).next('.nav').addClass('on');
		}

		return false;
	});

	$(document).on('click', 'a[href="#goto-and-top"]', function(event) {
		event.preventDefault();

		$.smoothscroll(0);
	});

	$(document).on('click', 'a[href="#goto-and-bottom"]', function(event) {
		event.preventDefault();

		$.smoothscroll(10000);
	});
	
	$('.enb').each(function(){
		$(this).on('click', '>ul>li>a', function(event){
			event.preventDefault();
		});
		$(this).on('mouseover', '>ul>li', function(){
			$(this).addClass('hover');
		});
		$(this).on('mouseout', '>ul>li', function(){
			$(this).removeClass('hover');
		});
	});

});