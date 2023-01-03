(document).ready(function () {
	var altura = $('#menus').offset().top;

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > altura) {
			$('#menus').addClass('menus-fixed');
		} else {
			$('#menus').removeClass('menus-fixed');
		}
	});

});