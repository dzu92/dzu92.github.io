$(function() {

	 // Do something else, like open/close menu Hamburger
	var $hamburger = $(".hamburger");
			$hamburger.on("click", function(e) {
			$hamburger.toggleClass("is-active");

});

	// Dropdown toggle menu
$('.dropdown-toggle').click(function(){
	$(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
	var target = e.target;
	if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
		$('.dropdown').hide();
	}
});

$(document).ready(function(){
    $('.scrolDown').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$('.scrollTop').addClass('active');
	} else {
		$('.scrollTop').removeClass('active');
	}
});

$('.scrollTop').click(function() {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});



});
