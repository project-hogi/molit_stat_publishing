jQuery(function($) {

	// http로 시작되는 모든 링크를 새 페이지로 열기
	$('a').each(function() {
		if ($(this).attr('target'))
			return;

		if ($(this).attr('href') && $(this).attr('href').indexOf('http', 0) != 0)
			return;

		$(this).attr('target', '_blank');
	});

	// data-alert 속성을 가지고 있을 때
	$(document).on('click', 'a[data-alert]', function(event) {
		event.preventDefault();

		alert($(this).attr('data-alert'));
	});

	// datepicker
	$.datepicker.setDefaults({
		showOtherMonths : true,
		selectOtherMonths : true,
		showAnim : 'fadeIn',
		changeMonth : true,
		changeYear : true,
		dateFormat : 'yy-mm-dd',
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
		showMonthAfterYear : true
	});

	$('input.form-datepicker').each(function() {
		$(this).datepicker();
	});

	// bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip();

});